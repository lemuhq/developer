// Server Component
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ApiSidebar from '@/app/components/ApiSidebar';
import { getServerApiData, ApiCategory } from '@/app/api/apiData';
import MethodBadge from '@/app/components/MethodBadge';

// Next.js 15: `params` is always a Promise of the route params
export async function generateStaticParams() {
  const categories = await getServerApiData();
  return categories.map(category => ({ categoryId: category.id }));
}

async function getCategory(categoryId: string): Promise<ApiCategory | undefined> {
  const categories = await getServerApiData();
  return categories.find(c => c.id === categoryId);
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  // Await the params promise
  const { categoryId } = await params;
  
  const category = await getCategory(categoryId);
  
  if (!category) {
    notFound();
  }
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ApiSidebar activeEndpoint={`${categoryId}`} />
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <div className="mx-auto max-w-full md:max-w-4xl">
          <div className="border-b border-gray-200 mb-4 md:mb-6 pb-3 md:pb-4">
            <div className="flex flex-wrap items-center mb-2">
              <Link href="/reference" className="text-xs md:text-sm text-accent-color hover:text-accent-dark mr-2">
                API Reference
              </Link>
              <span className="text-gray-400 mx-1 md:mx-2">/</span>
              <h1 className="text-xl md:text-2xl font-bold mt-1 md:mt-0 w-full md:w-auto">{category.name}</h1>
            </div>
          </div>
          
          <div className="prose prose-sm md:prose-base prose-blue max-w-none">
            <h2>Introduction</h2>
            <p className="text-gray-700">{category.description}</p>
            
            <h2 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-accent-color">Endpoints</h2>
            <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
              {category.endpoints.map((endpoint) => (
                <Link 
                  href={`/reference/${categoryId}/${endpoint.id}`} 
                  key={endpoint.id}
                  className="flex flex-col sm:flex-row sm:items-start p-3 md:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="mb-2 sm:mb-0 sm:mr-4 sm:mt-1">
                    <MethodBadge method={endpoint.method} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium mb-1">{endpoint.name}</h3>
                    <p className="text-gray-600 mb-2 text-sm">{endpoint.description}</p>
                    <div className="text-xs md:text-sm text-gray-500 font-mono break-all">
                      {endpoint.url}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 