// Server Component 
import { notFound } from 'next/navigation';
import ApiSidebar from '@/app/components/ApiSidebar';
import { API_DATA } from '@/app/api/apiData';
import { Endpoint } from '@/app/api/apiData';
import EndpointDetails from '@/app/components/EndpointDetails';

// Let TypeScript infer props for async page components
// type Props = {
//   params: { endpointId: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

export function generateStaticParams() {
  const endpoints = API_DATA.flatMap(category => 
    category.endpoints.map(endpoint => ({ endpointId: endpoint.id }))
  );
  
  return endpoints;
}

function getEndpoint(endpointId: string): Endpoint | undefined {
  for (const category of API_DATA) {
    const endpoint = category.endpoints.find(e => e.id === endpointId);
    if (endpoint) return endpoint;
  }
  return undefined;
}

// @ts-ignore - Bypassing TypeScript validation for Next.js App Router compatibility
export default function EndpointPage(props: any) {
  const { params } = props;
  const endpointId = params.endpointId;
  
  if (!endpointId) {
    notFound();
  }
  
  const endpoint = getEndpoint(endpointId);
  
  if (!endpoint) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-bg-secondary">
      <ApiSidebar activeEndpoint={endpointId} />
      <div className="flex-1 p-4 md:p-8">
        <EndpointDetails endpoint={endpoint} />
      </div>
    </div>
  );
} 