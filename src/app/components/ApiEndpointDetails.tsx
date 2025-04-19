'use client';

import { useState } from 'react';
import { ApiEndpoint } from '../types/api';
import CodeBlock from './CodeBlock';

interface ApiEndpointDetailsProps {
  endpoint: ApiEndpoint;
}

export default function ApiEndpointDetails({ endpoint }: ApiEndpointDetailsProps) {
  const [activeTab, setActiveTab] = useState<'examples' | 'parameters' | 'responses'>('examples');

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 mb-6 pb-4">
        <h1 className="text-2xl font-bold mb-2">{endpoint.name}</h1>
        <div className="flex items-center">
          <span className={`text-sm font-mono px-2 py-1 mr-2 rounded-md
            ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : ''}
            ${endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : ''}
            ${endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' : ''}
            ${endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800' : ''}
          `}>
            {endpoint.method}
          </span>
          <span className="font-mono text-gray-600">{endpoint.path}</span>
        </div>
        <p className="mt-4 text-gray-700">{endpoint.description}</p>
      </div>

      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'examples'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'parameters'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('parameters')}
          >
            Parameters
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'responses'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('responses')}
          >
            Responses
          </button>
        </div>

        <div className="py-4">
          {activeTab === 'examples' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Request Example</h3>
              <CodeBlock endpoint={endpoint} />
              
              {endpoint.requestBody && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Request Body</h3>
                  <p className="text-sm text-gray-600 mb-2">{endpoint.requestBody.description}</p>
                  
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                      application/json
                    </div>
                    <div className="p-4 bg-white">
                      <pre className="text-sm overflow-x-auto">
                        {JSON.stringify(
                          Object.values(endpoint.requestBody.content)[0].example,
                          null,
                          2
                        )}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'parameters' && (
            <div>
              {endpoint.authentication && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Authentication</h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          This endpoint requires API key authentication. Include your API key and secret in the request headers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <h3 className="text-lg font-medium mb-2">Headers</h3>
              {endpoint.headers.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Required
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {endpoint.headers.map((header, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-gray-900">
                            {header.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {header.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {header.required ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Required
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                Optional
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No headers required for this endpoint.</p>
              )}

              {endpoint.parameters && endpoint.parameters.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Path/Query Parameters</h3>
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Required
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {endpoint.parameters.map((param, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-gray-900">
                              {param.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {param.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {param.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {param.required ? (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Required
                                </span>
                              ) : (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                  Optional
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {endpoint.requestBody && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Request Body Schema</h3>
                  <p className="text-sm text-gray-600 mb-2">{endpoint.requestBody.description}</p>

                  {Object.entries(endpoint.requestBody.content).map(([contentType, content]) => (
                    <div key={contentType} className="rounded-lg overflow-hidden border border-gray-200 mt-2">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                        {contentType}
                      </div>
                      <div className="p-4 bg-white">
                        <pre className="text-sm overflow-x-auto">
                          {JSON.stringify(content.schema, null, 2)}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'responses' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Response Examples</h3>
              
              {endpoint.responses.map((response, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className={`text-sm px-2 py-1 rounded-md mr-2 ${
                      response.status >= 200 && response.status < 300
                        ? 'bg-green-100 text-green-800'
                        : response.status >= 400
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {response.status}
                    </span>
                    <span className="text-gray-700">{response.description}</span>
                  </div>
                  
                  {response.content && Object.entries(response.content).map(([contentType, content]) => (
                    <div key={contentType} className="rounded-lg overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                        {contentType}
                      </div>
                      <div className="p-4 bg-white">
                        <pre className="text-sm overflow-x-auto">
                          {JSON.stringify(content.example, null, 2)}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 