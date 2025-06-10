'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

// Define the interior images based on what's in the folder
const interiorImages = [
  {
    src: '/images/interior/Living Room.jpeg',
    title: 'Living Room',
    category: 'Residential'
  },
  {
    src: '/images/interior/Living Room 2.jpeg',
    title: 'Living Room 2',
    category: 'Residential'
  },
  {
    src: '/images/interior/Bed Room.jpeg',
    title: 'Bedroom',
    category: 'Residential'
  },
  {
    src: '/images/interior/Bed Room 2.jpeg',
    title: 'Bedroom 2',
    category: 'Residential'
  },
  {
    src: '/images/interior/Bathroom.jpeg',
    title: 'Bathroom',
    category: 'Residential'
  },
  {
    src: '/images/interior/Bar.jpeg',
    title: 'Bar',
    category: 'Commercial'
  }
];

export default function ArchitecturalInteriorPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/interior/Living Room.jpeg"
                alt="Interior Design"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
            </div>
          </div>
          
          <div className="relative h-full flex flex-col justify-center px-8 container mx-auto">
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-wide">
              Interior
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              Photorealistic visualizations of living spaces, offices, and commercial interiors.
            </p>
          </div>
        </section>
        
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-8">
            <nav className="text-sm text-gray-600">
              <Link href="/architectural-still-images" className="hover:text-gray-900">
                Architectural Still Images
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Interior</span>
            </nav>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-3xl font-light text-black">
                INTERIOR <span className="font-bold">GALLERY</span>
              </h2>
              <div className="text-black">
                {interiorImages.length} Projects
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorImages.map((image, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image 
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      unoptimized
                      priority={index < 6}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                        <span className="text-white text-lg font-light block">{image.title}</span>
                        <span className="text-white/80 text-sm">{image.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Specializations Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-black text-center mb-12">
              Interior <span className="font-bold">Specializations</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Residential</h3>
                <p className="text-gray-600">
                  Apartments, houses, and living spaces designed for comfort and aesthetic appeal.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Office</h3>
                <p className="text-gray-600">
                  Modern workspaces optimized for productivity, collaboration, and employee well-being.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Retail</h3>
                <p className="text-gray-600">
                  Commercial environments and marketing kiosks designed to showcase products and services.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-4">Hospitality</h3>
                <p className="text-gray-600">
                  Hotels, restaurants, and entertainment spaces that create immersive guest experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          images={interiorImages.map(img => img.src)}
          currentIndex={interiorImages.findIndex(img => img.src === selectedImage)}
          onNavigate={(index) => setSelectedImage(interiorImages[index].src)}
        />
      )}
    </>
  );
} 