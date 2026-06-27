import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaObject = Record<string, any>;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  url?: string;
  keywords?: string[];
  structuredData?: SchemaObject[];
}

/** Reusable Person schema for use across pages */
export const getPersonSchema = (url = 'https://tyvick.com'): SchemaObject => ({
  '@type': 'Person',
  '@id': 'https://tyvick.com/#person',
  name: PERSONAL_INFO.name,
  url,
  image: `https://tyvick.com${PERSONAL_INFO.photo}`,
  description: `${PERSONAL_INFO.title} for Growth at ${PERSONAL_INFO.company}, previously at Amazon Fire TV and Twitch. Turns complex data into actionable product strategies and brings technical and non-technical teams together to ship features that drive measurable growth.`,
  jobTitle: `${PERSONAL_INFO.title}, Growth`,
  email: PERSONAL_INFO.email,
  sameAs: [PERSONAL_INFO.linkedin],
  worksFor: {
    '@type': 'Organization',
    name: PERSONAL_INFO.company,
    url: 'https://discord.com',
  },
  alumniOf: [
    { '@type': 'Organization', name: 'Amazon', url: 'https://www.amazon.com' },
    { '@type': 'Organization', name: 'Twitch', url: 'https://www.twitch.tv' },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: `${PERSONAL_INFO.title}, Growth`,
    skills: 'Product Management, Growth Strategy, Customer Lifecycle, Video Streaming, Creator Economy, Data Analysis, Cross-functional Leadership',
  },
  knowsAbout: [
    'Product Management',
    'Growth Strategy',
    'Customer Lifecycle',
    'Video Streaming',
    'Creator Economy',
    'Data Analysis',
    'Cross-functional Leadership',
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
});

/** Reusable WebSite schema */
export const getWebSiteSchema = (): SchemaObject => ({
  '@type': 'WebSite',
  '@id': 'https://tyvick.com/#website',
  url: 'https://tyvick.com',
  name: `${PERSONAL_INFO.name} - Portfolio`,
  description: PERSONAL_INFO.valueProp,
  publisher: { '@id': 'https://tyvick.com/#person' },
});

/** Helper to build a BreadcrumbList schema */
export const getBreadcrumbSchema = (
  items: { name: string; url: string }[]
): SchemaObject => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const SEO: React.FC<SEOProps> = ({
  title = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description = PERSONAL_INFO.valueProp,
  image = '/images/avatar.png',
  type = 'website',
  url = 'https://tyvick.com',
  keywords = [
    'Staff Product Manager',
    'Product Manager',
    'Discord',
    'Twitch',
    'Amazon',
    'Fire TV',
    'Product Management',
    'Tech PM',
    'Growth Product Manager',
    'Tyler Vickers',
  ],
  structuredData,
}) => {
  useEffect(() => {
    const fullUrl = url;
    const fullImageUrl = image.startsWith('http') ? image : `https://tyvick.com${image}`;

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

    // Structured Data — use @graph when page provides schemas, else fall back to Person + WebSite
    const schemas: SchemaObject[] = structuredData ?? [
      getPersonSchema(fullUrl),
      getWebSiteSchema(),
    ];

    const graphPayload = {
      '@context': 'https://schema.org',
      '@graph': schemas,
    };

    // Add or update JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(graphPayload);
  }, [title, description, image, type, url, keywords, structuredData]);

  return null;
};

export default SEO;
