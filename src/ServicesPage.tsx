import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema, serviceSchema } from './utils/schema';
import { trackPageView } from './utils/analytics';
import { useLanguage } from './i18n/LanguageContext';
import { useTranslation } from './i18n/config';

interface ServiceCategory {
  title: string;
  description: string;
  fullDescription: string;
  services: string[];
}



const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="Services hero background" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          loading="eager"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">{t('services', 'label')}</span>
              <h1 className="text-5xl md:text-8xl font-display text-white leading-[0.9]">
                {t('services', 'heroTitle')}
              </h1>
              <p className="text-xl leading-relaxed text-white/80 max-w-xl">
                {t('services', 'heroBody')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">6+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">{t('services', 'heroStatCategories')}</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">22+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">{t('services', 'heroStatExperts')}</p>
              </div>
            </div>

            <Link
              to="/contact#contact-form"
              className="inline-block px-10 py-5 bg-urgency text-white font-display text-lg hover:bg-urgency/90 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {t('services', 'heroCta')}
            </Link>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop&crop=center&q=85&auto=format&fm=webp" 
                  alt="Web development and IT services" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-16 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 flex flex-col items-start gap-12">
            <img src="/marginz-logo.jpg" alt="MARGINZ Logo" className="w-12 h-12 object-contain" loading="lazy" />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">{t('services', 'overviewLabel')}</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white/75 leading-[0.8] mb-12 md:mb-16 max-w-5xl">
              {t('services', 'overviewTitle')}
            </h2>
            <p className="text-lg leading-relaxed text-white/80 max-w-3xl">{t('services', 'overviewBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCategories = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const serviceCategories: ServiceCategory[] = [
    { title: t('services','c1Title'), description: t('services','c1Desc'), fullDescription: t('services','c1Full'), services: [t('services','c1S1'), t('services','c1S2'), t('services','c1S3'), t('services','c1S4')] },
    { title: t('services','c2Title'), description: t('services','c2Desc'), fullDescription: t('services','c2Full'), services: [t('services','c2S1'), t('services','c2S2'), t('services','c2S3'), t('services','c2S4')] },
    { title: t('services','c3Title'), description: t('services','c3Desc'), fullDescription: t('services','c3Full'), services: [t('services','c3S1'), t('services','c3S2'), t('services','c3S3'), t('services','c3S4')] },
    { title: t('services','c4Title'), description: t('services','c4Desc'), fullDescription: t('services','c4Full'), services: [t('services','c4S1'), t('services','c4S2'), t('services','c4S3'), t('services','c4S4')] },
    { title: t('services','c5Title'), description: t('services','c5Desc'), fullDescription: t('services','c5Full'), services: [t('services','c5S1'), t('services','c5S2'), t('services','c5S3'), t('services','c5S4')] },
    { title: t('services','c6Title'), description: t('services','c6Desc'), fullDescription: t('services','c6Full'), services: [t('services','c6S1'), t('services','c6S2'), t('services','c6S3'), t('services','c6S4')] },
  ];

  const toggleService = (index: number) => {
    const newIndices = new Set(openIndices);
    if (newIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setOpenIndices(newIndices);
  };

  return (
    <section className="relative bg-forest py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="Services background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="text-5xl md:text-[70px] leading-[0.8] text-white mb-8">{t('services', 'servicesTitle')}</h2>
        <p className="text-lg text-white/70 mb-24 max-w-2xl">{t('services', 'servicesBody')}</p>

        <div className="space-y-4" role="region" aria-label="Service categories">
          {serviceCategories.map((category, i) => (
            <div key={i} className="border-b border-dashed border-white/30">
              <button 
                onClick={() => toggleService(i)}
                className="w-full py-8 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-urgency px-2"
                aria-expanded={openIndices.has(i)}
                aria-controls={`service-answer-${i}`}
              >
                <div>
                  <h3 className="text-2xl font-display text-white mb-2">{category.title}</h3>
                  <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors">
                    {category.description}
                  </p>
                </div>
                <div className={`transition-transform duration-300 ml-4 flex-shrink-0 ${openIndices.has(i) ? 'rotate-180' : ''}`}>
                  <Plus size={24} className="text-white/50" aria-hidden="true" />
                </div>
              </button>
              <AnimatePresence>
                {openIndices.has(i) && (
                  <motion.div 
                    id={`service-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 space-y-6 px-2">
                      <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                        {category.fullDescription}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {category.services.map((service, idx) => (
                          <div key={idx} className="p-4 bg-forest/50 border border-white/10 rounded">
                            <p className="text-white/80 text-sm">{service}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const techStack = [
    { category: t('services','techCat1'), technologies: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript'] },
    { category: t('services','techCat2'), technologies: ['Node.js', 'Express.js', 'PHP', 'Python'] },
    { category: t('services','techCat3'), technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Supabase'] },
    { category: t('services','techCat4'), technologies: ['Git', 'CI/CD Pipelines', 'Vercel', 'Docker', 'AWS'] }
  ];

  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-16 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">{t('services', 'techLabel')}</span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">{t('services', 'techSubLabel')}</span>
              <Crosshair size={20} className="text-white/50" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16">{t('services', 'techTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {techStack.map((stack, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-xl font-display text-urgency uppercase">{stack.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {stack.technologies.map((tech, idx) => (
                      <span key={idx} className="tag text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section className="relative bg-forest py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="Call to action background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-display text-white">{t('services', 'ctaTitle')}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('services', 'ctaBody')}</p>
          <Link 
            to="/contact#contact-form"
            className="inline-block px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency"
          >
            {t('services', 'ctaBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
};


export default function ServicesPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const serviceCategories: ServiceCategory[] = [
      { title: t('services','c1Title'), description: t('services','c1Desc'), fullDescription: t('services','c1Full'), services: [t('services','c1S1'), t('services','c1S2'), t('services','c1S3'), t('services','c1S4')] },
      { title: t('services','c2Title'), description: t('services','c2Desc'), fullDescription: t('services','c2Full'), services: [t('services','c2S1'), t('services','c2S2'), t('services','c2S3'), t('services','c2S4')] },
      { title: t('services','c3Title'), description: t('services','c3Desc'), fullDescription: t('services','c3Full'), services: [t('services','c3S1'), t('services','c3S2'), t('services','c3S3'), t('services','c3S4')] },
      { title: t('services','c4Title'), description: t('services','c4Desc'), fullDescription: t('services','c4Full'), services: [t('services','c4S1'), t('services','c4S2'), t('services','c4S3'), t('services','c4S4')] },
      { title: t('services','c5Title'), description: t('services','c5Desc'), fullDescription: t('services','c5Full'), services: [t('services','c5S1'), t('services','c5S2'), t('services','c5S3'), t('services','c5S4')] },
      { title: t('services','c6Title'), description: t('services','c6Desc'), fullDescription: t('services','c6Full'), services: [t('services','c6S1'), t('services','c6S2'), t('services','c6S3'), t('services','c6S4')] },
    ];
    updateMetaTags({ ...SEO_CONFIG.services, url: window.location.href });
    updateCanonicalUrl(window.location.href);
    removeSchemaMarkup();
    addSchemaMarkup(organizationSchema);
    serviceCategories.forEach(service => {
      addSchemaMarkup(serviceSchema(service.title, service.description));
    });
    trackPageView('Services', '/services');
    return () => { removeSchemaMarkup(); };
  }, [language]);

  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ServiceCategories />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
