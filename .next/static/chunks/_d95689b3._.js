(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/api/apiData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_DATA": (()=>API_DATA)
});
const API_DATA = [
    {
        id: 'banks',
        name: 'Banks',
        description: 'Endpoints for managing bank operations',
        endpoints: [
            {
                id: 'get-banks',
                name: 'Get Bank List',
                description: 'Retrieve a list of supported banks',
                method: 'GET',
                url: '/api/v1/banks',
                responses: {
                    '200': {
                        description: 'List of banks retrieved successfully',
                        example: {
                            status: 'success',
                            data: {
                                banks: [
                                    {
                                        id: 'bank_123',
                                        name: 'First Bank',
                                        code: '011',
                                        country: 'NG',
                                        currency: 'NGN'
                                    },
                                    {
                                        id: 'bank_456',
                                        name: 'Access Bank',
                                        code: '044',
                                        country: 'NG',
                                        currency: 'NGN'
                                    }
                                ]
                            }
                        }
                    },
                    '401': {
                        description: 'Unauthorized. Authentication failed',
                        example: {
                            status: 'error',
                            message: 'Authentication failed. Invalid API key'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X GET \\\n  https://api.lemu.co/api/v1/banks \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
                    javascript: "fetch('https://api.lemu.co/api/v1/banks', {\n  method: 'GET',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY'\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));",
                    python: "import requests\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY'\n}\n\nresponse = requests.get('https://api.lemu.co/api/v1/banks', headers=headers)\n\nprint(response.json())"
                }
            },
            {
                id: 'verify-bank-account',
                name: 'Verify Bank Account',
                description: 'Verify a bank account by providing account details',
                method: 'POST',
                url: '/api/v1/banks/verify',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                requestBody: {
                    account_number: '0123456789',
                    bank_code: '011'
                },
                responses: {
                    '200': {
                        description: 'Bank account verified successfully',
                        example: {
                            status: 'success',
                            data: {
                                account_number: '0123456789',
                                account_name: 'John Doe',
                                bank_code: '011',
                                bank_name: 'First Bank'
                            }
                        }
                    },
                    '400': {
                        description: 'Bad request: Invalid account details',
                        example: {
                            status: 'error',
                            code: 'invalid_account',
                            message: 'Could not resolve account details'
                        }
                    },
                    '401': {
                        description: 'Unauthorized: Invalid or missing API key',
                        example: {
                            status: 'error',
                            code: 'unauthorized',
                            message: 'Invalid API key provided'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X POST 'https://api.lemu.africa/v1/banks/verify' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"account_number\":\"0123456789\",\"bank_code\":\"011\"}'",
                    javascript: "const verifyAccount = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/banks/verify', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        account_number: '0123456789',\n        bank_code: '011'\n      })\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error verifying account:', error);\n  }\n};",
                    python: "import requests\nimport json\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\npayload = {\n    'account_number': '0123456789',\n    'bank_code': '011'\n}\n\nresponse = requests.post('https://api.lemu.africa/v1/banks/verify', headers=headers, data=json.dumps(payload))\ndata = response.json()\nprint(data)"
                }
            }
        ]
    },
    {
        id: 'transactions',
        name: 'Transactions',
        description: 'Initiate and manage financial transactions',
        endpoints: [
            {
                id: 'initiate-transfer',
                name: 'Initiate Transfer',
                description: 'Initiate a transfer from your wallet to a bank account',
                method: 'POST',
                url: '/api/v1/transactions/transfer',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                requestBody: {
                    amount: 5000,
                    account_number: '0123456789',
                    bank_code: '011',
                    description: 'Payment for services',
                    reference: 'TR_123456789'
                },
                responses: {
                    '200': {
                        description: 'Transfer initiated successfully',
                        example: {
                            status: 'success',
                            data: {
                                id: 'txn_123abc',
                                amount: 5000,
                                recipient: {
                                    account_number: '0123456789',
                                    bank_code: '011',
                                    account_name: 'John Doe'
                                },
                                description: 'Payment for services',
                                reference: 'TR_123456789',
                                status: 'pending',
                                created_at: '2023-01-01T12:00:00Z'
                            }
                        }
                    },
                    '400': {
                        description: 'Bad request: Invalid transfer details',
                        example: {
                            status: 'error',
                            code: 'invalid_transfer',
                            message: 'Invalid transfer details provided'
                        }
                    },
                    '401': {
                        description: 'Unauthorized: Invalid or missing API key',
                        example: {
                            status: 'error',
                            code: 'unauthorized',
                            message: 'Invalid API key provided'
                        }
                    },
                    '422': {
                        description: 'Insufficient funds in wallet',
                        example: {
                            status: 'error',
                            code: 'insufficient_funds',
                            message: 'Insufficient funds in wallet'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X POST 'https://api.lemu.africa/v1/transactions/transfer' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"amount\": 5000,\n    \"account_number\": \"0123456789\",\n    \"bank_code\": \"011\",\n    \"description\": \"Payment for services\",\n    \"reference\": \"TR_123456789\"\n  }'",
                    javascript: "const initiateTransfer = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/transactions/transfer', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        amount: 5000,\n        account_number: '0123456789',\n        bank_code: '011',\n        description: 'Payment for services',\n        reference: 'TR_123456789'\n      })\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error initiating transfer:', error);\n  }\n};",
                    python: "import requests\nimport json\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\npayload = {\n    'amount': 5000,\n    'account_number': '0123456789',\n    'bank_code': '011',\n    'description': 'Payment for services',\n    'reference': 'TR_123456789'\n}\n\nresponse = requests.post('https://api.lemu.africa/v1/transactions/transfer', headers=headers, data=json.dumps(payload))\ndata = response.json()\nprint(data)"
                }
            },
            {
                id: 'get-transaction',
                name: 'Get Transaction',
                description: 'Retrieve details of a specific transaction',
                method: 'GET',
                url: '/api/v1/transactions/{id}',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                parameters: {
                    id: {
                        type: 'string',
                        description: 'Unique identifier for the transaction',
                        required: true
                    }
                },
                responses: {
                    '200': {
                        description: 'Transaction details retrieved successfully',
                        example: {
                            status: 'success',
                            data: {
                                id: 'txn_123abc',
                                amount: 5000,
                                recipient: {
                                    account_number: '0123456789',
                                    bank_code: '011',
                                    account_name: 'John Doe'
                                },
                                description: 'Payment for services',
                                reference: 'TR_123456789',
                                status: 'success',
                                created_at: '2023-01-01T12:00:00Z',
                                updated_at: '2023-01-01T12:05:00Z'
                            }
                        }
                    },
                    '404': {
                        description: 'Transaction not found',
                        example: {
                            status: 'error',
                            code: 'not_found',
                            message: 'Transaction not found'
                        }
                    },
                    '401': {
                        description: 'Unauthorized: Invalid or missing API key',
                        example: {
                            status: 'error',
                            code: 'unauthorized',
                            message: 'Invalid API key provided'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X GET 'https://api.lemu.africa/v1/transactions/txn_123abc' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
                    javascript: "const getTransaction = async (transactionId) => {\n  try {\n    const response = await fetch(`https://api.lemu.africa/v1/transactions/${transactionId}`, {\n      method: 'GET',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching transaction:', error);\n  }\n};",
                    python: "import requests\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\ntransaction_id = 'txn_123abc'\nresponse = requests.get(f'https://api.lemu.africa/v1/transactions/{transaction_id}', headers=headers)\ndata = response.json()\nprint(data)"
                }
            }
        ]
    },
    {
        id: 'webhooks',
        name: 'Webhooks',
        description: 'Configure and manage webhooks for real-time notifications',
        endpoints: [
            {
                id: 'create-webhook',
                name: 'Create Webhook',
                description: 'Create a webhook to receive notifications for specific events',
                method: 'POST',
                url: '/api/v1/webhooks',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                requestBody: {
                    url: 'https://your-domain.com/webhook',
                    events: [
                        'transaction.success',
                        'transaction.failed'
                    ],
                    description: 'Webhook for transaction events'
                },
                responses: {
                    '201': {
                        description: 'Webhook created successfully',
                        example: {
                            status: 'success',
                            data: {
                                id: 'wh_123abc',
                                url: 'https://your-domain.com/webhook',
                                events: [
                                    'transaction.success',
                                    'transaction.failed'
                                ],
                                description: 'Webhook for transaction events',
                                active: true,
                                created_at: '2023-01-01T12:00:00Z'
                            }
                        }
                    },
                    '400': {
                        description: 'Bad request: Invalid webhook details',
                        example: {
                            status: 'error',
                            code: 'invalid_webhook',
                            message: 'Invalid webhook URL provided'
                        }
                    },
                    '401': {
                        description: 'Unauthorized: Invalid or missing API key',
                        example: {
                            status: 'error',
                            code: 'unauthorized',
                            message: 'Invalid API key provided'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X POST 'https://api.lemu.africa/v1/webhooks' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"url\": \"https://your-domain.com/webhook\",\n    \"events\": [\"transaction.success\", \"transaction.failed\"],\n    \"description\": \"Webhook for transaction events\"\n  }'",
                    javascript: "const createWebhook = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/webhooks', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        url: 'https://your-domain.com/webhook',\n        events: ['transaction.success', 'transaction.failed'],\n        description: 'Webhook for transaction events'\n      })\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error creating webhook:', error);\n  }\n};",
                    python: "import requests\nimport json\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\npayload = {\n    'url': 'https://your-domain.com/webhook',\n    'events': ['transaction.success', 'transaction.failed'],\n    'description': 'Webhook for transaction events'\n}\n\nresponse = requests.post('https://api.lemu.africa/v1/webhooks', headers=headers, data=json.dumps(payload))\ndata = response.json()\nprint(data)"
                }
            },
            {
                id: 'list-webhooks',
                name: 'List Webhooks',
                description: 'Retrieve a list of all webhooks configured for your account',
                method: 'GET',
                url: '/api/v1/webhooks',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                responses: {
                    '200': {
                        description: 'List of webhooks retrieved successfully',
                        example: {
                            status: 'success',
                            data: {
                                webhooks: [
                                    {
                                        id: 'wh_123abc',
                                        url: 'https://your-domain.com/webhook',
                                        events: [
                                            'transaction.success',
                                            'transaction.failed'
                                        ],
                                        description: 'Webhook for transaction events',
                                        active: true,
                                        created_at: '2023-01-01T12:00:00Z'
                                    },
                                    {
                                        id: 'wh_456def',
                                        url: 'https://your-domain.com/other-webhook',
                                        events: [
                                            'account.created'
                                        ],
                                        description: 'Webhook for account events',
                                        active: true,
                                        created_at: '2023-01-02T12:00:00Z'
                                    }
                                ]
                            }
                        }
                    },
                    '401': {
                        description: 'Unauthorized: Invalid or missing API key',
                        example: {
                            status: 'error',
                            code: 'unauthorized',
                            message: 'Invalid API key provided'
                        }
                    }
                },
                sampleCode: {
                    curl: "curl -X GET 'https://api.lemu.africa/v1/webhooks' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
                    javascript: "const fetchWebhooks = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/webhooks', {\n      method: 'GET',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching webhooks:', error);\n  }\n};",
                    python: "import requests\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\nresponse = requests.get('https://api.lemu.africa/v1/webhooks', headers=headers)\ndata = response.json()\nprint(data)"
                }
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ApiSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApiSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ApiSidebar({ activeEndpoint }) {
    _s();
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_DATA"].map({
        "ApiSidebar.useState": (cat)=>cat.name
    }["ApiSidebar.useState"]));
    const toggleCategory = (categoryName)=>{
        if (expandedCategories.includes(categoryName)) {
            setExpandedCategories(expandedCategories.filter((name)=>name !== categoryName));
        } else {
            setExpandedCategories([
                ...expandedCategories,
                categoryName
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden md:block w-64 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-md",
                            children: "L"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "ml-2 text-lg font-semibold text-gray-900",
                            children: "API Reference"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ApiSidebar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/authentication",
                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === 'authentication' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`,
                                children: "Authentication"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/errors",
                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === 'errors' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`,
                                children: "Errors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_DATA"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-gray-900 text-xs uppercase tracking-wide pt-4 px-3 mb-2",
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: category.endpoints.map((endpoint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/reference/${endpoint.id}`,
                                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === endpoint.id ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block w-12 text-xs font-mono mr-2 text-center px-1 py-0.5 rounded 
                        ${endpoint.method === 'GET' ? 'method-get' : ''}
                        ${endpoint.method === 'POST' ? 'method-post' : ''}
                        ${endpoint.method === 'PUT' ? 'method-put' : ''}
                        ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
                      `,
                                                            children: endpoint.method
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: endpoint.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            }, endpoint.id, false, {
                                                fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category.name, true, {
                                fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ApiSidebar.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ApiSidebar.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ApiSidebar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ApiSidebar, "aX0e+q033h4/lF+zEQSQ80bUQ7w=");
_c = ApiSidebar;
var _c;
__turbopack_context__.k.register(_c, "ApiSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/reference/[endpointId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EndpointPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ApiSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function generateStaticParams() {
    const endpoints = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_DATA"].flatMap((category)=>category.endpoints.map((endpoint)=>({
                endpointId: endpoint.id
            })));
    return endpoints;
}
function getEndpoint(endpointId) {
    for (const category of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_DATA"]){
        const endpoint = category.endpoints.find((e)=>e.id === endpointId);
        if (endpoint) return endpoint;
    }
    return undefined;
}
function EndpointPage({ params }) {
    _s();
    const endpointId = params?.endpointId;
    if (!endpointId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const endpoint = getEndpoint(endpointId);
    if (!endpoint) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const [activeResponse, setActiveResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(endpoint.responses && Object.keys(endpoint.responses).length > 0 ? Object.keys(endpoint.responses)[0] : "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeEndpoint: endpointId
            }, void 0, false, {
                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-200 mb-8 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mb-2 text-gray-900",
                                    children: endpoint.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-mono px-2 py-1 mr-2 rounded-md
                ${endpoint.method === 'GET' ? 'method-get' : ''}
                ${endpoint.method === 'POST' ? 'method-post' : ''}
                ${endpoint.method === 'PUT' ? 'method-put' : ''}
                ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
              `,
                                            children: endpoint.method
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-gray-600",
                                            children: endpoint.url
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-gray-600",
                                    children: endpoint.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 text-primary",
                                    children: "Request"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        endpoint.headers && Object.keys(endpoint.headers).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium mb-3 text-gray-900",
                                                    children: "Headers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-md border border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "min-w-full divide-y divide-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Header"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 82,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Value"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 83,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                        lineNumber: 81,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-gray-200",
                                                                    children: Object.entries(endpoint.headers || {}).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm font-mono",
                                                                                    children: key
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 89,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm font-mono",
                                                                                    children: value
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 90,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, key, true, {
                                                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        endpoint.parameters && Object.entries(endpoint.parameters).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium mb-3 text-gray-900",
                                                    children: "Parameters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-md border border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "min-w-full divide-y divide-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Parameter"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 108,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 109,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Required"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 110,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                                children: "Description"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                lineNumber: 111,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-gray-200",
                                                                    children: Object.entries(endpoint.parameters).map(([name, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm font-mono",
                                                                                    children: name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 117,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm",
                                                                                    children: param.type
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 118,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm",
                                                                                    children: param.required ? 'Yes' : 'No'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 119,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-2 text-sm",
                                                                                    children: param.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                                    lineNumber: 120,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, name, true, {
                                                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        endpoint.requestBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium mb-3 text-gray-900",
                                                    children: "Request Body"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-md border border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-sm overflow-x-auto font-mono",
                                                        children: JSON.stringify(endpoint.requestBody, null, 2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-primary",
                                            children: "Responses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        endpoint.responses && Object.keys(endpoint.responses).length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex rounded-md shadow-sm",
                                            children: Object.entries(endpoint.responses).map(([status, response])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setActiveResponse(status),
                                                    className: `relative inline-flex items-center px-3 py-2 text-sm font-medium 
                      ${activeResponse === status ? parseInt(status) >= 200 && parseInt(status) < 300 ? 'bg-green-100 text-green-800 border border-green-200 z-10' : parseInt(status) >= 400 ? 'bg-red-100 text-red-800 border border-red-200 z-10' : 'bg-yellow-100 text-yellow-800 border border-yellow-200 z-10' : 'bg-white text-gray-700 hover:text-gray-500 border border-gray-300 z-0'} ${status === Object.keys(endpoint.responses)[0] ? 'rounded-l-md' : ''} 
                      ${status === Object.keys(endpoint.responses)[Object.keys(endpoint.responses).length - 1] ? 'rounded-r-md' : ''}`,
                                                    children: status
                                                }, status, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: endpoint.responses && activeResponse && endpoint.responses[activeResponse] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm px-2 py-1 rounded-md mr-2 ${parseInt(activeResponse) >= 200 && parseInt(activeResponse) < 300 ? 'bg-green-100 text-green-800' : parseInt(activeResponse) >= 400 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                        children: activeResponse
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: endpoint.responses[activeResponse].description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            endpoint.responses[activeResponse].example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50 rounded-lg overflow-hidden border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm",
                                                        children: "Response Body"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            className: "text-sm overflow-x-auto font-mono",
                                                            children: JSON.stringify(endpoint.responses[activeResponse].example, null, 2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        endpoint.sampleCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 text-primary",
                                    children: "Code Examples"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        endpoint.sampleCode.curl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg overflow-hidden border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm",
                                                    children: "cURL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-sm overflow-x-auto font-mono",
                                                        children: endpoint.sampleCode.curl
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        endpoint.sampleCode.javascript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg overflow-hidden border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm",
                                                    children: "JavaScript"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-sm overflow-x-auto font-mono",
                                                        children: endpoint.sampleCode.javascript
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        endpoint.sampleCode.python && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg overflow-hidden border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-100 px-4 py-2 border-b border-gray-200 font-mono text-sm",
                                                    children: "Python"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-sm overflow-x-auto font-mono",
                                                        children: endpoint.sampleCode.python
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(EndpointPage, "7kKcv0lNLqMJeX+jiCFHhEamUf0=");
_c = EndpointPage;
var _c;
__turbopack_context__.k.register(_c, "EndpointPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_d95689b3._.js.map