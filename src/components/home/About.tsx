import { Link } from 'react-router-dom';
import { Crosshair } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/config';
import { FadeIn } from '../FadeIn';

export const About = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="about" className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-16 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn className="lg:col-span-3 flex flex-col items-start gap-12">
            <img src="/marginz-logo.jpg" alt="MARGINZ Logo" className="w-12 h-12 object-contain" loading="lazy" decoding="async" />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">{t('home', 'aboutLabel')}</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </FadeIn>
          <FadeIn delay={100} className="lg:col-span-4 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white leading-[0.8] mb-12 md:mb-16 max-w-3xl cursor-hover-target">{t('home', 'aboutTitle')}</h2>
            <div className="space-y-12">
              <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl">{t('home', 'aboutBody')}</p>
              <div className="flex items-center gap-8">
                <Link to="/about" className="inline-block px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency cursor-hover-target">
                  {t('home', 'aboutCta')}
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200} direction="left" className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="dashed-border w-full lg:w-auto">
              <div className="w-full lg:w-[390px] h-[420px] lg:h-full lg:min-h-[520px] overflow-hidden group cursor-hover-target">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=780&h=1040&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="Digital resilience and team collaboration" className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
