import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import Image from 'next/image';

const categories = [
  {
    title: 'Architectural Still Images',
    slug: 'buildings',
    imageUrl: '/images/exterior/buildings/DC_CAM_001.jpg',
    description: 'Architectural visualizations of commercial and residential buildings.',
  },
  {
    title: 'Exhibition/Event',
    slug: 'exhibition',
    imageUrl: '/images/exterior/exhibition/1.jpg',
    description: 'Exhibition spaces and pavilion designs for showcasing products and innovations.',
  },
  {
    title: 'Architectural Walkthrough',
    slug: 'villa',
    imageUrl: '/images/exterior/villa/VK_CAM_001_FFF.jpg',
    description: 'Luxury villas and high-end residential architecture.',
  },
];

export default function ExteriorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/exterior-hero.jpg"
              alt="Exterior Design"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-white/90" />
          </div>
          
          <div className="relative h-full flex flex-col justify-center px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
              Exterior Design
            </h1>
            <p className="text-xl text-gray-200 max-w-xl text-shadow-md">
              Photorealistic visualizations of buildings, communities, and architectural exteriors.
            </p>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  title={category.title}
                  slug={category.slug}
                  imageUrl={category.imageUrl}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">My Rendering Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Design Analysis</h3>
                <p className="text-gray-600">
                  I start by analyzing architectural plans and specifications to understand the project's vision and requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">3D Modeling</h3>
                <p className="text-gray-600">
                  Building detailed 3D models that accurately represent the architectural design.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Final Rendering</h3>
                <p className="text-gray-600">
                  Creating photorealistic renders with accurate lighting, materials, and environmental elements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 