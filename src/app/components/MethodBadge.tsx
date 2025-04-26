import React from 'react';

interface MethodBadgeProps {
  method: string;
}

export default function MethodBadge({ method }: MethodBadgeProps) {
  return (
    <span className={`text-sm font-mono px-2 py-1 rounded-md inline-block
      ${method === 'GET' ? 'method-get' : ''}
      ${method === 'POST' ? 'method-post' : ''}
      ${method === 'PUT' ? 'method-put' : ''}
      ${method === 'DELETE' ? 'method-delete' : ''}
    `}>
      {method}
    </span>
  );
} 