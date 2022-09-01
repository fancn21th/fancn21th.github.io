# 什么是 NODE

## V8

:::tip
高级语言 例如 JavaScript 是不能直接被计算机执行的，需要编译成机器码才能被计算机执行。
:::

### 预备知识

- compiler

  - 把 JavaScript 编译成机器码，也就是能直接被计算机执行的代码

- transpiler

  - 把一种类型的源代码，翻译成另外一种语言
  - 目标的语言依然是高级语言不能执行

  如下，这是将 ES6 翻译成 ES5

  ```js
  const substract = (a, b) => a - b;
  ```

  ```js
  "use strict";
  var substract = function substract(a, b) {
    return a - b;
  };
  ```

- interpreter
  - 直接执行高级语言的，但是不生成可以直接执行的机器码

### JavaScript Engine

- [V8](https://v8.dev/) 是 JavaScript 引擎， 它是 `interpreter`。

- 现代浏览器的功能都建立在 Javascript 引擎之上。

- 除了 `v8` 还有其他的引擎，如 `SpiderMonkey`、`Chakra`、`JSC`、`Blink` 等。

- Node.js 使用的是 `v8`。

## Node.js is WTF

- `Node.js` 是 C++ 编写的程序
- 服务端 Javascript 运行时环境
- `V8`是它的引擎
- 有了 运行时环境 你就能在服务端运行 用 `JavaScript` 语言编写的程序

## Non-Blocking

`Node.js` 是 单线程 无阻塞 IO 操作的 运行时环境。

这个很好理解

- 单线程是指

  好比你在一个餐厅吃饭， 只有一个服务员，不管你现在提了什么要求， 你只能等服务员把先收到的要求满足了之后， 才能得到 服务员响应， 才能轮到 安排好你的要求。

  只有一个服务员，这就叫单线程

- 无阻塞

  虽然只有一个服务员，但是服务员并不会傻傻等待， 比如第一个顾客点了一个现烤披萨，而第二个顾客只需要一杯白开水， 如果服务员一直等披萨做好，再去拿白开水，那么服务员等待的时间，服务就暂停了，这就叫阻塞。

  当然现实中，服务员不会等 现烤披萨做好了再去把白开水准备好，而是给重复啊下单后，乘着厨房在做披萨的时间，紧接着去把白开水倒好了递给第二位顾客， 等披萨做好了再把 披萨端给第一个顾客。

  灵活安排工作，这就叫无阻塞。

## Module

- common js

  导出

  ```js
  module.exports = {
    substract: (a, b) => a - b,
  };
  ```

  导入

  :::tip

  无需指明 文件后缀名， 当你指定 `reqire('xxx')`，node.js 会自动寻找 `xxx.js` 文件，或者寻找 `xxx/index.js` 文件。
  :::

  ```js
  const substract = require("./substract");
  ```

- Node's script processor
  - 读取入口文件
  - 读取入口文件的依赖（导入文件），如此递归
  - 开始执行任务
  - 开始执行事件循环直到事件循环没有任务

## REPL

> read execute print loop
