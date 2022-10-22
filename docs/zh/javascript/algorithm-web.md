# 算法（Web 开发）

> JS 在 Web 开发领域 有着特有（但是不是独有）的编程范式 因此一些常见的算法可以让你一窥其与众不同

## 网页上标签计数与排序

> DOM 节点计数器

- 问题

  我想知道一个网页里每个标签出现的次数，以及从多到少排序

- 方案

  - 如何使用

    - 打开浏览器的开发工具
      - 以 chrome 为例右键点击网页然后选择查看
    - 切换到 控制台 Tab (Console)
    - 复制下面的代码到 控制台
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
      .map((tag) => ({
        tag,
        count: result[tag],
      }))
      .sort((a, b) => b.count - a.count);

    console.log({ sortedResult });
  })();
  ```

## 防抖

- 问题

  我想让一个函数 在单位时间间隔内被反复调用 只执行一次

  举个例子 假设有一个事件回调函数是由鼠标滚轮事件触发，我们不希望这个回调函数频繁运行，事实上我们只希望用户停止鼠标滚动执行一次这个回调就可以了

- 方案

  - 涉及到的编程范式
    - 高阶函数
      - 原函数被包装 延时执行
    - 闭包
      - timeout 变量
        - 确保只有一个定时器

  ```js
  function debounce(func, interval = 1000) {
    let timeout;
    return function () {
      // 保持原函数的 上下文与参数
      const context = this,
        args = arguments;

      // 包装原函数
      const later = function () {
        timeout = null;
        func.apply(context, args);
      };

      // 取消定时器
      clearTimeout(timeout);

      // 延时单位时间执行
      timeout = setTimeout(later, interval);
    };
  }
  ```

  - 测试 `debounce`
    - 拷贝一下所有代码到 控制台执行
    - 前 4 个节拍不会打印秒针数
      - 因为 500ms 小于 1000ms
    - 后 4 个节拍会打印

  ```js
  function debounce(func, interval = 1000) {
    let timeout;
    return function () {
      // 保持原函数的 上下文与参数
      const context = this,
        args = arguments;

      // 包装原函数
      const later = function () {
        timeout = null;
        func.apply(context, args);
      };

      // 取消定时器
      clearTimeout(timeout);

      // 延时单位时间执行
      timeout = setTimeout(later, interval);
    };
  }

  function beats({
    rhythm = [0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1],
    action = () => {},
    repeat = 2,
    rhythmTick = 1000,
  }) {
    let beatsCount = rhythm.length * repeat,
      currentBeat = 0,
      rhythmIndex = 0;

    function nextBeat() {
      if (currentBeat === beatsCount) {
        console.log("beats is done");
        return;
      }

      currentBeat++;

      if (rhythmIndex === rhythm.length) {
        rhythmIndex = 0;
      }

      console.log("heart is beating ...");
      action();

      setTimeout(nextBeat, rhythm[rhythmIndex++] * rhythmTick);
    }

    nextBeat();
  }

  function tick() {
    console.log(new Date().getSeconds());
  }

  beats({
    action: debounce(tick),
  });
  ```

## 节流

- 问题
-
