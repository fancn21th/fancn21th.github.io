# 算法（性能篇）

> algorithm cookbook for performance enhancement

## Reduce 优化 大数据集处理

- 问题

  给定一个大数据集， 针对它进行多个步骤的数据转换处理，常见的方案是链式调用数组方法， 有没有更好的方案？

  ```javascript
  const length = 10_000_000;
  // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ... 10_000_000]
  const bigData = Array.from({ length }, (\_, i) => i + 1);

  const even = (items) => items.filter((item) => item % 2 === 0);

  const double = (items) => items.map((item) => item * 2);

  const filterMappedBigData = (items) => double(even(items));
  ```

  ```shell
   # 执行时间
   console.time
      filter and map: 294 ms
  ```

- 方案

  可以使用 `reduce` 方法来提升性能

  ```javascript
  const reducer = function (acc, cur) {
    if (cur % 2 === 0) {
      acc.push(cur * 2);
    }
    return acc;
  };

  const reducedBigData = (items) => items.reduce(reducer, []);
  ```

  ```shell
    # 执行时间
    console.time
      reduce: 190 ms
  ```

- 讨论

  - `reduce` 方法减少了循环的次数因此性能更好

  ::: tip
  当 数据集并不大的时候 依然建议用声明式的 `链式调用`
  :::