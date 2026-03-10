import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

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
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Contact Hero" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-32">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">CONTACT US</span>
            <h1 className="text-7xl md:text-8xl font-display text-white leading-[0.9]">
              LET'S START SOLVING YOUR IT CHALLENGES TOGETHER
            </h1>
            <p className="text-xl leading-relaxed text-white/80 max-w-2xl">
              Connect with our digital solutions team to transform your business objectives into powerful technological assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', service: '', subject: '', message: '' });
  };

  return (
    <section className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521791055366-0d553872952f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Contact Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Label */}
          <div className="lg:col-span-3 flex flex-col items-start gap-12">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">CONTACT FORM</span>
              <Crosshair size={20} className="text-label-muted" />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-6xl md:text-7xl font-display text-white/75 leading-[0.8] mb-16 max-w-4xl">
              CONTACT FORM AND INFORMATION
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono tracking-widest mb-3 text-white/80">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-forest/50 border border-white/20 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono tracking-widest mb-3 text-white/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-forest/50 border border-white/20 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono tracking-widest mb-3 text-white/80">Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-forest/50 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-urgency transition"
                    required
                  >
                    <option value="">Select service</option>
                    <option value="dynamic-website">Corporate Dynamic Websites</option>
                    <option value="static-website">Corporate Static Websites</option>
                    <option value="dashboard">Customized Dashboards</option>
                    <option value="pwa">Progressive Web Applications</option>
                    <option value="crm-erp">CRM & ERP Solutions</option>
                    <option value="lms-cms">LMS & CMS Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-mono tracking-widest mb-3 text-white/80">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-forest/50 border border-white/20 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono tracking-widest mb-3 text-white/80">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-forest/50 border border-white/20 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition h-40 resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-urgency text-white py-4 font-display tracking-wider hover:bg-urgency/90 transition sharp-button text-lg"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-display text-white mb-4">GET IN TOUCH</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Connect With Our Digital Solutions Team
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-white/70 leading-relaxed">
                    Partner with us to transform your business objectives into powerful technological assets. Our experts are ready to discuss scalable, secure, and innovative solutions for your next project.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-8 space-y-8">
                  <div>
                    <h4 className="text-xl font-display text-white mb-4">CONTACT DETAILS</h4>
                  </div>

                  <div>
                    <h5 className="font-mono text-sm uppercase tracking-widest text-urgency mb-3">Our Location</h5>
                    <p className="text-white/70 leading-relaxed">
                      5th Floor, The Executive Center<br />
                      Tamarai Tech Park, Guindy<br />
                      Chennai – 600032, India
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-sm uppercase tracking-widest text-urgency mb-3">Phone</h5>
                    <p className="text-white/70">
                      <a href="tel:+914400000000" className="hover:text-white transition">
                        +91 44 0000 0000
                      </a>
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-sm uppercase tracking-widest text-urgency mb-3">Email</h5>
                    <p className="text-white/70">
                      <a href="mailto:contact@marginz-solutions.com" className="hover:text-white transition">
                        contact@marginz-solutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
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
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="CTA Background" 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-7xl font-display text-white">
            TRANSFORMING YOUR DIGITAL VISION INTO POWERFUL BUSINESS ASSETS WITH MARGINZ
          </h2>
          <button className="px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors">
            Show your Interest
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <ContactFormSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
