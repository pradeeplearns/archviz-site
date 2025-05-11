'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import GalleryModal from './GalleryModal';

interface GalleryContainerProps {
  projects: Project[];
  directFolder?: string; // Optional path to directly load images from a folder
}

export default function GalleryContainer({ projects, directFolder }: GalleryContainerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // For static folder, use default filenames from the folder
  useEffect(() => {
    if (directFolder) {
      // Direct folder implementation without API
      setIsLoading(true);
      
      // This was the issue - we were generating imaginary paths instead of using real files
      // Just use the actual folder path and let the component handle displaying
      // actual images from the directory
      
      // For buildings, exhibition, and villa folders, we'll use the actual image files
      const fetchImages = async () => {
        try {
          // We'll simulate reading a directory by using the paths we know exist
          let imagePaths: string[] = [];
          
          // Check which category we're in
          if (directFolder.includes('buildings')) {
            imagePaths = [
              '/images/exterior/buildings/buildings-img-1-small.webp',
              '/images/exterior/buildings/buildings-img-2-small.webp',
              '/images/exterior/buildings/buildings-img-3-small.webp',
              '/images/exterior/buildings/buildings-img-4-small.webp',
              '/images/exterior/buildings/buildings-img-5-small.webp',
              '/images/exterior/buildings/buildings-img-6-small.webp',
              '/images/exterior/buildings/buildings-img-7-small.webp',
              '/images/exterior/buildings/buildings-img-8-small.webp',
              '/images/exterior/buildings/buildings-img-9-small.webp',
              '/images/exterior/buildings/buildings-img-10-small.webp',
              '/images/exterior/buildings/buildings-img-11-small.webp',
              '/images/exterior/buildings/buildings-img-12-small.webp',
              '/images/exterior/buildings/buildings-img-13-small.webp',
              '/images/exterior/buildings/buildings-img-14-small.webp',
              '/images/exterior/buildings/buildings-img-15-small.webp',
              '/images/exterior/buildings/buildings-img-16-small.webp',
              '/images/exterior/buildings/buildings-img-17-small.webp',
              '/images/exterior/buildings/buildings-img-18-small.webp',
              '/images/exterior/buildings/buildings-img-19-small.webp',
              '/images/exterior/buildings/buildings-img-20-small.webp'
            ];
          } else if (directFolder.includes('exhibition')) {
            imagePaths = [
              '/images/exterior/exhibition/exhibition-img-1-small.webp',
              '/images/exterior/exhibition/exhibition-img-2-small.webp',
              '/images/exterior/exhibition/exhibition-img-3-small.webp',
              '/images/exterior/exhibition/exhibition-img-4-small.webp',
              '/images/exterior/exhibition/exhibition-img-5-small.webp',
              '/images/exterior/exhibition/exhibition-img-6-small.webp',
              '/images/exterior/exhibition/exhibition-img-7-small.webp',
              '/images/exterior/exhibition/exhibition-img-8-small.webp',
              '/images/exterior/exhibition/exhibition-img-9-small.webp',
              '/images/exterior/exhibition/exhibition-img-10-small.webp',
              '/images/exterior/exhibition/exhibition-img-11-small.webp'
            ];
          } else if (directFolder.includes('villa')) {
            imagePaths = [
              '/images/exterior/villa/villa-img-1-small.webp',
              '/images/exterior/villa/villa-img-2-small.webp',
              '/images/exterior/villa/villa-img-3-small.webp',
              '/images/exterior/villa/villa-img-4-small.webp',
              '/images/exterior/villa/villa-img-5-small.webp',
              '/images/exterior/villa/villa-img-6-small.webp',
              '/images/exterior/villa/villa-img-7-small.webp',
              '/images/exterior/villa/villa-img-8-small.webp',
              '/images/exterior/villa/villa-img-9-small.webp',
              '/images/exterior/villa/villa-img-10-small.webp'
            ];
          }
          
          console.log('Loaded real images from:', directFolder, 'count:', imagePaths.length);
          setImages(imagePaths);
          setIsLoading(false);
        } catch (err) {
          console.error('Error loading images:', err);
          setError('Failed to load images. Please try again later.');
          setIsLoading(false);
        }
      };
      
      fetchImages();
    } else {
      // Use project images directly
      setImages(projects.map(project => project.imageUrl));
      setIsLoading(false);
    }
  }, [directFolder, projects]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
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

  // Generate project-like objects for direct folder images
  const displayProjects = directFolder && images.length > 0
    ? images.map((imageUrl, index) => ({
        id: `img-${index}`,
        title: `${directFolder.split('/').pop() || ''} ${index + 1}`,
        category: 'exterior' as const,
        imageUrl,
        fullSizeUrl: imageUrl.replace('-small.webp', '.webp'),
        slug: `image-${index}`,
        location: directFolder.split('/').pop() || '',
      }))
    : projects;

  if (displayProjects.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-600">No images found in this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <div key={project.id} className="group relative">
            {/* Image container */}
            <div 
              onClick={() => openModal(index)} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 cursor-pointer"
            >
              <div className="w-full h-full relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-4 py-2 bg-white/90 text-black rounded-md text-sm font-medium">
                    View Larger
                  </span>
                </div>
              </div>
            </div>
            
            {/* Project title and location */}
            <div>
              <h3 className="font-bold text-lg mb-1 capitalize">{project.title}</h3>
              <p className="text-gray-600 text-sm capitalize">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gallery Modal */}
      <GalleryModal
        images={images}
        isOpen={isModalOpen}
        initialIndex={selectedImageIndex}
        onClose={closeModal}
      />
    </>
  );
} 