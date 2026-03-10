import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Crosshair } from 'lucide-react';

interface ServiceCategory {
  title: string;
  description: string;
  fullDescription: string;
  services: string[];
}

interface ServiceItem {
  title: string;
  description: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Websites',
    description: 'Dynamic & Static Web Solutions',
    fullDescription: 'We develop both corporate dynamic websites with content management systems, SEO optimization, and responsive design, as well as fast-loading static websites perfect for showcasing your business professionally.',
    services: ['Corporate Dynamic Websites', 'Corporate Static Websites', 'Landing Pages', 'E-commerce Platforms']
  },
  {
    title: 'Web Applications',
    description: 'Custom & Progressive Solutions',
    fullDescription: 'From customized dashboards with real-time analytics to Progressive Web Applications with offline functionality and push notifications, we create app-like web experiences that enhance user engagement.',
    services: ['Customized Dashboards', 'Progressive Web Applications', 'Real-time Analytics', 'Data Visualization']
  },
  {
    title: 'Enterprise Solutions',
    description: 'CRM & ERP Systems',
    fullDescription: 'Comprehensive enterprise resource planning and customer relationship management systems tailored to your business needs, ensuring scalability and security for large-scale operations.',
    services: ['CRM Systems', 'ERP Solutions', 'Business Process Automation', 'Integration Services']
  },
  {
    title: 'Digital Platforms',
    description: 'LMS & CMS Solutions',
    fullDescription: 'Learning and content management platforms with advanced user role management for educational institutions and businesses, enabling seamless content delivery and user engagement.',
    services: ['Learning Management Systems', 'Content Management Systems', 'User Role Management', 'Content Delivery']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deployment & Infrastructure',
    fullDescription: 'We leverage modern deployment technologies including Git, CI/CD pipelines, and cloud platforms like Vercel to ensure your applications are scalable, secure, and always available.',
    services: ['CI/CD Pipelines', 'Cloud Deployment', 'Infrastructure Management', 'Performance Optimization']
  },
  {
    title: 'Technology Stack',
    description: 'Modern & Reliable Tech',
    fullDescription: 'Our expertise spans React.js, Angular, Node.js, Express.js, and databases like MongoDB, MySQL, PostgreSQL, ensuring we use the right technology for every project requirement.',
    services: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development']
  }
];

const TECH_STACK = [
  { category: 'Frontend', technologies: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript'] },
  { category: 'Backend', technologies: ['Node.js', 'Express.js', 'PHP', 'Python'] },
  { category: 'Databases', technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Supabase'] },
  { category: 'DevOps', technologies: ['Git', 'CI/CD Pipelines', 'Vercel', 'Docker', 'AWS'] }
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-8 px-6 md:px-12 flex items-start justify-between pointer-events-none bg-gradient-to-b from-black/60 to-transparent">
      <div className="pointer-events-auto">
        <a href="/">
          <img 
            src="/marginz-logo.jpg" 
            alt="MARGINZ Logo" 
            className="w-32 h-32 object-contain"
            referrerPolicy="no-referrer"
          />
        </a>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2"></div>

      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
          <a 
            key={item} 
            href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
            className="text-2xl font-display text-white hover:opacity-60 transition-opacity leading-none"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Services Hero" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">OUR SERVICES</span>
              <h1 className="text-7xl md:text-8xl font-display text-white leading-[0.9]">
                BEST IT SOLUTIONS
              </h1>
              <p className="text-xl leading-relaxed text-white/80 max-w-xl">
                Comprehensive IT services designed to transform your business objectives into powerful technological assets that drive growth and competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">6+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">Service Categories</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-display text-urgency">22+</div>
                <p className="text-white/70 font-mono text-sm uppercase tracking-wide">Expert Professionals</p>
              </div>
            </div>

            <button className="px-10 py-5 bg-urgency text-white font-display text-lg hover:bg-opacity-90 transition-all mt-8">
              Get Consultation
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="dashed-border w-fit">
              <div className="w-[400px] h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop&crop=center&q=85&auto=format" 
                  alt="Services" 
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

const ServicesOverview = () => {
  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 flex flex-col items-start gap-12">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">SERVICE CATEGORIES</span>
              <Crosshair size={20} className="text-label-muted" />
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-6xl md:text-7xl font-display text-white/75 leading-[0.8] mb-16 max-w-5xl">
              COMPREHENSIVE IT SOLUTIONS FOR YOUR BUSINESS
            </h2>
            <p className="text-lg leading-relaxed text-white/80 max-w-3xl">
              From dynamic websites and progressive web applications to enterprise-level CRM/ERP systems and learning management platforms, we deliver tailored solutions that align with your business goals and drive measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCategories = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-forest py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Services Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <h2 className="text-[70px] leading-[0.8] text-white mb-8">OUR SERVICES</h2>
        <p className="text-lg text-white/70 mb-24 max-w-2xl">
          Explore our comprehensive range of IT services designed to meet your business needs and drive digital transformation.
        </p>

        <div className="space-y-4">
          {SERVICE_CATEGORIES.map((category, i) => (
            <div key={i} className="border-b border-dashed border-white/30">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <div>
                  <h3 className="text-2xl font-display text-white mb-2">{category.title}</h3>
                  <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors">
                    {category.description}
                  </p>
                </div>
                <div className={`transition-transform duration-300 ml-4 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>
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
                    <div className="pb-8 space-y-6">
                      <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                        {category.fullDescription}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-label-muted">TECHNOLOGY STACK</span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/70">MODERN & RELIABLE TECH</span>
              <Crosshair size={20} className="text-white/50" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-7xl font-display text-white uppercase mb-16">TECHNOLOGY EXPERTISE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {TECH_STACK.map((stack, i) => (
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
  return (
    <section className="relative bg-forest py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="CTA Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-7xl font-display text-white">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connect with our experts to receive personalized IT guidance that aligns with your goals and growth strategy.
          </p>
          <button className="px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors">
            Get Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-forest pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1423345092054-524a33f20680?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Footer Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
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
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li className="pt-6 mt-4 border-t border-white/20">Copyright ©2026 MARGINZ</li>
              <li>All rights reserved</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">CONTACT</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="mailto:devx.marginz@gmail.com" className="hover:text-white transition-colors">devx.marginz@gmail.com</a></li>
              <li><a href="tel:+19285557874" className="hover:text-white transition-colors">+1 928-555-7874</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">LOCATION</h4>
            <address className="font-mono text-sm text-white/70 leading-relaxed not-italic">
              5th Floor, The Executive Center<br />
              Tamarai Tech Park, Guindy<br />
              India
            </address>
          </div>

          <div className="lg:col-span-3 flex flex-col items-end gap-4">
            {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
              <a 
                key={item}
                href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
                className="font-display text-xl uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
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

export default function ServicesPage() {
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
