# Quick Guide: Adding a New Blog Post

Fast reference for adding posts to the startup blog.

---

## Before You Start

- [ ] Draft content following voice/tone guidelines (see CONTENT_STRATEGY_PROMPT.md)
- [ ] Choose content type: Core Guide (10-15 min), Deep Dive (6-9 min), or FAQ (3-5 min)
- [ ] Pick a publication date (spread across months)
- [ ] Identify 1-3 related posts for cross-linking

---

## Step 1: Add Post to StartupBlog.tsx

**File**: `/Users/Miles/Desktop/SFP-2/components/StartupBlog.tsx`

**Location**: Add to `posts` array starting at line 20

**Template**:
```typescript
{
  id: 'your-url-slug',
  title: 'Your Post Title',
  date: 'Month DD, YYYY',
  readTime: 'X min read',
  excerpt: 'Compelling 1-2 sentence description (ESCAPE APOSTROPHES with \\')',
  content: (
    <>
      {/* Opening - Stakes-aware intro */}
      <p className="text-lg leading-relaxed text-text-secondary mb-8">
        Opening paragraph that frames the stakes.
      </p>
      <p className="text-lg leading-relaxed text-text-secondary mb-12">
        What this guide covers.
      </p>

      <hr className="border-grid mb-12" />

      {/* Main content sections */}
      <h2 className="font-serif text-3xl text-text-highlight mb-6">Section Title</h2>
      <p className="leading-relaxed text-text-secondary mb-6">
        Content paragraph.
      </p>

      {/* Example box */}
      <div className="bg-surface/30 border border-grid p-8 mb-12">
        <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
        <p className="text-text-secondary mb-4">Scenario...</p>
        <p className="text-text-secondary">Outcome...</p>
      </div>

      {/* Subsections with accent borders */}
      <div className="space-y-6 mb-12">
        <div className="border-l-2 border-accent pl-6 py-2">
          <h4 className="text-text-highlight font-medium mb-2">Point Title</h4>
          <p className="text-text-secondary">Explanation...</p>
        </div>
      </div>

      {/* Cross-link example */}
      <Link to="/startups/insights/other-post-slug" className="text-accent hover:text-accent/80 underline">
        Related Post Title
      </Link>

      <hr className="border-grid mb-12" />

      {/* How We Help section */}
      <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
      <p className="leading-relaxed text-text-secondary mb-8">
        We [service description]:
      </p>
      <div className="grid grid-cols-1 gap-4 mb-12">
        {[
          { title: 'Service 1', desc: 'What we do specifically...' },
          { title: 'Service 2', desc: 'What we do specifically...' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
            <div className="flex items-center gap-3 md:w-1/3">
              <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
              <span className="text-text-highlight font-medium">{item.title}</span>
            </div>
            <div className="md:w-2/3">
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legal disclaimer - REQUIRED */}
      <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
        *This article is for informational purposes only and does not constitute legal advice.
      </p>
    </>
  )
}
```

---

## Step 2: Update Sitemap

**File**: `/Users/Miles/Desktop/SFP-2/public/sitemap.xml`

**Location**: Add before the closing `</urlset>` tag (around line 142)

**Template**:
```xml
<url>
  <loc>https://strategicfundpartners.com/startups/insights/your-url-slug</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Step 3: Add Cross-Links

**Update existing related posts** to link to your new post:

1. Open related post in StartupBlog.tsx
2. Find natural spot to add link
3. Add link with descriptive anchor text:
```tsx
<Link to="/startups/insights/your-new-slug" className="text-accent hover:text-accent/80 underline">
  Your New Post Title
</Link>
```

---

## Step 4: Test Locally (Optional)

```bash
cd /Users/Miles/Desktop/SFP-2
npm run dev
```

Visit: http://localhost:5173/startups/insights/your-url-slug

Check:
- [ ] Post loads without errors
- [ ] Styling looks correct
- [ ] Cross-links work
- [ ] Mobile responsive

---

## Step 5: Deploy

```bash
git add components/StartupBlog.tsx public/sitemap.xml
git commit -m "feat: Add [Your Post Title] to startup blog"
git push
```

Wait ~30 seconds for GitHub Actions deployment.

Verify: https://strategicfundpartners.com/startups/insights/your-url-slug

---

## Common Mistakes

1. **Apostrophes in excerpt**
   - ❌ `excerpt: 'You can't do this'`
   - ✅ `excerpt: 'You can\'t do this'`

2. **Wrong date format**
   - ❌ `date: '11/17/2025'`
   - ✅ `date: 'November 17, 2025'`

3. **Missing sitemap entry**
   - Post won't be indexed by search engines

4. **No cross-links**
   - Reduces engagement and internal linking

5. **Forgot legal disclaimer**
   - Required at bottom of every post

---

## Style Reference

### Headings
```tsx
// H2 (main section)
<h2 className="font-serif text-3xl text-text-highlight mb-6">

// H3 (subsection)
<h3 className="font-serif text-2xl text-text-highlight mb-6">

// H4 (minor heading)
<h4 className="font-serif text-xl text-text-highlight mb-4">
```

### Body Text
```tsx
// Intro paragraph (larger)
<p className="text-lg leading-relaxed text-text-secondary mb-8">

// Regular paragraph
<p className="leading-relaxed text-text-secondary mb-6">
```

### Lists
```tsx
// Unordered list
<ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
  <li>List item</li>
</ul>

// Ordered list
<ol className="space-y-3 text-text-secondary mb-12 pl-5 list-decimal marker:text-accent">
  <li>Step one</li>
</ol>
```

### Emphasis
```tsx
// Strong with accent color
<strong className="text-accent font-medium">important text</strong>

// Regular emphasis
<em>emphasized text</em>
```

### Example Box
```tsx
<div className="bg-surface/30 border border-grid p-8 mb-12">
  <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
  <p className="text-text-secondary mb-4">First paragraph...</p>
  <p className="text-text-secondary">Second paragraph...</p>
</div>
```

### Accent Border Box
```tsx
<div className="border-l-2 border-accent pl-6 py-2">
  <h4 className="text-text-highlight font-medium mb-2">Title</h4>
  <p className="text-text-secondary">Content...</p>
</div>
```

### Callout Box
```tsx
<p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
  <strong className="text-text-highlight">Key Point:</strong> Important note here.
</p>
```

### Horizontal Rule
```tsx
<hr className="border-grid mb-12" />
```

---

## Read Time Guidelines

Calculate based on ~200 words per minute:

- **300-500 words** = 3 min read (FAQ)
- **500-800 words** = 5 min read (FAQ)
- **800-1,200 words** = 6 min read (Deep Dive)
- **1,200-1,500 words** = 8 min read (Deep Dive)
- **1,500-2,000 words** = 10 min read (Core Guide)
- **2,000-2,500 words** = 12 min read (Core Guide)
- **2,500-3,000 words** = 15 min read (Core Guide)

---

## Need More Help?

- **Full documentation**: See `STARTUP_BLOG_DOCUMENTATION.md`
- **Content strategy**: See `CONTENT_STRATEGY_PROMPT.md`
- **Example posts**: Read any existing post in `components/StartupBlog.tsx`

---

**Quick Reference Version**: 1.0
**Last Updated**: January 2026
