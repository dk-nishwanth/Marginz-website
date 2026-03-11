import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Plus, 
  X, 
  ArrowRight,
  Linkedin,
  Crosshair,
  Target,
  Shield,
  Activity,
  MapPin,
  Clock,
  Menu
} from 'lucide-react';

// --- Types ---
interface Program {
  id: string;
  label: string;
  title: string;
  description: string;
  included: string[];
  tags: string[];
  image: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface FAQItem {
  q: string;
  a: string;
}

// --- Data ---
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
    included: [
      'Legacy system modernization',
      'Platform integration',
      'Continuous support',
      'Performance optimization',
      'Strategic consulting'
    ],
    tags: ['Client Success', 'Long-term Partnership'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop&crop=center&q=85&auto=format'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction.",
    name: "Mr. Jayachandran",
    role: "Director, BRiX"
  },
  {
    quote: "We achieved a 95% time reduction in result processing, allowing us to scale student intake by 10X. Unparalleled speed and precision.",
    name: "Mr. Monishwaran",
    role: "Director - Coreverse"
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

// --- Components ---

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-white font-mono text-xl tracking-[0.3em]">
        LOADING..
      </div>
    </div>
  );
};

const Navbar = () => {
  const getPath = (item: string) => {
    switch(item) {
      case 'HOME': return '/';
      case 'ABOUT': return '/about';
      case 'SERVICES': return '/services';
      case 'CONTACT': return '/contact';
      default: return '/';
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-4 md:py-8 px-6 md:px-12 flex items-start justify-between pointer-events-none bg-gradient-to-b from-black/60 to-transparent">
      {/* Left: Emblem */}
      <div className="pointer-events-auto">
        <Link to="/">
          <img 
            src="/marginz-logo.jpg" 
            alt="MARGINZ Logo" 
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>

      {/* Right: Nav Links */}
      <div className="flex flex-col items-end gap-2 pointer-events-auto mt-2 md:mt-0">
        {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
          <Link 
            key={item} 
            to={getPath(item)}
            className="text-lg md:text-2xl font-display text-white hover:opacity-60 transition-opacity leading-none"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 248082, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds < 59) return { ...prev, seconds: prev.seconds + 1 };
        return { minutes: prev.minutes + 1, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-between overflow-hidden bg-hero-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 pt-24 md:pt-32">


        {/* Middle Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-auto mb-auto gap-8 relative z-20 w-full">
          {/* Left: Descriptor & Portrait */}
          <div className="w-full md:w-auto md:max-w-[420px] space-y-8 flex-shrink-0">
            <p className="text-[15px] leading-relaxed text-white">
              The Strategist - ROI & Business Outcome. Beyond Code: Delivering Measurable MARGINZ on Digital Investment. We engineer the infrastructure of tomorrow's market leadership.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img 
                  src="https://picsum.photos/seed/marginz/100/100" 
                  alt="MARGINZ Team" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-white">MARGINZ Solutions</span>
            </div>
          </div>

          {/* Center: Headline */}
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

          {/* Right Edge: Vertical Text */}
          <div className="hidden md:flex flex-col items-center justify-center gap-4 flex-shrink-0 w-8">
            <div className="vertical-text text-[10px] font-mono text-white uppercase tracking-widest whitespace-nowrap">
              DIGITAL TRANSFORMATION PARTNER
            </div>
            <div className="w-2 h-2 bg-urgency rounded-full" />
          </div>
        </div>

        {/* Bottom: Headline */}
        <div className="w-full relative mb-0 md:-mb-12 shrink-0">
          <h1 className="breachen-text text-white text-center">
            TRANSFORM
          </h1>
        </div>
      </div>
    </section>
  );
};

const MartijnSignature = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-primary opacity-80">
    <path d="M10 45C20 40 35 15 45 20C55 25 40 50 50 55C60 60 80 30 90 25C100 20 110 35 115 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 25L50 15M70 35L80 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547410175-72479977993f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format"  
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <Crosshair size={20} className="text-white" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Emblem & Label */}
          <div className="lg:col-span-3 flex flex-col items-start gap-12">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">ABOUT MARGINZ</span>
              <Crosshair size={20} className="text-label-muted" />
            </div>
          </div>

          {/* Center: Content */}
          <div className="lg:col-span-4 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white/75 leading-[0.8] mb-12 md:mb-16 max-w-3xl">
              THE ARCHITECTURE OF UNASSAILABLE DIGITAL RESILIENCE
            </h2>
            <div className="space-y-12">
              <p className="text-lg md:text-xl leading-relaxed text-white max-w-2xl">
                MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative. Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises.
              </p>
              <div className="flex items-center gap-8">
                <button className="px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors">
                  Read more
                </button>
                <div className="font-script text-4xl text-white opacity-80 pt-2">
                  MARGINZ Solutions
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[390px] aspect-[39/44] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=390&h=440&fit=crop&crop=center&q=85&auto=format" 
                  alt="Digital Resilience" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutContinued = () => {
  return (
    <section className="relative min-h-screen bg-sage flex flex-col justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Portrait */}
          <div className="lg:col-span-5">
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[390px] aspect-[39/44] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=390&h=440&fit=crop&crop=center&q=85&auto=format" 
                  alt="MARGINZ Team" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-4 pt-12">
            {[
              '70 PROJECT MANDATES',
              '99.99% OPERATIONAL UPTIME',
              '8 INDUSTRY VERTICALS',
              '100+ COMPANY PARTNERSHIPS'
            ].map((tag) => (
              <div key={tag} className="tag border-white/50 w-fit">
                {tag}
              </div>
            ))}
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
          {/* Background Image for Core Digital Platforms */}
          {i === 0 && (
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
                className="w-full h-full object-cover grayscale brightness-[0.3]"
                referrerPolicy="no-referrer"
              />
              <div className="vignette absolute inset-0" />
            </div>
          )}

          {/* Background Image for Advanced Intelligence & Automation */}
          {i === 1 && (
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1547410175-72479977993f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
                className="w-full h-full object-cover grayscale brightness-[0.3]"
                referrerPolicy="no-referrer"
              />
              <div className="vignette absolute inset-0" />
            </div>
          )}

          {/* Scroll Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <Crosshair size={20} className="text-white" />
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Top Left Tags */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                {program.tags.map((tag) => (
                  <div key={tag} className="tag border-white/50 w-fit">
                    {tag}
                  </div>
                ))}
              </div>

              {/* Top Center-Right Headline */}
              <div className="lg:col-span-10">
                <h2 className="text-4xl md:text-7xl font-display text-white leading-[0.8] mb-12 md:mb-16">
                  {program.title}
                </h2>
              </div>

              {/* Left Photo */}
              <div className="lg:col-span-5">
                <div className="dashed-border w-fit">
                  <div className="w-full max-w-[390px] aspect-[39/43] overflow-hidden bg-forest/50">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale brightness-75"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Center Label */}
              <div className="lg:col-span-1 hidden lg:flex justify-center items-center h-full">
                <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] vertical-text">
                  {program.label}
                </span>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 lg:pl-12">
                <p className="text-lg md:text-xl leading-relaxed text-white mb-16 max-w-xl">
                  {program.description}
                </p>
                <div>
                  <div className="text-white font-mono text-sm uppercase tracking-[0.15em] mb-8">Whats included:</div>
                  <ul className="space-y-6">
                    {program.included.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-lg md:text-xl leading-[1.6] text-white">
                        <span className="text-white">✓</span>
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Differentiators Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
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
                  alt="Our Difference" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  referrerPolicy="no-referrer"
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
              {/* Background image for each card */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src={[
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center&q=85&auto=format',
                    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop&crop=center&q=85&auto=format'
                  ][i]}
                  alt={`Differentiator ${i + 1}`}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-mono text-sm text-label-muted uppercase tracking-[0.15em] relative z-10">0{i + 1}</span>
              <p className="text-lg leading-relaxed text-white/80 relative z-10">
                {item}
              </p>
            </div>
          ))}
          {/* CTA Cell */}
          <div className="p-12 aspect-square bg-sage flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center&q=85&auto=format"
                alt="CTA Background"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-mono text-sm text-white/50 uppercase tracking-[0.15em] relative z-10">LET'S START</span>
            <div className="space-y-6 relative z-10">
              <p className="text-xl leading-relaxed text-white">Need more information?</p>
              <button className="px-8 py-4 bg-white text-forest font-display text-xl hover:bg-cream transition-colors">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-forest py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 flex items-center">
            <span className="font-mono text-sm text-white/70 uppercase tracking-[0.2em] vertical-text">CLIENT TESTIMONIALS</span>
          </div>
          <div className="lg:col-span-8">
            <div className="relative">
              <p className="text-[28px] leading-[1.5] text-white/80 mb-12">
                "Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction."
              </p>
              <div className="pt-8 border-t border-white/20">
                <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">MR. JAYACHANDRAN, DIRECTOR - BRIX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Photo Transition */}
      <div className="relative h-[50vh] mt-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Testimonial Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[600px] h-[600px] border border-white/30 rounded-full flex items-center justify-center">
            <Crosshair size={100} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GeographicReach = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Geographic Reach Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 vignette" />
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="text-5xl md:text-[90px] leading-[0.8] text-white max-w-4xl">PARTNER WITH 100+ COMPANIES ACROSS 8 INDUSTRY VERTICALS</h2>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">FAQ</span>
            <div className="flex flex-col gap-4 mb-12">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">CLICK TO SHOW INTEL</span>
              <Crosshair size={20} className="text-white/50" />
            </div>
            <div className="dashed-border w-fit">
              <div className="w-full max-w-[320px] aspect-[32/38] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&h=380&fit=crop&crop=center&q=85&auto=format" 
                  alt="FAQ Support" 
                  className="w-full h-full object-cover grayscale brightness-75"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 md:mb-16">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-dashed border-white/30">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg md:text-xl leading-relaxed text-white/80 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                      <Plus size={24} className="text-white/50" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-lg leading-relaxed pb-8 max-w-2xl">
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

const Footer = () => {
  return (
    <footer className="relative bg-forest pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Footer Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
          {/* Column 1: Legal */}
          <div className="lg:col-span-3">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-20 h-20 object-contain mb-8"
              referrerPolicy="no-referrer"
            />
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li className="pt-6 mt-4 border-t border-white/20">Copyright ©2026 MARGINZ</li>
              <li>All rights reserved</li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">CONTACT</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="mailto:devx.marginz@gmail.com" className="hover:text-white transition-colors">devx.marginz@gmail.com</a></li>
              <li><a href="tel:+19285557874" className="hover:text-white transition-colors">+1 928-555-7874</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">LOCATION</h4>
            <address className="font-mono text-sm text-white/70 leading-relaxed not-italic">
              5th Floor, The Executive Center<br />
              Tamarai Tech Park, Guindy<br />
              India
            </address>
          </div>

          {/* Column 4: Nav Links */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-4 mt-12 lg:mt-0">
            {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
              <Link 
                key={item}
                to={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
                className="font-display text-lg md:text-xl uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {item}
              </Link>
            ))}
            <div className="mt-8 font-mono text-xs text-white/50 uppercase tracking-[0.15em]">
              MARGINZ SOLUTIONS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay" />
      
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Programs />
            <Differentiators />
            <Testimonials />
            <GeographicReach />
            <FAQ />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
