import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/config';

export const FAQ = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  const faqs = [
    { q: t('home','faq1Q'), a: t('home','faq1A') },
    { q: t('home','faq2Q'), a: t('home','faq2A') },
    { q: t('home','faq3Q'), a: t('home','faq3A') },
    { q: t('home','faq4Q'), a: t('home','faq4A') },
  ];

  const toggleFAQ = (index: number) => {
    const newIndices = new Set(openIndices);
    if (newIndices.has(index)) { newIndices.delete(index); } else { newIndices.add(index); }
    setOpenIndices(newIndices);
  };

  return (
    <section id="faq" className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-16 md:py-32">
      <div ref={sectionRef} className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-12"
            initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">{t('home', 'faqLabel')}</span>
            <div className="flex flex-col gap-4 mb-12">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">{t('home', 'faqClickLabel')}</span>
              <Crosshair size={20} className="text-white/50" aria-hidden="true" />
            </div>
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[320px] aspect-[32/38] overflow-hidden group cursor-hover-target">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&h=380&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="FAQ support representative" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.h2
              className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16 cursor-hover-target"
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('home', 'faqTitle')}
            </motion.h2>
            <div className="space-y-4" role="region" aria-label="Frequently asked questions">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="border-b border-dashed border-white/30"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <button onClick={() => toggleFAQ(i)} className="w-full py-8 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-urgency px-2 cursor-hover-target" aria-expanded={openIndices.has(i)} aria-controls={`faq-answer-${i}`}>
                    <span className="text-lg md:text-xl leading-relaxed text-white/80 group-hover:text-white transition-colors">{faq.q}</span>
                    <div className={`transition-transform duration-300 flex-shrink-0 ${openIndices.has(i) ? 'rotate-180' : ''}`}>
                      <Plus size={24} className="text-white/50" aria-hidden="true" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndices.has(i) && (
                      <motion.div id={`faq-answer-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-white/70 text-lg leading-relaxed pb-8 max-w-2xl px-2">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
