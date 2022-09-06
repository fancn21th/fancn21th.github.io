# PATH

## `__dirname` in ESM

- 问题
  如何在 `ESM` 模块中 获取 `__dirname`

:::warning
`__dirname` is not defined in ES module scope
:::

- 方案

```javascript
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

## `__dirname` vs `process.cwd()`

- `__dirname`

  - 实际可执行文件的位置

- `process.cwd()`
  - 命令执行的位置
