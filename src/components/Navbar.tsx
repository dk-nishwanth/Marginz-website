import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language, useTranslation } from '../i18n/config';

const NAV_PATHS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
];

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-4 md:py-6 px-6 md:px-12 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
      {/* Logo */}
      <Link to="/" aria-label="MARGINZ Home" className="flex-shrink-0">
        <img
          src="/marginz-logo.jpg"
          alt="MARGINZ Logo"
          className="w-[92px] h-[92px] md:w-[138px] md:h-[138px] object-contain"
          loading="eager"
        />
      </Link>

      {/* Desktop nav + language switcher */}
      <div className="hidden md:flex flex-col items-end gap-1">
        {NAV_PATHS.map(({ key, path }) => (
          <Link
            key={key}
            to={path}
            className="text-xl lg:text-2xl font-display text-white hover:opacity-60 transition-opacity leading-none focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1"
            aria-current={location.pathname === path ? 'page' : undefined}
          >
            {t('nav', key)}
          </Link>
        ))}

        {/* Language switcher */}
        <div className="relative mt-2">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 py-1"
            aria-label="Switch language"
            aria-expanded={langOpen}
          >
            <Globe size={13} />
            {language.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 bg-forest/95 backdrop-blur-sm border border-white/10 flex flex-col min-w-[60px]">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => { setLanguage(code); setLangOpen(false); }}
                  className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-left hover:bg-white/10 transition-colors focus:outline-none ${language === code ? 'text-urgency' : 'text-white/70'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-urgency rounded relative z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              <X size={28} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              <Menu size={28} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile drawer — slides in from the right */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[105]"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-forest z-[108] flex flex-col px-8 pt-28 pb-12 gap-2 border-l border-white/10"
            >
              {NAV_PATHS.map(({ key, path }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.25 }}
                >
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-3xl font-display py-3 border-b border-white/10 transition-opacity focus:outline-none focus:ring-2 focus:ring-urgency rounded px-2 ${location.pathname === path ? 'text-urgency' : 'text-white hover:opacity-60'}`}
                    aria-current={location.pathname === path ? 'page' : undefined}
                  >
                    {t('nav', key)}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile language switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="flex items-center gap-3 pt-6 mt-auto border-t border-white/10"
              >
                <Globe size={14} className="text-white/50" />
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLanguage(code); setMenuOpen(false); }}
                    className={`font-mono text-[11px] uppercase tracking-widest focus:outline-none ${language === code ? 'text-urgency' : 'text-white/50 hover:text-white'} transition-colors`}
                  >
                    {label}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
