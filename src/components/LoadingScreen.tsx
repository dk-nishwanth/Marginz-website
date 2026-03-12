import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="text-white font-mono text-xl tracking-[0.3em] mb-8">
          LOADING..
        </div>
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-urgency rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};
