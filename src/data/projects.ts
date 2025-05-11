export interface Project {
  id: string;
  title: string;
  category: 'exterior' | 'interior';
  subcategory?: 'buildings' | 'exhibition' | 'villa' | string;
  imageUrl: string;
  slug: string;
  description?: string;
  clientName?: string;
  location?: string;
  completionDate?: string;
  tags?: string[];
}

// These are placeholder projects. Replace the imageUrl with actual paths once you add your images
export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Tower',
    category: 'exterior',
    subcategory: 'buildings',
    imageUrl: '/images/exterior/buildings/building1.jpg',
    slug: 'modern-residential-tower',
    description: 'A stunning visualization of a high-rise residential tower with a sleek, modern design.',
    clientName: 'Urban Development Group',
    location: 'New York City, USA',
    completionDate: '2023-05-15',
    tags: ['Residential', 'High-rise', 'Modern', 'Urban']
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    category: 'exterior',
    subcategory: 'villa',
    imageUrl: '/images/exterior/villa/villa1.jpg',
    slug: 'luxury-villa-with-pool',
    description: 'A visualization of a luxury villa with contemporary design elements, set in a picturesque landscape with an infinity pool.',
    clientName: 'Luxury Homes Inc.',
    location: 'Malibu, California',
    completionDate: '2023-06-20',
    tags: ['Residential', 'Villa', 'Luxury', 'Contemporary']
  },
  {
    id: '3',
    title: 'Commercial Office Building',
    category: 'exterior',
    subcategory: 'buildings',
    imageUrl: '/images/exterior/buildings/building2.jpg',
    slug: 'commercial-office-building',
    description: 'A visualization of a state-of-the-art commercial office building with a glass facade.',
    clientName: 'Corporate Spaces Ltd.',
    location: 'Chicago, USA',
    completionDate: '2023-07-10',
    tags: ['Commercial', 'Office', 'Modern', 'Urban']
  },
  {
    id: '4',
    title: 'Minimalist Apartment',
    category: 'interior',
    imageUrl: '/images/interior/interior-1.jpg',
    slug: 'minimalist-apartment',
    description: 'A visualization of a minimalist apartment interior with clean lines and a neutral color palette.',
    clientName: 'Urban Living Spaces',
    location: 'Stockholm, Sweden',
    completionDate: '2023-04-25',
    tags: ['Residential', 'Apartment', 'Minimalist', 'Contemporary']
  },
  {
    id: '5',
    title: 'Product Exhibition Pavilion',
    category: 'exterior',
    subcategory: 'exhibition',
    imageUrl: '/images/exterior/exhibition/exhibition1.jpg',
    slug: 'product-exhibition-pavilion',
    description: 'A modern exhibition pavilion designed for product showcases with an open, flowing layout.',
    clientName: 'ExpoTech Events',
    location: 'Dubai, UAE',
    completionDate: '2023-08-05',
    tags: ['Exhibition', 'Commercial', 'Modern', 'Urban']
  },
  {
    id: '6',
    title: 'Modern Office Space',
    category: 'interior',
    imageUrl: '/images/interior/interior-3.jpg',
    slug: 'modern-office-space',
    description: 'A visualization of a modern office space designed for productivity and collaboration.',
    clientName: 'WorkSpace Solutions',
    location: 'San Francisco, USA',
    completionDate: '2023-09-15',
    tags: ['Commercial', 'Office', 'Modern', 'Corporate']
  },
  {
    id: '7',
    title: 'Mediterranean Villa',
    category: 'exterior',
    subcategory: 'villa',
    imageUrl: '/images/exterior/villa/villa2.jpg',
    slug: 'mediterranean-villa',
    description: 'A beautiful Mediterranean-style villa with terracotta roof and lush garden surroundings.',
    clientName: 'Mediterranean Estates',
    location: 'Valencia, Spain',
    completionDate: '2023-10-20',
    tags: ['Residential', 'Villa', 'Mediterranean', 'Luxury']
  },
  {
    id: '8',
    title: 'Tech Exhibition Center',
    category: 'exterior',
    subcategory: 'exhibition',
    imageUrl: '/images/exterior/exhibition/exhibition2.jpg',
    slug: 'tech-exhibition-center',
    description: 'A futuristic exhibition center designed to showcase technology innovations and product launches.',
    clientName: 'TechWorld Expo',
    location: 'Berlin, Germany',
    completionDate: '2023-11-05',
    tags: ['Exhibition', 'Technology', 'Futuristic', 'Commercial']
  },
  {
    id: '9',
    title: 'Skyscraper Complex',
    category: 'exterior',
    subcategory: 'buildings',
    imageUrl: '/images/exterior/buildings/building3.jpg',
    slug: 'skyscraper-complex',
    description: 'A visualization of a group of interconnected skyscrapers creating a distinctive skyline.',
    clientName: 'Urban Skyline Developers',
    location: 'Singapore',
    completionDate: '2023-12-10',
    tags: ['Commercial', 'Skyscraper', 'Urban', 'Modern']
  }
];

// Helper function to get projects by category
export function getProjectsByCategory(category: 'exterior' | 'interior') {
  return projects.filter(project => project.category === category);
}

// Helper function to get projects by exterior subcategory
export function getProjectsBySubcategory(subcategory: string) {
  return projects.filter(project => project.subcategory === subcategory);
}

// Helper function to get all exterior subcategories
export function getExteriorSubcategories() {
  const subcategories = projects
    .filter(project => project.category === 'exterior' && project.subcategory)
    .map(project => project.subcategory as string);
  
  // Return unique subcategories
  return [...new Set(subcategories)];
}

// Helper function to get a single project by slug
export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
} 