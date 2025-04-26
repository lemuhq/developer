import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ApiCategory } from '@/app/api/apiData';

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

// Function to add or update a category
async function addCategory(category: ApiCategory): Promise<boolean> {
  try {
    const data = await getApiData();
    
    // Check if category with same ID already exists
    const existingIndex = data.findIndex(c => c.id === category.id);
    
    if (existingIndex >= 0) {
      // Update existing category
      data[existingIndex] = category;
    } else {
      // Add new category
      data.push(category);
    }
    
    return await saveApiData(data);
  } catch (error) {
    console.error('Error adding category:', error);
    return false;
  }
}

// Function to delete a category
async function deleteCategory(categoryId: string): Promise<boolean> {
  try {
    const data = await getApiData();
    const newData = data.filter(c => c.id !== categoryId);
    
    return await saveApiData(newData);
  } catch (error) {
    console.error('Error deleting category:', error);
    return false;
  }
}

// GET handler to fetch all categories
export async function GET() {
  try {
    const data = await getApiData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

// POST handler to add a new category
export async function POST(request: NextRequest) {
  try {
    const category = await request.json();
    
    if (!category.id || !category.name) {
      return NextResponse.json(
        { error: 'Category ID and name are required' }, 
        { status: 400 }
      );
    }
    
    // Ensure endpoints array exists
    if (!category.endpoints) {
      category.endpoints = [];
    }
    
    const success = await addCategory(category as ApiCategory);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to add category' }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error adding category:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' }, 
      { status: 500 }
    );
  }
}

// DELETE handler to remove a category
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('id');
    
    if (!categoryId) {
      return NextResponse.json(
        { error: 'Category ID is required' }, 
        { status: 400 }
      );
    }
    
    const success = await deleteCategory(categoryId);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to delete category' }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' }, 
      { status: 500 }
    );
  }
} 