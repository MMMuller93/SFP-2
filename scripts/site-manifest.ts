import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { FUND_POSTS } from '../components/Blog';
import { STARTUP_POSTS } from '../components/StartupBlog';
import { POSTS as AGENT_POSTS } from '../components/agent-blog-posts';
import { SITE_PATHS } from '../lib/site-paths';

interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

export interface PublishedPage {
  path: string;
  lastmod?: string;
  article?: Article;
  expectedHtml?: string;
}

const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8' }).trim();

// Link slash normalization and formatting are not substantive content edits.
const fingerprint = (source: string) => source
  .replace(/((?:to|href)=["']\/[^"']*?)\/(?=["'])/g, '$1')
  .replace(/(href: ['"]\/[^'"]*?)\/(?=['"])/g, '$1')
  .replace(/\s+/g, '');

const articleObjects = (source: string) => {
  const file = ts.createSourceFile('content.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const objects = new Map<string, string>();
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const properties = new Map(node.properties.filter(ts.isPropertyAssignment).map(property => [property.name.getText(file), property.initializer]));
      const id = properties.get('id');
      if (id && ts.isStringLiteral(id) && properties.has('content') && properties.has('title') && properties.has('date')) {
        objects.set(id.text, fingerprint(node.getText(file)));
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(file);
  return objects;
};

const historyCache = new Map<string, { date: string; source: string }[]>();
const history = (file: string) => {
  if (!historyCache.has(file)) {
    const commits = git('log', '--format=%H %cI', '--', file).split('\n').filter(Boolean);
    historyCache.set(file, commits.map(line => {
      const [commit, date] = line.split(' ');
      return { date: date.slice(0, 10), source: git('show', `${commit}:${file}`) };
    }));
  }
  return historyCache.get(file)!;
};

// Trace each current article object through real source history. Editing another
// article in the same module must not give every old article today's lastmod.
const articleDates = (files: string[]) => {
  const dates = new Map<string, string | undefined>();
  for (const file of files) {
    const current = articleObjects(readFileSync(file, 'utf8'));
    for (const [id, content] of current) {
      let lastmod: string | undefined;
      for (const revision of history(file)) {
        if (articleObjects(revision.source).get(id) !== content) break;
        lastmod = revision.date;
      }
      dates.set(id, lastmod);
    }
  }
  return dates;
};

const latest = (dates: (string | undefined)[]) => dates.filter((date): date is string => Boolean(date)).sort().at(-1);
const fileDate = (file: string) => {
  const current = fingerprint(readFileSync(file, 'utf8'));
  let lastmod: string | undefined;
  for (const revision of history(file)) {
    if (fingerprint(revision.source) !== current) break;
    lastmod = revision.date;
  }
  return lastmod;
};

export const createSiteManifest = (): PublishedPage[] => {
  if (git('rev-parse', '--is-shallow-repository') === 'true') {
    throw new Error('Publishing requires full git history for accurate sitemap lastmod. Fetch history before building.');
  }

  const collections = [
    { path: SITE_PATHS.insights, posts: FUND_POSTS, files: ['components/Blog.tsx'] },
    { path: SITE_PATHS.startupInsights, posts: STARTUP_POSTS, files: ['components/StartupBlog.tsx'] },
    { path: SITE_PATHS.agentInsights, posts: AGENT_POSTS, files: readdirSync('components/agent-blog-posts').filter(file => file.endsWith('.tsx')).map(file => `components/agent-blog-posts/${file}`) },
  ];
  const articles: PublishedPage[] = collections.flatMap(collection => {
    const dates = articleDates(collection.files);
    return collection.posts.map(article => ({
      path: `${collection.path}${article.id}/`,
      article,
      lastmod: dates.get(article.id),
      expectedHtml: renderToStaticMarkup(React.createElement(MemoryRouter, null, article.content)),
    }));
  });
  const sources: Partial<Record<keyof typeof SITE_PATHS, string[]>> = {
    home: ['components/Hero.tsx', 'components/Services.tsx', 'components/Contact.tsx', 'index.html'],
    about: ['components/About.tsx'],
    startups: ['pages/startup-legal/StartupLegalHome.tsx'],
    formation: ['pages/startup-legal/Formation.tsx'],
    governance: ['pages/startup-legal/Governance.tsx'],
    equity: ['pages/startup-legal/Equity.tsx'],
    fundraising: ['pages/startup-legal/Fundraising.tsx'],
    registrations: ['pages/startup-legal/Registrations.tsx'],
    agents: ['pages/agent-legal/AgentLegalHome.tsx'],
  };
  const fixedPages = Object.entries(SITE_PATHS).map(([key, path]) => ({
    path,
    lastmod: sources[key as keyof typeof SITE_PATHS]
      ? latest(sources[key as keyof typeof SITE_PATHS]!.map(fileDate))
      : latest(articles.filter(page => page.path.startsWith(path)).map(page => page.lastmod)),
  }));
  const pages = [...fixedPages, ...articles];
  if (new Set(pages.map(page => page.path)).size !== pages.length) throw new Error('Duplicate published route in site content.');
  return pages;
};
