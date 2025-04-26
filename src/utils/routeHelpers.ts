// Helper functions for Next.js dynamic routes

/**
 * Safely resolves and handles params for dynamic routes
 * Use this in any dynamic route component to avoid the params Promise issue
 */
export async function resolveRouteParams<T extends Record<string, any>>(params: T | Promise<T>): Promise<T> {
  return Promise.resolve(params);
}

/**
 * Safely access a parameter value with a fallback
 */
export function safeParam(params: Record<string, string> | undefined | null, key: string, fallback: string = ''): string {
  if (!params) return fallback;
  return params[key] || fallback;
}

/**
 * Safely extract all needed params at once from a params object
 */
export async function extractParams<T extends Record<string, string>>(
  params: T | Promise<T>, 
  keys: string[]
): Promise<Record<string, string>> {
  const resolvedParams = await resolveRouteParams(params);
  
  return keys.reduce((result, key) => {
    result[key] = safeParam(resolvedParams, key);
    return result;
  }, {} as Record<string, string>);
} 