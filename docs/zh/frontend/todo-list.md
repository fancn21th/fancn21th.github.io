# Todo List

[Addy Osmani](https://twitter.com/addyosmani) 是一位高产的大师， 在 2011 年， 他创建了 [TodoMVC](https://github.com/tastejs/todomvc)。

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

首先我们来看看 一个 Todo List 的例子， 这个例子是用 [Vue 3](https://staging-cn.vuejs.org/guide/introduction.html) 编写的。

它的功能清单如下:

- 新增一个 待办事项

  - 空输入或者重复的事项无法输入

- 删除一个 待办事项

相较于 [Todo MVC Vue 版本](https://todomvc.com/examples/vue/) 这个范例的功能做了简化。

<MyTodoList/>
