import { NextRequest, NextResponse } from 'next/server';
import { getApiData, saveApiData } from '@/app/utils/apiDataService';
import { ApiCategory } from '@/app/api/apiData';

// Function to update a category with potential ID change
async function updateCategory(originalId: string, updatedCategory: ApiCategory): Promise<boolean> {
  try {
    const data = await getApiData();
    
    // Find the original category
    const existingIndex = data.findIndex(c => c.id === originalId);
    
    if (existingIndex === -1) {
      return false; // Original category not found
    }
    
    // Check if we're changing to an ID that already exists (avoid duplicates)
    if (originalId !== updatedCategory.id) {
      const duplicateIndex = data.findIndex(c => c.id === updatedCategory.id);
      if (duplicateIndex !== -1 && duplicateIndex !== existingIndex) {
        throw new Error('A category with this ID already exists');
      }
    }
    
    // Update the category
    data[existingIndex] = updatedCategory;
    
    return await saveApiData(data);
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
}

// POST handler to update a category with potential ID change
export async function POST(request: NextRequest) {
  try {
    const { originalId, category } = await request.json();
    
    if (!originalId || !category || !category.id || !category.name) {
      return NextResponse.json(
        { error: 'Original ID, new category ID, and name are required' }, 
        { status: 400 }
      );
    }
    
    // Ensure endpoints array exists
    if (!category.endpoints) {
      category.endpoints = [];
    }
    
    try {
      const success = await updateCategory(originalId, category as ApiCategory);
      
      if (success) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { error: 'Category not found' }, 
          { status: 404 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to update category' }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing category update:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' }, 
      { status: 500 }
    );
  }
} 