import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
}

interface ProjectsGridProps {
  projects: Project[];
  title?: string;
}

export default function ProjectsGrid({ projects, title }: ProjectsGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 