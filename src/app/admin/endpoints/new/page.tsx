'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ApiCategory } from '@/app/api/apiData';

// Define the response structure
interface ResponseExample {
  description: string;
  example: Record<string, any>;
}

// Define responses as a record with string keys
type Responses = Record<string, ResponseExample>;

interface EndpointFormData {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers: Record<string, any>;
  requestBody: Record<string, any>;
  responses: Responses;
}

export default function NewEndpointPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const [category, setCategory] = useState<ApiCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [headerText, setHeaderText] = useState('{}');
  const [requestBodyText, setRequestBodyText] = useState('{}');
  const [responseTexts, setResponseTexts] = useState<Record<string, string>>({
    '200': '{}'
  });

  const [formData, setFormData] = useState<EndpointFormData>({
    id: '',
    name: '',
    description: '',
    method: 'GET',
    url: '',
    headers: {},
    requestBody: {},
    responses: {
      '200': {
        description: 'Success response',
        example: {}
      }
    }
  });

  // Initialize text fields from formData
  useEffect(() => {
    setHeaderText(JSON.stringify(formData.headers, null, 2));
    setRequestBodyText(JSON.stringify(formData.requestBody, null, 2));
    
    const newResponseTexts: Record<string, string> = {};
    Object.keys(formData.responses).forEach(statusCode => {
      newResponseTexts[statusCode] = JSON.stringify(formData.responses[statusCode].example, null, 2);
    });
    setResponseTexts(newResponseTexts);
  }, [formData.headers, formData.requestBody, formData.responses, setHeaderText, setRequestBodyText, setResponseTexts]);

  useEffect(() => {
    // If no categoryId is provided, redirect back to admin
    if (!categoryId) {
      router.push('/admin');
      return;
    }

    // Fetch category details
    async function fetchCategory() {
      try {
        setLoading(true);
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const categories = await response.json();
        const foundCategory = categories.find((c: ApiCategory) => c.id === categoryId);
        
        if (!foundCategory) {
          throw new Error('Category not found');
        }
        
        setCategory(foundCategory);
      } catch (error) {
        setError('Error loading category');
        console.error('Error loading category:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategory();
  }, [categoryId, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the name to a slug for the ID field
    const value = e.target.value.toLowerCase()
      .replace(/[^\w\s]/g, '')  // Remove special chars
      .replace(/\s+/g, '-');    // Replace spaces with dashes
    
    setFormData(prev => ({ ...prev, id: value }));
  };

  // Update header text state
  const handleHeaderTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeaderText(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setFormData(prev => ({
        ...prev,
        headers: parsed
      }));
    } catch (error) {
      // Invalid JSON, don't update formData
      console.error('Invalid header JSON:', error);
    }
  };

  // Update request body text state
  const handleRequestBodyTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequestBodyText(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setFormData(prev => ({
        ...prev,
        requestBody: parsed
      }));
    } catch (error) {
      // Invalid JSON, don't update formData
      console.error('Invalid request body JSON:', error);
    }
  };

  // Update response example text state
  const handleResponseTextChange = (statusCode: string, value: string) => {
    setResponseTexts(prev => ({
      ...prev,
      [statusCode]: value
    }));
    
    try {
      const parsed = JSON.parse(value);
      setFormData(prev => ({
        ...prev,
        responses: {
          ...prev.responses,
          [statusCode]: {
            ...prev.responses[statusCode],
            example: parsed
          }
        }
      }));
    } catch (error) {
      // Invalid JSON, don't update formData
      console.error(`Invalid response JSON for status ${statusCode}:`, error);
    }
  };

  const handleResponseDescriptionChange = (statusCode: string, description: string) => {
    setFormData(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [statusCode]: {
          ...prev.responses[statusCode],
          description
        }
      }
    }));
  };

  const addStatusCode = () => {
    // Find an unused status code
    const statusCodes = Object.keys(formData.responses);
    let newCode = '400';
    
    if (statusCodes.includes(newCode)) {
      // Try other common codes
      const commonCodes = ['401', '403', '404', '422', '500'];
      newCode = commonCodes.find(code => !statusCodes.includes(code)) || '418'; // I'm a teapot as fallback
    }
    
    // Update formData
    setFormData(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [newCode]: {
          description: 'Error response',
          example: { error: 'Error message' }
        }
      }
    }));
    
    // Update responseTexts
    setResponseTexts(prev => ({
      ...prev,
      [newCode]: JSON.stringify({ error: 'Error message' }, null, 2)
    }));
  };

  const removeStatusCode = (statusCode: string) => {
    // Update formData
    const newResponses = { ...formData.responses };
    delete newResponses[statusCode];
    setFormData(prev => ({
      ...prev,
      responses: newResponses
    }));
    
    // Update responseTexts
    const newResponseTexts = { ...responseTexts };
    delete newResponseTexts[statusCode];
    setResponseTexts(newResponseTexts);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Validate form data
      if (!formData.id.trim() || !formData.name.trim() || !formData.url.trim()) {
        throw new Error('Endpoint ID, name, and URL are required');
      }

      // Ensure all response examples are valid JSON
      Object.keys(formData.responses).forEach(statusCode => {
        if (typeof formData.responses[statusCode].example !== 'object') {
          throw new Error(`Invalid JSON in response example for status code ${statusCode}`);
        }
      });

      const response = await fetch('/api/endpoints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          categoryId, 
          endpoint: formData 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create endpoint');
      }

      // Redirect back to admin page on success
      router.push('/admin');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      console.error('Error creating endpoint:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error && !category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="p-4 bg-red-100 text-red-700 rounded mb-4">{error}</div>
        <Link href="/admin" className="text-blue-600 hover:text-blue-800">
          Return to Admin
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Create New Endpoint</h1>
      <p className="mb-6">
        Adding to category: <span className="font-medium">{category?.name}</span>
      </p>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Endpoint Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
                // Also update the ID field based on the name if ID is empty
                if (!formData.id) {
                  handleIdChange(e);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
              Endpoint ID *
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleIdChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Used for URLs and references. Only lowercase letters, numbers, and dashes.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">
              HTTP Method *
            </label>
            <select
              id="method"
              name="method"
              value={formData.method}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              URL Path *
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="/api/v1/resource"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Headers (JSON)
          </label>
          <textarea
            value={headerText}
            onChange={handleHeaderTextChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='{ "Authorization": "Bearer YOUR_API_KEY" }'
            spellCheck="false"
            autoComplete="off"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter headers as a JSON object.
          </p>
        </div>

        {(formData.method === 'POST' || formData.method === 'PUT') && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Request Body (JSON)
            </label>
            <textarea
              value={requestBodyText}
              onChange={handleRequestBodyTextChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder='{ "key": "value" }'
              spellCheck="false"
              autoComplete="off"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter request body as a JSON object.
            </p>
          </div>
        )}

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Response Examples
            </label>
            <button
              type="button"
              onClick={addStatusCode}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              + Add Status Code
            </button>
          </div>

          {Object.keys(formData.responses).map((statusCode) => (
            <div key={statusCode} className="mb-4 p-4 border rounded bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="font-medium text-gray-700 mr-2">Status {statusCode}</span>
                  <input
                    type="text"
                    value={formData.responses[statusCode].description}
                    onChange={(e) => handleResponseDescriptionChange(statusCode, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Response description"
                  />
                </div>
                {Object.keys(formData.responses).length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStatusCode(statusCode)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
              <textarea
                value={responseTexts[statusCode] || '{}'}
                onChange={(e) => handleResponseTextChange(statusCode, e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='{ "status": "success", "data": { "key": "value" } }'
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {submitting ? 'Creating...' : 'Create Endpoint'}
          </button>
          
          <Link href="/admin" className="text-gray-600 hover:text-gray-800">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
} 