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

// 基于 object 可以动态 赋值来判断 一个值是不是 object 类型
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

### 方法传参

## 5 个 范式

### prototype

### callback

### context aka this

### scope

### closure
