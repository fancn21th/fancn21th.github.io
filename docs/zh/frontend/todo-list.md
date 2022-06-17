# Todo List

[Addy Osmani](https://twitter.com/addyosmani) 是一位高产的大师， 在 2011 年， 他创建了 [TodoMVC](https://github.com/tastejs/todomvc)。

`Todo MVC` 不仅 适用于其本身想解决的问题， 也经常用于前端技术教学的 案例。

::: tip

以下 是 `Todo MVC` 希望解决的问题的英文原文 和 简单的翻译

Helping you select an MV\* framework

帮助你选择 MV\* 框架

Developers these days are spoiled with choice when it comes to selecting an MV\* framework for structuring and organizing JavaScript web apps.

程序员在为 Javascript 程序选择 MV\* 框架 这件事上实在是被惯死了。

Backbone, Ember, AngularJS... the list of new and stable solutions goes on and on, but just how do you decide on which to use in a sea of so many options?

各种稳定可靠的解决方案层出不穷，但是如何在海量方案中做出选择？

To help solve this problem, we created TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today.

为了解决这个问题，我们创建了 TodoMVC，用不同主流前端 MV\* 解决方案 来实现 同一个 待办列表应用。 这样孰优孰劣，你可以根据自己的判断来选择。

:::

## 范例

相较于 [Todo MVC Vue 版本](https://todomvc.com/examples/vue/)，我做了一些简化。 此外，这个例子是用 [Vue 3](https://staging-cn.vuejs.org/guide/introduction.html) 编写的。

它的功能清单如下:

- 新增一个 待办事项

  - 输入为空 或者 输入重复的事项 会无效

- 删除一个 待办事项
  - 点击每个事项后面的 X 文字可以删除当前的待办事项

以下的 `范例` 是 可以操作的， 你可以试试。

<MyTodoList/>

::: warning

- 范例源代码的知识点 没有任何解释说明
- 因为目前你无需理解这个范例的源代码

:::

::: details 范例源代码（Vue3） （点击展开）

MyTodoList.vue
@[code](../../.vuepress/components/MyTodoList.vue)
MyTodoList.store.js
@[code](../../.vuepress/components/MyTodoList.store.js)

:::

## fn

> 眼见为实

::: tip

从本节开始 我们将 实践 和 `ui = fn(state)` 隐喻相结合 逐步 一起探索 前端开发的 `本质`

:::

::: tip

作为前端程序员， 你真的是集 `万千宠爱于一身` ， 前端 [三剑客](https://baike.baidu.com/item/%E4%B8%89%E4%B8%AA%E7%81%AB%E6%9E%AA%E6%89%8B/721) `html` `css` `javascript` 的 `书籍` 和 `教程` 多如 `夜空中的繁星`。 我深感眼拙， 列出几个最吸引我的如下：

- [Shay Howe](https://twitter.com/shayhowe) 的 [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/)
- [Ilya Kantor]() 的 [现代 JavaScript 教程](https://zh.javascript.info/)

这些教程有的有中文翻译，有的没有，很抱歉我不推荐我没有看过的资料。我相信你也能很容易找到适合入门的 `基础教程`

:::

首先我们要把 `界面` 静态地 渲染出来。这时候你需要开始掌握一些基础的 [HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML) 和 [CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps) 知识， 不过你可以先继续看完本节。

以下是 把 `界面` 实现的源代码，这里 不涉及到 `Javascript`， 它 100% 还原了 上一节的 范例 `静态` 渲染的 部分。 而 `动态` 的部分 留在下一节处理。

::: tip

`动态` 一般是指

- `用户` 和 `浏览器` 进行交互，例如 输入用户名，点击一个按钮，在页面上下滚动浏览，导致 `界面` 发生了变化。
- `state` 也就是 `状态` 本身发生了变化。

:::

`fn` 部分的部分源代码

```html{8-58}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <style>
      * {
        background-color: rgb(240, 241, 242);
        font-size: 1rem;
      }
      div {
        width: 400px;
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
      }
      input {
        margin-top: 1rem;
        border: none;
        border-bottom: 1px solid black;
        font-size: 0.9rem;
      }
      input:focus {
        outline: none;
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(90deg);
        }
        100% {
          transform: rotate(180deg);
          color: red;
        }
      }
      span {
        display: inline-block;
        background-color: transparent;
      }
      span:hover {
        animation: rotate 0.4s ease;
        animation-fill-mode: both;
        cursor: pointer;
      }
      em {
        width: 50%;
        font-size: 1rem;
      }
      cite {
        margin-top: 3rem;
        font-size: 0.5rem;
        align-self: flex-end;
      }
    </style>
  </head>
  <body>
    <div>
      <em>我的待办（范例）</em>
      <hr />
      <!-- add todo -->
      <input placeholder="输入待办标题 然后敲回车" />
      <!-- todo list -->
      <ul>
        <li>待办事项A (<span>X</span>)</li>
        <li>待办事项B (<span>X</span>)</li>
        <li>待办事项C (<span>X</span>)</li>
      </ul>
      <cite> Fri Jun 17 2022 11:23:33 GMT+0800 (中国标准时间) </cite>
    </div>
  </body>
</html>
```

运行效果：

::: details

<iframe src="https://codesandbox.io/embed/04-vanilla-es6-stater-xtclue?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="04-vanilla-es6-stater"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

下面我来解释这些代码中重要的部分，这里我假设你或多或少已经了解了一些非常基础的 `HTML` `CSS` 概念，我会把重点放在这些基础之上，那些你需要掌握，但是要花很长时间才能掌握的内容：

首先我们很容易区分：

- 从第 8 行 到 第 58 行全部都是 `CSS` 代码 （高亮部分）
- 其他全部都是 `HTML` 代码

### 语义化

先从 `HTML` 开始，`HTML` 是 `三剑客` 里面 需要 `活学` 知识最少的一位。也就是 `三剑客` 的软肋和短板。 这是开玩笑。

现阶段 我觉得 `HTML` 所需要掌握的知识点如下：

- 常用的的 `元素` 或者叫 `标签` 从 `样式` 角度来看 几乎可以认为都是完全一样的。

  这意味着 我们可以通过 `样式` 把 常用标签 装扮地 `不分你我`

- 因此，[语义化](https://www.w3schools.com/html/html5_semantic_elements.asp) 是 `HTML` 编写的一个重要 原则。

  简单来说，不同的 `标签` 名 代表了不同的 `业务` 含义。 自然会有 `人` 去消费这些 `语义`。 例如 最典型的例子就是 [Google 爬虫](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)。 它会根据 页面 里面 特定 `标签` 的内容做分析和排名。

### 伪元素

`HTML` 与 `CSS` 分别 负责 定义 网页上的 `内容` 和 `样式` 尽管 这并非绝对的。

`CSS` 有能力 定义 `内容`， 尽管这不是 `CSS` 的职责。 不仅如此，`CSS` 也有能力 实现 动态效果。 后文你会看到。

如果样式这样写

**输入**

```html
<div class="i-am-a-pseudo-element" />
```

```css
div.i-am-a-pseudo-element::before {
  content: "hello world!";
}
```

**输出**

<div class="i-am-a-pseudo-element"/>

上面的 `hello world` 是用 `css` 输出的，这是 [伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E4%BC%AA%E5%85%83%E7%B4%A0%E6%98%AF%E5%95%A5%EF%BC%9F)。

`CSS` 通过 [选择器 Selector](https://www.w3schools.com/css/css_selectors.asp) 选中 `HTML` 中的 `元素 element/elements` 然后给 它/它们 添加 `样式`。

`伪元素` 是 用来 选中 `元素的一部分` 例如 `::before` 表示选中 `div` 元素的 `前面` 这个 `部分`.

::: warning
A CSS pseudo-element is used to style specified parts of an element.
:::

还好的是 `HTML` 没有本事 去 定义 `样式`。

### 伪类

::: warning
A pseudo-class is used to define a special state of an element.
:::

```css
input:focus {
  outline: none;
}
```

来看上面这段代码片段， `:focus` 是另外一种 `CSS 选择器` [伪类选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BC%AA%E7%B1%BB%EF%BC%9F)

如果说 `伪元素` 就很难理解了， 那么 `伪类` 更奇怪，实际上它选择的不是 `元素` 而是 `元素` 在某一时刻的 `状态`。 例如这个例子里面 这个 `状态` 是指 `input` 文本框 获取到了 `焦点`。

我们再来看一个例子：

**输入**

```html
<input class="i-am-a-pseudo-class" /><span></span>
```

```css
input.i-am-a-pseudo-class + span {
  margin-left: 0.5rem;
}
input.i-am-a-pseudo-class + span::before {
  content: "我还没有获取焦点，把鼠标移动到文本框中试试";
}
input.i-am-a-pseudo-class:focus + span::before {
  content: "我获取了焦点";
  color: red;
}
```

**输出**

<input class="i-am-a-pseudo-class"/><span></span>

在这个例子里面 当 `input` 元素 处于 获取 `焦点` 这个状态，`选择器` 命中 `元素`，样式设置生效。 结合 上一节的 `伪类`。实现了 `动态` 改变 `内容` 的效果。

如果你能理解 这两节内容。 恭喜你！你的速度 堪比 :rocket: `CSS` 的 [语法](https://www.w3schools.com/css/css_syntax.asp) 你完全掌握了！

不过 `CSS` 远不止 `语法` 这一个重要的知识点。 但是，你掌握了 `CSS` 最基础 最核心的 知识点 你解锁了一项 里程碑 式的技能。:checkered_flag:

### 动画

> TBD

### 最佳实践

> Best Practices

你应该注意到 在案例里面 我们用到的是 [Internal CSS](https://www.w3schools.com/css/css_howto.asp) 以及 大部分都是 [元素选择器](https://www.w3schools.com/css/css_selectors.asp)

这两点在教学层面是没有问题的，但是在 真实项目里面 我们并不会这么做。

如下所示， 对于初学者，我觉得有必要让你 及早知道 为什么 这不是 好的实践方式。

- `Internal CSS`

  显然如果把大量的 `CSS` 和 `HTML` 写在一起 这违法了 编程的 `单一职责 原则` [SRP in 100 seconds](https://dev.to/richardwynn/single-responsibility-principle-srp-in-100-seconds-3b1d)

  不过在 `浏览器性能优化` 领域 把 `CSS` 通过 `<style></style>` 内联 到 `HTML` 确也是一种 必要的手段。

  编程世界里面 没有 `绝对`， 适用场景很关键。 但是一般而言 从 代码编写和组织角度来讲， 把文件分开 一直都是 正确 的选择。 因为， 有很多种技术手段可以自动达到 `性能优化` 的目标。

- `元素选择器`

  元素选择器 拥有 较低的 [CSS 选择器权重](https://css-tricks.com/specifics-on-css-specificity/)。因此 它会选中 所有相同的 `元素` 不管它在哪里。

  显然这容易带来很多问题， 这是 [CSS 层叠样式表 特性](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) 决定的。

  很多著名的 `CSS` 架构方案， 例如 [ITCSS](https://csswizardry.com/2018/11/itcss-and-skillshare/) 都尝试解决 `选择器` 滥用 导致的 `CSS` 架构层面的 问题。

  `CSS` 最负责的技术问题莫过于此。 我们会在后面介绍一些 优秀的解决方案。

::: warning

一般而言 `CSS 选择器权重` 是一个必讲的知识点， 它看上去那么的 `技术`。但是我不打算讲它， 也不建议你精通， 只需要理解就可以了。

因为在后面会讲到的 `CSS` 各种 最佳工程实践中，你几乎不需要知道有 `CSS 选择器权重` 这件事情存在。

:::

```html
<!-- 这是 Internal CSS -->
<style>
  /* 这是 元素选择器 Element Selector */
  div {
    ...;
  }
</style>
```

### 调试技巧

> TBD

## state

> 看到的不一定就是真相

但是 这应该也叫做 `边界场景 Edge Cases` 你完全可以说 `内容` 和 `样式` 分别由 `HTML` 和 `CSS`

<style scoped>
div.i-am-a-pseudo-element::before {
  background-color: rgb(30,33,39);
  color: white;
  border-radius: 3px;
  content: "hello world!";
  padding: .3rem .5rem;
}
input.i-am-a-pseudo-class+span {
  margin-left: .5rem;
}
input.i-am-a-pseudo-class+span::before {
  content: '我还没有获取焦点，把鼠标移动到文本框中试试'
}
input.i-am-a-pseudo-class:focus+span::before {
  content: '我获取了焦点';
  color: red;
}
</style>
