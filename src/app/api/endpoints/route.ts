import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ApiCategory, Endpoint } from '@/app/api/apiData';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/api-data.json');

// Function to read data from the JSON file
async function getApiData(): Promise<ApiCategory[]> {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      fs.writeFileSync(DATA_FILE_PATH, '[]', 'utf8');
      return [];
    }
    
    const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
    return JSON.parse(data) as ApiCategory[];
  } catch (error) {
    console.error('Error reading API data:', error);
    return [];
  }
}

// Function to save data to the JSON file
async function saveApiData(data: ApiCategory[]): Promise<boolean> {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(DATA_FILE_PATH, jsonData, 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving API data:', error);
    return false;
  }
}

// Function to add or update an endpoint
async function addEndpoint(categoryId: string, endpoint: Endpoint): Promise<boolean> {
  try {
    const data = await getApiData();
    
    // Find the category
    const categoryIndex = data.findIndex(c => c.id === categoryId);
    
    if (categoryIndex === -1) {
      return false; // Category not found
    }
    
    // Check if endpoint with same ID already exists
    const existingEndpointIndex = data[categoryIndex].endpoints.findIndex(
      e => e.id === endpoint.id
    );
    
    if (existingEndpointIndex >= 0) {
      // Update existing endpoint
      data[categoryIndex].endpoints[existingEndpointIndex] = endpoint;
    } else {
      // Add new endpoint
      data[categoryIndex].endpoints.push(endpoint);
    }
    
    return await saveApiData(data);
  } catch (error) {
    console.error('Error adding endpoint:', error);
    return false;
  }
}

// GET handler to fetch all API data
export async function GET() {
  try {
    const data = await getApiData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching API data:', error);
    return NextResponse.json({ error: 'Failed to fetch API data' }, { status: 500 });
  }
}

// POST handler to add a new endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categoryId, endpoint } = body;
    
    if (!categoryId || !endpoint) {
      return NextResponse.json(
        { error: 'Category ID and endpoint data are required' }, 
        { status: 400 }
      );
    }
    
    const success = await addEndpoint(categoryId, endpoint as Endpoint);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to add endpoint' }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing endpoint request:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' }, 
      { status: 500 }
    );
  }
} 