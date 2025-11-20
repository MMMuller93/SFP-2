import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Strategic Fund Partners | Fund Advisory & Compliance',
  description = 'Expert fund formation, regulatory compliance, and advisory services for venture capital and private equity managers. Form ADV, fund structuring, and ongoing compliance support.',
  image = 'https://strategicfundpartners.com/og-image.png',
  type = 'website',
  publishedTime,
}) => {
  const location = useLocation();
  const url = `https://strategicfundpartners.com${location.pathname}`;

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
      updateMetaTag('article:author', 'Strategic Fund Partners');
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image, type, url, publishedTime]);

  return null;
};
