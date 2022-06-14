# 什么是前端

::: warning

- 下文有 大量的 新名词 出现，它们都带有链接，你可以去了解他们， 但是理解本文无需你掌握它们。

- 下文中 `本质` 和 `隐喻` 会交替使用 它们往往代表同一个含义

:::

## 隐喻

> [隐喻](https://www.grammarly.com/blog/metaphor/)

::: tip

截止 2022 年 6 月 主流前端框架 [npm](https://www.npmjs.com/) 下载量的对比

![npm trends](/images/frontend-npm-trends.png)

:::

从上图中可以看到 [React](https://zh-hans.reactjs.org/) 是前端领域中最热门的技术， React 的设计思想 从 [React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html) 一文中可见一斑。 打开链接， 你可以看到 React 哲学 章节 出现在 核心概念的 最后一节，这说明，理解哲学首先需要实践。

[介绍](/zh/frontend/) 一章里我们谈到了 `读好书` 或者 `先动手` 两种入门方法，实际上我们说的就是 `理论` 与 `实践` 之间的关系。 最后的 `平衡车` 的 **隐喻** 是本文的核心思想。 但是不同于学 `骑车` :biking_man: 只有一个 本质 也就是 `掌握平衡` :balance_scale:。 学习前端 会 充满各种 `本质` , 对这些 `本质` 的理解和掌握 可以帮助你将 大量的 前端 `知识点` 连接起来。

## UI = fn(state)

那么我正式开始学习 本文第一个 `隐喻`

```bash
ui = fn(state) // 将前端编程比喻成一个数学公式，实际上这也是 React 函数式编程思想
```

### 从 Hello World 开始

> [Hello World](https://zh.wikipedia.org/wiki/Hello_World) 是程序员躲不开的魔咒 :ghost:

为了解释第一个 `隐喻`， 我们从 `实践` 开始。以下你看到的是一个非常简单的代码片段， 当然它是可执行的， 你可以在 `代码沙盒` 中看到它运行在 浏览器 中的效果。是的 我们是 `程序员` 当然不能不从 `hello world` 开始。

虽然代码很简单，但是涉及到以下技术点， 我把它们列举出来，但是你依然暂时不需要去在意它们。你只需要知道 我们做了 一件了不起的事情，在浏览器里面 显示了 `hello world!` :100:

技术点:

- [HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)
- [Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [Web API](https://developer.mozilla.org/zh-CN/docs/Web/API)
  - [insertAdjacentHTML API](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML)

代码:

```html{5}
<html>
  <body></body>
</html>
<script>
  document.body.insertAdjacentHTML("afterbegin", `hello world!`);
</script>
```

::: details 代码沙盒

<iframe src="https://codesandbox.io/embed/hello-dom-mnfed7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hello-dom"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

### 解释

::: tip
如何把大象 :elephant: 放进冰箱

1. 打开冰箱
2. 把大象放进冰箱
3. 关上冰箱

:::

我们基于 `hello world` 这个简单的程序来解释一下这个 `ui = fn(state)` 隐喻， 首先我来做一个简单的翻译 `界面 = 方法(状态)`。

- **步骤 A**: 首先我们要有一个状态 也就是 state 在这里 它等于 `hello world!`
- **步骤 B**: 然后我们要想办法 把这个状态 处理好 加工一下，例如我们可以把状态做一个 格式转换（在这个例子里面我们并没有这么做）
- **步骤 C**: 最后我们要把这个 经过加工的 最终状态在 浏览器中 呈现出来， 这个呈现 或者 叫渲染，就是 ui 代表的含义，也就是 `hello world!` 实际呈现在 浏览器里 的样子

我可以想象 仅仅 基于 `hello world` 案例来理解 这个 `隐喻` 是不够的， 没有关系， 理解 `把大象放进冰箱` 这一步 同样也不容易。

但是不管怎么样 这第一个隐喻将贯穿整个教程，慢慢的你会相信 这个 `隐喻` 并不牵强。

### 声明式 vs 命令式

::: tip

[原文](https://dev.to/ruizb/declarative-vs-imperative-4a7l#:~:text=Declarative%20programming%20is%20a%20paradigm,which%20mutate%20the%20program's%20state.)

感谢原文作者精彩的解释，我这里简单翻译一下重点

Declarative programming is a paradigm describing WHAT the program does, without explicitly specifying its control flow.

声明式编程是描述 `做什么` 的编程范式。

Imperative programming is a paradigm describing HOW the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state.

命令式编程是描述 `怎么做` 的的编程范式。 它显示地去描述每一个步骤与每一条指令。

This "what vs how" is often used to compare both of these approaches because... Well, it is actually a good way to describe them.

`做什么` vs `怎么做`

:::

- 命令式

```html{5}
<html>
  <body></body>
</html>
<script>
  // 这里调用了一条指令，通过这条指令的 API文档 我们能清楚知道 到底做了什么
  document.body.insertAdjacentHTML("afterbegin", `hello world!`);
</script>
```

- 声明式

```html{5-6}
<html>
  <body></body>
</html>
<script>
  // 通过 语义化的 方法名 我们不用去查阅 API 文档就能知道下面程序是干啥的
  // 当然 前提是你有一定的 HTML 基础知识 知道 什么叫 first element 这是 dom 编程的术语
  function showTextOnPageAsFirstElement(text) {
    document.body.insertAdjacentHTML("afterbegin", text);
  }
  showTextOnPageAsFirstElement('hello world!')
</script>
```
