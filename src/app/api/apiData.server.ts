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
  sampleCode?: Record<string, string>;
}

export interface ApiCategory {
  id: string;
  name: string;
  description: string;
  endpoints: Endpoint[];
}

export const FALLBACK_API_DATA: ApiCategory[] = [];
export let API_DATA: ApiCategory[] = [];

export async function initializeApiData(): Promise<ApiCategory[]> {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const response = await fetch(`${origin}/api/data`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch API data');
  const data = await response.json();
  API_DATA = data;
  return data;
}

export async function getServerApiData(): Promise<ApiCategory[]> {
  if (typeof window !== 'undefined') {
    return initializeApiData();
  }
  const { promises: fs } = await import('fs');
  const { join } = await import('path');
  const DATA_FILE_PATH = join(process.cwd(), 'src/data/api-data.json');
  try {
    const file = await fs.readFile(DATA_FILE_PATH, 'utf8');
    return JSON.parse(file) as ApiCategory[];
  } catch {
    return FALLBACK_API_DATA;
  }
} 