// Server Component
import Link from 'next/link';
import ApiSidebar from '@/app/components/ApiSidebar';
import { getServerApiData } from '@/app/api/apiData';

export default async function ReferencePage() {
  const categories = await getServerApiData();
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ApiSidebar activeEndpoint="reference" />
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <div className="mx-auto max-w-full md:max-w-4xl">
          <div className="border-b border-gray-200 mb-4 md:mb-6 pb-3 md:pb-4">
            <h1 className="text-xl md:text-2xl font-bold mb-2">API Reference</h1>
            <p className="text-sm md:text-base text-gray-600">Explore the Lemu API documentation</p>
          </div>
          
          <div className="prose prose-sm md:prose-base prose-blue max-w-none">
            <p className="text-sm md:text-base">
              The Lemu API provides a comprehensive set of endpoints to interact with our financial services.
              Browse through the categories below to explore all available endpoints.
            </p>
            
            <h2 className="text-lg md:text-xl font-bold mt-6 md:mt-8">API Categories</h2>
            
            <div className="mt-4 md:mt-6 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
              {categories.map((category) => (
                <Link 
                  href={`/reference/${category.id}`} 
                  key={category.id}
                  className="block border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 text-xs md:text-sm">{category.description}</p>
                  <p className="text-xs md:text-sm text-accent-color">
                    {category.endpoints.length} endpoints &rarr;
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 border-t border-gray-200 pt-4 md:pt-6">
              <h2 className="text-lg md:text-xl font-bold">Getting Started</h2>
              <p className="text-sm md:text-base">
                Before using our API, make sure you're familiar with our 
                <Link href="/authentication" className="text-accent-color hover:text-accent-dark mx-1">authentication</Link>
                process and understand how to handle 
                <Link href="/errors" className="text-accent-color hover:text-accent-dark mx-1">errors</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 