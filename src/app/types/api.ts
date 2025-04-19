export interface ApiEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  authentication: boolean;
  headers: Header[];
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses: Response[];
}

export interface Header {
  name: string;
  value: string;
  description: string;
  required: boolean;
}

export interface Parameter {
  name: string;
  description: string;
  required: boolean;
  type: string;
  default?: string;
}

export interface RequestBody {
  description: string;
  required: boolean;
  content: {
    [key: string]: {
      example: any;
      schema: any;
    };
  };
}

export interface Response {
  status: number;
  description: string;
  content?: {
    [key: string]: {
      example: any;
      schema?: any;
    };
  };
}

export interface ApiCategory {
  name: string;
  description: string;
  endpoints: ApiEndpoint[];
}

export interface CodeSample {
  language: string;
  code: string;
}

export interface ApiKey {
  key: string;
  secret: string;
  createdAt: string;
} 