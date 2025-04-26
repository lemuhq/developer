import fs from 'fs';
import path from 'path';
import { ApiCategory, Endpoint } from '../api/apiData';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/api-data.json');

// Read data from JSON file
export async function getApiData(): Promise<ApiCategory[]> {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      // If file doesn't exist, create it with empty array
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

// Write data to JSON file
export async function saveApiData(data: ApiCategory[]): Promise<boolean> {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(DATA_FILE_PATH, jsonData, 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving API data:', error);
    return false;
  }
}

// Add a new category
export async function addCategory(category: ApiCategory): Promise<boolean> {
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

// Add or update an endpoint in a category
export async function addEndpoint(categoryId: string, endpoint: Endpoint): Promise<boolean> {
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

// Delete a category
export async function deleteCategory(categoryId: string): Promise<boolean> {
  try {
    const data = await getApiData();
    const newData = data.filter(c => c.id !== categoryId);
    
    return await saveApiData(newData);
  } catch (error) {
    console.error('Error deleting category:', error);
    return false;
  }
}

// Delete an endpoint
export async function deleteEndpoint(categoryId: string, endpointId: string): Promise<boolean> {
  try {
    const data = await getApiData();
    
    // Find the category
    const categoryIndex = data.findIndex(c => c.id === categoryId);
    
    if (categoryIndex === -1) {
      return false; // Category not found
    }
    
    // Filter out the endpoint to delete
    data[categoryIndex].endpoints = data[categoryIndex].endpoints.filter(
      e => e.id !== endpointId
    );
    
    return await saveApiData(data);
  } catch (error) {
    console.error('Error deleting endpoint:', error);
    return false;
  }
} 