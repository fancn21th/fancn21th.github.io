# 介绍

## 读好书

[Javascript](https://en.wikipedia.org/wiki/JavaScript) 语言诞生之初 就注定了她的 `不凡`。 因为 她 天生就是 [互联网](https://en.wikipedia.org/wiki/World_Wide_Web) 的语言。

::: tip

下文摘要自 [Douglas Crockford](https://www.crockford.com/books.html) `JavaScript: The Good Parts: The Good Parts` 一书 的 第一章 第一节 `Why Javascript` （该书出版于 2008 年）

<MyImage src="https://m.media-amazon.com/images/I/81kqrwS1nNL._AC_UY436_FMwebp_QL65_.jpg" alt="the good parts" />

- [Javascript](https://www.javascript.com/) 是浏览器的语言，所以她很重要 (言下之意就是 她是 互联网的语言)
- 彼时彼刻 `Javascript` 被严重鄙视
  - [BOM API & DOM](https://zh.javascript.info/browser-environment) 设计地 相当糟糕 (不管用什么语言实现都会很糟糕)
  - `其他语言` 和 `Javascript` 的差异 恰恰是 `Javascript` 的重点，而很多新手不削于去学习 `Javascript` 而被迫 用 `Javascript` 去开发 Web 应用
  - `Javascript` 最神奇的地方在于 仅仅掌握了 和 `其他语言` 相似的部分 就能把 Web 应用开发搞定了

**注意**：这一节的内容对新人来说还是特别晦涩的， 特别提示的目的 第一是这本书确实是经典 ，第二是希望你关注 `Javascript` 中哪些与众不同的设计。

:::

::: warning
带着 [惯性思维](https://baike.baidu.com/item/%E6%80%9D%E7%BB%B4%E5%AE%9A%E5%8A%BF/9263375) 去学习 很容易 犯 一些主观性的 错误。
:::

[Joe Barnard](https://bps.space/pages/about) 是一个 `音乐高材生`， 在 2015 年 他受到 `SpaceX` 的启发，毅然决然地 开始了他 独立 `造火箭` 的崭新人生。 我第一次看到这个新闻的时候， 就在想他是如何从 0 开始的呢？ 没错， 他做的第一件事 就是凑钱 买书。 购买大量相关的专业书籍。（之所以要凑钱因为他需要购买的书籍 第一很多，第二书籍很贵一本都要上百美元， 加起来需要上千美元）

还好，互联网不乏免费的经典教程。推荐几本 个人 认为非常好的资料如下:

- [Ilya Kantor]() 的 [Javascript.info](https://javascript.info/) （中文版）
- [Dan Abramov]() 的 [JJS](https://justjavascript.com)（英文版）
- [Marijn Haverbeke]() 的 [Eloquent javascript](https://eloquentjavascript.net/)（英文版）
- [Kyle Simpson]() 的 [You Don't Know JS Yet (book series) - 2nd Edition](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md)（英文版）

## 范式与思维模型

学习 `Javascript` 最难的地方是 改变你的思维方式。

当我想用 `Javascript` 去操作 `DOM` （浏览器） 或者 `File` (操作系统) ， 最困扰我的问题， 除了 一大堆 陌生 的 `API` 就是 怎么编写程序 是 合理的 ？

因为我知道 我不仅仅只是想 写 一个 简单的 demo ， 而是想 写 一个 可以用来解决具体问题的 程序。 更重要的是， 这个程序很可能很快就需要更多的人一起来维护，并且它还会不断的变化。
