# npm

## package.json

> consumed by npm

### init

```shell
npm init -y
```

or

```shell
yarn init -y
```

## Modules 模块化

### Common JS

```javascript
const http = require("http");

module.exports = {
  http: http,
};
```

### ECMAScript Modules

```javascript
import http from "http";

export default {
  http: http,
};
```

### Config in package.json

```json
{
  "type": "module" // default: "commonjs"
}
```
