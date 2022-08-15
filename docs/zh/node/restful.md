# REST-ful API

`Node` 可以用来开发 REST-ful API，它提供了一系列的工具类。

## utils

### http

- 创建 HTTP 服务器

```js{1}
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("hello world\n");
});
```

- 启动服务器

```js{1}
server.listen(3000, () => {
  // ...
  console.log("The server is running on port 3000");
});
```

### url

- 解析 path

```js
const url = require("url");
// ...
const parsedUrl = url.parse(req.url, true);
const path = parsedUrl.pathname;
```

- 解析 queryString

```js
const queryStringObject = parsedUrl.query;
```

### req

req 是 服务器回调的 第一个参数， 每次请求都会传入一个 req 对象， 它们是全新的。

- 解析 method

```js
const method = req.method.toLowerCase();
```

- 解析 headers

```js
const headers = req.headers;
```

### string_decoder

- 解析 body

> stream 2 string

```js
var StringDecoder = require("string_decoder").StringDecoder;
// ...
const decoder = new StringDecoder("utf-8");
const buffer = "";
req.on("data", function (data) {
  buffer += decoder.write(data);
});
req.on("end", function () {
  buffer += decoder.end();
  console.log("req payload:", buffer);
  // ...
});
```

## router and routes

### router handler and callback handler design

- router handler function params

  - context data

    - 包括 path, query string, method, headers, payload

  - callback
    - callback handler (designed as below)

- callback handler function params

  - status code

    [HTTP STATUS CODE](https://github.com/prettymuchbryce/http-status-codes)

  - payload

### define handlers

```js
var handlers = {};

// pass context and callback handler
handlers.foo = function (data, callback) {
  // invoke callback by passing status code and payload
  callback(406, { name: "foo handler" });
};

// Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};
```

### define router and routes

```js
const router = {
  // a route
  foo: handlers.foo,
};
```

### handle the req

```js
// ...
const trimmedPath = path.replace(/^\/+|\/+$/g, "");
// ...
req.on("end", function () {
  buffer += decoder.end();

  // 匹配的路由回调
  const matchedHandler =
    typeof router[trimmedPath] !== "undefined"
      ? router[trimmedPath]
      : handlers.notFound;

  // 构造上下文
  var context = {
    trimmedPath: trimmedPath,
    queryStringObject: queryStringObject,
    method: method,
    headers: headers,
    payload: buffer,
  };

  // 调用 匹配的 路由回调
  matchedHandler(context, function (statusCode, payload) {
    // 通用 回调定义

    statusCode = typeof statusCode == "number" ? statusCode : 200;
    payload = typeof payload == "object" ? payload : {};

    // Convert the payload to a string
    var payloadString = JSON.stringify(payload);

    // https://nodejs.org/dist/latest-v18.x/docs/api/http.html#responsewriteheadstatuscode-statusmessage-headers
    res.setHeader("Content-Type", "application/json");
    res.writeHead(statusCode);
    res.end(payloadString);
  });
});
```

## https

## ping
