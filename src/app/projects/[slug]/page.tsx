import { getProjectBySlug, projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto">
              <span className="text-gray-300 uppercase tracking-wider text-sm">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {project.clientName && (
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Client</h3>
                    <p className="text-lg font-medium">{project.clientName}</p>
                  </div>
                )}
                
                {project.location && (
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Location</h3>
                    <p className="text-lg font-medium">{project.location}</p>
                  </div>
                )}
                
                {project.completionDate && (
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Completed</h3>
                    <p className="text-lg font-medium">
                      {new Date(project.completionDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                )}
              </div>
              
              {project.description && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}
              
              {project.tags && project.tags.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Project Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-12">
                <Link 
                  href={`/${project.category}`}
                  className="inline-flex items-center text-black hover:underline"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 