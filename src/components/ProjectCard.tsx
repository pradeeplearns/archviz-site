import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export default function ProjectCard({ title, category, imageUrl, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className="block text-sm font-medium mb-1 text-gray-300">
            {category}
          </span>
          <h3 className="text-xl font-semibold leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
} 