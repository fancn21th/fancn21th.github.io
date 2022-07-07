# 介绍

::: tip

下文摘自 [Douglas Crockford](https://www.crockford.com/books.html) `JavaScript: The Good Parts: The Good Parts` 一书, 注意这本书出版于 2008 年. 以下的论述是基于当年的市场环境. 这本书早已在国内翻译出版, 我只是简单翻译重点. 原文在 第一章 的 `Why Javascript` 这一节

Javascript 是一门重要的语言因为她是浏览器的语言 (也就是互联网的语言). 同时她也是最被 `despised` 鄙视的编程语言. (2008 年最流行的编程语言是 C 语言). [BOM API & DOM](https://zh.javascript.info/browser-environment) 设计的相当糟糕. 但是 `DOM` 不管用什么语言实现, 用起来都会很痛苦.

Javascript 被 `鄙视` 的一个主要的原因是因为 如果你已经精通一门编程语言, 只是你必须要编写 Web 程序, 你不得不使用 Javascript, 而大部分人一开始都不屑于先去学习她, 然而不久就会发现 Javascript 和 你所精通的语言 有巨大的不同.

Javascript 最神奇的地方在于 不怎么懂 Javascript 甚至不怎么懂 编程 就能把事情搞定了. 她是有着非常强表现力的语言.

<MyImage src="https://m.media-amazon.com/images/I/81kqrwS1nNL._AC_UY436_FMwebp_QL65_.jpg" alt="the good parts" />

:::

大部分编程语言都包含有好的设计和不好的设计. Javascript 亦是如此.

- 她是第一个 成为主流的 [lambada](https://stackoverflow.com/questions/3865335/what-is-a-lambda-language) 语言.

- 她是弱类型的语言.

- 她提供了强大的 `字面量 literal` 表达方式. 其为 [JSON](https://www.json.org/json-zh.html) 的设计带去灵感. 而 `JSON` 本身又成为了 互联网标准 传输格式.

- 她提供了 [原型继承](https://zh.javascript.info/prototype-inheritance), 因此很多人不得不学习这种新的继承方式, 或者 基于它去模仿 [类继承](https://zh.javascript.info/class-inheritance) (注意 这里链接是 ES6 的新特性, 在 2008 年 JavaScript 并不支持 类继承).

Javascript 不好的设计容易让人轻视 这门语言, 例如一下这个经典的案例。

::: warning

并不是只有 Javascript 有这个问题，主要是她是最 `出名` 的一个。

:::

```javascript
// 这个问题叫做 floating-point math
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true
console.log(0.1 + 0.2 === 0.30000000000000005); // true
console.log(0.1 + 0.2 === 0.30000000000000006); // true
```
