export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SEO_CONFIG: Record<string, SEOConfig> = {
  home: {
    title: 'MARGINZ - Digital Transformation & IT Solutions',
    description: 'Transform your business with MARGINZ. We deliver core digital platforms, AI automation, and strategic modernization with 99.99% uptime. 70+ projects, 100+ clients.',
    keywords: ['digital transformation', 'IT solutions', 'software development', 'enterprise solutions', 'web development'],
    type: 'website'
  },
  about: {
    title: 'About MARGINZ - Digital Innovation & Technology Leadership',
    description: 'Learn about MARGINZ: 2+ years of expertise, 70+ completed projects, 100+ satisfied clients. We empower businesses through innovative IT solutions and digital transformation.',
    keywords: ['about us', 'company', 'team', 'expertise', 'digital innovation'],
    type: 'website'
  },
  services: {
    title: 'IT Services - Web Development, CRM, ERP & More | MARGINZ',
    description: 'Comprehensive IT services: dynamic websites, PWAs, CRM/ERP systems, LMS platforms, cloud deployment. Expert team with React, Node.js, MongoDB, and modern tech stack.',
    keywords: ['IT services', 'web development', 'CRM solutions', 'ERP systems', 'cloud deployment', 'web applications'],
    type: 'website'
  },
  contact: {
    title: 'Contact MARGINZ - Get Your IT Solution Today',
    description: 'Ready to transform your business? Contact MARGINZ for personalized IT guidance. Reach out to our experts for consultation on your digital transformation journey.',
    keywords: ['contact', 'consultation', 'IT support', 'business solutions'],
    type: 'website'
  }
};

export const updateMetaTags = (config: SEOConfig) => {
  // Title
  document.title = config.title;
  updateMetaTag('og:title', config.title);
  updateMetaTag('twitter:title', config.title);

  // Description
  updateMetaTag('description', config.description);
  updateMetaTag('og:description', config.description);
  updateMetaTag('twitter:description', config.description);

  // Keywords
  if (config.keywords) {
    updateMetaTag('keywords', config.keywords.join(', '));
  }

  // Type
  updateMetaTag('og:type', config.type || 'website');

  // Image
  if (config.image) {
    updateMetaTag('og:image', config.image);
    updateMetaTag('twitter:image', config.image);
  }

  // URL
  if (config.url) {
    updateMetaTag('og:url', config.url);
    updateMetaTag('canonical', config.url);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name === 'twitter:title' || name === 'twitter:description' || name === 'twitter:image') {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.content = content;
};

export const updateCanonicalUrl = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
};
