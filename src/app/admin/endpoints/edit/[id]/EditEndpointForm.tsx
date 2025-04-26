'use client';

interface EditEndpointFormProps {
  endpointId: string;
}

export default function EditEndpointForm({ endpointId }: EditEndpointFormProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Endpoint</h1>
      <p>Editing endpoint with ID: <strong>{endpointId}</strong></p>
      {/* TODO: Implement form fields here */}
    </div>
  );
} 