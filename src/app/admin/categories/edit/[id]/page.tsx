'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ApiCategory } from '@/app/api/apiData';
import EditCategoryForm from './EditCategoryForm';

// This is a Server Component. It receives route params from Next.js and passes them to a client form.
export default function EditCategoryPage() {
  const router = useRouter();
  const { id: categoryId } = useParams() as { id: string };

  return <EditCategoryForm categoryId={categoryId} />;
} 