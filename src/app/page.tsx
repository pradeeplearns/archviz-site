import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the OptimizedImage component with no SSR
const OptimizedImage = dynamic(() => import('@/components/OptimizedImage'), { ssr: false });

export default function Home() {
  // Get only exterior projects for the homepage
  const featuredProjects = projects
    .filter(project => project.category === 'exterior')
    .slice(0, 6);

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
