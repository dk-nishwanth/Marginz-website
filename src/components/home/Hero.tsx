import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/config';

export const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const personas = [
    { title: t('home','p1Title'), subtitle: t('home','p1Sub'), description: t('home','p1Desc'), tagline: t('home','p1Tag') },
    { title: t('home','p2Title'), subtitle: t('home','p2Sub'), description: t('home','p2Desc'), tagline: t('home','p2Tag') },
    { title: t('home','p3Title'), subtitle: t('home','p3Sub'), description: t('home','p3Desc'), tagline: t('home','p3Tag') },
    { title: t('home','p4Title'), subtitle: t('home','p4Sub'), description: t('home','p4Desc'), tagline: t('home','p4Tag') },
    { title: t('home','p5Title'), subtitle: t('home','p5Sub'), description: t('home','p5Desc'), tagline: t('home','p5Tag') },
  ];

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      timeoutId = setTimeout(() => {
        setCurrentPersonaIndex((prev) => (prev + 1) % personas.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);
    return () => { clearInterval(interval); clearTimeout(timeoutId); };
  }, []);

  const currentPersona = personas[currentPersonaIndex];

  return (
    <section id="home" className="relative h-screen flex flex-col justify-between overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-[0.3]">
            <source src="/3624351-hd_1920_1080_30fps.mp4" type="video/mp4" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="" role="presentation" decoding="async" className="w-full h-full object-cover grayscale brightness-[0.3]" />
          </video>
        </motion.div>
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 pt-20 md:pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between mt-auto mb-auto gap-8 relative z-20 w-full">
          <motion.div
            className="w-full md:w-auto md:max-w-[420px] space-y-8 flex-shrink-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-[15px] leading-relaxed text-white">
                <span className="font-semibold">{currentPersona.title} - {currentPersona.subtitle}.</span> {currentPersona.description} {t('home', 'heroDescription')}
              </p>
            </div>
            <div className="flex items-center gap-4 cursor-hover-target">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-forest/50 flex items-center justify-center">
                <img src="/marginz-logo.jpg" alt="MARGINZ" decoding="async" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-white">{t('home','heroCompanyLabel')}</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 flex-1 md:pr-12 cursor-hover-target"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[11px] font-mono text-white/50 uppercase tracking-[0.3em] hidden xl:block">{t('home','heroStartJourney')}</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-5 py-2.5 bg-cream rounded-sm font-mono text-base text-forest font-bold whitespace-nowrap">{t('home', 'heroBadgeProjects')}</div>
              <div className="px-5 py-2.5 bg-urgency rounded-sm font-mono text-base text-white font-bold whitespace-nowrap">{t('home', 'heroBadgeUptime')}</div>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex flex-col items-center justify-center gap-4 flex-shrink-0 w-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className={`vertical-text text-[10px] font-mono text-white uppercase tracking-widest whitespace-nowrap transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {currentPersona.tagline}
            </div>
            <div className="w-2 h-2 bg-urgency rounded-full" />
          </motion.div>
        </div>

        <motion.div
          className="w-full relative mb-0 md:-mb-12 shrink-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="breachen-text text-white text-center cursor-hover-target">{t('home', 'heroTitle')}</h1>
        </motion.div>
      </div>
    </section>
  );
};
