# Architectural Visualization Portfolio

A simple, elegant portfolio website for showcasing architectural visualization work.

## Features

- Responsive design
- Scroll effect with two images:
  - First image moves as you scroll
  - Second image stays fixed on the right side

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Adding Your Own Images

To replace the placeholder gradients with your own images:

1. Add your images to the `public` folder:
   - `image1.jpg` - The main image that will move on scroll
   - `image2.jpg` - The image that will stay fixed on the right

2. Update the `src/app/page.tsx` file to use your images:

```jsx
// First image that moves on scroll
<div className="absolute inset-0 w-full h-[200vh]">
  <div className="sticky top-0 h-screen w-full">
    <Image
      src="/image1.jpg"
      alt="Portfolio Image 1"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

// Second image that stays fixed on the right
<div className="absolute top-0 right-0 h-screen w-1/2 z-10">
  <Image
    src="/image2.jpg"
    alt="Portfolio Image 2"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Other Customizations

- Modify the metadata in `src/app/layout.tsx` to update the site title and description
- Adjust the layout in `src/app/page.tsx` if needed

## Deployment

This site can be easily deployed to Vercel or any other platform that supports Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Wasmer Edge

The easiest way to deploy your Next.js app is to use the [Wasmer Edge](https://wasmer.io/products/edge).

Live example: https://wasmer-edge-next-ssg-sample.wasmer.app/

First, you'll need to run `npm run build`, and then, to deploy to Wasmer Edge:

```bash
wasmer deploy
```
