import './globals.css';
import { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense } from 'react';

// Force all routes to be rendered dynamically at request time
export const dynamic = 'force-dynamic';

// Static metadata (Next.js 15 App Router)
export const metadata: Metadata = {
  title: 'Lemu API Documentation',
  description: 'Developer documentation for the Lemu API',
};

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}