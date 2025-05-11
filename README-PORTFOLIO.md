# Architectural Visualization Portfolio

This is a portfolio website for showcasing 3D architectural visualization work, built with Next.js and Tailwind CSS.

## Project Structure

- `/src/app`: Contains all the page components
  - `/src/app/page.tsx`: The homepage
  - `/src/app/exterior`: Exterior design projects page
  - `/src/app/interior`: Interior design projects page
  - `/src/app/projects/[slug]`: Dynamic project detail page
  - `/src/app/about`: About page
  - `/src/app/contact`: Contact page
- `/src/components`: Reusable UI components
- `/src/data`: Data files for projects
- `/public/images`: Where all portfolio images are stored

## Managing Images

The portfolio is set up with specific folders for organizing your images:

```
/public/images/
  ├── exterior/         # For exterior design images
  │   ├── exterior-1.jpg
  │   ├── exterior-2.jpg
  │   ├── exterior-3.jpg
  │   └── exterior-hero.jpg
  ├── interior/         # For interior design images
  │   ├── interior-1.jpg
  │   ├── interior-2.jpg
  │   ├── interior-3.jpg
  │   └── interior-hero.jpg
  ├── about-hero.jpg    # Hero image for About page
  ├── contact-hero.jpg  # Hero image for Contact page
  ├── hero-bg.jpg       # Main hero background for homepage
  └── profile.jpg       # Your profile photo for About page
```

### Adding New Projects

1. Add your new project images to either `/public/images/exterior/` or `/public/images/interior/` folder
2. Open `/src/data/projects.ts` and add a new project entry with the following properties:
   ```ts
   {
     id: '7', // Use a unique id
     title: 'Your Project Title',
     category: 'exterior', // or 'interior'
     imageUrl: '/images/exterior/your-new-image.jpg',
     slug: 'your-project-slug', // Used in the URL
     description: 'Detailed description of the project',
     clientName: 'Client Name',
     location: 'Project Location',
     completionDate: '2023-10-15', // Format: YYYY-MM-DD
     tags: ['Tag1', 'Tag2', 'Tag3']
   }
   ```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Changing Content

- Update text content in each page component
- Edit project details in `/src/data/projects.ts`
- Update personal information in the About and Contact pages

### Styling

- The project uses Tailwind CSS for styling
- Modify the color scheme by editing classes in the components
- For more extensive changes, modify the Tailwind configuration in `tailwind.config.ts`

## Deployment

This is a Next.js project, which can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a traditional hosting provider.

For optimal performance and SEO benefits, deploy to Vercel which is built by the creators of Next.js. 