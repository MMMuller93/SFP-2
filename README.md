# Strategic Fund Partners Website

A modern, SEO-optimized website for Strategic Fund Partners built with React, TypeScript, and Vite.

## Project Overview

This is a single-page application (SPA) with proper URL routing for SEO. The site features:
- Homepage with hero, services, and contact sections
- Blog/Insights section with individual post pages
- Responsive design with custom grid background
- SEO optimization with meta tags, sitemap, and structured data
- Deployed on GitHub Pages

**Live Site**: [https://strategicfundpartners.com](https://strategicfundpartners.com)

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router v7** for client-side routing
- **Framer Motion** for animations
- **Tailwind CSS** (via custom CSS configuration)
- **GitHub Pages** for hosting

## Project Structure

```
SFP-2/
├── components/
│   ├── App.tsx                 # Main app with routing
│   ├── Hero.tsx                # Homepage hero section
│   ├── Services.tsx            # Services accordion section
│   ├── Contact.tsx             # Contact form section
│   ├── Blog.tsx                # Blog listing & individual posts
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer with legal links
│   ├── SEO.tsx                 # Dynamic SEO meta tags component
│   ├── LegalModal.tsx          # Privacy/Terms modals
│   └── Logo.tsx                # SVG logo component
├── public/
│   ├── sitemap.xml             # SEO sitemap
│   ├── robots.txt              # Search engine instructions
│   ├── 404.html                # GitHub Pages SPA routing fallback
│   └── og-image.png            # Social media preview image
├── index.html                  # HTML entry point with structured data
├── index.tsx                   # React app entry point
├── types.ts                    # TypeScript type definitions
└── package.json                # Dependencies and scripts
```

## URL Structure

- `/` - Homepage (Hero + Services + Contact)
- `/insights` - Blog listing page
- `/insights/[slug]` - Individual blog post pages

Examples:
- `https://strategicfundpartners.com/insights/reviewing-investment-documents`
- `https://strategicfundpartners.com/insights/form-d-blue-sky`

## How to Add a New Blog Post

Blog posts are stored as objects in the `posts` array in `components/Blog.tsx`.

### Step-by-Step Instructions

1. **Open** `components/Blog.tsx`

2. **Add a new post object** at the beginning of the `posts` array (line ~19):

```typescript
const posts: BlogPost[] = [
  {
    id: 'your-post-slug',  // Used in URL: /insights/your-post-slug
    title: 'Your Post Title',
    date: 'Month Day, Year',  // e.g., 'November 1, 2025'
    readTime: 'X min read',   // e.g., '8 min read'
    excerpt: 'Brief description for the listing page and SEO meta description.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your opening paragraph with larger text.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Section Heading</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Regular paragraph text.
        </p>

        {/* Use this structure for callout boxes */}
        <div className="border-l-2 border-accent pl-6 py-2 mb-6">
          <h4 className="text-text-highlight font-medium mb-2">Callout Title</h4>
          <p className="text-text-secondary">Callout content</p>
        </div>

        {/* Horizontal divider */}
        <hr className="border-grid mb-12" />
      </>
    )
  },
  // ... existing posts
];
```

3. **Update the sitemap** in `public/sitemap.xml`:

```xml
<url>
  <loc>https://strategicfundpartners.com/insights/your-post-slug</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

4. **Build and deploy**:

```bash
npm run build
git add -A
git commit -m "Add new blog post: Your Post Title"
git push
```

The site will automatically deploy via GitHub Pages.

## Common Content Updates

### Update Hero Section Copy

Edit `components/Hero.tsx`:
- Main heading: Line ~22-24
- Subheading: Line ~27-29
- CTA button: Line ~31-43

### Update Services Section

Edit `components/Services.tsx`:
- Section description: Line ~49-51
- Individual services: Line ~6-35 (services array)

### Update Contact Information

Edit `components/Contact.tsx`:
- Email address
- Contact form endpoint

### Update Footer

Edit `components/Footer.tsx`:
- Copyright year
- Legal modal content in `components/LegalModal.tsx`

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Output goes to `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## SEO Configuration

### Meta Tags
The `SEO.tsx` component handles:
- Page titles
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

Individual blog posts get custom meta tags automatically based on their title and excerpt.

### Sitemap
`public/sitemap.xml` lists all pages for search engines. Update this when adding new blog posts.

### Structured Data
`index.html` includes JSON-LD Organization schema for better search results.

### robots.txt
`public/robots.txt` allows all search engines and points to the sitemap.

## GitHub Pages Deployment

The site uses a custom deployment setup for GitHub Pages SPAs:

1. `public/404.html` redirects all routes to `index.html`
2. `index.html` has a script that restores the correct path
3. React Router handles client-side routing

This allows direct links to blog posts (e.g., `/insights/post-slug`) to work correctly.

## Styling Guidelines

### Color Palette (Tailwind classes)
- Background: `bg-bg` (dark gray)
- Primary text: `text-text-primary` (white)
- Secondary text: `text-text-secondary` (gray)
- Accent: `text-accent` or `bg-accent` (gold/yellow)
- Grid lines: `border-grid` (subtle gray)

### Typography
- Headings: `font-serif` (Georgia/serif stack)
- Body: `font-sans` (system font stack)
- Code/numbers: `font-mono`

### Common Patterns

**Section wrapper:**
```tsx
<section className="bg-bg py-20 md:py-28 border-b border-grid">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    {/* content */}
  </div>
</section>
```

**Heading:**
```tsx
<h2 className="font-serif text-4xl md:text-6xl text-text-highlight mb-6">
  Title
</h2>
```

**Button:**
```tsx
<button className="px-8 py-4 bg-accent text-bg hover:bg-accentHover transition-colors">
  Click Me
</button>
```

## Git Workflow

```bash
# Make changes
# Build to test
npm run build

# Commit
git add -A
git commit -m "Description of changes"

# Push to deploy
git push
```

GitHub Pages automatically rebuilds from the `main` branch when you push.

## Troubleshooting

### Blog post not showing up
- Check that the post object is added to the beginning of the `posts` array
- Verify the `id` field is unique and URL-friendly (lowercase, hyphens only)
- Rebuild: `npm run build`

### Routing not working on GitHub Pages
- Ensure `public/404.html` exists
- Check that the redirect script in `index.html` is present

### SEO meta tags not updating
- Clear browser cache
- Check that `<SEO />` component is used in the route
- Verify meta tag content in browser dev tools (View > Source)

### Build warnings about chunk size
This is normal. The bundle includes React, Framer Motion, and all blog content. It's still performant (<520KB gzipped to ~148KB).

## Future Enhancements

Potential improvements for future development:

- [x] Google Analytics integration (G-2VK0HBCJ86)
- [ ] Google Search Console setup
- [ ] Newsletter signup integration
- [ ] Blog post categories/tags
- [ ] Related posts suggestions
- [ ] Code splitting for blog posts (reduce bundle size)
- [ ] RSS feed for blog
- [ ] Article schema markup for blog posts
- [ ] Image optimization and lazy loading

## Questions?

For questions about the codebase, refer to:
- This README
- Inline comments in component files
- Git commit history for context on changes

---

**Last Updated**: November 19, 2025
**Current Blog Post Count**: 7
