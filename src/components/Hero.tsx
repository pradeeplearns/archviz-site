'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the OptimizedImage component with no SSR
const OptimizedImage = dynamic(() => import('@/components/OptimizedImage'), { ssr: false });

// Selected images from each category
const carouselImages = [
  {
    src: '/images/exterior/buildings/buildings-img-6.webp',
    alt: 'Buildings'
  },
  {
    src: '/images/exterior/buildings/buildings-img-10.webp',
    alt: 'Buildings'
  },
  {
    src: '/images/exterior/buildings/buildings-img-1.webp',
    alt: 'Buildings'
  },
  {
    src: '/images/exterior/buildings/buildings-img-5.webp',
    alt: 'Buildings'
  },
  {
    src: '/images/exterior/exhibition/exhibition-img-10.webp',
    alt: 'Exhibition'
  },
  {
    src: '/images/exterior/villa/villa-img-1.webp',
    alt: 'Villa'
  },
  {
    src: '/images/exterior/villa/villa-img-10.webp',
    alt: 'Villa'
  },
  {
    src: '/images/exterior/villa/villa-img-3.webp',
    alt: 'Villa'
  }

];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Handle wheel events to change images with horizontal transition
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (heroRef.current) {
        // Prevent default scrolling while in hero section
        e.preventDefault();
        
        if (canScroll) {
          setCanScroll(false);
          
          // Change the image based on scroll direction
          if (e.deltaY > 0) {
            // Scrolling down - next image
            setDirection('next');
            setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
          } else if (e.deltaY < 0) {
            // Scrolling up - previous image
            setDirection('prev');
            setCurrentImageIndex(prev => (prev === 0 ? carouselImages.length - 1 : prev - 1));
          }
          
          // Reset scrolling state after a delay to prevent rapid scrolling
          setTimeout(() => {
            setCanScroll(true);
          }, 1000); // Longer cooldown for smoother transitions
        }
      }
    };
    
    // Add event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [canScroll, carouselImages.length]);
  
  // Allow manual navigation using the dots
  const handleDotClick = (index: number) => {
    setDirection(index > currentImageIndex ? 'next' : 'prev');
    setCurrentImageIndex(index);
  };

  return (
    <div 
      ref={heroRef} 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Carousel Images Container */}
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => {
          // Create dynamic class based on current, next, or previous state
          let slideClass = '';
          
          if (index === currentImageIndex) {
            slideClass = 'translate-x-0 z-10 opacity-100';
          } else if ((direction === 'next' && index < currentImageIndex) || 
                     (direction === 'prev' && index > currentImageIndex)) {
            slideClass = '-translate-x-full z-0 opacity-0';
          } else {
            slideClass = 'translate-x-full z-0 opacity-0';
          }
          
          return (
            <div 
              key={image.src}
              className={`absolute inset-0 transform transition-all duration-1000 ease-in-out ${slideClass}`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>
      
      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-20"></div>
      
      {/* Vertical Dot Indicators - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-30">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content and Navigation */}
      <div className="relative h-full flex flex-col justify-between px-8 py-12 z-30">
        {/* Top Section with Logo and Menu */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-light text-white">
            <span className="font-bold">ARCH</span>VIZ
          </h1>
          
          <button 
            className="text-white hover:text-gray-300 transition focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col space-y-2">
              <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Expanded Menu */}
        <div className={`fixed inset-0 bg-black/95 z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container mx-auto h-full flex flex-col">
            <div className="w-full flex justify-between items-center px-8 py-12">
              <h1 className="text-3xl font-light text-white">
                <span className="font-bold">ARCH</span>VIZ
              </h1>
              
              <button 
                className="text-white hover:text-gray-300 transition focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center">
              <nav className="text-center">
                <ul className="space-y-8">
                  <li>
                    <Link 
                      href="/" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/exterior/buildings" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BUILDINGS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/exterior/exhibition" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      EXHIBITION
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/exterior/villa" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      VILLA
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="text-4xl font-light text-white hover:text-gray-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Title and CTA */}
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Architectural <br /><span className="font-bold">Visualization</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Bringing architectural designs to life through stunning 3D visualizations
          </p>
          <div className="flex space-x-6">
            <Link 
              href="/exterior/buildings" 
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 text-lg font-light"
            >
              VIEW PROJECTS
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center">
          <p className="mb-2 text-xs tracking-widest">SCROLL</p>
          <div className="w-0.5 h-8 bg-white/40">
            <div className="w-full h-1/3 bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 