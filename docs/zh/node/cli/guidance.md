# Guidance

How to create a cli ?

## CLI is GUI

CLI 和 浏览器 都属于 GUI

### 通用

- IIFE

  - [Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) 避免全局污染

- chalk

  - 给 `Console.log` 上色

- log-symbols

  - 给 `Console.log` 增加图标
  - 结合 chalk
    - success
    - warning
    - info
    - error

- spinner
  - ora

### 约定

- command style

  - input

    - commands

  - options

    - flags

- [meow](https://github.com/sindresorhus/meow)

  - 接管 命令行 命令 与 参数列表
  - help command & flag
  - version flag

- debug flag

- help text format
  - Usage
  - Options
  - Commands
  - Examples

### 初始化阶段

- layout

  - header / welcome 信息

- handle unhandled error

- check node version

### Data Fetch

- await-to-js

  - a good pal for Promise

- node-fetch
- axios

### CLI Prompts

- [enquirer](https://github.com/enquirer/enquirer)
  - Questions
    - Ask a question
      - 可取消
      - different type
      - support custom validation

## What CLI do

### Copy Files

- [copy-template-dir](https://www.npmjs.com/package/copy-template-dir)

  - dedup

  ```js
  await execa("npm", ["dedup"]);
  ```

- dependencies installation

  ```js
  // pkgs install
  const pkgs = ["meow", "cli-meow-help"];
  await execa("npm", ["install", ...pkgs]);
  ```
