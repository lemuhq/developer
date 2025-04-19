import ApiSidebar from '@/app/components/ApiSidebar';

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen">
      <ApiSidebar activeEndpoint="authentication" />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-gray-200 mb-6 pb-4">
            <h1 className="text-2xl font-bold mb-2">Authentication</h1>
            <p className="text-gray-600">Learn how to authenticate with the Lemu API</p>
          </div>

          <div className="prose prose-blue max-w-none">
            <h2>API Keys</h2>
            <p>
              The Lemu API uses API keys to authenticate requests. You can view and manage your API keys in the developer dashboard.
            </p>
            <p>
              Your API keys carry many privileges, so be sure to keep them secure! Do not share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
            </p>

            <h2>Authentication</h2>
            <p>
              Authentication to the API is performed via HTTP Headers. Provide your API key and secret as values for the <code>X-API-Key</code> and <code>X-API-Secret</code> headers with every request.
            </p>

            <div className="bg-gray-50 p-4 rounded-md my-4">
              <pre className="text-sm overflow-x-auto">
                {`X-API-Key: YOUR_API_KEY
X-API-Secret: YOUR_API_SECRET`}
              </pre>
            </div>

            <h2>Example Request</h2>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                cURL
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto font-mono">
{`curl --request GET \\
  --url http://localhost:5000/api/v1/developer/banks/list \\
  --header "X-API-Key: YOUR_API_KEY" \\
  --header "X-API-Secret: YOUR_API_SECRET"`}
                </pre>
              </div>
            </div>

            <h2>Error Responses</h2>
            <p>
              If authentication fails, the API will respond with a <code>401 Unauthorized</code> status code.
            </p>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 mb-6">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm">
                Error Response
              </div>
              <div className="p-4">
                <pre className="text-sm overflow-x-auto font-mono">
{`{
  "status": "error",
  "message": "Invalid API credentials"
}`}
                </pre>
              </div>
            </div>

            <h2>API Key Security</h2>
            <p>Here are some best practices for keeping your API keys secure:</p>
            <ul>
              <li>Store API keys in environment variables, not in your application's source code</li>
              <li>Do not expose API keys in client-side JavaScript</li>
              <li>Restrict your API keys to specific IPs if possible</li>
              <li>Regularly audit and rotate your API keys</li>
            </ul>

            <h2>Rate Limiting</h2>
            <p>
              To protect our service from abuse, the Lemu API implements rate limiting. The current rate limit is 100 requests per minute per API key.
            </p>
            <p>
              If you exceed the rate limit, the API will respond with a <code>429 Too Many Requests</code> status code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 