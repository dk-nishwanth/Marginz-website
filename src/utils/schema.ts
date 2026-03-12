export interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export const organizationSchema: SchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MARGINZ',
  url: 'https://marginz-solutions.com',
  logo: 'https://marginz-solutions.com/marginz-logo.jpg',
  description: 'Digital transformation and IT solutions company',
  sameAs: [
    'https://linkedin.com/company/marginz',
    'https://twitter.com/marginz'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+1-928-555-7874',
    email: 'devx.marginz@gmail.com'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Floor, The Executive Center, Tamarai Tech Park',
    addressLocality: 'Chennai',
    postalCode: '600032',
    addressCountry: 'IN'
  }
};

export const serviceSchema = (serviceName: string, description: string): SchemaMarkup => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'MARGINZ'
  },
  areaServed: 'Worldwide',
  availableLanguage: 'en'
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>): SchemaMarkup => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>): SchemaMarkup => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const addSchemaMarkup = (schema: SchemaMarkup) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const removeSchemaMarkup = () => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach(script => {
    if (script.textContent?.includes('@context')) {
      script.remove();
    }
  });
};
