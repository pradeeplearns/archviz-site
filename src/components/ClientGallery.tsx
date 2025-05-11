'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

interface ClientGalleryProps {
  directFolder: string;
}

export default function ClientGallery({ directFolder }: ClientGalleryProps) {
  const [isClient, setIsClient] = useState(false);
  const [images, setImages] = useState<Array<{ thumbnail: string; fullSize: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ thumbnail: string; fullSize: string } | null>(null);
  
  // Set isClient to true when component mounts (client-side) and load images
  useEffect(() => {
    setIsClient(true);
    
    // Function to load images for the given folder
    const loadImages = async () => {
      try {
        // We'll simulate reading a directory by using the paths we know exist
        let imagePairs: Array<{ thumbnail: string; fullSize: string }> = [];
        
        // Check which category we're in
        if (directFolder.includes('buildings')) {
          imagePairs = Array.from({ length: 20 }, (_, i) => ({
            thumbnail: `/images/exterior/buildings/buildings-img-${i + 1}-small.webp`,
            fullSize: `/images/exterior/buildings/buildings-img-${i + 1}.webp`
          }));
        } else if (directFolder.includes('exhibition')) {
          imagePairs = Array.from({ length: 11 }, (_, i) => ({
            thumbnail: `/images/exterior/exhibition/exhibition-img-${i + 1}-small.webp`,
            fullSize: `/images/exterior/exhibition/exhibition-img-${i + 1}.webp`
          }));
        } else if (directFolder.includes('villa')) {
          imagePairs = Array.from({ length: 10 }, (_, i) => ({
            thumbnail: `/images/exterior/villa/villa-img-${i + 1}-small.webp`,
            fullSize: `/images/exterior/villa/villa-img-${i + 1}.webp`
          }));
        }
        
        setImages(imagePairs);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Failed to load images. Please try again later.');
        setIsLoading(false);
      }
    };
    
    if (isClient) {
      loadImages();
    }
  }, [directFolder, isClient]);

  if (!isClient || isLoading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-4 text-gray-600">Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-600">No images found in this category.</p>
      </div>
    );
  }

  return (
    <>
      {/* Modern Masonry-style Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div 
            key={`${image.thumbnail}-${index}`} 
            className={`cursor-pointer overflow-hidden group 
              ${index % 5 === 0 || index % 5 === 3 ? 'md:col-span-2' : ''} 
              ${index % 7 === 0 ? 'row-span-2' : ''}
            `}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden">
              <Image 
                src={image.thumbnail}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                unoptimized
                priority={index < 6}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-lg">View Project</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.fullSize}
          onClose={() => setSelectedImage(null)}
          images={images.map(img => img.fullSize)}
          currentIndex={images.indexOf(selectedImage)}
          onNavigate={(index) => setSelectedImage(images[index])}
        />
      )}
    </>
  );
} 