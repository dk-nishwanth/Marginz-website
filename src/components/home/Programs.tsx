import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/config';
import { stagger, fadeUp } from './animations';

const ProgramCard = ({ program, i, t }: { program: any; i: number; t: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <div ref={ref} className={`section-container ${i % 2 === 0 ? 'bg-forest' : 'bg-sage'} relative`}>
      {i === 0 && (
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="" role="presentation" className="w-full h-full object-cover grayscale brightness-[0.3]" loading="lazy" decoding="async" />
          <div className="vignette absolute inset-0" />
        </div>
      )}
      {i === 1 && (
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1547410175-72479977993f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp" alt="" role="presentation" className="w-full h-full object-cover grayscale brightness-[0.3]" loading="lazy" decoding="async" />
          <div className="vignette absolute inset-0" />
        </div>
      )}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div className="lg:col-span-2 flex flex-col gap-2" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 }}>
            {program.tags.map((tag: string) => <div key={tag} className="tag border-white/50 w-fit">{tag}</div>)}
          </motion.div>
          <motion.div className="lg:col-span-10" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-4xl md:text-7xl font-display text-white leading-[0.8] mb-12 md:mb-16 cursor-hover-target">{program.title}</h2>
          </motion.div>
          <motion.div className="lg:col-span-5 flex justify-center lg:justify-start" initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.2 }}>
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[390px] aspect-[39/43] overflow-hidden bg-forest/50 group cursor-hover-target">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-1 hidden lg:flex justify-center items-center h-full">
            <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] vertical-text">{program.label}</span>
          </div>
          <motion.div className="lg:col-span-6 lg:pl-12" initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.25 }}>
            <p className="text-lg md:text-xl leading-relaxed text-white mb-16 max-w-xl">{program.description}</p>
            <div>
              <div className="text-white font-mono text-sm uppercase tracking-[0.15em] mb-8">{t('home','programsIncludedLabel')}</div>
              <motion.ul className="space-y-6" variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
                {program.included.map((item: string) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-4 text-lg md:text-xl leading-[1.6] text-white">
                    <span className="text-white" aria-hidden="true">✓</span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const buildPrograms = (t: (s: string, k: string) => string) => [
  { id: '01', label: t('home','prog1Label'), title: t('home','prog1Title'), description: t('home','prog1Desc'), included: [t('home','prog1I1'), t('home','prog1I2'), t('home','prog1I3'), t('home','prog1I4')], tags: [t('home','prog1T1'), t('home','prog1T2'), t('home','prog1T3')], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop&crop=center&q=85&auto=format&fm=webp' },
  { id: '02', label: t('home','prog2Label'), title: t('home','prog2Title'), description: t('home','prog2Desc'), included: [t('home','prog2I1'), t('home','prog2I2'), t('home','prog2I3'), t('home','prog2I4')], tags: [t('home','prog2T1'), t('home','prog2T2'), t('home','prog2T3')], image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=700&fit=crop&crop=center&q=85&auto=format&fm=webp' },
  { id: '03', label: t('home','prog3Label'), title: t('home','prog3Title'), description: t('home','prog3Desc'), included: [t('home','prog3I1'), t('home','prog3I2'), t('home','prog3I3'), t('home','prog3I4'), t('home','prog3I5')], tags: [t('home','prog3T1'), t('home','prog3T2')], image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop&crop=center&q=85&auto=format&fm=webp' },
];

export const Programs = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const programs = buildPrograms(t);

  return (
    <section id="programs" className="relative overflow-hidden">
      {programs.map((program, i) => (
        <ProgramCard key={program.id} program={program} i={i} t={t} />
      ))}
    </section>
  );
};
