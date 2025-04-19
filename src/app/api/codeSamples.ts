import { ApiEndpoint } from '../types/api';

// Helper function to generate curl code samples
export function getCurlCode(endpoint: ApiEndpoint): string {
  const method = endpoint.method;
  const url = `http://localhost:5000${endpoint.path}`;
  
  let curlCommand = `curl --request ${method} \\\n`;
  curlCommand += `  --url "${url.replace(/:([^/]+)/g, '{$1}')}" \\\n`;
  
  // Add headers
  endpoint.headers.forEach(header => {
    curlCommand += `  --header "${header.name}: ${header.value}" \\\n`;
  });
  
  // Add content type header for requests with body
  if (endpoint.requestBody && Object.keys(endpoint.requestBody.content).length > 0) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    curlCommand += `  --header "Content-Type: ${contentType}" \\\n`;
  }
  
  // Add request body for POST/PUT methods
  if ((method === 'POST' || method === 'PUT') && endpoint.requestBody) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    const exampleBody = JSON.stringify(endpoint.requestBody.content[contentType].example, null, 2);
    curlCommand += `  --data '${exampleBody}'`;
  }
  
  return curlCommand;
}

// Generate JavaScript/Node.js code sample using fetch
export function getJavaScriptCode(endpoint: ApiEndpoint): string {
  const method = endpoint.method;
  const url = `http://localhost:5000${endpoint.path}`;
  
  let jsCode = "// Using fetch API\n";
  jsCode += "const options = {\n";
  jsCode += `  method: "${method}",\n`;
  
  // Add headers
  jsCode += "  headers: {\n";
  endpoint.headers.forEach(header => {
    jsCode += `    "${header.name}": "${header.value}",\n`;
  });
  
  // Add content type header for requests with body
  if (endpoint.requestBody && Object.keys(endpoint.requestBody.content).length > 0) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    jsCode += `    "Content-Type": "${contentType}"\n`;
  } else {
    jsCode = jsCode.slice(0, -2) + "\n"; // Remove trailing comma
  }
  jsCode += "  },\n";
  
  // Add request body for POST/PUT methods
  if ((method === 'POST' || method === 'PUT') && endpoint.requestBody) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    const exampleBody = JSON.stringify(endpoint.requestBody.content[contentType].example, null, 2);
    jsCode += `  body: JSON.stringify(${exampleBody.replace(/"/g, "'").replace(/\n/g, '\n  ')})\n`;
  }
  
  jsCode += "};\n\n";
  
  // URL with parameter placeholders
  const formattedUrl = url.replace(/:([^/]+)/g, "${$1}");
  
  jsCode += `fetch("${formattedUrl}", options)\n`;
  jsCode += "  .then(response => response.json())\n";
  jsCode += "  .then(data => console.log(data))\n";
  jsCode += "  .catch(error => console.error('Error:', error));";
  
  return jsCode;
}

// Generate Python code sample using requests library
export function getPythonCode(endpoint: ApiEndpoint): string {
  const method = endpoint.method.toLowerCase();
  const url = `http://localhost:5000${endpoint.path}`;
  
  let pythonCode = "import requests\n\n";
  
  // Headers
  pythonCode += "headers = {\n";
  endpoint.headers.forEach(header => {
    pythonCode += `    "${header.name}": "${header.value}",\n`;
  });
  
  // Add content type header for requests with body
  if (endpoint.requestBody && Object.keys(endpoint.requestBody.content).length > 0) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    pythonCode += `    "Content-Type": "${contentType}"\n`;
  } else {
    pythonCode = pythonCode.slice(0, -2) + "\n"; // Remove trailing comma
  }
  pythonCode += "}\n\n";
  
  // URL with parameter placeholders
  const formattedUrl = url.replace(/:([^/]+)/g, "{$1}");
  
  // Request body for POST/PUT methods
  if ((method === 'post' || method === 'put') && endpoint.requestBody) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    const exampleBody = JSON.stringify(endpoint.requestBody.content[contentType].example, null, 4);
    pythonCode += `payload = ${exampleBody.replace(/"/g, "'")}\n\n`;
    pythonCode += `response = requests.${method}("${formattedUrl}", headers=headers, json=payload)\n`;
  } else {
    pythonCode += `response = requests.${method}("${formattedUrl}", headers=headers)\n`;
  }
  
  pythonCode += "print(response.json())";
  
  return pythonCode;
}

// Generate PHP code sample using cURL
export function getPHPCode(endpoint: ApiEndpoint): string {
  const method = endpoint.method;
  const url = `http://localhost:5000${endpoint.path}`;
  
  let phpCode = "<?php\n\n";
  phpCode += "$curl = curl_init();\n\n";
  
  // Options array
  phpCode += "curl_setopt_array($curl, [\n";
  phpCode += `    CURLOPT_URL => "${url.replace(/:([^/]+)/g, '{$1}')}",\n`;
  phpCode += "    CURLOPT_RETURNTRANSFER => true,\n";
  phpCode += "    CURLOPT_FOLLOWLOCATION => true,\n";
  phpCode += `    CURLOPT_CUSTOMREQUEST => "${method}",\n`;
  
  // Headers
  phpCode += "    CURLOPT_HTTPHEADER => [\n";
  endpoint.headers.forEach(header => {
    phpCode += `        "${header.name}: ${header.value}",\n`;
  });
  
  // Add content type header for requests with body
  if (endpoint.requestBody && Object.keys(endpoint.requestBody.content).length > 0) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    phpCode += `        "Content-Type: ${contentType}"\n`;
  } else {
    phpCode = phpCode.slice(0, -2) + "\n"; // Remove trailing comma
  }
  phpCode += "    ],\n";
  
  // Request body for POST/PUT methods
  if ((method === 'POST' || method === 'PUT') && endpoint.requestBody) {
    const contentType = Object.keys(endpoint.requestBody.content)[0];
    const exampleBody = JSON.stringify(endpoint.requestBody.content[contentType].example);
    phpCode += `    CURLOPT_POSTFIELDS => '${exampleBody}'\n`;
  } else {
    phpCode = phpCode.slice(0, -2) + "\n"; // Remove trailing comma
  }
  
  phpCode += "]);\n\n";
  phpCode += "$response = curl_exec($curl);\n";
  phpCode += "$err = curl_error($curl);\n\n";
  phpCode += "curl_close($curl);\n\n";
  phpCode += "if ($err) {\n";
  phpCode += "    echo \"cURL Error: \" . $err;\n";
  phpCode += "} else {\n";
  phpCode += "    echo $response;\n";
  phpCode += "}\n";
  
  return phpCode;
}

// Get code sample for a specific language
export function getCodeSample(endpoint: ApiEndpoint, language: string): string {
  switch (language.toLowerCase()) {
    case 'curl':
      return getCurlCode(endpoint);
    case 'javascript':
    case 'node':
      return getJavaScriptCode(endpoint);
    case 'python':
      return getPythonCode(endpoint);
    case 'php':
      return getPHPCode(endpoint);
    default:
      return getCurlCode(endpoint);
  }
} 