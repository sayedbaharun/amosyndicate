'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=90',
  className = '',
  width,
  height,
  priority = false,
  quality = 90,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
      
      {width && height ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={() => setImgSrc(fallbackSrc)}
          onLoad={() => setIsLoading(false)}
          priority={priority}
          quality={quality}
        />
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          onError={() => setImgSrc(fallbackSrc)}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}