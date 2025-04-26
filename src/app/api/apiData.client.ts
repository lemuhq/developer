'use client';

import type { ApiCategory } from './apiData.server';

export const API_DATA: ApiCategory[] = [];

export async function initializeApiData(): Promise<ApiCategory[]> {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const response = await fetch(`${origin}/api/data`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch API data');
  }
  return response.json();
} 