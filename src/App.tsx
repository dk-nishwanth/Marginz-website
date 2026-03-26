/// <reference types="vite/client" />
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import ScrollToTop from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import { initializeAnalytics } from './utils/analytics';
import { LanguageProvider } from './i18n/LanguageContext';
import { LenisScroll } from './components/LenisScroll';
import { CustomCursor } from './components/CustomCursor';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' as const } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="min-h-screen bg-forest flex items-center justify-center p-6">
              <div className="text-center space-y-6">
                <h1 className="text-6xl font-display text-white">404</h1>
                <p className="text-white/70 text-lg">Page not found</p>
                <a href="/" className="inline-block px-8 py-4 bg-urgency text-white font-display hover:bg-urgency/90 transition-colors">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX';
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initializeAnalytics(GA_MEASUREMENT_ID);
    }
  }, []);

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <LoadingScreen duration={1500} />
        <CustomCursor />
        <LenisScroll>
          <Router>
            <ScrollToTop />
            <AnimatedRoutes />
          </Router>
        </LenisScroll>
      </ErrorBoundary>
    </LanguageProvider>
  );
}
