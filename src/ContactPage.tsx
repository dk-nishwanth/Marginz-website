import React, { useState, useEffect } from 'react';
import { Crosshair } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { updateMetaTags, SEO_CONFIG, updateCanonicalUrl } from './utils/seo';
import { addSchemaMarkup, removeSchemaMarkup, organizationSchema } from './utils/schema';
import { trackPageView, trackFormSubmission } from './utils/analytics';

interface FormData {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email format';
  if (!data.service) errors.service = 'Please select a service';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  
  return errors;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
          alt="Contact page hero background" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          loading="eager"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-urgency">CONTACT US</span>
            <h1 className="text-5xl md:text-8xl font-display text-white leading-[0.9]">
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', service: '', subject: '', message: '' });
      trackFormSubmission('contact', true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      trackFormSubmission('contact', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative min-h-screen bg-sage flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521791055366-0d553872952f?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
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
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-label-muted">CONTACT FORM</span>
              <Crosshair size={20} className="text-label-muted" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-12">
            <h2 className="text-4xl md:text-7xl font-display text-white/75 leading-[0.8] mb-12 md:mb-16 max-w-4xl">
              CONTACT FORM AND INFORMATION
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitSuccess && (
                  <div className="p-4 bg-green-500/20 border border-green-500 text-green-100 rounded" role="alert">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-mono tracking-widest mb-3 text-white/80">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-forest/50 border ${errors.name ? 'border-red-500' : 'border-white/20'} px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono tracking-widest mb-3 text-white/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-forest/50 border ${errors.email ? 'border-red-500' : 'border-white/20'} px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-mono tracking-widest mb-3 text-white/80">Select Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-forest/50 border ${errors.service ? 'border-red-500' : 'border-white/20'} px-6 py-4 text-white focus:outline-none focus:border-urgency transition`}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Select service</option>
                    <option value="dynamic-website">Corporate Dynamic Websites</option>
                    <option value="static-website">Corporate Static Websites</option>
                    <option value="dashboard">Customized Dashboards</option>
                    <option value="pwa">Progressive Web Applications</option>
                    <option value="crm-erp">CRM & ERP Solutions</option>
                    <option value="lms-cms">LMS & CMS Solutions</option>
                  </select>
                  {errors.service && <p id="service-error" className="text-red-400 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono tracking-widest mb-3 text-white/80">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-forest/50 border ${errors.subject ? 'border-red-500' : 'border-white/20'} px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition`}
                    placeholder="Subject"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <p id="subject-error" className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono tracking-widest mb-3 text-white/80">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-forest/50 border ${errors.message ? 'border-red-500' : 'border-white/20'} px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-urgency transition h-40 resize-none`}
                    placeholder="Your message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-urgency text-white py-4 font-display tracking-wider hover:bg-urgency/90 disabled:opacity-50 disabled:cursor-not-allowed transition sharp-button text-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

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
                    <address className="text-white/70 leading-relaxed not-italic">
                      5th Floor, The Executive Center<br />
                      Tamarai Tech Park, Guindy<br />
                      Chennai – 600032, India
                    </address>
                  </div>

                  <div>
                    <h5 className="font-mono text-sm uppercase tracking-widest text-urgency mb-3">Phone</h5>
                    <p className="text-white/70">
                      <a href="tel:+914400000000" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">
                        +91 44 0000 0000
                      </a>
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-sm uppercase tracking-widest text-urgency mb-3">Email</h5>
                    <p className="text-white/70">
                      <a href="mailto:contact@marginz-solutions.com" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">
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

const MapSection = () => {
  return (
    <section className="section-container bg-forest px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                FIND US
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Visit our office or reach out digitally. We're here to transform your business vision into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-urgency rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-white mb-2">HEADQUARTERS</h3>
                  <p className="text-white/70 leading-relaxed">
                    5th Floor, The Executive Center<br />
                    Tamarai Tech Park, Guindy<br />
                    Chennai – 600032, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-urgency rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-white mb-2">BUSINESS HOURS</h3>
                  <p className="text-white/70 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday: 10:00 AM - 4:00 PM IST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-urgency rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-white mb-2">CONTACT INFO</h3>
                  <p className="text-white/70 leading-relaxed">
                    Phone: +91 44 1234 5678<br />
                    Email: hello@marginz.com<br />
                    WhatsApp: +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6404!2d80.2206!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d4f7f974f6b%3A0x2e17b4d79a4a4a4a!2sTamarai%20Tech%20Park%2C%20Guindy%2C%20Chennai%2C%20Tamil%20Nadu%20600032%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MARGINZ Office Location - Chennai, India"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Map overlay for styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent pointer-events-none rounded-lg" />
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-urgency rounded-full animate-pulse" />
              <span className="font-mono text-sm text-white/60 uppercase tracking-widest">
                Available for Remote Consultations Worldwide
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="px-4 py-2 bg-white/10 rounded-sm font-mono text-sm text-white">
                24/7 Support
              </div>
              <div className="px-4 py-2 bg-urgency/20 rounded-sm font-mono text-sm text-white">
                Global Reach
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
    <section className="relative bg-forest py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format" 
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
          <a 
            href="#contact-form"
            className="inline-block px-10 py-5 bg-white text-forest font-display text-xl hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-urgency"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Show your Interest
          </a>
        </div>
      </div>
    </section>
  );
};

const FooterComponent = () => {
  return <Footer />;
};

export default function ContactPage() {
  useEffect(() => {
    // Update meta tags
    updateMetaTags({
      ...SEO_CONFIG.contact,
      url: window.location.href
    });
    updateCanonicalUrl(window.location.href);

    // Add schema markup
    removeSchemaMarkup();
    addSchemaMarkup(organizationSchema);

    // Track page view
    trackPageView('Contact', '/contact');

    // Scroll to contact form if hash is present
    if (window.location.hash === '#contact-form') {
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

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
        <ContactFormSection />
        <MapSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
