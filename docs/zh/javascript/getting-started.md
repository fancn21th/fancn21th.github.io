# 快速上手

## Data Type 数据类型

Javascript 一共 有 9 种数据类型， 其中 又分为 7 种原始类型和 2 种对象类型。

### 检察类型

以下代码 利用 [typeof 运算符](https://zh.javascript.info/types#type-typeof) 来检察一下这 9 种数据类型。 你可以在 浏览器的 开发者工具 中的控制台 或者在 nodejs shell 命令行 里面 执行这段代码。

```javascript
// primitive types  原始类型
const _string = "hello world!";
const _number = 1;
const _boolean = true;
const _null = null;
const _undefined = undefined;
const _bigint = 10n;
const _symbol = Symbol();
// object types 对象类型
const _object = {};
const _function = () => {};
// array 并不是一个新的类型 这里只是用它来做迭代运算
// 所以 js 一共有9种类型 就像九头鸟
const array = [
  _string,
  _number,
  _boolean,
  _null, // 这是一个bug 所以 它的 类型名字 并不是 null 而是 object
  _undefined,
  _bigint,
  _symbol,
  _object,
  _function,
];
array.forEach((a) => console.log(typeof a));
```

输出结果：

```shell
string
number
boolean
object # this is a bug !!!!!
undefined
bigint
symbol
object
function
```

::: details 代码沙盒 （点击展开）

请检查 Console 中的内容

<iframe src="https://codesandbox.io/embed/01-data-types-iusz9x?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="01-data-types"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

### 区分 Primitive 和 Object 类型

你可能会有疑惑， 因为很多人都会告诉你，在 `Javascript` 的世界里 所有的 值都是 对象类型。 嗯， 不急 我们先继续往下看。

以下代码利用 [对象属性](https://zh.javascript.info/object#wen-ben-he-shu-xing) 赋值成功与否来判断 该值 属于 对象类型

```javascript
// primitive types  原始类型
const _string = "hello world!";
const _number = 1;
const _boolean = true;
const _null = null;
const _undefined = undefined;
const _bigint = 10n;
const _symbol = Symbol();
// object types 对象类型
const _object = {};
const _function = () => {};
// array 并不是一个新的类型 这里只是用它来做迭代运算
// 所以 js 一共有9种类型 就像九头鸟
const array = [
  _string,
  _number,
  _boolean,
  _null, // 这是一个bug 所以 它的 类型名字 并不是 null 而是 object
  _undefined,
  _bigint,
  _symbol,
  _object,
  _function,
];

// function is an object
console.log(_function.__proto__ === Function.prototype);
console.log(_function.__proto__.__proto__ === Object.prototype);

// 基于 object 可以动态给对象增加属性 这个特点 我们来判断 一个值是不是 object 类型
const isObject = (value) => {
  try {
    value["foo"] = "bar";
  } catch (err) {
    return false;
  }
  return value["foo"] === "bar";
};

array.forEach((a) =>
  console.log(typeof a, isObject(a) ? "is object" : "is NOT object")
);
```

输出结果：

```shell
string is NOT object
number is NOT object
boolean is NOT object
object is NOT object # this is null
undefined is NOT object
bigint is NOT object
symbol is NOT object
object is object
function is object
```

::: details 代码沙盒 （点击展开）

请检查 Console 中的内容

<iframe src="https://codesandbox.io/embed/02-data-types-is-object-ud6kz8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="02-data-types-is-object"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
:::

我们再看看这个非常简单的代码

```javascript
console.log("hello".length); // 打印出 5
```

矛盾出现了，为什么 原始类型 也可以有 `property` 可以访问呢？

这里解释也很简单就是 `Javascript` 为 原始类型 做了 `autoboxing`

我们再看下面这段代码， `autoboxing` 的意思就是 `Javascript` 为各种原始类型的 `值` 通过 `__proto__` 自动绑定到了一个 预定义好的 原型对象 (后文会解释 [prototype](#prototype)) 所以原型对象上预定号的属性可以被访问

```javascript
console.log("".__proto__ === String.prototype); // 打印出 true ， 因为 String 的原型对象 实现了 `length` 属性
```

## Type Coercion

[Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

- 隐式转换

  - Example 1

  ```javascript
  const arr = [];

  // arr.length 会被 转换成 boolean 类型的值
  if (arr.length) {
    console.log("arr is not empty");
  }
  ```

  - Example 2

  ```javascript
  const a = 1;
  const b = "1";

  console.log(a + b); // 打印出 "11"
  ```

## 5 个 范式

Javascript 有 5 个 非常重要的编程范式

### prototype 原型

### callback 回调

### scope 作用域

- Function Scope

  最开始 Javascript 只有函数作用域

- Block Scope

  ES6 引入了 [代码块作用域](https://zh.javascript.info/closure#dai-ma-kuai)

### context 上下文

> aka this

- lexical this

  > arrow function this

  > lexical scope 不是 运行时的 function scope 而是 author time function scope

  - 先看 2 段代码

    ```javascript
    const foo = {
      title: "bar",
      show: function () {
        console.log(this.title); // 依次打印什么?
      },
    };

    foo.show();
    setTimeout(foo.show, 0);
    ```

    上面代码会依次打印 `bar` 和 `undefined`

    ```javascript
    const foo = {
      title: "bar",
      show: () => {
        console.log(this.title); //  打印什么?
      },
    };

    setTimeout(foo.show, 0);
    ```

    上面代码会打印 `undefined`， 这个可能和你想的不一样，那么说明 `arrow function lexical this` 你并没有完全掌握

  - lexical scope

    lexical scope 是指 代码编写时的作用域，其规则是找到最近的 非 `arrow function` 的作用域，然后把 `this` 绑定到该作用域

    ```javascript
    const foo = {
      title: "bar",
      show: function () {
        return () => {
          console.log(this.title);
        };
      },
    };

    setTimeout(foo.show(), 0);
    ```

    这次能正确打印 `bar` 了，这是因为 `arrow function` 的 lexical scope 是 `foo` 的 `show` 方法的 作用域

    ```javascript
    const foo = function () {
      return () => {
        console.log(this.title);
      };
    };

    const bar = {
      title: "bar",
      foo: foo(),
    };

    console.log(bar.foo()); // undefined
    ```

    这个例子 打印了 `undefined` 你能理解是为什么吗?

### closure 闭包

闭包是指 内嵌的方法 如何 访问 其 词法作用域中的变量

- 特点

- nested function

- access lexical scope

- Example 1

```javascript
const doubled = [1, 2, 3].map(function (x) {
  // 这就是内嵌方法
  // 词法作用域包括了 map 方法作用域中的上下文 this 也就是 [1,2,3]
  return x * 2;
});
```

## Function 四种调用方式

不同的调用方式，上下文的指向不同

### 对象方法调用

- example

  ```javascript
  const obj = {
    foo: function () {
      console.log(this); // 打印出 obj
    },
  };
  obj.foo();
  ```

- this

  指向 `.` 之前的对象

### 函数调用

- example
  ```javascript
  const foo = function () {
    console.log(this); // 打印出 window
  };
  foo();
  ```
- this

  指向 最近的 function 作用域中的 `this`，如果没有，则直到 找到 全局作用域中的 `this` （在浏览器中 全局 `this` 就是 `Window`）

### 构造函数调用

- example

  ```javascript
  const Foo = function (bar) {
    this.bar = bar;
    console.log(this); // 打印出 Foo { bar: 'bar' }
  };

  Foo.prototype.baz = () => {};

  const obj = new Foo("bar");
  ```

- this

  指向 创建的 对象本身

### Apply & Call 调用

首先 Apply 和 Call 是 `Function.prototype` 上的方法

这是一个有趣的案例， [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 并不是一个真正的数组，而是一个对象，但是我们可以通过 借用 `Array.prototype` 上定义的方法

- example

  ```javascript
  const foo = function () {
    // arguments 对象并不是数组
    // 借用 数组的 forEach 方法
    const forEach = Array.prototype.forEach;
    forEach.call(arguments, function (a) {
      console.log(a); // 打印出每个参数 1，2，3
    });
  };

  foo(1, 2, 3);
  ```

- this

  指向 apply 或者 call 方法的第一个参数

## 箭头函数

- [Arrow Function](https://zh.javascript.info/arrow-functions)

  - 没有 `this`
  - 没有 `arguments`
  - 不能用作 构造函数

- example

  ```javascript
  const foo = {
    count: 1,
    increment() {
      this.count++;
      console.log(this === window); // 打印出 true
      console.log(this.count); // 打印出 NaN
    },
    incrementWithLexicalThis() {
      return () => {
        this.count++;
        console.log(this === foo); // 打印出 true
        console.log(this.count); // 打印出 2
      };
    },
  };

  setTimeout(foo.increment, 100);
  setTimeout(foo.incrementWithLexicalThis(), 100);
  ```
