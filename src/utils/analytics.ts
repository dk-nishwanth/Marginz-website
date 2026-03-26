// Google Analytics initialization
export const initializeAnalytics = (measurementId: string) => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    anonymize_ip: true
  });

  (window as any).gtag = gtag;
};

// Track page views
export const trackPageView = (pageName: string, path: string) => {
  if ((window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: pageName,
      page_path: path
    });
  }
};

// Track events
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName
  });
};

// Declare gtag on window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
