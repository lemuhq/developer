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
      {lines.map((line, index) => {
        // Apply syntax highlighting with React components instead of HTML strings
        const highlightedLine = highlightJsLine(line);
        return (
          <code key={index} className={index === highlightLine ? 'current-line' : ''}>
            {highlightedLine}
          </code>
        );
      })}
    </React.Fragment>
  );
}

// Helper function to highlight JS code without HTML strings
function highlightJsLine(line: string): React.ReactNode {
  // Tokenize the line into parts that need different styling
  const parts: {text: string, type?: string}[] = [];
  
  // Simple lexer (this is a simplified version - a real one would be more robust)
  
  // Handle comments
  const commentMatch = line.match(/(\/\/.*$)/);
  if (commentMatch && commentMatch.index !== undefined) {
    if (commentMatch.index > 0) {
      parts.push({text: line.substring(0, commentMatch.index)});
    }
    parts.push({text: commentMatch[0], type: 'comment'});
    return renderParts(parts);
  }
  
  // Very basic implementation that handles common cases
  // Keywords
  const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'return', 
                   'if', 'else', 'try', 'catch', 'for', 'while', 'import', 'from'];
  
  // Split the line by spaces and punctuation to identify potential tokens
  const tokens = line.split(/([{}\[\](),.:;=+\-*/<>!&|\s])/);
  
  tokens.forEach(token => {
    if (!token) return; // Skip empty tokens
    
    if (keywords.includes(token)) {
      parts.push({text: token, type: 'keyword'});
    } else if (token === 'true' || token === 'false' || token === 'null' || token === 'undefined') {
      parts.push({text: token, type: 'boolean'});
    } else if (/^["'].*["']$/.test(token)) {
      parts.push({text: token, type: 'string'});
    } else if (/^\d+$/.test(token)) {
      parts.push({text: token, type: 'number'});
    } else if (/^[A-Z][a-zA-Z0-9_]*$/.test(token)) {
      parts.push({text: token, type: 'class'});
    } else if (/^[a-z][a-zA-Z0-9_]*$/.test(token) && tokens[tokens.indexOf(token) + 1] === '(') {
      parts.push({text: token, type: 'function'});
    } else {
      parts.push({text: token});
    }
  });
  
  return renderParts(parts);
}

// Render the tokenized parts with appropriate styling
function renderParts(parts: {text: string, type?: string}[]): React.ReactNode {
  return parts.map((part, index) => {
    if (!part.type) return part.text;
    
    const className = `token-${part.type}`;
    return (
      <span key={index} className={className}>
        {part.text}
      </span>
    );
  });
}

// Format JSON with proper VS Code syntax highlighting
function formatVSCodeJson(code: string): React.ReactNode {
  let jsonObj;
  try {
    jsonObj = JSON.parse(code);
    code = JSON.stringify(jsonObj, null, 2);
  } catch (error) {
    // If parsing fails, just use the original code
    console.error('Error parsing JSON:', error);
  }

  const lines = code.split('\n');
  
  return (
    <React.Fragment>
      {lines.map((line, index) => {
        // Use React components for JSON highlighting
        const highlightedLine = highlightJsonLine(line);
        return (
          <code key={index}>
            {highlightedLine}
          </code>
        );
      })}
    </React.Fragment>
  );
}

// Helper function to highlight JSON without HTML strings
function highlightJsonLine(line: string): React.ReactNode {
  const parts: {text: string, type?: string}[] = [];
  
  // Very basic implementation that handles common JSON cases
  
  // Property keys (in double quotes, followed by colon)
  const keyMatch = line.match(/^(\s*)("([^"\\]*(?:\\.[^"\\]*)*)")\s*:/);
  if (keyMatch) {
    parts.push({text: keyMatch[1]}); // Indentation
    parts.push({text: keyMatch[2], type: 'property'}); // Key with quotes
    
    // Get the rest of the line (the value)
    const restOfLine = line.substring(keyMatch[0].length);
    
    // Check for string values
    const stringMatch = restOfLine.match(/^\s*("([^"\\]*(?:\\.[^"\\]*)*)")/);
    if (stringMatch) {
      parts.push({text: ': '}); // The colon and space
      parts.push({text: stringMatch[1], type: 'string'}); // The string value
    } 
    // Check for number values
    else if (/^\s*(-?\d+\.?\d*)/.test(restOfLine)) {
      const numMatch = restOfLine.match(/^\s*(-?\d+\.?\d*)/);
      if (numMatch) {
        parts.push({text: ': '}); // The colon and space
        parts.push({text: numMatch[1], type: 'number'}); // The number value
      }
    }
    // Check for boolean and null values 
    else if (/^\s*(true|false|null)/.test(restOfLine)) {
      const boolMatch = restOfLine.match(/^\s*(true|false|null)/);
      if (boolMatch) {
        parts.push({text: ': '}); // The colon and space
        parts.push({text: boolMatch[1], type: 'boolean'}); // The boolean/null value
      }
    }
    // If no specific value type is matched
    else {
      parts.push({text: restOfLine}); // Just add the rest as plain text
    }
    
    return renderParts(parts);
  }
  
  // If no key pattern is found, return the line as is
  return line;
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
  const [activeResponse, setActiveResponse] = useState<string>('200');
  const [activeLanguage, setActiveLanguage] = useState<string>('javascript');

  // All languages to show in the dropdown menu
  const popularLanguages: SupportedCodeLanguageKey[] = [
    'curl', 'javascript', 'typescript', 'python', 'nodejs', 'ruby', 'go', 'java', 
    'csharp', 'php', 'kotlin', 'swift', 'rust', 'dart', 'elixir', 'powershell', 
    'bash', 'perl', 'r', 'scala', 'haskell', 'clojure', 'groovy', 'lua'
  ];

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
            <span className="text-xs text-terminal-header-text mr-2 font-mono">{`// ${CODE_LANGUAGES[language as SupportedCodeLanguageKey]}`}</span>
            <span className="text-xs text-terminal-header-text border border-terminal-border rounded px-1 font-mono">{language}.{language === 'javascript' || language === 'typescript' ? 'js' : language === 'python' ? 'py' : language === 'go' ? 'go' : 'code'}</span>
          </div>
          <div className="terminal-controls">
            <div className="terminal-control bg-red-500 opacity-70"></div>
            <div className="terminal-control bg-yellow-500 opacity-70"></div>
            <div className="terminal-control bg-green-500 opacity-70"></div>
          </div>
        </div>
        <div className="terminal-content relative">
          <div className="vscode-minimap"></div>
          <pre className="font-mono">{formatCodeWithVSCode(code, language)}</pre>
        </div>
        <div className="terminal-status-bar">
          <div className="terminal-status-left">
            <span className="editor-extension font-mono">{language.toUpperCase()}</span>
            <span className="editor-extension font-mono">UTF-8</span>
          </div>
          <div className="terminal-status-right">
            <span className="line-col-indicator font-mono">Ln 2, Col 12</span>
            <span className="line-col-indicator font-mono">Spaces: 2</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-terminal-bg/80 backdrop-blur-sm rounded-xl shadow-xl p-6 relative overflow-hidden border border-terminal-border">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-start">
          <div className={`${getMethodClass(endpoint.method)} font-mono py-1 px-3 rounded-md text-sm font-semibold mr-2`}>
            {endpoint.method.toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-text-primary font-mono">{endpoint.name}</h1>
        </div>
        
        <div className="mt-2 flex items-center">
          <div className="text-text-primary font-mono">{endpoint.url}</div>
        </div>
        
        <div className="mt-6">
          <p className="text-text-secondary mb-6 font-mono">{endpoint.description}</p>
        </div>
        
        {endpoint.headers && Object.keys(endpoint.headers).length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4 font-mono">{`// Headers`}</h2>
            <div className="overflow-hidden shadow-md rounded-lg bg-terminal-header/40 border border-terminal-border">
              <table className="min-w-full">
                <thead className="border-b border-terminal-border/50">
                  <tr className="bg-table-header-bg">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary font-mono">KEY</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary font-mono">VALUE</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-text-primary font-mono">DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-terminal-border/30">
                  {Object.entries(endpoint.headers).map(([key, value]) => {
                    const headerValue = value as HeaderValue;
                    return (
                      <tr key={key} className="hover:bg-terminal-border/20 transition-colors">
                        <td className="py-3 px-4 text-sm text-text-primary font-mono">{key}</td>
                        <td className="py-3 px-4 text-sm text-text-secondary font-mono">{typeof headerValue === 'string' ? headerValue : headerValue.type}</td>
                        <td className="py-3 px-4 text-sm text-text-secondary font-mono">{typeof headerValue === 'object' && headerValue.description ? headerValue.description : '-'}</td>
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
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-text-primary font-mono">{`// Request Body`}</h2>
              <div className="relative">
                <select
                  value={activeLanguage}
                  onChange={(e) => setActiveLanguage(e.target.value)}
                  className="px-3 py-2 text-sm font-medium text-gray-300 bg-terminal-header/80 border border-terminal-border/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent-light appearance-none pl-3 pr-10 bg-none cursor-pointer min-w-[140px] font-mono"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {popularLanguages.map(lang => (
                    <option key={lang} value={lang} className="bg-terminal-header text-gray-300 font-mono">
                      {CODE_LANGUAGES[lang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Code example based on the selected language */}
            <div className="bg-terminal-header/40 backdrop-blur-sm rounded-lg p-0 shadow-lg mb-6 border border-terminal-border">
              {renderVSCodeEditor(generateRequestExample(endpoint, activeLanguage), activeLanguage)}
            </div>
            
            {/* Parameters table */}
            <h3 className="text-md font-semibold text-text-primary mb-3 font-mono">{`// Parameters`}</h3>
            <div className="overflow-hidden shadow-md rounded-lg bg-terminal-header/40 mb-8 border border-terminal-border">
              <table className="min-w-full">
                <thead className="border-b border-terminal-border/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider font-mono">
                      Parameter
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider font-mono">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider font-mono">
                      Required
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider font-mono">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-terminal-border/30">
                  {Object.entries(endpoint.requestBody).map(([key, param]) => {
                    const requestParam = param as RequestBodyParam;
                    return (
                      <tr key={key} className="hover:bg-terminal-border/20 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent-light font-mono">
                          {key}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          <span className="px-2 py-1 bg-terminal-border/30 rounded text-xs font-mono text-accent-light">
                            {requestParam.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {requestParam.required ? (
                            <span className="px-2 py-1 bg-terminal-border/30 text-blue-300 rounded text-xs font-mono">Yes</span>
                          ) : (
                            <span className="px-2 py-1 bg-terminal-border/30 text-gray-400 rounded text-xs font-mono">No</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-400 font-mono">
                          {requestParam.description}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Example request payload */}
            <h3 className="text-md font-semibold text-text-primary mb-3 font-mono">{`// Example Payload`}</h3>
            <div className="bg-terminal-header/40 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-terminal-border">
              <div className="terminal-window border-0">
                <div className="terminal-header">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-2 font-mono">{`// JSON`}</span>
                    <span className="text-xs text-gray-500 border border-gray-700 rounded px-1 font-mono">payload.json</span>
                  </div>
                  <div className="terminal-controls">
                    <div className="terminal-control bg-red-500 opacity-70"></div>
                    <div className="terminal-control bg-yellow-500 opacity-70"></div>
                    <div className="terminal-control bg-green-500 opacity-70"></div>
                  </div>
                </div>
                <div className="terminal-content p-4">
                  <pre className="text-sm font-mono">
                    {formatVSCodeJson(generateRequestBodyExample(endpoint.requestBody))}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {endpoint.responses && Object.keys(endpoint.responses).length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-text-primary font-mono">{`// Responses`}</h2>
              <div className="flex overflow-hidden rounded-md bg-terminal-header/60">
                {Object.keys(endpoint.responses).map((status, index) => {
                  const isFirst = index === 0;
                  const isLast = index === Object.keys(endpoint.responses).length - 1;
                  let roundedClass = '';
                  if (isFirst) roundedClass = 'rounded-l-md';
                  if (isLast) roundedClass += ' rounded-r-md';
                  
                  const isActive = activeResponse === status;
                  
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveResponse(status)}
                      className={`
                        px-4 py-2 text-sm font-medium border font-mono 
                        ${getStatusClass(status)}
                        ${isActive ? 'border-opacity-100 opacity-100' : 'border-opacity-50 opacity-75 hover:opacity-90'}
                        transition-all duration-150 ease-in-out
                        ${roundedClass}
                      `}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {activeResponse && endpoint.responses[activeResponse] && (
              <div className="bg-terminal-header/40 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-terminal-border">
                <p className="text-gray-300 mb-4 font-mono">{endpoint.responses[activeResponse].description}</p>
                {endpoint.responses[activeResponse].example && (
                  <div className="terminal-window border-0">
                    <div className="terminal-header">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-400 mr-2 font-mono">{`// JSON`}</span>
                        <span className="text-xs text-gray-500 border border-gray-700 rounded px-1 font-mono">response.json</span>
                      </div>
                      <div className="terminal-controls">
                        <div className="terminal-control bg-red-500 opacity-70"></div>
                        <div className="terminal-control bg-yellow-500 opacity-70"></div>
                        <div className="terminal-control bg-green-500 opacity-70"></div>
                      </div>
                    </div>
                    <div className="terminal-content relative">
                      <div className="vscode-minimap"></div>
                      <pre className="font-mono">{formatVSCodeJson(JSON.stringify(endpoint.responses[activeResponse].example, null, 2))}</pre>
                    </div>
                    <div className="terminal-status-bar">
                      <div className="terminal-status-left">
                        <span className="editor-extension font-mono">JSON</span>
                        <span className="editor-extension font-mono">UTF-8</span>
                      </div>
                      <div className="terminal-status-right">
                        <span className="line-col-indicator font-mono">Ln 1, Col 1</span>
                        <span className="line-col-indicator font-mono">Spaces: 2</span>
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
              <h2 className="text-lg font-semibold text-text-primary font-mono">{`// Code Examples`}</h2>
              <div className="relative">
                <select
                  value={activeCodeExample}
                  onChange={(e) => setActiveCodeExample(e.target.value as SupportedCodeLanguageKey)}
                  className="px-3 py-2 text-sm font-medium text-gray-300 bg-terminal-header/80 border border-terminal-border/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent-light appearance-none pl-3 pr-10 bg-none cursor-pointer min-w-[140px] font-mono"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {availableLanguages.map(lang => (
                    <option key={lang} value={lang} className="bg-terminal-header text-gray-300 font-mono">
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

// Generate example request code based on language
function generateRequestExample(endpoint: Endpoint, language: string): string {
  const url = endpoint.url; // Use endpoint URL directly without prepending api.example.com
  const method = endpoint.method.toUpperCase();
  const headers = endpoint.headers || {};
  const requestBody = generateRequestBodyExample(endpoint.requestBody);
  
  switch (language) {
    case 'curl':
      return generateCurlExample(url, method, headers, requestBody);
    case 'javascript':
      return generateJavaScriptExample(url, method, headers, requestBody);
    case 'typescript':
      return generateTypeScriptExample(url, method, headers, requestBody);
    case 'python':
      return generatePythonExample(url, method, headers, requestBody);
    case 'nodejs':
      return generateNodeJsExample(url, method, headers, requestBody);
    case 'ruby':
      return generateRubyExample(url, method, headers, requestBody);
    case 'go':
      return generateGoExample(url, method, headers, requestBody);
    case 'java':
      return generateJavaExample(url, method, headers, requestBody);
    case 'csharp':
      return generateCSharpExample(url, method, headers, requestBody);
    case 'php':
      return generatePHPExample(url, method, headers, requestBody);
    case 'kotlin':
      return generateKotlinExample(url, method, headers, requestBody);
    case 'swift':
      return generateSwiftExample(url, method, headers, requestBody);
    case 'rust':
      return generateRustExample(url, method, headers, requestBody);
    case 'dart':
      return generateDartExample(url, method, headers, requestBody);
    case 'elixir':
      return generateElixirExample(url, method, headers, requestBody);
    case 'powershell':
      return generatePowerShellExample(url, method, headers, requestBody);
    case 'bash':
      return generateBashExample(url, method, headers, requestBody);
    case 'perl':
      return generatePerlExample(url, method, headers, requestBody);
    case 'r':
      return generateRExample(url, method, headers, requestBody);
    case 'scala':
      return generateScalaExample(url, method, headers, requestBody);
    case 'haskell':
      return generateHaskellExample(url, method, headers, requestBody);
    case 'clojure':
      return generateClojureExample(url, method, headers, requestBody);
    case 'groovy':
      return generateGroovyExample(url, method, headers, requestBody);
    case 'lua':
      return generateLuaExample(url, method, headers, requestBody);
    default:
      return generateCurlExample(url, method, headers, requestBody);
  }
}

function generateRequestBodyExample(requestBody: Record<string, any> | undefined): string {
  if (!requestBody) return '{}';
  
  const example: Record<string, any> = {};
  
  Object.entries(requestBody).forEach(([key, param]) => {
    const typedParam = param as RequestBodyParam;
    
    // Check if typedParam and typedParam.type exist before using toLowerCase()
    if (!typedParam || !typedParam.type) {
      example[key] = null;
      return;
    }
    
    switch (typedParam.type.toLowerCase()) {
      case 'string':
        example[key] = key === 'bankCode' ? 'BOFA' : 
                       key === 'accountNumber' ? '1234567890' : 
                       `example_${key}`;
        break;
      case 'number':
        example[key] = 123456;
        break;
      case 'boolean':
        example[key] = true;
        break;
      case 'object':
        example[key] = { id: 'obj_123', name: 'Example Object' };
        break;
      case 'array':
        example[key] = ['item1', 'item2', 'item3'];
        break;
      default:
        example[key] = null;
    }
  });
  
  return JSON.stringify(example, null, 2);
}

function generateCurlExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headerLines = Object.entries(headers)
    .map(([key, value]) => `  -H "${key}: ${typeof value === 'string' ? value : value.type}"`)
    .join(' \\\n');
    
  const bodyLine = (method === 'POST' || method === 'PUT') ? 
    `  -d '${body.replace(/'/g, "\\'")}'` : '';
    
  return `curl -X ${method} \\
  ${url} \\
${headerLines}${bodyLine ? ' \\\n' + bodyLine : ''}`;
}

function generateJavaScriptExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersObj = Object.entries(headers)
    .map(([key, value]) => `    "${key}": "${typeof value === 'string' ? value : value.type}"`)
    .join(',\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `,\n  body: JSON.stringify(${body})` : '';
    
  return `// Using fetch API
const response = await fetch("${url}", {
  method: "${method}",
  headers: {
${headersObj}
  }${bodyParam}
});

const data = await response.json();
console.log(data);`;
}

function generatePythonExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersDict = Object.entries(headers)
    .map(([key, value]) => `    "${key}": "${typeof value === 'string' ? value : value.type}"`)
    .join(',\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\njson_data = ${body.replace(/"/g, "'")}\n` : '';
    
  const dataParam = (method === 'POST' || method === 'PUT') ? 
    `, json=json_data` : '';
    
  return `import requests

${bodyParam}headers = {
${headersDict}
}

response = requests.${method.toLowerCase()}("${url}", headers=headers${dataParam})
data = response.json()
print(data)`;
}

function generateNodeJsExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersObj = Object.entries(headers)
    .map(([key, value]) => `    "${key}": "${typeof value === 'string' ? value : value.type}"`)
    .join(',\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\nconst data = ${body};\n` : '';
    
  const axiosConfig = (method === 'POST' || method === 'PUT') ? 
    `, data` : '';
    
  return `const axios = require('axios');
${bodyParam}
async function makeRequest() {
  const config = {
    method: '${method.toLowerCase()}',
    url: '${url}',
    headers: {
${headersObj}
    }${axiosConfig}
  };
  
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
}

makeRequest();`;
}

function generateRubyExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersHash = Object.entries(headers)
    .map(([key, value]) => `  '${key}' => '${typeof value === 'string' ? value : value.type}'`)
    .join(',\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `,\n  body: ${body.replace(/"/g, "'").replace(/\\'/g, "'")}` : '';
    
  return `require 'uri'
require 'net/http'
require 'json'

uri = URI('${url}')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::${method.charAt(0).toUpperCase() + method.slice(1).toLowerCase()}.new(uri)
${headersHash.length > 0 ? `
# Headers
request.initialize_http_header({
${headersHash}
})` : ''}${bodyParam ? `

# Request body
request.body = ${bodyParam.substring(7)}` : ''}

response = http.request(request)
puts response.body`;
}

function generateGoExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersLines = Object.entries(headers)
    .map(([key, value]) => `\treq.Header.Add("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n\tpayloadBytes := []byte(\`${body}\`)
\tbody := bytes.NewBuffer(payloadBytes)` : '';
  
  const clientParam = (method === 'POST' || method === 'PUT') ? 
    `, body)` : `, nil)`;
    
  return `package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {${bodyParam}

	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("${method}", "${url}"${clientParam})
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Headers
${headersLines}

	// Fetch Request
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error executing request: %v", err)
	}
	defer resp.Body.Close()

	// Read Response Body
	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response: %v", err)
	}

	// Display Results
	fmt.Println(string(respBody))
}`;
}

function generateTypeScriptExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersObj = Object.entries(headers)
    .map(([key, value]) => `    "${key}": "${typeof value === 'string' ? value : value.type}"`)
    .join(',\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `,\n  body: JSON.stringify(${body})` : '';
    
  return `// Using fetch API with TypeScript
interface Response {
  success: boolean;
  data: any;
}

async function fetchData(): Promise<Response> {
  const response = await fetch("${url}", {
    method: "${method}",
    headers: {
${headersObj}
    }${bodyParam}
  });

  return await response.json() as Response;
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;
}

function generateJavaExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersSetters = Object.entries(headers)
    .map(([key, value]) => `    connection.setRequestProperty("${key}", "${typeof value === 'string' ? value : value.type}");`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n    // Send request body
    try (OutputStream os = connection.getOutputStream()) {
      byte[] input = ${body.replace(/"/g, '\\"')}.getBytes("utf-8");
      os.write(input, 0, input.length);
    }` : '';
    
  return `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

public class ApiClient {
  public static void main(String[] args) {
    try {
      URL url = new URL("${url}");
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("${method}");
      connection.setRequestProperty("Content-Type", "application/json");
      connection.setRequestProperty("Accept", "application/json");
${headersSetters}
      connection.setDoOutput(true);${bodyParam}

      // Read the response
      try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
        String response = br.lines().collect(Collectors.joining());
        System.out.println(response);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`;
}

function generateCSharpExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `            client.DefaultRequestHeaders.Add("${key}", "${typeof value === 'string' ? value : value.type}");`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n            var content = new StringContent(${body.replace(/"/g, '\\"')}, Encoding.UTF8, "application/json");
            var response = await client.${method.toLowerCase() === 'post' ? 'PostAsync' : 'PutAsync'}("${url}", content);` : 
    `\n            var response = await client.${method.toLowerCase() === 'get' ? 'GetAsync' : 'DeleteAsync'}("${url}");`;
    
  return `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ApiClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using (var client = new HttpClient())
            {
                // Set headers
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
${headersList}${bodyParam}

                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseBody);
            }
        }
    }
}`;
}

function generatePHPExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    "${key}: ${typeof value === 'string' ? value : value.type}",`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n$data = ${body.replace(/"/g, '\\"')};\n$payload = json_encode($data);` : '';
    
  return `<?php
$curl = curl_init();

${bodyParam}
$headers = [
    "Content-Type: application/json",
    "Accept: application/json",
${headersList}
];

curl_setopt_array($curl, [
    CURLOPT_URL => "${url}",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_CUSTOMREQUEST => "${method}",${method === 'POST' || method === 'PUT' ? '\n    CURLOPT_POSTFIELDS => $payload,' : ''}
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}
?>`;
}

function generateKotlinExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    addHeader("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n    val json = """${body.replace(/"/g, '\\"')}""".trimIndent()
    setBody(json)` : '';
    
  return `import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking

fun main() {
  val client = HttpClient(CIO) {
    install(JsonFeature)
  }
  
  runBlocking {
    try {
      val response: HttpResponse = client.request("${url}") {
        method = HttpMethod.${method}
        headers {
          append(HttpHeaders.ContentType, "application/json")
          append(HttpHeaders.Accept, "application/json")
${headersList}
        }${bodyParam}
      }
      
      println(response.readText())
    } catch (e: Exception) {
      println("Error: \${e.message}")
    } finally {
      client.close()
    }
  }
}`;
}

function generateSwiftExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `request.addValue("${typeof value === 'string' ? value : value.type}", forHTTPHeaderField: "${key}")`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n// Prepare the request body
let bodyData = """
${body.replace(/"/g, '\\"')}
""".data(using: .utf8)
request.httpBody = bodyData` : '';
    
  return `import Foundation

// Create the request
guard let url = URL(string: "${url}") else {
    print("Invalid URL")
    exit(1)
}

var request = URLRequest(url: url)
request.httpMethod = "${method}"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")
request.addValue("application/json", forHTTPHeaderField: "Accept")
${headersList}${bodyParam}

// Create the session
let session = URLSession.shared

// Make the request
let task = session.dataTask(with: request) { (data, response, error) in
    if let error = error {
        print("Error: \\(error)")
        return
    }
    
    if let httpResponse = response as? HTTPURLResponse {
        print("Status code: \\(httpResponse.statusCode)")
    }
    
    if let data = data {
        if let responseString = String(data: data, encoding: .utf8) {
            print("Response: \\(responseString)")
        }
    }
}

task.resume()
// Keep the program running until the request completes
RunLoop.main.run(until: Date(timeIntervalSinceNow: 5))`;
}

function generateRustExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `        .header("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n    let body = ${body.replace(/"/g, '\\"')};
    let res = client.${method.toLowerCase()}(&url)
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
${headersList}
        .json(&body)
        .send()
        .await?;` : 
    `\n    let res = client.${method.toLowerCase()}(&url)
        .header("Accept", "application/json")
${headersList}
        .send()
        .await?;`;
    
  return `use reqwest::Client;
use serde_json::Value;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let client = Client::new();
    let url = "${url}".to_string();${bodyParam}
    
    let body = res.text().await?;
    println!("Response: {}", body);
    
    Ok(())
}`;
}

function generateDartExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    '${key}': '${typeof value === 'string' ? value : value.type}',`)
    .join('\n');
    
  let requestCode;
  if (method.toLowerCase() === 'get') {
    requestCode = `  final response = await http.get(
    Uri.parse('${url}'),
    headers: headers,
  );`;
  } else if (method.toLowerCase() === 'post') {
    requestCode = `  final response = await http.post(
    Uri.parse('${url}'),
    headers: headers,
    body: jsonEncode(${body.replace(/"/g, '\\"')}),
  );`;
  } else if (method.toLowerCase() === 'put') {
    requestCode = `  final response = await http.put(
    Uri.parse('${url}'),
    headers: headers,
    body: jsonEncode(${body.replace(/"/g, '\\"')}),
  );`;
  } else if (method.toLowerCase() === 'delete') {
    requestCode = `  final response = await http.delete(
    Uri.parse('${url}'),
    headers: headers,
  );`;
  }
    
  return `import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  final headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
${headersList}
  };

${requestCode}

  if (response.statusCode == 200) {
    // @ts-ignore - This is Dart code, not TypeScript
    print("Response: \${response.body}");
  } else {
    // @ts-ignore - This is Dart code, not TypeScript
    print("Request failed with status: \${response.statusCode}");
  }
}`;
}

function generateElixirExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    "${key}" => "${typeof value === 'string' ? value : value.type}",`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `,\n    {:body, Jason.encode!(${body.replace(/"/g, '\\"')})}` : '';
    
  return `defmodule ApiClient do
  def fetch_data do
    headers = [
      {"Content-Type", "application/json"},
      {"Accept", "application/json"},
${headersList}
    ]

    options = [
      {:headers, headers}${bodyParam}
    ]

    case HTTPoison.${method.toLowerCase()}("${url}", options) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        IO.puts "Response: #{body}"
        {:ok, Jason.decode!(body)}
      
      {:ok, %HTTPoison.Response{status_code: status_code, body: body}} ->
        IO.puts "Request failed with status code: #{status_code}"
        IO.puts "Response: #{body}"
        {:error, body}
        
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.puts "Error: #{reason}"
        {:error, reason}
    end
  end
end

# Run the fetch_data function
ApiClient.fetch_data()`;
}

function generatePowerShellExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `$headers.Add("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n$body = @'
${body.replace(/"/g, '\\"')}
'@` : '';
    
  return `# PowerShell example for API request
${bodyParam}

$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/json")
$headers.Add("Accept", "application/json")
${headersList}

$response = Invoke-RestMethod '${url}' -Method '${method}' -Headers $headers${(method === 'POST' || method === 'PUT') ? ' -Body $body' : ''}
$response | ConvertTo-Json`;
}

function generateBashExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `  -H '${key}: ${typeof value === 'string' ? value : value.type}'`)
    .join(' \\\n');
    
  const bodyParam = (method === 'POST' || method === 'PUT') ? 
    `\n\n# Request body\nDATA='${body.replace(/'/g, "'\"'\"'")}'` : '';
    
  return `#!/bin/bash
# Bash script to make an API request${bodyParam}

# Make the request
response=$(curl -s -X ${method} \\
  '${url}' \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json' \\
${headersList}${(method === 'POST' || method === 'PUT') ? ' \\\n  -d "$DATA"' : ''})

# Output response
echo "$response" | jq .`;
}

function generatePerlExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `$req->header('${key}' => '${typeof value === 'string' ? value : value.type}');`)
    .join('\n');
    
  return `#!/usr/bin/perl
use strict;
use warnings;
use LWP::UserAgent;
use HTTP::Request;
use JSON;

my $ua = LWP::UserAgent->new;
${method.toLowerCase() === 'get' || method.toLowerCase() === 'delete' ?
`my $req = HTTP::Request->new('${method}', '${url}');` :
`my $req = HTTP::Request->new('${method}', '${url}');
my $content = '${body.replace(/'/g, "\\'")}';
$req->content($content);`}

$req->header('Content-Type' => 'application/json');
$req->header('Accept' => 'application/json');
${headersList}

my $resp = $ua->request($req);

if ($resp->is_success) {
    my $response_data = decode_json($resp->content);
    print "Response: " . $resp->content . "\n";
} else {
    print "HTTP error: " . $resp->status_line . "\n";
}`;
}

function generateRExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    "${key}" = "${typeof value === 'string' ? value : value.type}"`)
    .join(',\n');
    
  return `# Load required libraries
library(httr)
library(jsonlite)

# Define headers
headers <- c(
    "Content-Type" = "application/json",
    "Accept" = "application/json",
${headersList}
)

${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? 
`# Define the body payload
body_data <- '${body.replace(/'/g, "\\'")}'

# Make the request
response <- ${method.toLowerCase()}(
  url = "${url}",
  add_headers(.headers = headers),
  body = body_data,
  encode = "json"
)` : 
`# Make the request
response <- ${method.toLowerCase()}(
  url = "${url}",
  add_headers(.headers = headers)
)`}

# Check response status
if (http_status(response)$category == "Success") {
  # Parse and print the response
  response_content <- content(response, "text")
  response_json <- fromJSON(response_content)
  print(response_json)
} else {
  # Print error message
  print(paste("Error:", http_status(response)$message))
}`;
}

function generateScalaExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `      .header("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  return `import sttp.client3._
import sttp.client3.httpclient.HttpClientSyncBackend

object ApiClient extends App {
  // Create backend
  val backend = HttpClientSyncBackend()
  
  // Define request
  val request = basicRequest
    .url("${url}")
    .method(Method.${method})
    .header("Content-Type", "application/json")
    .header("Accept", "application/json")
${headersList}${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? 
`    .body(s"""${body.replace(/"/g, '\\"')}""")` : ''}
  
  // Execute request
  val response = request.send(backend)
  
  // Handle response
  response.body match {
    case Right(data) => println(s"Response: $data")
    case Left(error) => println(s"Error: $error")
  }
}`;
}

function generateHaskellExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `    , ("${key}", "${typeof value === 'string' ? value : value.type}")`)
    .join('\n');
    
  return `{-# LANGUAGE OverloadedStrings #-}

import Network.HTTP.Simple
import qualified Data.ByteString.Lazy.Char8 as L8
import qualified Data.ByteString.Char8 as S8

main :: IO ()
main = do
  -- Create request
  let request = setRequestMethod "${method}"
              $ setRequestHost "${url.split('/')[2]}"
              $ setRequestPath "/${url.split('/').slice(3).join('/')}"
              $ setRequestHeader "Content-Type" ["application/json"]
              $ setRequestHeader "Accept" ["application/json"]
${headersList.replace(/setRequestHeader/g, '')}${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? 
`              $ setRequestBodyLBS "${body.replace(/"/g, '\\"')}"` : ''}
              $ defaultRequest
  
  -- Send request
  response <- httpLBS request
  
  -- Print response
  putStrLn $ "Status code: " ++ show (getResponseStatusCode response)
  L8.putStrLn $ getResponseBody response`;
}

function generateClojureExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersObj = Object.entries(headers)
    .map(([key, value]) => `     "${key}" "${typeof value === 'string' ? value : value.type}"`)
    .join('\n');
    
  return `(ns api-client.core
  (:require [clj-http.client :as client]
            [cheshire.core :refer :all]))

(defn make-request []
  (try
    (let [response (client/${method.toLowerCase()} "${url}"
                     {:headers {"Content-Type" "application/json"
                               "Accept" "application/json"
${headersObj}}${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? 
`                      :body "${body.replace(/"/g, '\\"')}"
                      :content-type :json` : ''}
                      :throw-exceptions false})]
      (println "Status:" (:status response))
      (println "Body:" (:body response))
      response)
    (catch Exception e
      (println "Error:" (.getMessage e)))))

(make-request)`;
}

function generateGroovyExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `conn.setRequestProperty('${key}', '${typeof value === 'string' ? value : value.type}')`)
    .join('\n');
    
  return `@Grab(group='org.codehaus.groovy.modules.http-builder', module='http-builder', version='0.7.1')

import groovy.json.JsonSlurper
import groovy.json.JsonOutput

// Define URL
def url = new URL('${url}')

// Open connection
def conn = url.openConnection()
conn.requestMethod = '${method}'
conn.setRequestProperty('Content-Type', 'application/json')
conn.setRequestProperty('Accept', 'application/json')
${headersList}
conn.doOutput = true${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? `

// Add request body
def requestBody = ${body.replace(/"/g, '\\"')}
def jsonBody = JsonOutput.toJson(requestBody)
conn.outputStream.write(jsonBody.getBytes("UTF-8"))
conn.outputStream.flush()` : ''}

// Get response
def responseCode = conn.responseCode
// @ts-ignore - This is Groovy code, not TypeScript
println "Response Code: \${responseCode}"

def response = conn.inputStream.withCloseable { inStream ->
    new JsonSlurper().parse(inStream)
}

// @ts-ignore - This is Groovy code, not TypeScript
println "Response: \${JsonOutput.prettyPrint(JsonOutput.toJson(response))}"`;
}

function generateLuaExample(url: string, method: string, headers: Record<string, any>, body: string): string {
  const headersList = Object.entries(headers)
    .map(([key, value]) => `  ["${key}"] = "${typeof value === 'string' ? value : value.type}",`)
    .join('\n');
    
  return `-- Load required libraries
local http = require("socket.http")
local ltn12 = require("ltn12")
local json = require("cjson")

-- Prepare request
local responseBody = {}
local url = "${url}"
local headers = {
  ["Content-Type"] = "application/json",
  ["Accept"] = "application/json",
${headersList}
}${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? `

-- Request body
local requestBody = '${body.replace(/'/g, "\\'")}'` : ''}

-- Send request
local response, status, headers = http.request{
  url = url,
  method = "${method}",
  headers = headers,${method.toLowerCase() === 'post' || method.toLowerCase() === 'put' ? `
  source = ltn12.source.string(requestBody),` : ''}
  sink = ltn12.sink.table(responseBody)
}

-- Handle response
if status == 200 then
  local response_data = table.concat(responseBody)
  print("Response: " .. response_data)
  
  -- Parse JSON response
  local parsed_response = json.decode(response_data)
  
  -- Use parsed_response here
else
  print("Error: " .. status)
end`;
}
