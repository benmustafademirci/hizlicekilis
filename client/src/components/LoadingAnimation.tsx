import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  duration?: number;
  language?: 'tr' | 'en';
}

const messages = {
  tr: [
    'Çekiliş hazırlanıyor...',
    'Katılımcılar karıştırılıyor...',
    'Kazananlar seçiliyor...',
    'Sonuçlar hazırlanıyor...',
  ],
  en: [
    'Preparing draw...',
    'Shuffling participants...',
    'Selecting winners...',
    'Preparing results...',
  ],
};

export default function LoadingAnimation({ duration = 1500, language = 'tr' }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 30;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages[language].length);
    }, duration / messages[language].length);

    return () => clearInterval(messageInterval);
  }, [duration, language]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Spinner Animation */}
      <div className="mb-8">
        <div className="relative w-16 h-16">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>
          
          {/* Middle rotating circle (opposite direction) */}
          <div className="absolute inset-2 border-4 border-transparent border-b-orange-500 border-l-orange-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
          
          {/* Center circle */}
          <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
            <div className="text-white text-xl font-bold">✨</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs mb-6">
        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-orange-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">{Math.min(Math.round(progress), 100)}%</p>
      </div>

      {/* Loading Message */}
      <p className="text-center text-gray-700 font-medium animate-pulse">
        {messages[language][messageIndex]}
      </p>

      {/* Dots Animation */}
      <div className="flex gap-1 mt-4">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
