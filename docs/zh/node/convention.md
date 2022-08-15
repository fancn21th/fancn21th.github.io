# Convention

## NODE_ENV

同一份源代码 需要指定不同的配置文件， 最常见的做法就是指定一个环境变量。 `NODE_ENV` 是常见的 环境变量 用来区分代码运行在什么环境。 基于这个 变量 我们可以指定不一样的 配置文件

```js
const env = process.env.NODE_ENV || "development";
const config = require(`./config/.env.${env}`);
```

## index.js
