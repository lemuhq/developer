import ApiSidebar from '@/app/components/ApiSidebar';

export default function ErrorsPage() {
  return (
    <div className="flex min-h-screen">
      <ApiSidebar activeEndpoint="errors" />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-gray-200 mb-6 pb-4">
            <h1 className="text-2xl font-bold mb-2">Errors</h1>
            <p className="text-gray-600">Understand Lemu API error codes and how to handle them</p>
          </div>

          <div className="prose prose-blue max-w-none">
            <p>
              The Lemu API uses conventional HTTP response codes to indicate the success or failure of API requests.
              In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that 
              failed given the information provided (e.g., a required parameter was omitted), and codes in the 5xx 
              range indicate an error with the Lemu servers.
            </p>
            
            <h2 className="mt-6">HTTP Status Codes</h2>
            
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">200 - OK</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Everything worked as expected.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">201 - Created</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      A new resource was successfully created.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">400 - Bad Request</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The request was unacceptable, often due to missing a required parameter.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">401 - Unauthorized</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      No valid API key provided.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">403 - Forbidden</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The API key doesn't have permissions to perform the request.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">404 - Not Found</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The requested resource doesn't exist.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">409 - Conflict</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The request conflicts with another request (same idempotent key).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">429 - Too Many Requests</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">500, 502, 503, 504 - Server Errors</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Something went wrong on Lemu's end.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-8">Error Response Format</h2>
            <p>
              All errors follow a similar response format. Here's an example:
            </p>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 my-4">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                Error Response Example
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto font-mono">
{`{
  "status": "error",
  "code": "invalid_request",
  "message": "The account number provided is invalid",
  "errors": [
    {
      "field": "account_number",
      "message": "Account number must be 10 digits"
    }
  ],
  "request_id": "req_1a2b3c4d5e6f"
}`}
                </pre>
              </div>
            </div>

            <h2 className="mt-6">Common Error Codes</h2>
            
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Error Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">api_key_invalid</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The API key provided is invalid.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">api_key_expired</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The API key provided has expired.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">invalid_request</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The request was invalid. Check the error message for details.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">resource_not_found</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The resource you're trying to access doesn't exist.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">account_invalid</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The account information provided is invalid.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">bank_not_supported</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      The bank you're trying to connect to is not supported.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">rate_limit_exceeded</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      You've exceeded the rate limit for API requests.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">internal_error</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      An internal error occurred on our servers.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-8">Handling Errors</h2>
            <p>
              We recommend writing code that gracefully handles all possible API errors. Here's an example of how to handle errors in JavaScript:
            </p>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 my-4">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                JavaScript Error Handling
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto font-mono">
{`try {
  const response = await fetch('https://api.lemu.com/v1/banks/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY',
      'X-API-Secret': 'YOUR_API_SECRET'
    },
    body: JSON.stringify({
      account_number: '0123456789',
      bank_code: 'SOME_BANK'
    })
  });
  
  const data = await response.json();
  
  if (response.ok) {
    // Handle success
    console.log(data);
  } else {
    // Handle error
    console.error('Error:', data.message);
    
    // Check for specific error types
    if (data.code === 'account_invalid') {
      // Handle invalid account
    } else if (data.code === 'bank_not_supported') {
      // Handle unsupported bank
    }
    
    // Log request ID for support
    console.error('Request ID:', data.request_id);
  }
} catch (error) {
  // Handle network or other errors
  console.error('Network error:', error);
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 