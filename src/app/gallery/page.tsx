'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import Header from '@/components/Header';

// Define all images from each category with both small and full-size versions
const allImages = [
  // Buildings
  {
    thumbnail: '/images/exterior/buildings/buildings-img-1-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-1.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-2-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-2.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-3-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-3.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-4-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-4.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-5-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-5.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-6-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-6.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-7-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-7.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-8-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-8.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-9-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-9.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-10-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-10.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-11-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-11.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-12-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-12.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-13-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-13.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-14-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-14.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-15-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-15.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-16-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-16.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-17-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-17.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-18-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-18.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-19-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-19.webp',
    category: 'buildings'
  },
  {
    thumbnail: '/images/exterior/buildings/buildings-img-20-small.webp',
    fullSize: '/images/exterior/buildings/buildings-img-20.webp',
    category: 'buildings'
  },
  // Villa
  {
    thumbnail: '/images/exterior/villa/villa-img-1-small.webp',
    fullSize: '/images/exterior/villa/villa-img-1.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-2-small.webp',
    fullSize: '/images/exterior/villa/villa-img-2.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-3-small.webp',
    fullSize: '/images/exterior/villa/villa-img-3.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-4-small.webp',
    fullSize: '/images/exterior/villa/villa-img-4.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-5-small.webp',
    fullSize: '/images/exterior/villa/villa-img-5.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-6-small.webp',
    fullSize: '/images/exterior/villa/villa-img-6.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-7-small.webp',
    fullSize: '/images/exterior/villa/villa-img-7.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-8-small.webp',
    fullSize: '/images/exterior/villa/villa-img-8.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-9-small.webp',
    fullSize: '/images/exterior/villa/villa-img-9.webp',
    category: 'villa'
  },
  {
    thumbnail: '/images/exterior/villa/villa-img-10-small.webp',
    fullSize: '/images/exterior/villa/villa-img-10.webp',
    category: 'villa'
  },
  // Exhibition
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-1-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-1.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-2-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-2.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-3-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-3.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-4-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-4.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-5-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-5.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-6-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-6.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-7-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-7.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-8-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-8.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-9-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-9.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-10-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-10.webp',
    category: 'exhibition'
  },
  {
    thumbnail: '/images/exterior/exhibition/exhibition-img-11-small.webp',
    fullSize: '/images/exterior/exhibition/exhibition-img-11.webp',
    category: 'exhibition'
  }
];

export default function Gallery() {
  const [images, setImages] = useState<typeof allImages>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<typeof allImages[0] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setImages(allImages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading images:', error);
      setError('An error occurred while loading images.');
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#23272b]">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#23272b]">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#23272b]">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer group relative"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={image.thumbnail}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-light mb-2 capitalize">{image.category}</h3>
                    <p className="text-sm text-gray-300">View Full Size</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage.fullSize}
          onClose={() => setSelectedImage(null)}
          images={allImages.map(img => img.fullSize)}
          currentIndex={allImages.findIndex(img => img.fullSize === selectedImage.fullSize)}
          onNavigate={(index) => setSelectedImage(allImages[index])}
        />
      )}
    </div>
  );
} 