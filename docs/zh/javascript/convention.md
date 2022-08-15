# Convention

## function hoist

```js
const f = foo();

// function foo is hoisted
function foo() {
  console.log("foo");
}

const b = bar(); // Uncaught ReferenceError: bar is not defined

// bar is function expression and not hoisted
const bar = function () {
  console.log("bar");
};
```

## named function params

```js
// 参数很多的时候 不宜这样定义参数列表
function (foo, bar, baz) {
  // ...
}
// 定义成一个对象 参数的次序也无关紧要了
function(options) {
  const { foo, bar, baz } = options;
  // ...
}
```

## lexical environment

```js
// lexical environment global
const outer = () => {
  // lexical environment outer
  const inner = () => {
    // lexical environment inner
  };
};
```
