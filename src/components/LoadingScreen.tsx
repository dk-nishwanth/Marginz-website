import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(() => !sessionStorage.getItem('app_loaded'));
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 400);
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('app_loaded', '1');
    }, duration);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, [duration, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-forest z-[9999] flex items-center justify-center transition-opacity duration-[400ms]"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src="/marginz-logo.jpg"
          alt="MARGINZ"
          className="w-20 h-20 object-contain animate-pulse"
        />
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-1.5 h-1.5 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-1.5 h-1.5 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};
