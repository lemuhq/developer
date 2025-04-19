module.exports = {

"[project]/.next-internal/server/app/reference/[endpointId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/components/ApiSidebar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/ApiSidebar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/ApiSidebar.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/ApiSidebar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/ApiSidebar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/ApiSidebar.tsx", "default");
}}),
"[project]/src/app/components/ApiSidebar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/ApiSidebar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/ApiSidebar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$28$client__reference$2f$proxy$29$__);
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
"[project]/src/app/components/EndpointDetails.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/EndpointDetails.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/EndpointDetails.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/EndpointDetails.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/EndpointDetails.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/EndpointDetails.tsx", "default");
}}),
"[project]/src/app/components/EndpointDetails.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EndpointDetails$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/EndpointDetails.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EndpointDetails$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/EndpointDetails.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EndpointDetails$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/reference/[endpointId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Server Component 
__turbopack_context__.s({
    "default": (()=>EndpointPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ApiSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/apiData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EndpointDetails$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/EndpointDetails.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    const endpoints = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_DATA"].flatMap((category)=>category.endpoints.map((endpoint)=>({
                endpointId: endpoint.id
            })));
    return endpoints;
}
function getEndpoint(endpointId) {
    for (const category of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$apiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_DATA"]){
        const endpoint = category.endpoints.find((e)=>e.id === endpointId);
        if (endpoint) return endpoint;
    }
    return undefined;
}
function EndpointPage({ params }) {
    const endpointId = params?.endpointId;
    if (!endpointId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const endpoint = getEndpoint(endpointId);
    if (!endpoint) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-bg-secondary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ApiSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                activeEndpoint: endpointId
            }, void 0, false, {
                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EndpointDetails$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    endpoint: endpoint
                }, void 0, false, {
                    fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reference/[endpointId]/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/reference/[endpointId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/reference/[endpointId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_e863f6e0._.js.map