'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ApiCategory } from '../api/apiData';

export default function AdminPage() {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError('Error loading categories');
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Documentation Admin</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Categories</h2>
        <Link 
          href="/admin/categories/new" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Category
        </Link>
        
        {loading ? (
          <p className="mt-4">Loading categories...</p>
        ) : error ? (
          <p className="mt-4 text-red-500">{error}</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4">
            {categories.length === 0 ? (
              <p>No categories found. Create your first category to get started.</p>
            ) : (
              categories.map((category) => (
                <div key={category.id} className="border rounded p-4 bg-white shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.endpoints?.length || 0} endpoint(s)
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Link 
                        href={`/admin/categories/edit/${category.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </Link>
                      <Link 
                        href={`/admin/endpoints/new?categoryId=${category.id}`}
                        className="text-green-600 hover:text-green-800"
                      >
                        Add Endpoint
                      </Link>
                    </div>
                  </div>
                  
                  {category.endpoints && category.endpoints.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Endpoints:</h4>
                      <ul className="space-y-2">
                        {category.endpoints.map((endpoint) => (
                          <li key={endpoint.id} className="flex justify-between border-t pt-2">
                            <div>
                              <span className={`inline-block text-xs font-mono mr-2 px-2 py-1 rounded 
                                ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : ''}
                                ${endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : ''}
                                ${endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' : ''}
                                ${endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800' : ''}
                              `}>
                                {endpoint.method}
                              </span>
                              <span>{endpoint.name} - {endpoint.url}</span>
                            </div>
                            <Link 
                              href={`/admin/endpoints/edit/${endpoint.id}?categoryId=${category.id}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Edit
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
} 