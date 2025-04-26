'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { API_DATA, initializeApiData, ApiCategory } from '@/app/api/apiData';

interface ApiSidebarProps {
  activeEndpoint?: string;
}

export default function ApiSidebar({ activeEndpoint }: ApiSidebarProps) {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Define styles here to avoid CSS conflicts
  const linkStyles = {
    normal: {
      display: 'block',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'var(--text-secondary)',
      transition: 'color 0.15s ease-in-out'
    } as React.CSSProperties,
    active: {
      display: 'block',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#FF8A33'
    } as React.CSSProperties,
    categoryNormal: {
      display: 'block',
      fontWeight: '500',
      fontSize: '0.75rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      paddingTop: '1rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      marginBottom: '0.5rem',
      color: 'var(--text-primary)',
      transition: 'color 0.15s ease-in-out'
    } as React.CSSProperties,
    categoryActive: {
      display: 'block',
      fontWeight: '500',
      fontSize: '0.75rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      paddingTop: '1rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      marginBottom: '0.5rem',
      color: '#FF8A33',
    } as React.CSSProperties
  };
  
  // Handle hover effect with JavaScript
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#FF8A33';
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isActive = e.currentTarget.getAttribute('data-active') === 'true';
    if (!isActive) {
      if (e.currentTarget.getAttribute('data-type') === 'category') {
        e.currentTarget.style.color = 'var(--text-primary)';
      } else {
        e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    async function loadApiData() {
      try {
        const data = await initializeApiData();
        setCategories(data);
      } catch (error) {
        console.error('Error loading API data:', error);
        // Fall back to current API_DATA
        setCategories(API_DATA);
      } finally {
        setLoading(false);
      }
    }

    loadApiData();

    // Close mobile menu when screen size changes to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <>
        <div className="md:hidden sticky top-16 z-10 bg-bg-secondary p-4 border-b border-border-color">
          <div className="animate-pulse h-8 w-36 bg-bg-tertiary rounded"></div>
        </div>
        <div className="hidden md:block w-64 flex-shrink-0 bg-bg-secondary border-r border-border-color p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-32 bg-bg-tertiary rounded"></div>
            <div className="h-6 w-48 bg-bg-tertiary rounded"></div>
            <div className="h-6 w-40 bg-bg-tertiary rounded"></div>
          </div>
        </div>
      </>
    );
  }

  // Sidebar content component to reuse in both mobile and desktop views
  const SidebarContent = () => (
    <div className="space-y-6">
      <div>
        <Link 
          href="/authentication"
          style={activeEndpoint === 'authentication' ? linkStyles.active : linkStyles.normal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-active={activeEndpoint === 'authentication'}
          data-type="link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Authentication
        </Link>
      </div>
      
      <div>
        <Link 
          href="/errors"
          style={activeEndpoint === 'errors' ? linkStyles.active : linkStyles.normal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-active={activeEndpoint === 'errors'}
          data-type="link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Errors
        </Link>
      </div>

      {categories.map((category) => (
        <div key={category.name}>
          <Link 
            href={`/reference/${category.id}`}
            style={activeEndpoint === category.id ? linkStyles.categoryActive : linkStyles.categoryNormal}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-active={activeEndpoint === category.id}
            data-type="category"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {category.name} <br />
            <span className="text-xs text-text-secondary">Introduction</span>
          </Link>
          <div className="space-y-1">
            {category.endpoints.map((endpoint) => (
              <Link
                key={endpoint.id}
                href={`/reference/${category.id}/${endpoint.id}`}
                style={activeEndpoint === endpoint.id ? linkStyles.active : linkStyles.normal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                data-active={activeEndpoint === endpoint.id}
                data-type="link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className={`inline-block w-12 text-xs font-mono mr-2 text-center px-1 py-0.5 rounded 
                    ${endpoint.method === 'GET' ? 'method-get' : ''}
                    ${endpoint.method === 'POST' ? 'method-post' : ''}
                    ${endpoint.method === 'PUT' ? 'method-put' : ''}
                    ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
                  `}>
                    {endpoint.method}
                  </span>
                  <span className="truncate">{endpoint.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden sticky top-16 z-10 bg-bg-secondary p-4 border-b border-border-color">
        <button 
          onClick={toggleMobileMenu}
          className="flex items-center justify-between w-full"
        >
          <span className="font-medium text-text-primary">API Navigation</span>
          <svg 
            className={`w-5 h-5 text-text-primary transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border-color z-10 overflow-y-auto max-h-[70vh]">
          <div className="p-4">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0 bg-bg-secondary border-r border-border-color overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {/* <img 
                src="/lemulogo.png" 
                alt="Lemu API"
                className="h-8 w-auto" 
                width={100}
                height={100}
              /> */}
              <h2 className="ml-2 text-lg font-semibold text-text-primary">API Reference</h2>
            </div>
          </div>
          
          <SidebarContent />
        </div>
      </div>
    </>
  );
} 