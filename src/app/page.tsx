'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the reference page
    router.push('/reference');
  }, [router]);

  // Return an empty div while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-accent-color text-xl">Redirecting to API Reference...</div>
    </div>
  );
}
