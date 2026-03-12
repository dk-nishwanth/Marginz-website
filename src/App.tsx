import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import { initializeAnalytics } from './utils/analytics';

export default function App() {
  useEffect(() => {
    // Initialize Google Analytics (replace with your measurement ID)
    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX';
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initializeAnalytics(GA_MEASUREMENT_ID);
    }
  }, []);

  return (
    <ErrorBoundary>
      <LoadingScreen duration={1500} />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
