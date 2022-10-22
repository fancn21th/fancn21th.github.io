# 算法（Web 开发）

> JS 在 Web 开发领域 有着特有（但是不是独有）的编程范式 因此一些常见的算法可以让你一窥其与众不同

## 页面上每个标签有多少个（DOM 节点计数器）

- 问题

我想知道我打开的网页里面每个标签出现的频率次数，以及按照出现次数的多少从多到少排序

- 方案

  - 如何使用

    - 打开浏览器的开发工具
      - 以 chrome 为例右键点击网页然后选择查看
    - 复制下面的代码到 控制台 (Console)
      - 切换到 控制台 Tab
    - 回车执行
    - 查看结果

  - 涉及到的编程范式
    - 递归
    - 高阶函数
    - Array 函数式 方法
      - map
      - sort

```js
(function () {
  const result = {};

  // 遍历所有DOM节点
  function traverseDom(node, counter) {
    counter(node);
    node = node.firstChild;
    while (node) {
      traverseDom(node, counter);
      node = node.nextSibling;
    }
  }

  // 计算每个节点的个数
  function countNode(node) {
    if (result[node.nodeName]) {
      result[node.nodeName] += 1;
    } else {
      result[node.nodeName] = 1;
    }
  }

  traverseDom(document.body, countNode);

  // 排序
  const sortedResult = Object.keys(result)
    .map((key) => ({
      key: key,
      count: result[key],
    }))
    .sort((a, b) => b.count - a.count);

  console.log({ sortedResult });
})();
```
