'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  priority = false,
  sizes = '100vw',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Fallback image if loading fails
  const fallbackSrc = '/images/image-placeholder.jpg';
  
  // Update image source when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    console.error('Image failed to load:', src);
    setError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If the image src is empty or doesn't exist, show fallback immediately
  useEffect(() => {
    if (!src || src === '') {
      setError(true);
      setIsLoading(false);
      return;
    }
    
    // Fix: Use window.Image instead of Image to avoid conflict with Next.js Image
    if (typeof window !== 'undefined') {
      // Preload the image to check if it exists
      const img = new window.Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoading(false);
      };
      
      img.onerror = () => {
        console.error('Image preload failed:', src);
        setError(true);
        setIsLoading(false);
      };
      
      return () => {
        // Clean up
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [src]);

  return (
    <>
      {/* Show spinner while loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
        </div>
      )}
      
      <Image
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onError={handleError}
        onLoad={handleLoad}
        unoptimized={true} // Use unoptimized for local images to avoid optimization issues
      />
    </>
  );
} 