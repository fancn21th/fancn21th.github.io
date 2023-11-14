# 设计模式

:::tip

[设计模式](https://refactoringguru.cn/design-patterns) 是软件设计中常见问题的典型解决方案。 它们就像能根据需求进行调整的预制蓝图， 可用于解决代码中反复出现的设计问题 ...

上文出处 讲的是最经典的一些设计模式, 它们 常常和 后端研发 联系到一起. 但是本文着重讲的是 前端设计模式.

当然 前后端设计模式有的是相同的. 或者说是相通的.

:::

## SOLID 原则

### 依赖倒置

Dependency Inversion Principle

## 单一数据源

我第一次了解 [单一数据源](https://redux.js.org/understanding/thinking-in-redux/three-principles#single-source-of-truth) 是来自 [Dan Abramov](https://x.com/dan_abramov?s=20), 其实它是一个非常大的概念. 或者换句话我在这里只是取其基本设计思想.

单一数据源是所有状态设计的 核心与基础思想. 也就是每当你声明一个 状态. 响应式的也好, 普通的也好. 需要考虑它的来源是哪里, 来源是不是唯一的, 统一的, 一致的.

## Compound Component

我没有翻译这个模式的名字, 以免误解, 事实上这是一个标准的 前端设计模式 横跨 React 和 Vue.
