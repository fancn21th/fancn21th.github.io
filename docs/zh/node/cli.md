# CLI

## 创建一个可执行文件

::: tip
`nodejs` 已经安装在目标 机器操作系统内
:::

- 创建一个文件

  ```shell
  touch hello
  ```

- 在文件里 打印 `hello`

  ```javascript
  console.log("hello");
  ```

- 让文件可执行

  ```shell
  chmod +x hello
  ```

- 用 `node` 执行文件

  ```shell
  node hello
  ```

  用 `node` 执行不够 cool

- 可执行文件

  将下面的文本放到文件头部， 它叫做 [Shebang](Shebang "Unix")

  - zsh shell

  ```javascript
  #!node
  ```

  - normal shell

  ```javascript
  #!/usr/bin/env node
  ```

  执行

  ```shell
  ./hello
  ```

  必须带上执行路径不够 cool

- 注册路径

  将 `hello` 文件路径注册到 `path`

  - zsh

    将文件路径加入到 `~/.zshrc` 文件中

    ```shell
    path+=pwd # pwd 代表 hello 的路径
    ```

    重新加载 `.zshrc`

    ```shell
    source ~/.zshrc
    ```

    或者

    ```shell
    . ~/.zshrc
    ```

  现在可以到任何目录下执行

  ```shell
  hello
  ```

  :cool:

## 可执行文件 包含依赖包

如果我们想在 文件里面 调用其他 `Node` 模块

```javascript
import fs from "fs";
```

首先需要 让项目支持 `ESM`

```shell
npm init -y
```

更新 `package.json` 支持 `import` 语法

```json
{
  "name": "xxx",
  "type": "module"
}
```

现在依然执行会报错

```shell
npm i esm
```

在 `hello` 文件头部 `shebang` 增加一点 `trick`

```javascript
#!/usr/bin/env node -r esm
```

嗯， 现在可以在 当前目录下执行 `hello`

等等， 如果 我们换一个位置执行 `hello` 还是会报告 `Cannot find module 'esm'`

那么我们需要 继续更新 `shebang`， 增加 `NODE_PATH` 的指定

```javascript
#!/usr/bin/env -S NODE_PATH=[pwd]/node_modules node -r esm -r globals
```

现在你可以在任何目录下执行 `hello`

```shell
cd ~
hello
```

还有一些小问题   当前 目录下会生成一个 `node_modules` 文件夹 这是 `cache` 文件

[ESM_DISABLE_CACHE](https://www.npmjs.com/package/esm) flag 看起来就是为了解决这个问题

```javascript
#!/usr/bin/env -S NODE_PATH=[pwd]/node_modules ESM_DISABLE_CACHE=true node -r esm -r globals
```

回顾一下

`zsh` 执行 了 `hello` 文件， 它通过文件头部 `shebang` 知道用 `node` 来执行 文件， 此外并且增加了 一些列的 flags

- `-S NODE_PATH=...`
  - 指定 node path 从而找到依赖包安装的位置
- `-S ESM_DISABLE_CACHE=...`
  - 去掉 命令执行后在 当前目录下生成的缓存文件
- `-r esm`
  - [--require module](https://nodejs.org/docs/latest-v14.x/api/cli.html)
    - Preload the specified module at startup.
- `-r globals`
  - 同上

## 可执行文件 扩展

- top level `await`

  默认情况下 `await` 不可以在 函数外 声明

  ```json
  {
    "name": "xxx",
    "type": "module",
    "dependencies": {
      "esm": "3.2.25"
    },
    "esm": {
      "await": true
    }
  }
  ```

- global utilities

  增加一些 全局对象 方便 编写 `cli` 脚本
