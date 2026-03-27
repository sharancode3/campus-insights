'use client';

import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsFlipping(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div
        className={`w-full h-full transition-transform duration-300 ${
          isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={`Campus ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export { ImageCarousel };
