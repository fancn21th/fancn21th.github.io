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

## 实现

::: tip

从本节开始 我们将 实践 和 `ui = fn(state)` 隐喻相结合 逐步 一起探索 前端开发的 `本质`

:::

### fn

> 眼见为实

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

我来归纳一下一下代码的知识点

- 从第 8 行 到 第 58 行全部都是 `CSS` 代码 （高亮部分）
- 其他全部都是 `HTML` 代码

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

::: details

<iframe src="https://codesandbox.io/embed/04-vanilla-es6-stater-xtclue?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="04-vanilla-es6-stater"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

### state

> 看到的不一定就是真相
