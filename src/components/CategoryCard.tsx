import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export default function CategoryCard({ title, slug, imageUrl, description }: CategoryCardProps) {
  return (
    <Link href={`/exterior/${slug}`} className="group block">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <h3 className="text-2xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-8px]">
            {title}
          </h3>
          <p className="text-gray-200 transition-opacity opacity-0 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
} 