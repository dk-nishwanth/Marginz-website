import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/config';
import { FadeIn } from '../FadeIn';
import { stagger, fadeUp } from './animations';

export const Differentiators = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px 0px' });

  const differentiators = [
    t('home','diff1'), t('home','diff2'), t('home','diff3'), t('home','diff4'), t('home','diff5')
  ];

  return (
    <section id="differentiators" className="relative bg-forest py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="" role="presentation" className="w-full h-full object-cover grayscale brightness-[0.3]" loading="lazy" decoding="async" />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <FadeIn className="lg:col-span-6">
            <h2 className="text-5xl md:text-[70px] leading-[0.8] text-white mb-8 md:mb-12 cursor-hover-target">{t('home', 'diffTitle')}</h2>
          </FadeIn>
          <FadeIn delay={150} direction="left" className="lg:col-span-6">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[350px] aspect-[35/40] overflow-hidden group cursor-hover-target">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=350&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="Our competitive difference" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
            </div>
          </FadeIn>
        </div>
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-dashed border-white/20"
          variants={stagger} initial="hidden" animate={gridInView ? 'show' : 'hidden'}
        >
          {differentiators.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="p-6 md:p-12 aspect-auto md:aspect-square flex flex-col justify-between bg-forest/50 hover:bg-forest/80 transition-colors relative overflow-hidden group min-h-[200px] cursor-hover-target">
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img src={[
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp',
                    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp',
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp',
                    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp'
                  ][i]} alt="" role="presentation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" decoding="async" />
                </div>
                <span className="font-mono text-sm text-label-muted uppercase tracking-[0.15em] relative z-10">0{i + 1}</span>
                <p className="text-lg leading-relaxed text-white/80 relative z-10">{item}</p>
              </div>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <div className="p-6 md:p-12 aspect-auto md:aspect-square bg-sage flex flex-col justify-between relative overflow-hidden min-h-[200px]">
              <div className="absolute inset-0 z-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="" role="presentation" className="w-full h-full object-cover grayscale" loading="lazy" decoding="async" />
              </div>
              <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] relative z-10">{t('home', 'diffCta')}</span>
              <div className="space-y-6 relative z-10">
                <p className="text-xl leading-relaxed text-white">{t('home', 'diffCtaBody')}</p>
                <Link to="/contact#contact-form" className="inline-block px-8 py-4 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency cursor-hover-target">
                  {t('home', 'diffCtaBtn')}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
