import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema, faqSchema } from './utils/schema';
import { trackPageView } from './utils/analytics';
import { useLanguage } from './i18n/LanguageContext';
import { useTranslation } from './i18n/config';

import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Programs } from './components/home/Programs';
import { Differentiators } from './components/home/Differentiators';
import { FAQ } from './components/home/FAQ';

export default function HomePage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const faqsForSchema = [
    { question: t('home','faq1Q'), answer: t('home','faq1A') },
    { question: t('home','faq2Q'), answer: t('home','faq2A') },
    { question: t('home','faq3Q'), answer: t('home','faq3A') },
    { question: t('home','faq4Q'), answer: t('home','faq4A') },
  ];

  useEffect(() => {
    updateMetaTags({ ...SEO_CONFIG.home, url: window.location.href });
    updateCanonicalUrl(window.location.href);
    removeSchemaMarkup();
    addSchemaMarkup(organizationSchema);
    addSchemaMarkup(faqSchema(faqsForSchema));
    trackPageView('Home', '/');
    return () => { removeSchemaMarkup(); };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Differentiators />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
