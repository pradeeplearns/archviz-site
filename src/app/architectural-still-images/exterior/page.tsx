import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ArchitecturalExteriorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/exterior/buildings/buildings-img-6.webp"
                alt="Exterior Architectural Visualization"
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
              Exterior
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              Stunning exterior architectural visualizations including buildings, villas, and exhibition spaces.
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
              <span className="text-gray-900">Exterior</span>
            </nav>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-black text-center mb-16">
              Exterior <span className="font-bold">Categories</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Buildings */}
              <Link href="/exterior/buildings" className="group">
                <div className="relative h-[350px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/exterior/buildings/buildings-img-1.webp"
                    alt="Buildings"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">Buildings</h3>
                      <p className="text-gray-200 text-sm">Commercial & Residential Architecture</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Exhibition */}
              <Link href="/exterior/exhibition" className="group">
                <div className="relative h-[350px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/exterior/exhibition/exhibition-img-1.webp"
                    alt="Exhibition"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">Exhibition</h3>
                      <p className="text-gray-200 text-sm">Event Spaces & Pavilions</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Villa */}
              <Link href="/exterior/villa" className="group">
                <div className="relative h-[350px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/exterior/villa/villa-img-1.webp"
                    alt="Villa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">Villa</h3>
                      <p className="text-gray-200 text-sm">Luxury Residential Architecture</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-black text-center mb-12">
              Our <span className="font-bold">Process</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Design Analysis</h3>
                <p className="text-gray-600">
                  We study your architectural plans and understand the design intent.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">3D Modeling</h3>
                <p className="text-gray-600">
                  Precise 3D models are created based on your specifications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Final Rendering</h3>
                <p className="text-gray-600">
                  High-quality photorealistic images are rendered and delivered.
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