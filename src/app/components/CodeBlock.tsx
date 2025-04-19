'use client';

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ApiEndpoint } from '../types/api';
import { getCodeSample } from '../api/codeSamples';

const SUPPORTED_LANGUAGES = [
  { value: 'curl', label: 'cURL' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'php', label: 'PHP' }
];

interface CodeBlockProps {
  endpoint: ApiEndpoint;
}

export default function CodeBlock({ endpoint }: CodeBlockProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('curl');
  const [codeSample, setCodeSample] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setCodeSample(getCodeSample(endpoint, selectedLanguage));
  }, [endpoint, selectedLanguage]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeSample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const getLanguageForHighlighting = (lang: string): string => {
    switch (lang) {
      case 'curl': return 'bash';
      case 'javascript': return 'javascript';
      case 'python': return 'python';
      case 'php': return 'php';
      default: return 'bash';
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex space-x-2">
          {SUPPORTED_LANGUAGES.map(lang => (
            <button
              key={lang.value}
              onClick={() => setSelectedLanguage(lang.value)}
              className={`px-3 py-1 text-sm rounded-md ${
                selectedLanguage === lang.value
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
        <button
          onClick={copyToClipboard}
          className="text-sm px-3 py-1 rounded-md hover:bg-gray-200 flex items-center gap-1"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-0">
        <SyntaxHighlighter
          language={getLanguageForHighlighting(selectedLanguage)}
          style={coldarkDark}
          customStyle={{ margin: 0, borderRadius: 0 }}
          showLineNumbers
        >
          {codeSample}
        </SyntaxHighlighter>
      </div>
    </div>
  );
} 