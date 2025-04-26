// Server Component 
import { notFound } from 'next/navigation';
import ApiSidebar from '@/app/components/ApiSidebar';
import { Endpoint, getServerApiData } from '@/app/api/apiData';
import EndpointDetails from '@/app/components/EndpointDetails';
import Link from 'next/link';
import { resolveRouteParams } from '@/utils/routeHelpers';

export async function generateStaticParams() {
  const categories = await getServerApiData();
  const endpoints = categories.flatMap(category => 
    category.endpoints.map(endpoint => ({ 
      categoryId: category.id,
      endpointId: endpoint.id 
    }))
  );
  
  return endpoints;
}

async function getEndpointInfo(categoryId: string, endpointId: string): Promise<{ category: any, endpoint: Endpoint } | undefined> {
  const categories = await getServerApiData();
  
  const category = categories.find(c => c.id === categoryId);
  if (!category) return undefined;
  
  const endpoint = category.endpoints.find(e => e.id === endpointId);
  if (!endpoint) return undefined;
  
  return { category, endpoint };
}

export default async function EndpointPage({ params }: { params: Promise<{ categoryId: string, endpointId: string }> }) {
  // Resolve params to handle them as a Promise
  const resolvedParams = await resolveRouteParams(params);
  
  // Extract the IDs as strings to avoid the server/client boundary issue
  const categoryId = String(resolvedParams.categoryId);
  const endpointId = String(resolvedParams.endpointId);
  
  const info = await getEndpointInfo(categoryId, endpointId);
  
  if (!info) {
    notFound();
  }
  
  const { category, endpoint } = info;
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ApiSidebar activeEndpoint={endpointId} />
      <div className="flex-1 p-4 md:p-8 w-full overflow-x-hidden">
        <div className="mx-auto max-w-full md:max-w-4xl">
          <div className="border-b border-gray-200 mb-4 md:mb-6 pb-3 md:pb-4">
            <div className="flex flex-wrap items-center mb-2">
              <Link href="/reference" className="text-xs md:text-sm text-accent-color hover:text-accent-dark mr-2">
                API Reference
              </Link>
              <span className="text-gray-400 mx-1 md:mx-2">/</span>
              <Link href={`/reference/${categoryId}`} className="text-xs md:text-sm text-accent-color hover:text-accent-dark mr-2 max-w-[120px] md:max-w-none truncate">
                {category.name}
              </Link>
              <span className="text-gray-400 mx-1 md:mx-2">/</span>
              <h1 className="text-lg md:text-2xl font-bold mt-1 md:mt-0 w-full md:w-auto">{endpoint.name}</h1>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none prose-sm md:prose-base overflow-x-auto">
            <EndpointDetails endpoint={endpoint} />
          </div>
        </div>
      </div>
    </div>
  );
} 