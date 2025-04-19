'use client';

import { useState } from 'react';
import Link from 'next/link';
import { API_DATA } from '@/app/api/apiData';

interface ApiSidebarProps {
  activeEndpoint?: string;
}

export default function ApiSidebar({ activeEndpoint }: ApiSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(API_DATA.map(cat => cat.name));

  const toggleCategory = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(expandedCategories.filter(name => name !== categoryName));
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
    }
  };

  return (
    <div className="hidden md:block w-64 flex-shrink-0 bg-bg-secondary border-r border-border-color overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="h-8 w-8 rounded-full bg-bg-tertiary flex items-center justify-center text-text-primary font-bold text-md">
            L
          </div>
          <h2 className="ml-2 text-lg font-semibold text-text-primary">API Reference</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <Link 
              href="/authentication"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                activeEndpoint === 'authentication' 
                ? 'bg-accent-color text-white' 
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
              }`}
            >
              Authentication
            </Link>
          </div>
          
          <div>
            <Link 
              href="/errors"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                activeEndpoint === 'errors' 
                ? 'bg-accent-color text-white' 
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
              }`}
            >
              Errors
            </Link>
          </div>

          {API_DATA.map((category) => (
            <div key={category.name}>
              <h3 className="font-medium text-text-primary text-xs uppercase tracking-wide pt-4 px-3 mb-2">
                {category.name}
              </h3>
              <div className="space-y-1">
                {category.endpoints.map((endpoint) => (
                  <Link
                    key={endpoint.id}
                    href={`/reference/${endpoint.id}`}
                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                      activeEndpoint === endpoint.id
                      ? 'bg-accent-color text-white'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`inline-block w-12 text-xs font-mono mr-2 text-center px-1 py-0.5 rounded 
                        ${endpoint.method === 'GET' ? 'method-get' : ''}
                        ${endpoint.method === 'POST' ? 'method-post' : ''}
                        ${endpoint.method === 'PUT' ? 'method-put' : ''}
                        ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
                      `}>
                        {endpoint.method}
                      </span>
                      <span className="truncate">{endpoint.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 