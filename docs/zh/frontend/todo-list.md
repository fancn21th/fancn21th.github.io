# Todo List

[Addy Osmani](https://twitter.com/addyosmani) 是一位高产的大师， 在 2011 年， 他创建了 [TodoMVC](https://github.com/tastejs/todomvc)。

`Todo MVC` 不仅 适用于其本身想解决的问题， 也经常用于前端技术教学的 案例。

::: tip

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

  - 空输入或者重复的事项无法输入

- 删除一个 待办事项

<MyTodoList/>

::: warning

- 这段源代码的知识点 我都没有放置对应的外链
- 目前无需理解这个范例的源代码

:::

::: details 范例源代码（Vue3） （点击展开）

@[code](../../.vuepress/components/MyTodoList.vue)
@[code](../../.vuepress/components/MyTodoList.store.js)

:::

遵循 `ui=fn(state)` 的内涵，在下一节 我将带大家 先用 `Vanilla ES6` 的语法来实现相同的功能，当然 `样式` 也完全一样。

## 实现

### state

> 久别重逢

不去考虑 `ui` 的样子 直接从 `state` 出发并不是 前端工程的常见做法。但是这里我们还是尝试这样做，目的是让你清楚 `state` 是 `ui` 实际呈现的 `本质内容`，好比你吃的是 `棉花糖` 本质 是 `糖`，虽然 它们的 `外观` 完全不一样。
