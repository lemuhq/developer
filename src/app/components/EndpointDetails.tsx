'use client';

import { useState } from 'react';
import { Endpoint } from '@/app/api/apiData';
import React from 'react';

interface EndpointDetailsProps {
  endpoint: Endpoint;
}

// Define the code language keys matching the Endpoint interface
type SupportedCodeLanguageKey = 
  'curl' | 'javascript' | 'python' | 'ruby' | 'go' | 'java' | 'csharp' | 'php' | 'nodejs' |
  'kotlin' | 'swift' | 'rust' | 'dart' | 'elixir' | 'powershell' | 'bash' | 'perl' | 'r' | 
  'scala' | 'haskell' | 'clojure' | 'typescript' | 'groovy' | 'lua';

// Define all potential code languages for display
const CODE_LANGUAGES: Record<string, string> = {
  curl: 'cURL',
  javascript: 'JavaScript',
  nodejs: 'Node.js',
  python: 'Python',
  ruby: 'Ruby',
  go: 'Go',
  java: 'Java',
  csharp: 'C#',
  php: 'PHP',
  kotlin: 'Kotlin',
  swift: 'Swift',
  rust: 'Rust',
  dart: 'Dart',
  elixir: 'Elixir',
  powershell: 'PowerShell',
  bash: 'Bash',
  perl: 'Perl',
  r: 'R',
  scala: 'Scala',
  haskell: 'Haskell',
  clojure: 'Clojure',
  typescript: 'TypeScript',
  groovy: 'Groovy',
  lua: 'Lua'
};

type HeaderValue = string | {
  type: string;
  description?: string;
};

type RequestBodyParam = {
  type: string;
  required: boolean;
  description: string;
};

// Helper function to format code for VS Code-like syntax highlighting 
function formatVSCodeNodeJs(code: string): React.ReactNode {
  // Split the code into lines to apply line numbers
  const lines = code.split('\n');
  
  // Function to tokenize different parts of the code
  const tokenize = (line: string): string => {
    let tokenized = line;
    
    // Process in specific order to avoid conflicts

    // Comments first (so we don't highlight strings inside comments)
    tokenized = tokenized.replace(/(\/\/.*$)/g, '<span class="token-comment">$1</span>');
    
    // Keywords
    tokenized = tokenized.replace(/\b(const|let|var|function|async|await|return|if|else|try|catch|for|while|import|from|export|default)\b/g, 
      '<span class="token-const">$1</span>');
    
    // Function declarations - this needs to happen before method calls
    tokenized = tokenized.replace(/\b(function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, 
      '<span class="token-const">$1</span> <span class="token-function-name">$2</span>');
    
    // Async function declarations
    tokenized = tokenized.replace(/\b(async)\s+\b(function)\b\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, 
      '<span class="token-const">$1</span> <span class="token-const">$2</span> <span class="token-function-name">$3</span>');
    
    // Arrow functions with explicit name (const foo = () => {})
    tokenized = tokenized.replace(/\b(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, 
      '<span class="token-const">$1</span> <span class="token-function-name">$2</span> =');
    
    // Method calls
    tokenized = tokenized.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, 
      '<span class="token-method">$1</span>(');
    
    // String literals - handling both single and double quotes
    tokenized = tokenized.replace(/(['"])((?:\\\1|(?:(?!\1).))*)(\1)/g, 
      '<span class="token-string">$1$2$3</span>');
    
    // Properties (after dot notation)
    tokenized = tokenized.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, 
      '.<span class="token-property">$1</span>');
    
    // Numbers
    tokenized = tokenized.replace(/\b(\d+\.?\d*|\.\d+)\b/g, 
      '<span class="token-number">$1</span>');
    
    // Boolean, null, undefined
    tokenized = tokenized.replace(/\b(true|false|null|undefined)\b/g, 
      '<span class="token-boolean">$1</span>');
    
    // Common built-in functions and objects
    tokenized = tokenized.replace(/\b(require|console|Object|Array|String|Number|Boolean|Math|JSON|Promise)\b/g, 
      '<span class="token-function-name">$1</span>');
    
    // Special operators
    tokenized = tokenized.replace(/\b(new|typeof|instanceof)\b/g, 
      '<span class="token-const">$1</span>');
    
    // Object literal keys
    tokenized = tokenized.replace(/(^\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, 
      '$1<span class="token-property">$2</span>:');
    
    return tokenized;
  };

  // Find a good line to highlight (look for a function call or declaration)
  let highlightLine = 1; // Default to line 1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('function') || lines[i].includes('axios(') || lines[i].includes('await')) {
      highlightLine = i;
      break;
    }
  }

  return (
    <React.Fragment>
      {lines.map((line, index) => (
        <code key={index} className={index === highlightLine ? 'current-line' : ''} dangerouslySetInnerHTML={{ __html: tokenize(line) }} />
      ))}
    </React.Fragment>
  );
}

// Format JSON with proper VS Code syntax highlighting
function formatVSCodeJson(code: string): React.ReactNode {
  let jsonObj;
  try {
    jsonObj = JSON.parse(code);
    code = JSON.stringify(jsonObj, null, 2);
  } catch (e) {
    // If parsing fails, just use the original code
  }

  const lines = code.split('\n');
  
  const tokenize = (line: string): string => {
    let tokenized = line;
    
    // Keys in JSON (always in double quotes)
    tokenized = tokenized.replace(/("([^"\\]*(?:\\.[^"\\]*)*)")\s*:/g, 
      '<span class="token-property">$1</span>:');
    
    // String values
    tokenized = tokenized.replace(/:\s*("([^"\\]*(?:\\.[^"\\]*)*)")/g, 
      ': <span class="token-string">$1</span>');
    
    // Numbers
    tokenized = tokenized.replace(/:\s*(-?\d+\.?\d*)/g, 
      ': <span class="token-number">$1</span>');
    
    // Boolean and null
    tokenized = tokenized.replace(/:\s*(true|false|null)/g, 
      ': <span class="token-boolean">$1</span>');
    
    return tokenized;
  };
  
  return (
    <React.Fragment>
      {lines.map((line, index) => (
        <code key={index} dangerouslySetInnerHTML={{ __html: tokenize(line) }} />
      ))}
    </React.Fragment>
  );
}

// Format a code sample with VS Code-like styling based on language
function formatCodeWithVSCode(code: string, language: string): React.ReactNode {
  switch (language.toLowerCase()) {
    case 'nodejs':
    case 'javascript':
      return formatVSCodeNodeJs(code);
    case 'json':
      return formatVSCodeJson(code);
    // Add other language formatters as needed
    default:
      // For other languages just render with line numbers
      return code.split('\n').map((line, index) => (
        <code key={index}>{line}</code>
      ));
  }
}

export default function EndpointDetails({ endpoint }: EndpointDetailsProps) {
  const [activeResponse, setActiveResponse] = useState<string>(
    endpoint.responses && Object.keys(endpoint.responses).length > 0
      ? Object.keys(endpoint.responses)[0]
      : ''
  );

  // Get available code languages from endpoint
  const availableLanguages = endpoint.sampleCode ? 
    (Object.keys(endpoint.sampleCode).filter(lang => 
      endpoint.sampleCode?.[lang as keyof typeof endpoint.sampleCode]
    ) as SupportedCodeLanguageKey[]) : [];

  const [activeCodeExample, setActiveCodeExample] = useState<SupportedCodeLanguageKey>(
    availableLanguages.length > 0 ? availableLanguages[0] : 'curl'
  );

  const getMethodClass = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'method-get';
      case 'POST':
        return 'method-post';
      case 'PUT':
        return 'method-put';
      case 'DELETE':
        return 'method-delete';
      default:
        return 'bg-bg-tertiary text-text-primary';
    }
  };

  const getStatusClass = (status: string) => {
    const statusCode = parseInt(status);
    if (statusCode >= 200 && statusCode < 300) {
      return 'bg-emerald-900/70 text-emerald-300 border-emerald-800/50';
    } else if (statusCode >= 400) {
      return 'bg-rose-900/70 text-rose-300 border-rose-800/50';
    } else {
      return 'bg-amber-900/70 text-amber-300 border-amber-800/50';
    }
  };

  // When rendering a code example
  const renderVSCodeEditor = (code: string, language: string) => {
    return (
      <div className="terminal-window border-0 shadow-lg">
        <div className="terminal-header">
          <div className="flex items-center">
            <span className="text-xs text-terminal-header-text mr-2">{CODE_LANGUAGES[language as SupportedCodeLanguageKey]}</span>
            <span className="text-xs text-terminal-header-text border border-terminal-border rounded px-1">index.js</span>
          </div>
          <div className="terminal-controls">
            <div className="terminal-control bg-red-500 opacity-70"></div>
            <div className="terminal-control bg-yellow-500 opacity-70"></div>
            <div className="terminal-control bg-green-500 opacity-70"></div>
          </div>
        </div>
        <div className="terminal-content relative">
          <div className="vscode-minimap"></div>
          <pre>{formatCodeWithVSCode(code, language)}</pre>
        </div>
        <div className="terminal-status-bar">
          <div className="terminal-status-left">
            <span className="editor-extension">JavaScript</span>
            <span className="editor-extension">UTF-8</span>
          </div>
          <div className="terminal-status-right">
            <span className="line-col-indicator">Ln 2, Col 12</span>
            <span className="line-col-indicator">Spaces: 2</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-terminal-bg/60 backdrop-blur-sm rounded-xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-start">
          <div className={`${getMethodClass(endpoint.method)} font-mono py-1 px-3 rounded-md text-sm font-semibold mr-2`}>
            {endpoint.method.toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">{endpoint.name}</h1>
        </div>
        
        <div className="mt-2 flex items-center">
          <div className="text-text-primary font-mono">{endpoint.url}</div>
        </div>
        
        <div className="mt-6">
          <p className="text-text-secondary mb-6">{endpoint.description}</p>
        </div>
        
        {endpoint.headers && Object.keys(endpoint.headers).length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">Headers</h2>
            <div className="overflow-hidden shadow-md rounded-lg bg-terminal-header/40">
              <table className="min-w-full">
                <thead className="border-b border-terminal-border/50">
                  <tr className="bg-table-header-bg">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">KEY</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">VALUE</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary">DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-terminal-border/30">
                  {Object.entries(endpoint.headers).map(([key, value]) => {
                    const headerValue = value as HeaderValue;
                    return (
                      <tr key={key} className="hover:bg-terminal-border/20 transition-colors">
                        <td className="py-3 px-4 text-sm text-text-primary font-mono">{key}</td>
                        <td className="py-3 px-4 text-sm text-text-secondary font-mono">{typeof headerValue === 'string' ? headerValue : headerValue.type}</td>
                        <td className="py-3 px-4 text-sm text-text-secondary">{typeof headerValue === 'object' && headerValue.description ? headerValue.description : '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {endpoint.requestBody && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-text-primary mb-3">Request Body</h2>
            <div className="overflow-hidden shadow-md rounded-lg bg-terminal-header/40">
              <table className="min-w-full">
                <thead className="border-b border-terminal-border/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Parameter
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Required
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-terminal-border/30">
                  {Object.entries(endpoint.requestBody).map(([key, param]) => {
                    const requestParam = param as RequestBodyParam;
                    return (
                      <tr key={key} className="hover:bg-terminal-border/20 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-terminal-text">
                          {key}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {requestParam.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {requestParam.required ? 'Yes' : 'No'}
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-400">
                          {requestParam.description}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {endpoint.responses && Object.keys(endpoint.responses).length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-text-primary">Responses</h2>
              <div className="flex overflow-hidden rounded-md bg-terminal-header/60">
                {Object.keys(endpoint.responses).map((status, index) => {
                  const isFirst = index === 0;
                  const isLast = index === Object.keys(endpoint.responses).length - 1;
                  let roundedClass = '';
                  if (isFirst) roundedClass = 'rounded-l-md';
                  if (isLast) roundedClass += ' rounded-r-md';
                  
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveResponse(status)}
                      className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 border-r last:border-r-0 first:rounded-l-md last:rounded-r-md ${
                        activeResponse === status
                          ? `${getStatusClass(status)} shadow-inner`
                          : 'text-text-secondary hover:bg-bg-tertiary'
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {activeResponse && endpoint.responses[activeResponse] && (
              <div className="bg-terminal-header/40 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <p className="text-gray-300 mb-4">{endpoint.responses[activeResponse].description}</p>
                {endpoint.responses[activeResponse].example && (
                  <div className="terminal-window border-0">
                    <div className="terminal-header">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-400 mr-2">JSON</span>
                        <span className="text-xs text-gray-500 border border-gray-700 rounded px-1">response.json</span>
                      </div>
                      <div className="terminal-controls">
                        <div className="terminal-control bg-red-500 opacity-70"></div>
                        <div className="terminal-control bg-yellow-500 opacity-70"></div>
                        <div className="terminal-control bg-green-500 opacity-70"></div>
                      </div>
                    </div>
                    <div className="terminal-content relative">
                      <div className="vscode-minimap"></div>
                      <pre>{formatVSCodeJson(JSON.stringify(endpoint.responses[activeResponse].example, null, 2))}</pre>
                    </div>
                    <div className="terminal-status-bar">
                      <div className="terminal-status-left">
                        <span className="editor-extension">JSON</span>
                        <span className="editor-extension">UTF-8</span>
                      </div>
                      <div className="terminal-status-right">
                        <span className="line-col-indicator">Ln 1, Col 1</span>
                        <span className="line-col-indicator">Spaces: 2</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        {endpoint.sampleCode && Object.keys(endpoint.sampleCode).length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-text-primary">Code Examples</h2>
              <div className="relative">
                <select
                  value={activeCodeExample}
                  onChange={(e) => setActiveCodeExample(e.target.value as SupportedCodeLanguageKey)}
                  className="px-3 py-2 text-sm font-medium text-gray-300 bg-terminal-header/80 border border-terminal-border/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none pl-3 pr-10 bg-none cursor-pointer min-w-[140px]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {availableLanguages.map(lang => (
                    <option key={lang} value={lang} className="bg-terminal-header text-gray-300">
                      {CODE_LANGUAGES[lang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {endpoint.sampleCode && endpoint.sampleCode[activeCodeExample] && (
              renderVSCodeEditor(endpoint.sampleCode[activeCodeExample], activeCodeExample)
            )}
          </div>
        )}
      </div>
    </div>
  );
} 