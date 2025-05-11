'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  image: string;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function ImageModal({ image, onClose, images, currentIndex, onNavigate }: ImageModalProps) {
  // Handle keyboard navigation and scroll management
  useEffect(() => {
    // Add modal-open class to body
    document.body.classList.add('modal-open');

    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          break;
        case 'ArrowRight':
          onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        className="fixed top-6 right-6 text-white hover:text-gray-300 transition z-[10000]"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Previous button */}
      <button 
        className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-[10000]"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Image container */}
      <div 
        className="fixed inset-0 flex items-center justify-center z-[10000]" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[90%] h-[90%] max-w-[90vw] max-h-[90vh]">
          <Image
            src={image}
            alt={`Full size image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
            unoptimized
            priority
          />
        </div>
      </div>
      
      {/* Next button */}
      <button 
        className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-[10000]"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Image counter */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white text-sm z-[10000]">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
} 