import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema, faqSchema } from './utils/schema';
import { trackPageView } from './utils/analytics';

interface Program {
  id: string;
  label: string;
  title: string;
  description: string;
  included: string[];
  tags: string[];
  image: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const PROGRAMS: Program[] = [
  {
    id: '01',
    label: 'Service 01',
    title: 'Core Digital Platforms',
    description: 'We build the essential, proprietary software your business runs on, ensuring stability and a smooth user experience across all devices. Our platforms are engineered for performance and reliability.',
    included: ['Custom software architecture', 'Cross-platform compatibility', 'Enterprise-grade stability', 'Scalable infrastructure'],
    tags: ['Innovation', 'High-Performance', 'Stability'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop&crop=center&q=85&auto=format'
  },
  {
    id: '02',
    label: 'Service 02',
    title: 'Advanced Intelligence & Automation',
    description: 'We integrate cutting-edge intelligence and efficient infrastructure to help your business operate smarter and faster. Leverage AI and automation to eliminate operational friction.',
    included: ['AI integration', 'Process automation', 'Intelligent workflows', 'Real-time analytics'],
    tags: ['Quality', 'Accessibility', 'Smart Systems'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=700&fit=crop&crop=center&q=85&auto=format'
  },
  {
    id: '03',
    label: 'Service 03',
    title: 'Strategic Modernization & Support',
    description: 'We modernize outdated systems, ensure all platforms connect seamlessly, and provide disciplined, long-term support to maintain optimal performance.',
    included: ['Legacy system modernization', 'Platform integration', 'Continuous support', 'Performance optimization', 'Strategic consulting'],
    tags: ['Client Success', 'Long-term Partnership'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop&crop=center&q=85&auto=format'
  }
];

const FAQS: FAQItem[] = [
  { q: "What services does MARGINZ provide?", a: "MARGINZ specializes in digital transformation, delivering core digital platforms, advanced intelligence & automation, and strategic modernization. We focus on building high-performance systems that eliminate operational friction and drive measurable business outcomes." },
  { q: "What makes MARGINZ different?", a: "We combine precision engineering with enterprise-grade reliability. Our proprietary Frictionless Framework ensures maximum uptime and delivers clear pathways to strategic objectives. We systematically dissolve operational complexities across all critical workflows." },
  { q: "Can you work with enterprises of different sizes?", a: "Yes. We partner with major enterprises across 8 industry verticals. Our solutions are scalable and adaptable to organizations of varying sizes and complexity levels." },
  { q: "What is your track record?", a: "MARGINZ has successfully delivered 70+ project mandates with 99.99% operational uptime. We partner with 100+ companies and maintain a 99% client satisfaction rate." },
];

const DIFFERENTIATORS = [
  "Precision Engineering: High-performance systems that secure decisive competitive advantage",
  "Frictionless Framework: Proprietary methodology ensuring near-zero friction across workflows",
  "Enterprise Expertise: 8 industry verticals, 100+ company partnerships, proven track record",
  "Maximum Uptime: 99.99% operational uptime guarantee across all critical systems",
  "Strategic Partnership: Long-term commitment to your digital transformation and market leadership"
];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-between overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale brightness-[0.3]"
        >
          <source src="/3624351-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback image in case video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
            alt="Digital transformation background" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
        </video>
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between mt-auto mb-auto gap-8 relative z-20 w-full">
          <div className="w-full md:w-auto md:max-w-[420px] space-y-8 flex-shrink-0">
            <p className="text-[15px] leading-relaxed text-white">
              The Strategist - ROI & Business Outcome. Beyond Code: Delivering Measurable MARGINZ on Digital Investment. We engineer the infrastructure of tomorrow's market leadership.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img 
                  src="https://picsum.photos/seed/marginz/100/100" 
                  alt="MARGINZ team member" 
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-white">MARGINZ Solutions</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 flex-1 md:pr-12">
            <span className="text-[11px] font-mono text-white/50 uppercase tracking-[0.3em] hidden xl:block">Start Your Journey</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-5 py-2.5 bg-cream rounded-sm font-mono text-base text-forest font-bold whitespace-nowrap">
                70 PROJECTS
              </div>
              <div className="px-5 py-2.5 bg-urgency rounded-sm font-mono text-base text-white font-bold whitespace-nowrap">
                99.99% UPTIME
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center gap-4 flex-shrink-0 w-8">
            <div className="vertical-text text-[10px] font-mono text-white uppercase tracking-widest whitespace-nowrap">
              DIGITAL TRANSFORMATION PARTNER
            </div>
            <div className="w-2 h-2 bg-urgency rounded-full" />
          </div>
        </div>

        <div className="w-full relative mb-0 md:-mb-12 shrink-0">
          <h1 className="breachen-text text-white text-center">
            TRANSFORM
          </h1>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547410175-72479977993f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format"  
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

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
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">ABOUT MARGINZ</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white leading-[0.8] mb-12 md:mb-16 max-w-3xl">
              THE ARCHITECTURE OF UNASSAILABLE DIGITAL RESILIENCE
            </h2>
            <div className="space-y-12">
              <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl">
                MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative. Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises.
              </p>
              <div className="flex items-center gap-8">
                <button className="px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[390px] aspect-[39/44] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=390&h=440&fit=crop&crop=center&q=85&auto=format" 
                  alt="Digital resilience and team collaboration" 
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

const Programs = () => {
  return (
    <section id="programs" className="relative overflow-hidden">
      {PROGRAMS.map((program, i) => (
        <div 
          key={program.id}
          className={`section-container ${i % 2 === 0 ? 'bg-forest' : 'bg-sage'} relative`}
        >
          {i === 0 && (
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
                alt="Core digital platforms background"
                className="w-full h-full object-cover grayscale brightness-[0.3]"
                loading="lazy"
              />
              <div className="vignette absolute inset-0" />
            </div>
          )}

          {i === 1 && (
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1547410175-72479977993f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
                alt="AI and automation background"
                className="w-full h-full object-cover grayscale brightness-[0.3]"
                loading="lazy"
              />
              <div className="vignette absolute inset-0" />
            </div>
          )}

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-2 flex flex-col gap-2">
                {program.tags.map((tag) => (
                  <div key={tag} className="tag border-white/50 w-fit">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="lg:col-span-10">
                <h2 className="text-4xl md:text-7xl font-display text-white leading-[0.8] mb-12 md:mb-16">
                  {program.title}
                </h2>
              </div>

              <div className="lg:col-span-5">
                <div className="dashed-border w-fit">
                  <div className="w-full max-w-[390px] aspect-[39/43] overflow-hidden bg-forest/50">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale brightness-75"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 hidden lg:flex justify-center items-center h-full">
                <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] vertical-text">
                  {program.label}
                </span>
              </div>

              <div className="lg:col-span-6 lg:pl-12">
                <p className="text-lg md:text-xl leading-relaxed text-white mb-16 max-w-xl">
                  {program.description}
                </p>
                <div>
                  <div className="text-white font-mono text-sm uppercase tracking-[0.15em] mb-8">What's included:</div>
                  <ul className="space-y-6">
                    {program.included.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-lg md:text-xl leading-[1.6] text-white">
                        <span className="text-white" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Differentiators = () => {
  return (
    <section id="differentiators" className="relative bg-forest py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Differentiators background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-[70px] leading-[0.8] text-white mb-8 md:mb-12">THIS IS WHERE WE MAKE THE DIFFERENCE</h2>
          </div>
          <div className="lg:col-span-6">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[350px] aspect-[35/40] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=350&h=400&fit=crop&crop=center&q=85&auto=format" 
                  alt="Our competitive difference" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-dashed border-white/20">
          {DIFFERENTIATORS.map((item, i) => (
            <div 
              key={i}
              className="p-12 aspect-square flex flex-col justify-between bg-forest/50 hover:bg-forest/80 transition-colors relative overflow-hidden group"
            >
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src={[
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop&crop=center&q=85&auto=format'
                  ][i]}
                  alt={`Differentiator ${i + 1}: ${item.split(':')[0]}`}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <span className="font-mono text-sm text-label-muted uppercase tracking-[0.15em] relative z-10">0{i + 1}</span>
              <p className="text-lg leading-relaxed text-white/80 relative z-10">
                {item}
              </p>
            </div>
          ))}
          <div className="p-12 aspect-square bg-sage flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center&q=85&auto=format"
                alt="Call to action background"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] relative z-10">LET'S START</span>
            <div className="space-y-6 relative z-10">
              <p className="text-xl leading-relaxed text-white">Need more information?</p>
              <button className="px-8 py-4 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleFAQ = (index: number) => {
    const newIndices = new Set(openIndices);
    if (newIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setOpenIndices(newIndices);
  };

  return (
    <section id="faq" className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">FAQ</span>
            <div className="flex flex-col gap-4 mb-12">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">CLICK TO SHOW INTEL</span>
              <Crosshair size={20} className="text-white/50" aria-hidden="true" />
            </div>
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[320px] aspect-[32/38] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&h=380&fit=crop&crop=center&q=85&auto=format" 
                  alt="FAQ support representative" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-4" role="region" aria-label="Frequently asked questions">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-dashed border-white/30">
                  <button 
                    onClick={() => toggleFAQ(i)}
                    className="w-full py-8 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-urgency px-2"
                    aria-expanded={openIndices.has(i)}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-lg md:text-xl leading-relaxed text-white/80 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className={`transition-transform duration-300 flex-shrink-0 ${openIndices.has(i) ? 'rotate-180' : ''}`}>
                      <Plus size={24} className="text-white/50" aria-hidden="true" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndices.has(i) && (
                      <motion.div 
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-lg leading-relaxed pb-8 max-w-2xl px-2">
                          {faq.a}
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

export default function HomePage() {
  useEffect(() => {
    // Update meta tags
    updateMetaTags({
      ...SEO_CONFIG.home,
      url: window.location.href
    });
    updateCanonicalUrl(window.location.href);

    // Add schema markup
    removeSchemaMarkup();
    addSchemaMarkup(organizationSchema);
    addSchemaMarkup(faqSchema(FAQS.map(faq => ({ question: faq.q, answer: faq.a }))));

    // Track page view
    trackPageView('Home', '/');

    return () => {
      removeSchemaMarkup();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay" />
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
