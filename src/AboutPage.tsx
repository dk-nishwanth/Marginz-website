import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema } from './utils/schema';
import { trackPageView } from './utils/analytics';

interface CoreValue {
  title: string;
  description: string;
  fullDescription: string;
}

interface Milestone {
  number: string;
  label: string;
}

const MILESTONES: Milestone[] = [
  { number: '2', label: 'Years of Experience' },
  { number: '70', label: 'Completed Projects' },
  { number: '100', label: 'Clients Served' },
  { number: '22', label: 'Expert Team Members' }
];

const CORE_VALUES: CoreValue[] = [
  {
    title: 'Innovation',
    description: 'Transforming Ideas into Impact',
    fullDescription: 'We embrace cutting-edge technologies like MERN, Next.js, and progressive web apps to craft scalable, secure solutions that keep our clients ahead of the curve.'
  },
  {
    title: 'Quality & Scalability',
    description: 'Building for Long-Term Growth',
    fullDescription: 'Every product is engineered with robust CI/CD pipelines, thorough testing frameworks, and cloud-ready architectures to ensure reliability and seamless scaling.'
  },
  {
    title: 'Collaboration',
    description: 'Blending Expertise for Success',
    fullDescription: 'Our team structure—Project Directors, SMEs, Technical Leads, and UI/UX specialists—ensures each project benefits from a diverse mix of experience and leadership.'
  },
  {
    title: 'Integrity',
    description: 'Transparent and Accountable',
    fullDescription: 'We uphold the highest standards of honesty and responsibility, ensuring that every solution aligns with our clients\' goals and ethical expectations.'
  },
  {
    title: 'Client Success',
    description: 'Your Goals, Our Mission',
    fullDescription: 'By focusing on measurable outcomes, we transform business objectives into powerful digital assets that drive sustainable growth and competitive advantage.'
  },
  {
    title: 'Continuous Learning',
    description: 'Evolving with Technology',
    fullDescription: 'From React and Angular to emerging stacks, we invest in ongoing skill development so we can deliver the most modern, future-ready solutions possible.'
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="About page hero background" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          loading="eager"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">ABOUT MARGINZ</span>
              <h1 className="text-5xl md:text-8xl font-display text-white leading-[0.9]">
                EMPOWERING PEOPLE, BUILDING TECHNOLOGY
              </h1>
              <p className="text-xl leading-relaxed text-white/80 max-w-xl">
                Delivering Impact through innovative IT solutions that transform your digital presence into a powerful business asset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">2+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">Years of Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">100+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">Clients Served</p>
              </div>
            </div>

            <button className="px-10 py-5 bg-urgency text-white font-display text-lg hover:bg-opacity-90 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-white">
              Start Your Journey
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=700&fit=crop&crop=center&q=85&auto=format" 
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
  return (
    <section className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-32">
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
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">OUR MISSION & VISION</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white/75 leading-[0.8] mb-12 md:mb-16 max-w-5xl">
              2+ YEARS OF COMBINED EXPERTISE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white uppercase">Our Vision</h3>
                <p className="text-lg leading-relaxed text-white/80">
                  To be a trusted global leader in innovative IT solutions, empowering organizations to thrive through technology, efficiency, and digital transformation.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white uppercase">Our Mission</h3>
                <p className="text-lg leading-relaxed text-white/80">
                  To build innovative, scalable, and secure software that transforms business objectives into technological assets, ensuring measurable impact and long-term growth.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/20">
              <p className="text-lg leading-relaxed text-white max-w-3xl">
                Driving Digital Transformation with Scalable, Secure Solutions. We create innovative, reliable IT solutions that enhance user engagement and streamline operations—turning your digital presence into a powerful business asset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Milestones = () => {
  return (
    <section className="relative bg-forest py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Company milestones background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="text-5xl md:text-[70px] leading-[0.8] text-white mb-8">COMPANY MILESTONES</h2>
        <p className="text-lg text-white/70 mb-24 max-w-2xl">
          Milestones That Power Digital Transformation. Each achievement reflects our drive to build innovative, scalable, and secure solutions—turning business objectives into powerful technological assets and delivering measurable impact for every client.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MILESTONES.map((milestone, i) => (
            <div 
              key={i}
              className="p-12 bg-forest/50 border border-dashed border-white/20 hover:bg-forest/80 transition-colors"
            >
              <div className="text-6xl font-display text-urgency mb-4">{milestone.number}</div>
              <p className="text-lg text-white/80">{milestone.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleValue = (index: number) => {
    const newIndices = new Set(openIndices);
    if (newIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setOpenIndices(newIndices);
  };

  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">OUR CORE VALUES</span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">BUILDING YOUR DIGITAL ADVANTAGE</span>
              <Crosshair size={20} className="text-white/50" aria-hidden="true" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16">OUR CORE VALUES</h2>
            <div className="space-y-4" role="region" aria-label="Core values">
              {CORE_VALUES.map((value, i) => (
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
  return (
    <section className="relative bg-forest py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Call to action background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-display text-white">
            TRANSFORMING YOUR DIGITAL VISION INTO POWERFUL BUSINESS ASSETS WITH MARGINZ
          </h2>
          <button className="px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency">
            Show your Interest
          </button>
        </div>
      </div>
    </section>
  );
};

const FooterComponent = () => {
  return <Footer />;
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
