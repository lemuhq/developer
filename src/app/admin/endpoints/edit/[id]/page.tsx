'use client';
import { useRouter, useParams } from 'next/navigation';
import EditEndpointForm from './EditEndpointForm';

export default function EditEndpointPage() {
  const router = useRouter();
  const { id: endpointId } = useParams() as { id: string };

  return <EditEndpointForm endpointId={endpointId} />;
} 