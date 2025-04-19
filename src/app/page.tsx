import Link from 'next/link';
import { API_DATA } from './api/apiData';

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="hero">
        <div className="container py-16 sm:py-24">
          <div className="text-center">
            <div className="mb-8 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <span className="text-white font-medium">Lemu Developer API</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Lemu Banking API
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-white">
              Smart financial API solutions for developers building innovative applications.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/reference/get-bank-list">
                <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 shadow-lg">
                  API Reference
                </div>
              </Link>
              <Link href="#quickstart">
                <div className="inline-flex items-center justify-center px-5 py-3 border border-white/30 backdrop-blur-sm text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
                  Quick Start
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute hidden md:block right-10 top-40 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute hidden md:block left-10 top-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Features */}
      <div className="section bg-white">
        <div className="container">
          <div className="lg:text-center">
            <h2 className="section-heading">Features</h2>
            <p className="section-title">
              Everything you need to build financial solutions
            </p>
            <p className="section-description">
              Our API provides a comprehensive suite of banking and payment services.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:-rotate-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Account Verification</h3>
                  <p className="text-gray-600">
                    Verify bank account details with real-time validation and seamless integration.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:rotate-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Instant Transfers</h3>
                  <p className="text-gray-600">
                    Initiate and process bank transfers quickly and securely across multiple financial institutions.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:rotate-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Secure Authentication</h3>
                  <p className="text-gray-600">
                    Industry-standard security practices and authentication methods to protect sensitive information.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:-rotate-1">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Transaction Analytics</h3>
                  <p className="text-gray-600">
                    Detailed transaction data and analytics to help monitor and optimize financial operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* API Overview */}
      <div id="quickstart" className="section bg-gray-50">
        <div className="container">
          <div className="lg:text-center">
            <h2 className="section-heading">Quick Start</h2>
            <p className="section-title">
              Start integrating in minutes
            </p>
            <p className="section-description">
              Follow these simple steps to get started with our API.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Register and Get API Keys</h3>
                    <p className="text-gray-600">
                      To use the Lemu API, you need to obtain API keys. Click on the <span className="font-medium text-primary">"Get API Key"</span> button in the header to generate your unique API key and secret.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md">
                      2
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Make Your First API Call</h3>
                    <p className="text-gray-600 mb-4">
                      Let's start with a simple GET request to retrieve the list of supported banks:
                    </p>
                    
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-700">
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-500 shadow-inner"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-inner"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500 shadow-inner"></div>
                        </div>
                        <span className="text-xs font-mono text-gray-400">cURL</span>
                      </div>
                      <div className="p-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
                        <pre className="text-sm text-gray-300 font-mono relative z-10">
{`curl -X GET \\
  --url https://api.lemu.africa/v1/banks \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Content-Type: application/json"`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Explore the API Reference</h3>
                    <p className="text-gray-600 mb-4">
                      Check out our comprehensive API reference documentation for details on all available endpoints.
                    </p>
                    
                    <Link href="/reference/get-bank-list">
                      <div className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-md text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                        View API Reference
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* API Categories */}
      <div className="section bg-white">
        <div className="container">
          <div className="lg:text-center">
            <h2 className="section-heading">API Categories</h2>
            <p className="section-title">
              Explore our API endpoints
            </p>
            <p className="section-description">
              Browse through our API categories to find what you need.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {API_DATA.map((category) => (
                <div key={category.name} className="card hover:shadow-md">
                  <h3 className="card-title">{category.name}</h3>
                  <p className="card-description mb-4">{category.description}</p>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {category.endpoints.map((endpoint) => (
                        <li key={endpoint.id}>
                          <Link href={`/reference/${endpoint.id}`}>
                            <div className="text-sm text-primary hover:text-primary-dark flex items-center">
                              <span className={`inline-block w-14 text-xs font-mono mr-2 px-1 py-0.5 text-center rounded 
                                ${endpoint.method === 'GET' ? 'method-get' : ''}
                                ${endpoint.method === 'POST' ? 'method-post' : ''}
                                ${endpoint.method === 'PUT' ? 'method-put' : ''}
                                ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
                              `}>
                                {endpoint.method}
                              </span>
                              <span className="hover:underline">{endpoint.name}</span>
                            </div>
                          </Link>
          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
