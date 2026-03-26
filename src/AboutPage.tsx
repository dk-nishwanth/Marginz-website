import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FadeIn } from './components/FadeIn';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema } from './utils/schema';
import { trackPageView } from './utils/analytics';
import { useLanguage } from './i18n/LanguageContext';
import { useTranslation } from './i18n/config';



const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="About page hero background" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          loading="eager"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">{t('about', 'label')}</span>
              <h1 className="text-5xl md:text-8xl font-display text-white leading-[0.9]">
                {t('about', 'heroTitle')}
              </h1>
              <p className="text-xl leading-relaxed text-white/80 max-w-xl">
                {t('about', 'heroBody')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">2+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">{t('about', 'heroStatYears')}</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">100+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">{t('about', 'heroStatClients')}</p>
              </div>
            </div>

            <Link
              to="/contact#contact-form"
              className="inline-block px-10 py-5 bg-urgency text-white font-display text-lg hover:bg-urgency/90 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {t('about', 'heroCta')}
            </Link>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=700&fit=crop&crop=center&q=85&auto=format&fm=webp" 
                  alt="Team collaboration and innovation" 
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

const MissionVision = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-16 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 flex flex-col items-start gap-12">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">{t('about', 'missionLabel')}</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white/75 leading-[0.8] mb-12 md:mb-16 max-w-5xl">
              {t('about', 'missionTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white uppercase">{t('about', 'visionHeading')}</h3>
                <p className="text-lg leading-relaxed text-white/80">{t('about', 'visionBody')}</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white uppercase">{t('about', 'missionHeading')}</h3>
                <p className="text-lg leading-relaxed text-white/80">{t('about', 'missionBody')}</p>
              </div>
            </div>
            <div className="mt-16 pt-16 border-t border-white/20">
              <p className="text-lg leading-relaxed text-white max-w-3xl">{t('about', 'missionExtra')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Milestones = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const milestones = [
    { number: '2', label: t('about','ms1') },
    { number: '70', label: t('about','ms2') },
    { number: '100', label: t('about','ms3') },
    { number: '22', label: t('about','ms4') },
  ];

  return (
    <section className="relative bg-forest py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="Company milestones background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="text-5xl md:text-[70px] leading-[0.8] text-white mb-8">{t('about', 'milestonesTitle')}</h2>
        <p className="text-lg text-white/70 mb-24 max-w-2xl">{t('about', 'milestonesBody')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-6 md:p-12 bg-forest/50 border border-dashed border-white/20 hover:bg-forest/80 transition-colors">
                <div className="text-6xl font-display text-urgency mb-4">{milestone.number}</div>
                <p className="text-lg text-white/80">{milestone.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const coreValues = [
    { title: t('about','v1Title'), description: t('about','v1Desc'), fullDescription: t('about','v1Full') },
    { title: t('about','v2Title'), description: t('about','v2Desc'), fullDescription: t('about','v2Full') },
    { title: t('about','v3Title'), description: t('about','v3Desc'), fullDescription: t('about','v3Full') },
    { title: t('about','v4Title'), description: t('about','v4Desc'), fullDescription: t('about','v4Full') },
    { title: t('about','v5Title'), description: t('about','v5Desc'), fullDescription: t('about','v5Full') },
    { title: t('about','v6Title'), description: t('about','v6Desc'), fullDescription: t('about','v6Full') },
  ];

  const toggleValue = (index: number) => {
    const newIndices = new Set(openIndices);
    if (newIndices.has(index)) { newIndices.delete(index); } else { newIndices.add(index); }
    setOpenIndices(newIndices);
  };

  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-16 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">{t('about', 'valuesLabel')}</span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">{t('about', 'valuesSubLabel')}</span>
              <Crosshair size={20} className="text-white/50" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16">{t('about', 'valuesTitle')}</h2>
            <div className="space-y-4" role="region" aria-label="Core values">
              {coreValues.map((value, i) => (
                <div key={i} className="border-b border-dashed border-white/30">
                  <button 
                    onClick={() => toggleValue(i)}
                    className="w-full py-8 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-urgency px-2"
                    aria-expanded={openIndices.has(i)}
                    aria-controls={`value-answer-${i}`}
                  >
                    <div>
                      <h3 className="text-xl font-display text-white mb-2">{value.title}</h3>
                      <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors">
                        {value.description}
                      </p>
                    </div>
                    <div className={`transition-transform duration-300 ml-4 flex-shrink-0 ${openIndices.has(i) ? 'rotate-180' : ''}`}>
                      <Plus size={24} className="text-white/50" aria-hidden="true" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndices.has(i) && (
                      <motion.div 
                        id={`value-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-lg leading-relaxed pb-8 max-w-2xl px-2">
                          {value.fullDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" 
          alt="Call to action background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-display text-white">
            {t('about', 'ctaTitle')}
          </h2>
          <Link 
            to="/contact#contact-form"
            className="inline-block px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency"
          >
            {t('about', 'ctaBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
};


export default function AboutPage() {
  useEffect(() => {
    // Update meta tags
    updateMetaTags({
      ...SEO_CONFIG.about,
      url: window.location.href
    });
    updateCanonicalUrl(window.location.href);

    // Add schema markup
    removeSchemaMarkup();
    addSchemaMarkup(organizationSchema);

    // Track page view
    trackPageView('About', '/about');

    return () => {
      removeSchemaMarkup();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <MissionVision />
        <Milestones />
        <CoreValues />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
