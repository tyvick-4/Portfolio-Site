import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  url?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description = PERSONAL_INFO.valueProp,
  image = '/headshot.jpg',
  type = 'website',
  url = 'https://tyvick.com',
  keywords = [
    'Senior Product Manager',
    'Product Manager',
    'Twitch',
    'Amazon',
    'Fire TV',
    'Product Management',
    'Tech PM',
    'Growth Product Manager',
    'Tyler Vickers',
  ],
}) => {
  useEffect(() => {
    const fullUrl = url;
    const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Primary Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    if (keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }
    setMetaTag('name', 'author', PERSONAL_INFO.name);

    // Open Graph / Facebook
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', `${PERSONAL_INFO.name} Portfolio`);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', fullUrl);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Structured Data - Person Schema
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: PERSONAL_INFO.name,
      url: fullUrl,
      image: fullImageUrl,
      description: description,
      jobTitle: PERSONAL_INFO.title,
      email: PERSONAL_INFO.email,
      sameAs: [PERSONAL_INFO.linkedin],
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'Amazon',
        },
        {
          '@type': 'Organization',
          name: 'Twitch',
        },
      ],
      knowsAbout: [
        'Product Management',
        'Growth Strategy',
        'Customer Lifecycle',
        'Video Streaming',
        'Creator Economy',
        'Data Analysis',
        'Cross-functional Leadership',
      ],
    };

    // Add or update JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(personSchema);
  }, [title, description, image, type, url, keywords]);

  return null;
};

export default SEO;
