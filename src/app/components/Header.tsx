'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Set up theme toggle functionality
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-mode');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    // Add transition class for smooth transitions
    document.documentElement.classList.add('theme-transition');
    
    // Toggle dark mode
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
    
    // Remove transition class after transition completes to avoid transition
    // when not explicitly toggling theme
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 500);
  };

  const generateDummyApiKey = () => {
    setApiKey(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    setApiSecret(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    setIsApiKeyModalOpen(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="backdrop-blur-md bg-terminal-bg/80 shadow-md z-50 sticky top-0 border-b border-terminal-border">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3">
                  L
                </div>
                <span className="ml-2 text-xl font-bold text-white drop-shadow-sm transition-all duration-300 group-hover:translate-x-1">Lemu API</span>
              </Link>
            </div>
            <nav className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link 
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:text-primary hover:border-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
              <Link 
                href="/authentication"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:text-primary hover:border-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Authentication
              </Link>
              <Link 
                href="/errors"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:text-primary hover:border-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Errors
              </Link>
              {/* <div className="relative group">
                <button 
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:text-primary hover:border-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  API Reference
                  <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div 
                  className={`absolute z-10 transform transition-all duration-200 origin-top-right mt-1 w-56 rounded-xl shadow-lg bg-terminal-bg/95 backdrop-blur-md border border-terminal-border ring-1 ring-black/10 ${
                    isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  style={{ left: '-8px' }}
                >
                  <div className="py-2 rounded-xl overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="px-3 py-1.5 text-xs uppercase tracking-wider text-gray-400 border-b border-terminal-border/40 mb-1">
                      API Endpoints
                    </div>
                    <Link href="/reference/get-bank-list" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50">
                      <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">GET</span>
                      <span>Get Bank List</span>
                    </Link>
                    <Link href="/reference/verify-bank-account" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50">
                      <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                      <span>Verify Bank Account</span>
                    </Link>
                    <Link href="/reference/initiate-transfer" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50">
                      <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                      <span>Initiate Transfer</span>
                    </Link>
                    <Link href="/reference/get-transaction" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50">
                      <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">GET</span>
                      <span>Get Transaction</span>
                    </Link>
                    <Link href="/reference/create-webhook" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50">
                      <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                      <span>Create Webhook</span>
                    </Link>
                  </div>
                </div>
              </div> */}
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme}
              className="mr-4 theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="theme-toggle-track">
                <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
                <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="theme-toggle-thumb"></div>
            </button>

            <button 
              onClick={generateDummyApiKey}
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Get API Key</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Theme toggle button (mobile) */}
            <button 
              onClick={toggleTheme}
              className="mr-2 theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="theme-toggle-track">
                <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
                <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="theme-toggle-thumb"></div>
            </button>

            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-terminal-border/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-terminal-bg/95 backdrop-blur-md animate-fadeIn border-t border-terminal-border/50">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/authentication" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Authentication
            </Link>
            <Link 
              href="/errors" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Errors
            </Link>
            <div>
              <button 
                className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                onClick={() => document.getElementById('mobile-api-menu')?.classList.toggle('hidden')}
              >
                API Reference
              </button>
              <div id="mobile-api-menu" className="pl-6 space-y-1 hidden">
                <div className="py-1.5 text-xs uppercase tracking-wider text-gray-400 border-l-4 border-terminal-border/40 pl-4 my-2">
                  API Endpoints
                </div>
                <Link 
                  href="/reference/get-bank-list" 
                  className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">GET</span>
                  <span>Get Bank List</span>
                </Link>
                <Link 
                  href="/reference/verify-bank-account" 
                  className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                  <span>Verify Bank Account</span>
                </Link>
                <Link 
                  href="/reference/initiate-transfer" 
                  className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                  <span>Initiate Transfer</span>
                </Link>
                <Link 
                  href="/reference/get-transaction" 
                  className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">GET</span>
                  <span>Get Transaction</span>
                </Link>
                <Link 
                  href="/reference/create-webhook" 
                  className="flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-300 hover:bg-terminal-border/30 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="inline-block w-6 h-6 mr-2 bg-primary/10 rounded-md flex items-center justify-center text-primary text-xs">POST</span>
                  <span>Create Webhook</span>
                </Link>
              </div>
            </div>
            <div className="mt-4 mx-4">
              <button 
                onClick={generateDummyApiKey}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                Get API Key
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* API Key Modal */}
      {isApiKeyModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity backdrop-blur-sm" onClick={() => setIsApiKeyModalOpen(false)}>
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="inline-block align-bottom bg-terminal-bg rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 border border-terminal-border">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 shadow-inner">
                  <svg className="h-6 w-6 text-orange-600 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-white">Your API Keys</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400 mb-1">Keep these secure. You'll need them to authenticate your API requests.</p>
                    
                    <div className="mt-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-left text-gray-300">API Key</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            value={apiKey}
                            readOnly
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-terminal-border bg-terminal-header text-terminal-text sm:text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(apiKey)}
                            className="inline-flex items-center px-3 py-2 border border-l-0 border-terminal-border bg-terminal-border/50 text-gray-300 rounded-r-md hover:bg-terminal-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-left text-gray-300">API Secret</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            value={apiSecret}
                            readOnly
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-terminal-border bg-terminal-header text-terminal-text sm:text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(apiSecret)}
                            className="inline-flex items-center px-3 py-2 border border-l-0 border-terminal-border bg-terminal-border/50 text-gray-300 rounded-r-md hover:bg-terminal-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:flex sm:justify-end">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center px-4 py-2 text-base font-medium text-gray-300 border border-terminal-border rounded-md shadow-sm bg-terminal-border/30 hover:bg-terminal-border/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto transition-colors"
                    onClick={() => setIsApiKeyModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}