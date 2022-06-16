# 什么是前端

::: warning

- 下文有 大量的 新名词 出现，它们都带有链接，你可以去了解他们， 但是理解本文无需你掌握它们。

- 下文中 `本质` 和 `隐喻` 会交替使用 它们往往代表同一个含义

:::

## 隐喻

> [隐喻](https://www.grammarly.com/blog/metaphor/) 是指把一个事物 描述 成另外一个事物的语言表现手法， 常见于把不常见的事物比喻成常见的事物从而解释新事物的形态，特点 等等。

::: tip

截止 2022 年 6 月 主流前端框架 [npm](https://www.npmjs.com/) 下载量的对比

![npm trends](/images/frontend-npm-trends.png)

:::

从上图中可以看到 [React](https://zh-hans.reactjs.org/) 是前端领域中最热门的技术， React 的设计思想 从 [React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html) 一文中可见一斑。 打开链接， 你可以看到 React 哲学 章节 出现在 核心概念的 最后一节，这说明，理解哲学首先需要实践。

[介绍](/zh/frontend/) 一章里我们谈到了 `读好书` 或者 `先动手` 两种入门方法，实际上我们说的就是 `理论` 与 `实践` 之间的关系。 最后的 `平衡车` 的 **隐喻** 是本文的核心思想。 但是不同于学 `骑车` :biking_man: 只有一个 本质 也就是 `掌握平衡` :balance_scale:。 学习前端 会 充满各种 `本质` , 对这些 `本质` 的理解和掌握 可以帮助你将 大量的 前端 `知识点` 连接起来。

## UI = fn(state)

那么我正式开始学习 本文第一个 `隐喻`

```bash
ui = fn(state) // 将前端编程比喻成一个数学公式，实际上源于 React 函数式编程思想
```

### 从 Hello World 开始

> [Hello World](https://zh.wikipedia.org/wiki/Hello_World) 是程序员自我修炼中躲不开的魔咒 :ghost:

为了解释第一个 `隐喻`， 我们从 `实践` 开始。以下你看到的是一个非常简单的代码片段， 当然它是可执行的， 你可以在 `代码沙盒` 中看到它运行在 浏览器 中的效果。是的 我们是 `程序员` 当然不能不从 `hello world` 开始。

虽然代码很简单，但是涉及到以下技术点， 我把它们列举出来，但是你暂时不需要去在意它们。此时只需要知道 我们做了一件了不起的事情，在浏览器里面 显示了 `hello world!` :100:

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

::: details 代码沙盒 （点击展开）

<iframe src="https://codesandbox.io/embed/hello-dom-mnfed7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hello-dom"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

### 三个步骤

> 按部就班

::: tip

如何把大象 :elephant: 放进冰箱

1. 打开冰箱
2. 把大象放进冰箱
3. 关上冰箱

:::

基于 `hello world` 这个简单的程序我来解释一下这个 `ui = fn(state)` 的隐喻， 我先做一个简单的翻译 `界面 = 方法(状态)`。

- **步骤 A**: 首先我们要有一个状态 也就是 state 在这里 它等于 `hello world!`
- **步骤 B**: 然后我们要想办法 把这个状态 处理好 加工一下，例如我们可以把状态做一个 格式转换（后面的例子里面我们会这样做）
- **步骤 C**: 最后我们要把这个 经过加工的 最终状态在 浏览器中 呈现出来， 这个呈现也常叫做 渲染，就是 ui 代表的含义，也就是 `hello world!` 实际呈现在 浏览器里 的样子

我可以想象 仅仅 基于 `hello world` 案例来理解 这个 `隐喻` 是远远不够的， 没有关系， 理解 `把大象放进冰箱` 这一步 同样也不容易。

第一个隐喻将贯穿整个教程，接下来我们逐步来展开并解释它， 相信 最后你会觉得 这个 `隐喻` 并不牵强。

### 声明式 vs 命令式

> 殊途同归

::: tip

[声明式 vs 命令式](https://dev.to/ruizb/declarative-vs-imperative-4a7l#:~:text=Declarative%20programming%20is%20a%20paradigm,which%20mutate%20the%20program's%20state.)

感谢原文作者精彩的解释，简单翻译一下重点

Declarative programming is a paradigm describing WHAT the program does, without explicitly specifying its control flow.

声明式编程是描述 `做什么` 的编程范式。

Imperative programming is a paradigm describing HOW the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state.

命令式编程是描述 `怎么做` 的的编程范式。 它显示地去描述每一个步骤与每一条指令。

This "what vs how" is often used to compare both of these approaches because... Well, it is actually a good way to describe them.

简单说就是 `做什么` 与 `怎么做` 的比较

:::

- 命令式

我们第一个 `hello world` 范例里面是典型的 `命令式` 编程范式。如果你不熟悉 相关的 API 你光看代码不知道开发人员到底要干什么。

```html{5}
<html>
  <body></body>
</html>
<script>
  // 这里调用了一条指令，把 `hello world` 插入到 `body` 的开头
  document.body.insertAdjacentHTML("afterbegin", `hello world!`);
</script>
```

- 声明式

我们来对这段代码做一点改进，我们创建了一个方法，语义化的方法名，然后我们调用了它。

::: warning

准确的来说 这个调用方式 是 javascript functions 的四种调用方式之一 `The Function Invocation Pattern` 不同于其他语言 在 Javascript 里 Function 调用有不同的模式，后面会着重讲解，更多内容请参考 `JavaScript: The Good Parts: The Good Parts` 一书

<MyImage src="https://m.media-amazon.com/images/I/81kqrwS1nNL._AC_UY436_FMwebp_QL65_.jpg" alt="the good parts" />

:::

```html{5-6}
<html>
  <body></body>
</html>
<script>
  // 注意: 理解这里 要求你至少学过一门计算机语言 知道什么是 方法调用
  // 通过 语义化的 方法名 我们不用去查阅 API 文档就能知道下面程序是干啥的
  function showTextOnPageAsFirstElementInBody(text) {
    document.body.insertAdjacentHTML("afterbegin", text);
  }
  showTextOnPageAsFirstElementInBody('hello world!')
</script>
```

::: details 声明式的 `hello world` （点击展开）

<iframe src="https://codesandbox.io/embed/02-hello-dom-declarative-wmzevg?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="02-hello-dom-declarative"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

这里看上去离我们的 第一个 `ui = fn(state)` 的隐喻更接近了一些。是的，这里我们并不需要对号入座 亦或者 一一对应，更重在理解这个 `隐喻` 的内涵。

### state 的变化

> 大同小异

不难理解如果我们改变了 `showTextOnPageAsFirstElementInBody` function 的入参，屏幕上的结果会发生什么样的变化。 我甚至怀疑你已经在 `代码沙盒` 中已经动过手脚了。
什么？ 你还没有？ :anger: 本教程期望你通过不断实践 解锁 :unlock: 各项前端技能。

不要犹豫，动手吧。你甚至不用在你的电脑上搭建开发环境。 `代码沙盒` 是你学会搭建开发环境前最简单的实践方式。

不管 `入参` 怎么变化 我相信你可以不假思索想象到 浏览器中呈现的样子。当然这我们没有考虑 `边界场景 Edge Cases`，但是很可能这一直都没有关系。

```html{8-9}
<html>
  <body></body>
</html>
<script>
  function showTextOnPageAsFirstElementInBody(text) {
    document.body.insertAdjacentHTML("afterbegin", text);
  }
  // hello world! ==> hello frontend
  showTextOnPageAsFirstElementInBody('hello frontend')
</script>
```

### fn 的变化

> 脱胎换骨

```html{2-30,35}
<html>
  <style>
    /* The animation code */
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes move-right {
      100% {
        transform: translate(450px);
      }
    }
    div {
      width: 150px;
      height: 150px;
      background-color: red;
      text-align: center;
      line-height: 150px;
      color: white;
      font-weight: 900;
      border-radius: 10px;
      animation-name: rotate, move-right;
      animation-duration: 4s;
      animation-timing-function: ease;
      animation-delay: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  </style>
  <body></body>
</html>
<script>
  function showTextOnPageAsFirstElementInBody(text) {
    document.body.insertAdjacentHTML("afterbegin", `<div>${text}</div>`);
  }
  // hello world! ==> hello frontend
  showTextOnPageAsFirstElementInBody("hello frontend");
</script>

```

这次我对代码做了较大的改变， 从 第 2 行 到 第 30 行 添加了 [内部样式表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_is_structured#%E5%86%85%E9%83%A8%E6%A0%B7%E5%BC%8F%E8%A1%A8) 这属于 [CSS](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics) 的知识，现在你只需要知道它给 `hello world` 添加了 `样式` 就可以了。

再来看 第 35 行, 末尾我增加了 [模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals) 它是由一对 `` 组成，以后你会经常遇见它， 以至于你不用刻意记忆你也忘不了它的语法规则。

以上就是所有的变化。 但是它们都属于 `fn` 的变化， 而 `state` 没有变。

是的，这里你要区分 一个前端程序的 `状态` 和 `对状态的操作`。`fn` 代表对 `状态` 也就是 `state` 的操作。 但是它并非一定发生在 `function` 内部，对于样式的定义，我们也可以认为是 `fn` 的变化。

你是在忽悠我吧？:dizzy_face:

我们回过头来想想， 在上一节，如果 单纯是状态发生了 改变， 界面上会发生什么样的变化？ 是什么变了？

再看看这个例子，如果状态没有变，而是 其他的部分发生了变化， 仔细看看界面上到底发生了什么样的变化？ 又是什么变了？

::: danger 重点

- `state` 也就是状态 往往是 文本信息或者图片信息。
- `fn` 泛指对 `state` 的操作和加工
  - 比如直接修改 `state` 例如对 文字进行过滤，或者 对图片进行截取
  - 亦或者只是给 `state` 增加样式，让它具有更好的 `外观`。

:::

对了， 我们还不经意间又解锁了 [CSS 动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)。 我打赌你很喜欢这一块的内容。

::: details fn 发生变化 （点击展开）

<iframe src="https://codesandbox.io/embed/03-hello-dom-animated-5osrl0?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="03-hello-dom-animated"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

:::

### ui 的变化

> 前因后果

`state` 变化了，`ui` 就会变化； `fn` 变化了，`ui` 也会变化。

`ui` 变化 背后是因为 `浏览器` 能响应 `state` 与 `fn` 的变化。 `浏览器` 针对这些变化 又做了什么， 它是如何呈现 `文字`，`多媒体信息`，`样式`，以及 `动画` 的呢? `浏览器` 里 大有文章。 你可以参考 [一个浏览器是如何工作的](https://time.geekbang.org/column/article/80240)

不过如果我觉得和 `隐喻` 没有依赖关系，和 `ui` 相关的内容我不会在本文中展开， 其中奥秘只待你自己去揭开。重点在 `state` 和 `fn`。

## 回顾

::: tip

[依赖倒置原则 英文](https://dev.to/tamerlang/understanding-solid-principles-dependency-inversion-1b0f)

高层次的类不应该依赖于低层次的类。 两者都应该依
赖于抽象接口。抽象接口不应依赖于具体实现。具体
实现应该依赖于抽象接口。

:::

你可能不适应 本文的风格。 就像 我理解 `依赖倒置` 原则 绝对不是我第一次看到它的时候。 学大师，我赶紧拿出我的护身符 [Give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes)

就像 `依赖倒置` 原则索要表达的意思一样，我希望学习一门技术的时候能首先区分它 的 `What` 和 `How` ，也就是 `做什么` 和 `怎么做`，并且 先从 `What` 入手 然后 展开到 `How`。

在软件设计中， `做什么` 一般称为 `High Level` 设计 也就是 `高层次` 设计， `怎么做` 一般称为 `Low Level` 设计 也就是 `低层次` 设计。`高层次` 设计一般很 `简洁` 但是 `抽象` 对于 新人 不易理解， `低层次` 设计一般 很 `具体` 但是 `庞杂` 而且如果先从细节入手 容易 `只见树木而不见森林`， 新人 很容易迷路。

我希望我的教程能保障 在 `What` 层面做到 简单易懂， 并且 对于覆盖到的 `细节` 我都辅以最权威的参考资料。

因为 `高层次` 设计必然 `简洁` 所以自然你学习起来 花费的时间 会更少。 但是 需要注意 掌握这些 `核心` 知识点 离不开大量的工程实践。
