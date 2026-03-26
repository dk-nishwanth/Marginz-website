import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useTranslation } from '../i18n/config';

const CONTACT_INFO = {
  email: 'contact@marginz-solutions.com',
  phone: '+91 44 0000 0000',
  address: {
    line1: '5th Floor, The Executive Center',
    line2: 'Tamarai Tech Park, Guindy',
    line3: 'Chennai – 600032, India'
  }
};

const NAV_PATHS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
];

export const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="relative bg-forest pt-16 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1423345092054-524a33f20680?w=2000&h=1200&fit=crop&crop=center&q=85&auto=format&fm=webp"
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          loading="lazy"
        />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16 md:mb-32">
          {/* Legal */}
          <div className="lg:col-span-3">
            <img 
              src="/marginz-logo.jpg" 
              alt="MARGINZ Logo" 
              className="w-20 h-20 object-contain mb-8"
              loading="lazy"
            />
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">{t('footer', 'privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">{t('footer', 'terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">{t('footer', 'cookie')}</a></li>
              <li className="pt-6 mt-4 border-t border-white/20">{t('footer', 'copyright')}</li>
              <li>{t('footer', 'rights')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">{t('footer', 'contact')}</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">{CONTACT_INFO.email}</a></li>
              <li><a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">{CONTACT_INFO.phone}</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-1">LinkedIn</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-8">{t('footer', 'location')}</h4>
            <address className="font-mono text-sm text-white/70 leading-relaxed not-italic">
              {CONTACT_INFO.address.line1}<br />
              {CONTACT_INFO.address.line2}<br />
              {CONTACT_INFO.address.line3}
            </address>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-4 mt-12 lg:mt-0">
            {NAV_PATHS.map(({ key, path }) => (
              <Link 
                key={key}
                to={path}
                className="font-display text-lg md:text-xl uppercase tracking-wide hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1"
              >
                {t('nav', key)}
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
