module.exports = {

"[project]/src/app/api/apiData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/app/components/ApiSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApiSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ApiSidebar({ activeEndpoint }) {
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_DATA"].map((cat)=>cat.name));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden md:block w-64 flex-shrink-0 bg-bg-secondary border-r border-border-color overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-8 rounded-full bg-bg-tertiary flex items-center justify-center text-text-primary font-bold text-md",
                            children: "L"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ApiSidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "ml-2 text-lg font-semibold text-text-primary",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/authentication",
                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === 'authentication' ? 'bg-accent-color text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'}`,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/errors",
                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === 'errors' ? 'bg-accent-color text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'}`,
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
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_DATA"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-text-primary text-xs uppercase tracking-wide pt-4 px-3 mb-2",
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ApiSidebar.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: category.endpoints.map((endpoint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/reference/${endpoint.id}`,
                                                className: `block px-3 py-2 rounded-md text-sm font-medium ${activeEndpoint === endpoint.id ? 'bg-accent-color text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}}),
"[project]/src/app/components/EndpointDetails.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EndpointDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Define all potential code languages for display
const CODE_LANGUAGES = {
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
// Helper function to format code for VS Code-like syntax highlighting 
function formatVSCodeNodeJs(code) {
    // Split the code into lines to apply line numbers
    const lines = code.split('\n');
    // Function to tokenize different parts of the code
    const tokenize = (line)=>{
        let tokenized = line;
        // Process in specific order to avoid conflicts
        // Comments first (so we don't highlight strings inside comments)
        tokenized = tokenized.replace(/(\/\/.*$)/g, '<span class="token-comment">$1</span>');
        // Keywords
        tokenized = tokenized.replace(/\b(const|let|var|function|async|await|return|if|else|try|catch|for|while|import|from|export|default)\b/g, '<span class="token-const">$1</span>');
        // Function declarations - this needs to happen before method calls
        tokenized = tokenized.replace(/\b(function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '<span class="token-const">$1</span> <span class="token-function-name">$2</span>');
        // Async function declarations
        tokenized = tokenized.replace(/\b(async)\s+\b(function)\b\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '<span class="token-const">$1</span> <span class="token-const">$2</span> <span class="token-function-name">$3</span>');
        // Arrow functions with explicit name (const foo = () => {})
        tokenized = tokenized.replace(/\b(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, '<span class="token-const">$1</span> <span class="token-function-name">$2</span> =');
        // Method calls
        tokenized = tokenized.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="token-method">$1</span>(');
        // String literals - handling both single and double quotes
        tokenized = tokenized.replace(/(['"])((?:\\\1|(?:(?!\1).))*)(\1)/g, '<span class="token-string">$1$2$3</span>');
        // Properties (after dot notation)
        tokenized = tokenized.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="token-property">$1</span>');
        // Numbers
        tokenized = tokenized.replace(/\b(\d+\.?\d*|\.\d+)\b/g, '<span class="token-number">$1</span>');
        // Boolean, null, undefined
        tokenized = tokenized.replace(/\b(true|false|null|undefined)\b/g, '<span class="token-boolean">$1</span>');
        // Common built-in functions and objects
        tokenized = tokenized.replace(/\b(require|console|Object|Array|String|Number|Boolean|Math|JSON|Promise)\b/g, '<span class="token-function-name">$1</span>');
        // Special operators
        tokenized = tokenized.replace(/\b(new|typeof|instanceof)\b/g, '<span class="token-const">$1</span>');
        // Object literal keys
        tokenized = tokenized.replace(/(^\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '$1<span class="token-property">$2</span>:');
        return tokenized;
    };
    // Find a good line to highlight (look for a function call or declaration)
    let highlightLine = 1; // Default to line 1
    for(let i = 0; i < lines.length; i++){
        if (lines[i].includes('function') || lines[i].includes('axios(') || lines[i].includes('await')) {
            highlightLine = i;
            break;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: index === highlightLine ? 'current-line' : '',
                dangerouslySetInnerHTML: {
                    __html: tokenize(line)
                }
            }, index, false, {
                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/EndpointDetails.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
// Format JSON with proper VS Code syntax highlighting
function formatVSCodeJson(code) {
    let jsonObj;
    try {
        jsonObj = JSON.parse(code);
        code = JSON.stringify(jsonObj, null, 2);
    } catch (e) {
    // If parsing fails, just use the original code
    }
    const lines = code.split('\n');
    const tokenize = (line)=>{
        let tokenized = line;
        // Keys in JSON (always in double quotes)
        tokenized = tokenized.replace(/("([^"\\]*(?:\\.[^"\\]*)*)")\s*:/g, '<span class="token-property">$1</span>:');
        // String values
        tokenized = tokenized.replace(/:\s*("([^"\\]*(?:\\.[^"\\]*)*)")/g, ': <span class="token-string">$1</span>');
        // Numbers
        tokenized = tokenized.replace(/:\s*(-?\d+\.?\d*)/g, ': <span class="token-number">$1</span>');
        // Boolean and null
        tokenized = tokenized.replace(/:\s*(true|false|null)/g, ': <span class="token-boolean">$1</span>');
        return tokenized;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: lines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                dangerouslySetInnerHTML: {
                    __html: tokenize(line)
                }
            }, index, false, {
                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/EndpointDetails.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
// Format a code sample with VS Code-like styling based on language
function formatCodeWithVSCode(code, language) {
    switch(language.toLowerCase()){
        case 'nodejs':
        case 'javascript':
            return formatVSCodeNodeJs(code);
        case 'json':
            return formatVSCodeJson(code);
        // Add other language formatters as needed
        default:
            // For other languages just render with line numbers
            return code.split('\n').map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: line
                }, index, false, {
                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this));
    }
}
function EndpointDetails({ endpoint }) {
    const [activeResponse, setActiveResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(endpoint.responses && Object.keys(endpoint.responses).length > 0 ? Object.keys(endpoint.responses)[0] : '');
    // Get available code languages from endpoint
    const availableLanguages = endpoint.sampleCode ? Object.keys(endpoint.sampleCode).filter((lang)=>endpoint.sampleCode?.[lang]) : [];
    const [activeCodeExample, setActiveCodeExample] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(availableLanguages.length > 0 ? availableLanguages[0] : 'curl');
    const getMethodClass = (method)=>{
        switch(method.toUpperCase()){
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
    const getStatusClass = (status)=>{
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
    const renderVSCodeEditor = (code, language)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "terminal-window border-0 shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-terminal-header-text mr-2",
                                    children: CODE_LANGUAGES[language]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-terminal-header-text border border-terminal-border rounded px-1",
                                    children: "index.js"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-control bg-red-500 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-control bg-yellow-500 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-control bg-green-500 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-content relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vscode-minimap"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            children: formatCodeWithVSCode(code, language)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-status-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-status-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "editor-extension",
                                    children: "JavaScript"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "editor-extension",
                                    children: "UTF-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-status-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-col-indicator",
                                    children: "Ln 2, Col 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-col-indicator",
                                    children: "Spaces: 2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/EndpointDetails.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-terminal-bg/60 backdrop-blur-sm rounded-xl shadow-xl p-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${getMethodClass(endpoint.method)} font-mono py-1 px-3 rounded-md text-sm font-semibold mr-2`,
                                children: endpoint.method.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-text-primary mb-2",
                                children: endpoint.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-text-primary font-mono",
                            children: endpoint.url
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-secondary mb-6",
                            children: endpoint.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    endpoint.headers && Object.keys(endpoint.headers).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-text-primary mt-8 mb-4",
                                children: "Headers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden shadow-md rounded-lg bg-terminal-header/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "border-b border-terminal-border/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-table-header-bg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4 text-left text-sm font-semibold text-text-primary",
                                                        children: "KEY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4 text-left text-sm font-semibold text-text-primary",
                                                        children: "VALUE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4 text-left text-sm font-semibold text-text-primary",
                                                        children: "DESCRIPTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-terminal-border/30",
                                            children: Object.entries(endpoint.headers).map(([key, value])=>{
                                                const headerValue = value;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-terminal-border/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-sm text-text-primary font-mono",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-sm text-text-secondary font-mono",
                                                            children: typeof headerValue === 'string' ? headerValue : headerValue.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-sm text-text-secondary",
                                                            children: typeof headerValue === 'object' && headerValue.description ? headerValue.description : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this),
                    endpoint.requestBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-text-primary mb-3",
                                children: "Request Body"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden shadow-md rounded-lg bg-terminal-header/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "border-b border-terminal-border/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                                                        children: "Parameter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                                                        children: "Required"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-terminal-border/30",
                                            children: Object.entries(endpoint.requestBody).map(([key, param])=>{
                                                const requestParam = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-terminal-border/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-terminal-text",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-400",
                                                            children: requestParam.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-400",
                                                            children: requestParam.required ? 'Yes' : 'No'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-normal text-sm text-gray-400",
                                                            children: requestParam.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this),
                    endpoint.responses && Object.keys(endpoint.responses).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Responses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-hidden rounded-md bg-terminal-header/60",
                                        children: Object.keys(endpoint.responses).map((status, index)=>{
                                            const isFirst = index === 0;
                                            const isLast = index === Object.keys(endpoint.responses).length - 1;
                                            let roundedClass = '';
                                            if (isFirst) roundedClass = 'rounded-l-md';
                                            if (isLast) roundedClass += ' rounded-r-md';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveResponse(status),
                                                className: `px-3 py-1.5 text-sm font-medium transition-all duration-200 border-r last:border-r-0 first:rounded-l-md last:rounded-r-md ${activeResponse === status ? `${getStatusClass(status)} shadow-inner` : 'text-text-secondary hover:bg-bg-tertiary'}`,
                                                children: status
                                            }, status, false, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 383,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            activeResponse && endpoint.responses[activeResponse] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-terminal-header/40 backdrop-blur-sm rounded-lg p-4 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mb-4",
                                        children: endpoint.responses[activeResponse].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this),
                                    endpoint.responses[activeResponse].example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "terminal-window border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "terminal-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-400 mr-2",
                                                                children: "JSON"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 border border-gray-700 rounded px-1",
                                                                children: "response.json"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "terminal-controls",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "terminal-control bg-red-500 opacity-70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "terminal-control bg-yellow-500 opacity-70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "terminal-control bg-green-500 opacity-70"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 404,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "terminal-content relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "vscode-minimap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        children: formatVSCodeJson(JSON.stringify(endpoint.responses[activeResponse].example, null, 2))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 415,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "terminal-status-bar",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "terminal-status-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "editor-extension",
                                                                children: "JSON"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "editor-extension",
                                                                children: "UTF-8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "terminal-status-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "line-col-indicator",
                                                                children: "Ln 1, Col 1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "line-col-indicator",
                                                                children: "Spaces: 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                lineNumber: 419,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 403,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    endpoint.sampleCode && Object.keys(endpoint.sampleCode).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Code Examples"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeCodeExample,
                                            onChange: (e)=>setActiveCodeExample(e.target.value),
                                            className: "px-3 py-2 text-sm font-medium text-gray-300 bg-terminal-header/80 border border-terminal-border/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none pl-3 pr-10 bg-none cursor-pointer min-w-[140px]",
                                            style: {
                                                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                                                backgroundPosition: "right 0.5rem center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "1.5em 1.5em"
                                            },
                                            children: availableLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: lang,
                                                    className: "bg-terminal-header text-gray-300",
                                                    children: CODE_LANGUAGES[lang]
                                                }, lang, false, {
                                                    fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            endpoint.sampleCode && endpoint.sampleCode[activeCodeExample] && renderVSCodeEditor(endpoint.sampleCode[activeCodeExample], activeCodeExample)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EndpointDetails.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/EndpointDetails.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/EndpointDetails.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_038fd05d._.js.map