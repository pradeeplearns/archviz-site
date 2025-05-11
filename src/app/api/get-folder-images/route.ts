import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');

    if (!folder) {
      return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
    }

    // Ensure the folder path is relative to the public directory
    const safeFolderPath = path.normalize(folder).replace(/^(\.\.(\/|\\|$))+/, '');
    const dirPath = safeFolderPath.startsWith('/') ? safeFolderPath.substring(1) : safeFolderPath;
    const fullPath = path.join(process.cwd(), 'public', dirPath);
    
    // Log for debugging
    console.log('Looking for images in:', fullPath);
    
    // Check if the directory exists
    try {
      await fsPromises.access(fullPath);
    } catch (error) {
      console.error('Directory not found:', fullPath);
      return NextResponse.json({ error: 'Directory not found', images: [] }, { status: 404 });
    }

    // Read directory contents
    const files = await fsPromises.readdir(fullPath);
    console.log('Files found:', files);
    
    // Filter image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    console.log('Image files found:', imageFiles);

    // Create URLs for the images - ensure they start with /
    const imageUrls = imageFiles.map(file => {
      const imagePath = safeFolderPath.startsWith('/') 
        ? `${safeFolderPath}/${file}` 
        : `/${safeFolderPath}/${file}`;
      return imagePath;
    });
    
    console.log('Image URLs:', imageUrls);

    return NextResponse.json({ images: imageUrls });
  } catch (error) {
    console.error('Error in get-folder-images API:', error);
    return NextResponse.json({ error: 'Internal server error', images: [] }, { status: 500 });
  }
} 