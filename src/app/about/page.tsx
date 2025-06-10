import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          
          <div className="relative h-full flex flex-col justify-center px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About Me
            </h1>
            <p className="text-xl text-black max-w-xl">
              Learn more about my experience and approach to architectural visualization.
            </p>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src="/about-me.png"
                  alt="Picture of me"
                  fill
                  className="object-cover object-top rounded-lg"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Hi, I'm Sandeep</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I'm a passionate 3D renderer and graphic designer with over 10+ years of experience 
                  creating photorealistic architectural visualizations for clients worldwide.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  My journey in architectural visualization began with a background in animation and graphic design, 
                  which provided me with a deep understanding of architectural principles and design aesthetics.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I specialize in both exterior and interior architectural visualization, bringing designs to 
                  life through careful attention to detail, lighting, materials, and composition.
                </p>
                <p className="text-lg text-gray-700">
                  My mission is to help architects, designers, and property developers communicate their vision 
                  effectively through compelling visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">3D Modeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Blender</li>
                  <li>3ds Max</li>
                  <li>SketchUp</li>
                  <li>AutoCAD</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Rendering</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>V-Ray</li>
                  <li>Corona Renderer</li>
                  <li>Lumion</li>
                  <li>Enscape</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Post-Processing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Adobe Photoshop</li>
                  <li>Adobe Lightroom</li>
                  <li>Affinity Photo</li>
                  <li>DaVinci Resolve</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">My Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  I start by understanding your project requirements, vision, and goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">3D Modeling</h3>
                <p className="text-gray-600">
                  Creating accurate 3D models based on architectural plans and specifications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Materials & Lighting</h3>
                <p className="text-gray-600">
                  Applying realistic materials and setting up professional lighting to enhance the scene.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Final Rendering</h3>
                <p className="text-gray-600">
                  Producing high-quality renders with post-processing for the perfect finish.
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