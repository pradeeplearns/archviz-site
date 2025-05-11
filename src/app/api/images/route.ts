import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const directory = searchParams.get('directory');

  if (!directory) {
    return NextResponse.json({ error: 'Directory parameter is required' }, { status: 400 });
  }

  try {
    const publicPath = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicPath, directory);
    
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Directory not found' }, { status: 404 });
    }

    const files = fs.readdirSync(fullPath);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `${directory}/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
} 