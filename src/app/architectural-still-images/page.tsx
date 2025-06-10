import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ArchitecturalStillImagesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/exterior/villa/villa-img-1.webp"
                alt="Architectural Still Images"
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
              Architectural Still Images
            </h1>
            <p className="text-xl text-gray-200 max-w-xl">
              High-quality architectural visualizations showcasing both exterior and interior designs.
            </p>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-black text-center mb-16">
              Explore Our <span className="font-bold">Categories</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Exterior Category */}
              <Link href="/architectural-still-images/exterior" className="group">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/exterior/buildings/buildings-img-1.webp"
                    alt="Exterior Visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-4xl font-light text-white mb-4">Exterior</h3>
                      <p className="text-lg text-gray-200 mb-6">Buildings, Villas & Exhibitions</p>
                      <span className="inline-block px-6 py-2 border-2 border-white text-white group-hover:bg-white group-hover:text-black transition duration-300">
                        VIEW GALLERY
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Interior Category */}
              <Link href="/architectural-still-images/interior" className="group">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/interior/Living Room.jpeg"
                    alt="Interior Visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-4xl font-light text-white mb-4">Interior</h3>
                      <p className="text-lg text-gray-200 mb-6">Living Spaces & Commercial Interiors</p>
                      <span className="inline-block px-6 py-2 border-2 border-white text-white group-hover:bg-white group-hover:text-black transition duration-300">
                        VIEW GALLERY
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-black text-center mb-12">
              Why Choose Our <span className="font-bold">Visualization Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Photorealistic Quality</h3>
                <p className="text-gray-600">
                  Every image is crafted with attention to detail, lighting, and materials for maximum realism.
                </p>
              </div>
              
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Professional quality visualizations delivered within agreed timelines.
                </p>
              </div>
              
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Client Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with you throughout the process to ensure your vision comes to life.
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