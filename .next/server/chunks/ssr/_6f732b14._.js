module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/api/apiData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
                    python: "import requests\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY'\n}\n\nresponse = requests.get('https://api.lemu.co/api/v1/banks', headers=headers)\n\nprint(response.json())",
                    ruby: "require 'net/http'\nrequire 'uri'\nrequire 'json'\n\nuri = URI.parse('https://api.lemu.co/api/v1/banks')\nrequest = Net::HTTP::Get.new(uri)\nrequest['Authorization'] = 'Bearer YOUR_API_KEY'\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|\n  http.request(request)\nend\n\nputs JSON.parse(response.body)",
                    php: "<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => \"https://api.lemu.co/api/v1/banks\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => [\n    \"Authorization: Bearer YOUR_API_KEY\"\n  ],\n]);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n\necho $response;\n?>",
                    go: "package main\n\nimport (\n\t\"fmt\"\n\t\"io/ioutil\"\n\t\"net/http\"\n)\n\nfunc main() {\n\tclient := &http.Client{}\n\treq, _ := http.NewRequest(\"GET\", \"https://api.lemu.co/api/v1/banks\", nil)\n\treq.Header.Add(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tfmt.Println(\"Error:\", err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}",
                    java: "import java.net.HttpURLConnection;\nimport java.net.URL;\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\n\npublic class GetBanks {\n    public static void main(String[] args) {\n        try {\n            URL url = new URL(\"https://api.lemu.co/api/v1/banks\");\n            HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n            conn.setRequestMethod(\"GET\");\n            conn.setRequestProperty(\"Authorization\", \"Bearer YOUR_API_KEY\");\n\n            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n            String inputLine;\n            StringBuffer response = new StringBuffer();\n            while ((inputLine = in.readLine()) != null) {\n                response.append(inputLine);\n            }\n            in.close();\n\n            System.out.println(response.toString());\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
                    csharp: "using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nnamespace LemuApiExample\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            using (HttpClient client = new HttpClient())\n            {\n                client.DefaultRequestHeaders.Add(\"Authorization\", \"Bearer YOUR_API_KEY\");\n                \n                HttpResponseMessage response = await client.GetAsync(\"https://api.lemu.co/api/v1/banks\");\n                string responseBody = await response.Content.ReadAsStringAsync();\n                \n                Console.WriteLine(responseBody);\n            }\n        }\n    }\n}",
                    nodejs: "const axios = require('axios');\n\nasync function getBanks() {\n  try {\n    const response = await axios({\n      method: 'get',\n      url: 'https://api.lemu.co/api/v1/banks',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY'\n      }\n    });\n    \n    return response.data;\n  } catch (error) {\n    console.error('Error:', error.response?.data || error.message);\n  }\n}",
                    kotlin: "import java.net.HttpURLConnection\nimport java.net.URL\nimport java.io.BufferedReader\nimport java.io.InputStreamReader\n\nfun main() {\n    val url = URL(\"https://api.lemu.co/api/v1/banks\")\n    val connection = url.openConnection() as HttpURLConnection\n    connection.requestMethod = \"GET\"\n    connection.setRequestProperty(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\n    val responseCode = connection.responseCode\n    if (responseCode == HttpURLConnection.HTTP_OK) {\n        val response = BufferedReader(InputStreamReader(connection.inputStream)).use { it.readText() }\n        println(response)\n    } else {\n        println(\"Error: $responseCode\")\n    }\n}",
                    swift: "import Foundation\n\nlet url = URL(string: \"https://api.lemu.co/api/v1/banks\")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = \"GET\"\nrequest.addValue(\"Bearer YOUR_API_KEY\", forHTTPHeaderField: \"Authorization\")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    guard let data = data, error == nil else {\n        print(\"Error: \\(error?.localizedDescription ?? \"Unknown error\")\")\n        return\n    }\n    \n    if let responseString = String(data: data, encoding: .utf8) {\n        print(responseString)\n    }\n}\n\ntask.resume()",
                    rust: "use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION};\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let mut headers = HeaderMap::new();\n    headers.insert(AUTHORIZATION, HeaderValue::from_static(\"Bearer YOUR_API_KEY\"));\n\n    let client = reqwest::Client::new();\n    let res = client.get(\"https://api.lemu.co/api/v1/banks\")\n        .headers(headers)\n        .send()\n        .await?\n        .text()\n        .await?;\n\n    println!(\"{}\", res);\n    Ok(())\n}",
                    typescript: "import axios from 'axios';\n\nasync function getBanks(): Promise<any> {\n  try {\n    const response = await axios({\n      method: 'get',\n      url: 'https://api.lemu.co/api/v1/banks',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY'\n      }\n    });\n    \n    return response.data;\n  } catch (error) {\n    console.error('Error:', error);\n    throw error;\n  }\n}",
                    bash: "#!/bin/bash\n\ncurl -X GET \\\n  https://api.lemu.co/api/v1/banks \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
                    powershell: "$headers = @{\n    \"Authorization\" = \"Bearer YOUR_API_KEY\"\n}\n\n$response = Invoke-RestMethod -Uri \"https://api.lemu.co/api/v1/banks\" -Method GET -Headers $headers\n$response | ConvertTo-Json",
                    dart: "import 'package:http/http.dart' as http;\nimport 'dart:convert';\n\nFuture<void> getBanks() async {\n  final url = Uri.parse('https://api.lemu.co/api/v1/banks');\n  final response = await http.get(\n    url,\n    headers: {\n      'Authorization': 'Bearer YOUR_API_KEY',\n    },\n  );\n\n  if (response.statusCode == 200) {\n    final data = jsonDecode(response.body);\n    print(data);\n  } else {\n    print('Error: ${response.statusCode}');\n  }\n}",
                    elixir: "defmodule BankClient do\n  def get_banks do\n    url = \"https://api.lemu.co/api/v1/banks\"\n    headers = [\n      {\"Authorization\", \"Bearer YOUR_API_KEY\"}\n    ]\n    \n    case HTTPoison.get(url, headers) do\n      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->\n        Jason.decode!(body)\n      {:error, error} ->\n        IO.inspect(error)\n    end\n  end\nend",
                    perl: "use strict;\nuse warnings;\nuse LWP::UserAgent;\nuse JSON;\n\nmy $ua = LWP::UserAgent->new;\n\nmy $req = HTTP::Request->new(GET => 'https://api.lemu.co/api/v1/banks');\n$req->header('Authorization' => 'Bearer YOUR_API_KEY');\n\nmy $resp = $ua->request($req);\n\nif ($resp->is_success) {\n    my $decoded_json = decode_json($resp->decoded_content);\n    print \"Response data: \";\n    use Data::Dumper;\n    print Dumper($decoded_json);\n} else {\n    print \"HTTP GET error code: \", $resp->code, \"\\n\";\n    print \"HTTP GET error message: \", $resp->message, \"\\n\";\n}",
                    r: "library(httr)\nlibrary(jsonlite)\n\nheaders <- add_headers(Authorization = \"Bearer YOUR_API_KEY\")\n\nresponse <- GET(\"https://api.lemu.co/api/v1/banks\", headers)\n\nif (status_code(response) == 200) {\n  data <- fromJSON(content(response, \"text\", encoding = \"UTF-8\"))\n  print(data)\n} else {\n  print(paste(\"Error:\", status_code(response)))\n}",
                    scala: "import scalaj.http._\nimport scala.util.parsing.json._\n\nobject GetBanks {\n  def main(args: Array[String]): Unit = {\n    val response = Http(\"https://api.lemu.co/api/v1/banks\")\n      .header(\"Authorization\", \"Bearer YOUR_API_KEY\")\n      .asString\n      \n    println(response.body)\n  }\n}",
                    haskell: "module Main where\n\nimport Network.HTTP.Simple\nimport qualified Data.ByteString.Lazy.Char8 as L8\n\nmain :: IO ()\nmain = do\n    let request = setRequestMethod \"GET\"\n                $ setRequestHeader \"Authorization\" [\"Bearer YOUR_API_KEY\"]\n                $ setRequestSecure True\n                $ setRequestHost \"api.lemu.co\"\n                $ setRequestPath \"/api/v1/banks\"\n                $ defaultRequest\n    \n    response <- httpLBS request\n    putStrLn $ \"Status code: \" ++ show (getResponseStatusCode response)\n    L8.putStrLn $ getResponseBody response",
                    clojure: "(ns lemu.api\n  (:require [clj-http.client :as client]\n            [cheshire.core :refer :all]))\n\n(defn get-banks []\n  (let [response (client/get \"https://api.lemu.co/api/v1/banks\"\n                            {:headers {\"Authorization\" \"Bearer YOUR_API_KEY\"}\n                             :as :json})]\n    (println (parse-string (:body response) true))))",
                    groovy: "import groovy.json.JsonSlurper\n\ndef connection = new URL(\"https://api.lemu.co/api/v1/banks\").openConnection()\nconnection.setRequestMethod(\"GET\")\nconnection.setRequestProperty(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\ndef responseCode = connection.responseCode\n\nif (responseCode == 200) {\n    def responseBody = connection.inputStream.text\n    def jsonSlurper = new JsonSlurper()\n    def data = jsonSlurper.parseText(responseBody)\n    println data\n} else {\n    println \"Error: ${responseCode}\"\n}",
                    lua: "local http = require \"socket.http\"\nlocal ltn12 = require \"ltn12\"\nlocal json = require \"cjson\"\n\nlocal response_body = {}\nlocal headers = {\n  Authorization = \"Bearer YOUR_API_KEY\"\n}\n\nlocal res, code, response_headers = http.request {\n  url = \"https://api.lemu.co/api/v1/banks\",\n  method = \"GET\",\n  headers = headers,\n  sink = ltn12.sink.table(response_body)\n}\n\nif code == 200 then\n  local response_text = table.concat(response_body)\n  local data = json.decode(response_text)\n  print(\"Response data: \")\n  for k, v in pairs(data) do\n    print(k, v)\n  end\nelse\n  print(\"Error: \" .. code)\nend"
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
                    javascript: "// Using browser Fetch API\nconst verifyAccount = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/banks/verify', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        account_number: '0123456789',\n        bank_code: '011'\n      })\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error verifying account:', error);\n  }\n};",
                    nodejs: "// Using Node.js with axios\nconst axios = require('axios');\n\nasync function verifyAccount() {\n  try {\n    const response = await axios({\n      method: 'post',\n      url: 'https://api.lemu.africa/v1/banks/verify',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      data: {\n        account_number: '0123456789',\n        bank_code: '011'\n      }\n    });\n    \n    return response.data;\n  } catch (error) {\n    console.error('Error verifying account:', error.response?.data || error.message);\n  }\n}",
                    python: "import requests\nimport json\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\npayload = {\n    'account_number': '0123456789',\n    'bank_code': '011'\n}\n\nresponse = requests.post('https://api.lemu.africa/v1/banks/verify', headers=headers, data=json.dumps(payload))\ndata = response.json()\nprint(data)",
                    ruby: "require 'net/http'\nrequire 'uri'\nrequire 'json'\n\nuri = URI.parse('https://api.lemu.africa/v1/banks/verify')\nrequest = Net::HTTP::Post.new(uri)\nrequest['Authorization'] = 'Bearer YOUR_API_KEY'\nrequest['Content-Type'] = 'application/json'\nrequest.body = JSON.dump({\n  'account_number' => '0123456789',\n  'bank_code' => '011'\n})\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|\n  http.request(request)\nend\n\nputs JSON.parse(response.body)",
                    php: "<?php\n$curl = curl_init();\n\n$payload = json_encode([\n  'account_number' => '0123456789',\n  'bank_code' => '011'\n]);\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => \"https://api.lemu.africa/v1/banks/verify\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_POST => true,\n  CURLOPT_POSTFIELDS => $payload,\n  CURLOPT_HTTPHEADER => [\n    \"Authorization: Bearer YOUR_API_KEY\",\n    \"Content-Type: application/json\",\n    \"Content-Length: \" . strlen($payload)\n  ],\n]);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n\necho $response;\n?>",
                    go: "package main\n\nimport (\n\t\"bytes\"\n\t\"encoding/json\"\n\t\"fmt\"\n\t\"io/ioutil\"\n\t\"net/http\"\n)\n\nfunc main() {\n\tpayload, _ := json.Marshal(map[string]string{\n\t\t\"account_number\": \"0123456789\",\n\t\t\"bank_code\":     \"011\",\n\t})\n\n\tclient := &http.Client{}\n\treq, _ := http.NewRequest(\"POST\", \"https://api.lemu.africa/v1/banks/verify\", bytes.NewBuffer(payload))\n\treq.Header.Add(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\treq.Header.Add(\"Content-Type\", \"application/json\")\n\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tfmt.Println(\"Error:\", err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}",
                    java: "import java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\nimport java.nio.charset.StandardCharsets;\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\n\npublic class VerifyBankAccount {\n    public static void main(String[] args) {\n        try {\n            URL url = new URL(\"https://api.lemu.africa/v1/banks/verify\");\n            HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n            conn.setRequestMethod(\"POST\");\n            conn.setRequestProperty(\"Authorization\", \"Bearer YOUR_API_KEY\");\n            conn.setRequestProperty(\"Content-Type\", \"application/json\");\n            conn.setDoOutput(true);\n\n            String jsonInputString = \"{\\\"account_number\\\":\\\"0123456789\\\",\\\"bank_code\\\":\\\"011\\\"}\";\n            \n            try(OutputStream os = conn.getOutputStream()) {\n                byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);\n                os.write(input, 0, input.length);\n            }\n\n            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n            String inputLine;\n            StringBuilder response = new StringBuilder();\n            while ((inputLine = in.readLine()) != null) {\n                response.append(inputLine);\n            }\n            in.close();\n\n            System.out.println(response.toString());\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
                    csharp: "using System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Text.Json;\n\nnamespace LemuApiExample\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            using (HttpClient client = new HttpClient())\n            {\n                client.DefaultRequestHeaders.Add(\"Authorization\", \"Bearer YOUR_API_KEY\");\n                \n                var requestData = new {\n                    account_number = \"0123456789\",\n                    bank_code = \"011\"\n                };\n                \n                var content = new StringContent(\n                    JsonSerializer.Serialize(requestData),\n                    Encoding.UTF8,\n                    \"application/json\");\n                \n                HttpResponseMessage response = await client.PostAsync(\n                    \"https://api.lemu.africa/v1/banks/verify\", \n                    content);\n                \n                string responseBody = await response.Content.ReadAsStringAsync();\n                Console.WriteLine(responseBody);\n            }\n        }\n    }\n}"
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
                    javascript: "// Using browser Fetch API\nconst initiateTransfer = async () => {\n  try {\n    const response = await fetch('https://api.lemu.africa/v1/transactions/transfer', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        amount: 5000,\n        account_number: '0123456789',\n        bank_code: '011',\n        description: 'Payment for services',\n        reference: 'TR_123456789'\n      })\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error initiating transfer:', error);\n  }\n};",
                    nodejs: "// Using Node.js with axios\nconst axios = require('axios');\n\nasync function initiateTransfer() {\n  try {\n    const response = await axios({\n      method: 'post',\n      url: 'https://api.lemu.africa/v1/transactions/transfer',\n      headers: {\n        'Authorization': 'Bearer YOUR_API_KEY',\n        'Content-Type': 'application/json'\n      },\n      data: {\n        amount: 5000,\n        account_number: '0123456789',\n        bank_code: '011',\n        description: 'Payment for services',\n        reference: 'TR_123456789'\n      }\n    });\n    \n    return response.data;\n  } catch (error) {\n    console.error('Error initiating transfer:', error.response?.data || error.message);\n  }\n}",
                    python: "import requests\nimport json\n\nheaders = {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n}\n\npayload = {\n    'amount': 5000,\n    'account_number': '0123456789',\n    'bank_code': '011',\n    'description': 'Payment for services',\n    'reference': 'TR_123456789'\n}\n\nresponse = requests.post('https://api.lemu.africa/v1/transactions/transfer', headers=headers, data=json.dumps(payload))\ndata = response.json()\nprint(data)",
                    ruby: "require 'net/http'\nrequire 'uri'\nrequire 'json'\n\nuri = URI.parse('https://api.lemu.africa/v1/transactions/transfer')\nrequest = Net::HTTP::Post.new(uri)\nrequest['Authorization'] = 'Bearer YOUR_API_KEY'\nrequest['Content-Type'] = 'application/json'\nrequest.body = JSON.dump({\n  'amount' => 5000,\n  'account_number' => '0123456789',\n  'bank_code' => '011',\n  'description' => 'Payment for services',\n  'reference' => 'TR_123456789'\n})\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|\n  http.request(request)\nend\n\nputs JSON.parse(response.body)",
                    php: "<?php\n$curl = curl_init();\n\n$payload = json_encode([\n  'amount' => 5000,\n  'account_number' => '0123456789',\n  'bank_code' => '011',\n  'description' => 'Payment for services',\n  'reference' => 'TR_123456789'\n]);\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => \"https://api.lemu.africa/v1/transactions/transfer\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_POST => true,\n  CURLOPT_POSTFIELDS => $payload,\n  CURLOPT_HTTPHEADER => [\n    \"Authorization: Bearer YOUR_API_KEY\",\n    \"Content-Type: application/json\",\n    \"Content-Length: \" . strlen($payload)\n  ],\n]);\n\n$response = curl_exec($curl);\ncurl_close($curl);\n\necho $response;\n?>",
                    go: "package main\n\nimport (\n\t\"bytes\"\n\t\"encoding/json\"\n\t\"fmt\"\n\t\"io/ioutil\"\n\t\"net/http\"\n)\n\nfunc main() {\n\tpayload, _ := json.Marshal(map[string]interface{}{\n\t\t\"amount\": 5000,\n\t\t\"account_number\": \"0123456789\",\n\t\t\"bank_code\": \"011\",\n\t\t\"description\": \"Payment for services\",\n\t\t\"reference\": \"TR_123456789\",\n\t})\n\n\tclient := &http.Client{}\n\treq, _ := http.NewRequest(\"POST\", \"https://api.lemu.africa/v1/transactions/transfer\", bytes.NewBuffer(payload))\n\treq.Header.Add(\"Authorization\", \"Bearer YOUR_API_KEY\")\n\treq.Header.Add(\"Content-Type\", \"application/json\")\n\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tfmt.Println(\"Error:\", err)\n\t\treturn\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}",
                    java: "import java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\nimport java.nio.charset.StandardCharsets;\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\n\npublic class InitiateTransfer {\n    public static void main(String[] args) {\n        try {\n            URL url = new URL(\"https://api.lemu.africa/v1/transactions/transfer\");\n            HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n            conn.setRequestMethod(\"POST\");\n            conn.setRequestProperty(\"Authorization\", \"Bearer YOUR_API_KEY\");\n            conn.setRequestProperty(\"Content-Type\", \"application/json\");\n            conn.setDoOutput(true);\n\n            String jsonInputString = \"{\\\"amount\\\":5000,\\\"account_number\\\":\\\"0123456789\\\",\\\"bank_code\\\":\\\"011\\\",\\\"description\\\":\\\"Payment for services\\\",\\\"reference\\\":\\\"TR_123456789\\\"}\";\n            \n            try(OutputStream os = conn.getOutputStream()) {\n                byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);\n                os.write(input, 0, input.length);\n            }\n\n            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n            String inputLine;\n            StringBuilder response = new StringBuilder();\n            while ((inputLine = in.readLine()) != null) {\n                response.append(inputLine);\n            }\n            in.close();\n\n            System.out.println(response.toString());\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
                    csharp: "using System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Text.Json;\n\nnamespace LemuApiExample\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            using (HttpClient client = new HttpClient())\n            {\n                client.DefaultRequestHeaders.Add(\"Authorization\", \"Bearer YOUR_API_KEY\");\n                \n                var requestData = new {\n                    amount = 5000,\n                    account_number = \"0123456789\",\n                    bank_code = \"011\",\n                    description = \"Payment for services\",\n                    reference = \"TR_123456789\"\n                };\n                \n                var content = new StringContent(\n                    JsonSerializer.Serialize(requestData),\n                    Encoding.UTF8,\n                    \"application/json\");\n                \n                HttpResponseMessage response = await client.PostAsync(\n                    \"https://api.lemu.africa/v1/transactions/transfer\", \n                    content);\n                \n                string responseBody = await response.Content.ReadAsStringAsync();\n                Console.WriteLine(responseBody);\n            }\n        }\n    }\n}"
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
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiData.ts [app-rsc] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        children: "Lemu Developer API"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl",
                                    children: "Lemu Banking API"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-xl mt-5 mx-auto text-xl text-white",
                                    children: "Smart financial API solutions for developers building innovative applications."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex justify-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/reference/get-bank-list",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 shadow-lg",
                                                children: "API Reference"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#quickstart",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center justify-center px-5 py-3 border border-white/30 backdrop-blur-sm text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors",
                                                children: "Quick Start"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute hidden md:block right-10 top-40 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute hidden md:block left-10 top-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-heading",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-title",
                                    children: "Everything you need to build financial solutions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-description",
                                    children: "Our API provides a comprehensive suite of banking and payment services."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:-rotate-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-7 w-7 drop-shadow-sm",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 62,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 61,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors",
                                                        children: "Account Verification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Verify bank account details with real-time validation and seamless integration."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:rotate-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-7 w-7 drop-shadow-sm",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors",
                                                        children: "Instant Transfers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Initiate and process bank transfers quickly and securely across multiple financial institutions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:rotate-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-7 w-7 drop-shadow-sm",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors",
                                                        children: "Secure Authentication"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Industry-standard security practices and authentication methods to protect sensitive information."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden transform perspective-1000 hover:scale-[1.02] hover:-rotate-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-40 h-40 bg-primary opacity-5 rounded-full -mr-16 -mt-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-20 h-20 bg-primary opacity-5 rounded-full -ml-10 -mb-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-7 w-7 drop-shadow-sm",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors",
                                                        children: "Transaction Analytics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Detailed transaction data and analytics to help monitor and optimize financial operations."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "quickstart",
                className: "section bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-heading",
                                    children: "Quick Start"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-title",
                                    children: "Start integrating in minutes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-description",
                                    children: "Follow these simple steps to get started with our API."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-gray-900 mb-2",
                                                            children: "Register and Get API Keys"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: [
                                                                "To use the Lemu API, you need to obtain API keys. Click on the ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-primary",
                                                                    children: '"Get API Key"'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 86
                                                                }, this),
                                                                " button in the header to generate your unique API key and secret."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-gray-900 mb-2",
                                                            children: "Make Your First API Call"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-4",
                                                            children: "Let's start with a simple GET request to retrieve the list of supported banks:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-3 w-3 rounded-full bg-red-500 shadow-inner"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 185,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-3 w-3 rounded-full bg-yellow-500 shadow-inner"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-3 w-3 rounded-full bg-green-500 shadow-inner"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 187,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 184,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-mono text-gray-400",
                                                                            children: "cURL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                            className: "text-sm text-gray-300 font-mono relative z-10",
                                                                            children: `curl -X GET \\
  --url https://api.lemu.africa/v1/banks \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Content-Type: application/json"`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card border-l-4 border-l-primary transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold shadow-md",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-gray-900 mb-2",
                                                            children: "Explore the API Reference"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-4",
                                                            children: "Check out our comprehensive API reference documentation for details on all available endpoints."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/reference/get-bank-list",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-md text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg",
                                                                children: [
                                                                    "View API Reference",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 ml-2 drop-shadow-sm",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 222,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-heading",
                                    children: "API Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-title",
                                    children: "Explore our API endpoints"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-description",
                                    children: "Browse through our API categories to find what you need."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_DATA"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "card-title",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "card-description mb-4",
                                                children: category.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: category.endpoints.map((endpoint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/reference/${endpoint.id}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-primary hover:text-primary-dark flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `inline-block w-14 text-xs font-mono mr-2 px-1 py-0.5 text-center rounded 
                                ${endpoint.method === 'GET' ? 'method-get' : ''}
                                ${endpoint.method === 'POST' ? 'method-post' : ''}
                                ${endpoint.method === 'PUT' ? 'method-put' : ''}
                                ${endpoint.method === 'DELETE' ? 'method-delete' : ''}
                              `,
                                                                            children: endpoint.method
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "hover:underline",
                                                                            children: endpoint.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, endpoint.id, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, category.name, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_6f732b14._.js.map