# 什么是前端

::: warning

- 下文有 大量的 新名词 出现，它们都带有链接，你可以去了解他们， 但是理解本文无需你掌握它们。

- 下文中 `本质` 和 `隐喻` 会交替使用 它们往往代表同一个含义

:::

## 隐喻

> [隐喻](https://zh.wikipedia.org/wiki/%E9%9A%90%E5%96%BB)

::: tip

截止 2022 年 6 月 主流前端框架 [npm](https://www.npmjs.com/) 下载量的对比

![npm trends](/images/frontend-npm-trends.png)

:::

从上图中可以看到 [React](https://zh-hans.reactjs.org/) 是前端领域中最热门的技术， React 的设计思想 从 [React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html) 一文中可见一斑。 打开链接， 你可以看到 React 哲学 章节 出现在 核心概念的 最后一节，这说明，理解哲学首先需要实践。

[介绍](/zh/frontend/) 一章里我们谈到了 `读好书` 或者 `先动手` 两种入门方法，实际上我们说的就是 `理论` 与 `实践` 之间的关系。 最后的 `平衡车` 的 **隐喻** 是本文的核心思想。 但是不同于学 `骑车` :biking_man: 只有一个 本质 也就是 `掌握平衡` :balance_scale:。 学习前端 会 充满各种 `本质` , 对这些 `本质` 的理解和掌握 可以帮助你将 大量的 前端 `知识点` 连接起来。

## UI = fn(state)

那么我正式开始学习 本文第一个 `隐喻`

```bash
ui = fn(state)
```

### Hello World!

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
