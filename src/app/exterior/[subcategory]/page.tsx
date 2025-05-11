import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ClientGallery from '@/components/ClientGallery';

// Get the category info for the title and description
const categoryInfo = {
  buildings: {
    title: 'BUILDINGS',
    description: 'Architectural visualizations of commercial and residential buildings.',
    folderPath: '/images/exterior/buildings',
    defaultImage: '/images/exterior/buildings/buildings-img-1.webp',
  },
  exhibition: {
    title: 'EXHIBITION',
    description: 'Exhibition spaces and pavilion designs for showcasing products and innovations.',
    folderPath: '/images/exterior/exhibition',
    defaultImage: '/images/exterior/exhibition/exhibition-img-1.webp',
  },
  villa: {
    title: 'VILLA',
    description: 'Luxury villas and high-end residential architecture.',
    folderPath: '/images/exterior/villa',
    defaultImage: '/images/exterior/villa/villa-img-1.webp',
  },
};

export function generateStaticParams() {
  return [
    { subcategory: 'buildings' },
    { subcategory: 'exhibition' },
    { subcategory: 'villa' },
  ];
}

interface SubcategoryPageProps {
  params: {
    subcategory: string;
  };
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { subcategory } = params;
  
  // Validate that the subcategory exists on the server side
  if (!['buildings', 'exhibition', 'villa'].includes(subcategory)) {
    notFound();
  }
  
  const info = categoryInfo[subcategory as keyof typeof categoryInfo];
  
  // Use the default image for the hero to ensure it always loads
  const heroImage = info.defaultImage;
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={heroImage}
                alt={info.title}
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
              {info.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              {info.description}
            </p>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-3xl font-light text-black">
                PROJECT <span className="font-bold">GALLERY</span>
              </h2>
              <Link 
                href="/exterior" 
                className="text-black hover:text-gray-700 flex items-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                BACK TO CATEGORIES
              </Link>
            </div>
            
            {/* Using the client gallery component */}
            <ClientGallery directFolder={info.folderPath} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 