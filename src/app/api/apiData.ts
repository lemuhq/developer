export interface Endpoint {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers?: Record<string, string>;
  requestBody?: Record<string, unknown>;
  parameters?: Record<string, {
    type: string;
    description: string;
    required: boolean;
  }>;
  responses: {
    [statusCode: string]: {
      description: string;
      example: Record<string, unknown>;
    };
  };
  sampleCode?: {
    curl?: string;
    javascript?: string;
    python?: string;
    ruby?: string;
    go?: string;
    java?: string;
    csharp?: string;
    php?: string;
    nodejs?: string;
    kotlin?: string;
    swift?: string;
    rust?: string;
    dart?: string;
    elixir?: string;
    powershell?: string;
    bash?: string;
    perl?: string;
    r?: string;
    scala?: string;
    haskell?: string;
    clojure?: string;
    typescript?: string;
    groovy?: string;
    lua?: string;
  };
}

export interface ApiCategory {
  id: string;
  name: string;
  description: string;
  endpoints: Endpoint[];
}

// This is a fallback data structure
// The actual data will be loaded from the JSON file
export const FALLBACK_API_DATA: ApiCategory[] = [];

// The API_DATA will be populated from the external JSON file at runtime
// This is accessed by components that need the API data
export let API_DATA: ApiCategory[] = [];

// This will be called from the app initialization
export async function initializeApiData() {
  try {
    // In client components, we'll fetch the data from our API endpoint
    // Use absolute URL to avoid issues
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
    const response = await fetch(`${origin}/api/data`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch API data');
    }
    
    const data = await response.json();
    API_DATA = data;
    return data;
  } catch (error) {
    console.error('Error initializing API data:', error);
    return FALLBACK_API_DATA;
  }
}

// For Server Components, we can directly import the data from the API route
export async function getServerApiData(): Promise<ApiCategory[]> {
  // Skip fs operations on client-side
  if (typeof window !== 'undefined') {
    // We're in a browser environment, use the fetch method instead
    return initializeApiData();
  }

  try {
    // We're in a server environment, use dynamic imports
    const { promises: fs } = await import('fs');
    const { join } = await import('path');
    const DATA_FILE_PATH = join(process.cwd(), 'src/data/api-data.json');
    
    try {
      const data = await fs.readFile(DATA_FILE_PATH, 'utf8');
      return JSON.parse(data) as ApiCategory[];
    } catch (error) {
      console.error('Error reading API data file:', error);
      return FALLBACK_API_DATA;
    }
  } catch (error) {
    console.error('Error loading server API data:', error);
    return FALLBACK_API_DATA;
  }
} 