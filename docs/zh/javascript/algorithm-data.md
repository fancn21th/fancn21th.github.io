# 算法（数据篇）

> algorithm cookbook for data manipulation

## 结构化数据异步回填

- 问题
- 方案
- 讨论

## Flatmap

- 问题
- 方案
- 讨论

## Compose Functions

- 问题

  需要针对初始数据进行一系列的处理， 每个处理步骤都由指定的 `function` 完成。 有没有更简单直观的方式去调用呢。

  ```javascript
  const increment = (number) => number + 1; // 增1
  const double = (number) => number * 2; // 乘2
  const triple = (number) => number * 3; // 乘3

  const result = triple(double(increment(1))); // 直觉上会这样去使用
  ```

- 方案

  利用 `reduce` 方法实现的 `compose` 模式

  ```javascript
  const pipeline = [increment, double, triple];

  const reducer = function (acc, cur) {
    return cur(acc);
  };

  // 这里用高阶函数的范式去编写
  const compose = (fns) => (init) => fns.reduce(reducer, init);
  const func = compose(pipeline);
  const result = func(1);
  ```

- 讨论

  - 借鉴了 [Unix Piping](https://www.geeksforgeeks.org/piping-in-unix-or-linux/) 思想
  - 利用 `Reduce` 实现
  - [Code In Unit Test](https://github.com/fancn21th/frontend-algorithm-cookbook/blob/main/src/compose-functions/compose-functions.test.js)

## 获取嵌套 property

- 问题

  如何更灵活地，动态地 获取一个 对象嵌套属性 ?

  ```javascript
  // 直觉上 我们会直接 访问 character.master.master.name
  const characterA = {
    name: "悟空",
    master: {
      name: "唐僧",
      master: {
        name: "观音",
      },
    },
  };

  const characterB = {
    name: "唐僧",
    master: {
      name: "观音",
    },
  };

  // 如果你要迭代处理一个 对象数组， 并且针对相同的 嵌套属性 进行 访问和处理
  // 这时候用传统的方式就显得力不从心而且要考虑各种各样的边界场景
  const characters = [characterA, characterB];
  ```

- 方案

  利用 `reduce` 方法实现的 一级一级的属性访问，如果失败就返回 `false`

  ```javascript
  const reducer = function (object, propName) {
    if (object) {
      return object[propName];
    }
    return false;
  };

  const getNestedPropByPath = (path) => (obj) =>
    path.split(".").reduce(reducer, obj);
  ```

- 讨论
  - 利用 `Reduce` 实现
  - [Code In Unit Test](https://github.com/fancn21th/frontend-algorithm-cookbook/blob/main/src/nested-property/nested-property.test.js)
