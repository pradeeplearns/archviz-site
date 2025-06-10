'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set page path for active menu highlight
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      setActiveMenu('home');
    } else if (pathname.includes('/architectural-still-images')) {
      setActiveMenu('architectural-still-images');
    } else if (pathname.includes('/exterior/villa')) {
      setActiveMenu('architectural-walkthrough');
    } else if (pathname.includes('/exterior/exhibition')) {
      setActiveMenu('exhibition-event');
    } else if (pathname.includes('/about')) {
      setActiveMenu('about');
    } else if (pathname.includes('/contact')) {
      setActiveMenu('contact');
    } else if (pathname.includes('/gallery')) {
      setActiveMenu('gallery');
    }
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl md:text-3xl font-light">
              <Image
                src="/logo-bg2.png"
                alt="Logo"
                width={196}
                height={196}
                className="w-24 h-24 object-contain"
              />
            </Link>
            {/* Hamburger Menu (always visible) */}
            <button 
              className="text-black hover:text-gray-600 transition focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col space-y-1">
                <span className={`block w-8 h-1 bg-black transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-8 h-1 bg-black transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-8 h-1 bg-black transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button 
          className="absolute top-8 right-8 text-white hover:text-gray-300 text-4xl font-bold focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="text-center">
          <ul className="space-y-10">
            <li>
              <Link href="/" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/architectural-still-images" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                ARCHITECTURAL STILL IMAGES
              </Link>
            </li>
            <li>
              <Link href="/exterior/villa" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                ARCHITECTURAL WALKTHROUGH
              </Link>
            </li>
            <li>
              <Link href="/exterior/exhibition" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                EXHIBITION/EVENT
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-5xl font-extrabold text-white hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
} 