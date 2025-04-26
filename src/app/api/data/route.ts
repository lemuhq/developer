import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/api-data.json');

// GET handler to read the JSON file data
export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      // If file doesn't exist, create it with empty array
      fs.writeFileSync(DATA_FILE_PATH, '[]', 'utf8');
      return NextResponse.json([]);
    }
    
    const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading API data:', error);
    return NextResponse.json({ error: 'Failed to read API data' }, { status: 500 });
  }
} 