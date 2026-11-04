import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalPath, SITE_ORIGIN } from '../lib/site-paths';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authorName?: string;
}

export const SEO: FC<SEOProps> = ({
  title = 'Strategic Fund Partners | Fund Formation & RIA Compliance',
  description = 'Fund formation, SPV structuring, side letters, custom waterfalls, and RIA/ERA registration and compliance for private fund managers and SPV sponsors.',
  image = 'https://strategicfundpartners.com/og-image.png',
  type = 'website',
  publishedTime,
  authorName,
}) => {
  const location = useLocation();
  const url = `${SITE_ORIGIN}${canonicalPath(location.pathname)}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateNameTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateNameTag('description', description);

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', url);
    updateMetaTag('og:image', image);
    updateMetaTag('og:site_name', 'Strategic Fund Partners');

    // Twitter Card tags
    updateNameTag('twitter:card', 'summary_large_image');
    updateNameTag('twitter:title', title);
    updateNameTag('twitter:description', description);
    updateNameTag('twitter:image', image);

    // Article-specific tags
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime);
      updateMetaTag('article:author', authorName || 'Strategic Fund Partners');
    } else {
      document.querySelector('meta[property="article:published_time"]')?.remove();
      document.querySelector('meta[property="article:author"]')?.remove();
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.getElementById('article-schema')?.remove();
    if (type === 'article' && publishedTime) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'article-schema';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title.replace(/ \| Strategic Fund Partners$/, ''),
        description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        datePublished: publishedTime,
        author: authorName
          ? { '@type': 'Person', name: authorName, url: `${SITE_ORIGIN}/about/` }
          : { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: 'Strategic Fund Partners', url: `${SITE_ORIGIN}/about/` },
        publisher: { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: 'Strategic Fund Partners' },
      });
      document.head.appendChild(script);
      return () => script.remove();
    }
  }, [title, description, image, type, url, publishedTime, authorName]);

  return null;
};
