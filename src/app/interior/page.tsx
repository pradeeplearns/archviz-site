import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getProjectsByCategory } from '@/data/projects';
import Image from 'next/image';

export default function InteriorPage() {
  const interiorProjects = getProjectsByCategory('interior');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/interior/interior-hero.jpg"
              alt="Interior Design"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              // This is a placeholder image that will need to be added
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex flex-col justify-center px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interior Design
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              Photorealistic visualizations of living spaces, offices, and commercial interiors.
            </p>
          </div>
        </section>
        
        {/* Projects Grid */}
        <ProjectsGrid 
          projects={interiorProjects}
          title="Interior Visualization Projects" 
        />
        
        {/* Specializations Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Interior Specializations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Residential</h3>
                <p className="text-gray-600">
                  Apartments, houses, and living spaces designed for comfort and aesthetic appeal.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="text-gray-600">
                  Modern workspaces optimized for productivity, collaboration, and employee well-being.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Retail</h3>
                <p className="text-gray-600">
                  Commercial environments and marketing kiosks designed to showcase products and services.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Hospitality</h3>
                <p className="text-gray-600">
                  Hotels, restaurants, and entertainment spaces that create immersive guest experiences.
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