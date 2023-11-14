# 路由与分层

## 业务

- 大屏上的 `核心元素`

  这些元素是从业务需求中分析得来.

  > 以下用文件夹层级结构的展现形式来表现其层级结构.

  ```shell
  .
  └── shared-screen           # 共享屏
      └── map                 # 地图
          └── biz-cards       # 业务卡片
              └── background  # 背景

  ```

- 大屏的页面

  每个大屏页面是一个独立的路由, 每个页面都包含 `核心元素`.

- 大屏的下钻需求

  > 以下用文件夹层级结构的展现形式来表现其层级结构.

  ```shell
  .
  └── router
    └── level1               # 地图层级 1
        └── level2           # 地图层级 2
            └── level3       # 地图层级 3
  ```

## 技术

### 分层

不同于一般的前端项目的布局与定位, 大屏项目更适合用 `分层` 和 `绝对定位` 的方式来实现 前端的 `布局`. 更多 `布局` 的设计细节 我会在单独章节展开. 这里我只讲解 `分层` 的设计 和 `路由` 的设计 产生关联的部分.

### 路由

路由是前端项目的基础

- 地图驱动

  地图驱动 是指 整个大屏的交互设计 都围绕地图展开, 比如 用户点击地图某个区域进行下钻 整个大屏的信息卡就会响应发生 变化. 这些变化 既有 UI 层面的 也有 数据 层面的.

  这种驱动关系是通过 改变路由 来间接实现的. 因此 地图是 <Pattern>单一数据源</Pattern>.

  ::: tip
  在这里 <Pattern>单一数据源</Pattern> 是指 大屏发生数据变化的源头.

  在后续的 DEMO 和 代码 中 你可以看到 以下数据流设计.

  地图 ==> 路由 ==> <Product>Pinia</Product> ==> <BestPractice>业务单元</BestPractice>
  :::

### 路由 和 分层

|             完整路由             |      路由       |      分层层级       |             分层内容             |
| :------------------------------: | :-------------: | :-----------------: | :------------------------------: |
|         /shared-screen/          | /shared-screen/ | layer@1000, layer@1 | 头部, 左侧边栏 在 1000. 背景在 1 |
|     /shared-screen/trunk-a/      |    /trunk-a/    |      layer@100      |               地图               |
| /shared-screen/trunk-a/branch-a/ |   /branch-a/    |      layer@10       |              信息卡              |

- 路由是层级结构

- 分层是扁平结构

> 这是 通过 `teleport` 实现的

```html
<div id="app" data-v-app="">
  <div data-v-9070052b="" class="layer fullscreen" style="z-index: 1000"></div>
  <div data-v-9070052b="" class="layer fullscreen" style="z-index: 10"></div>
  <div data-v-9070052b="" class="layer fullscreen" style="z-index: 100"></div>
  <div data-v-9070052b="" class="layer fullscreen" style="z-index: 1"></div>
</div>
```

### 技术栈

- [teleport](https://cn.vuejs.org/guide/built-ins/teleport.html#teleport)
- [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

## 源码

- 提交

  - [📦 NEW: 实现路由与分层 Close #1](https://github.com/fancn21th/scream/commit/8d2d4cdf209572d4680eca500a32254a7ce6bea2)

- 功能点

  - 等比缩放
  - 分层组件 (Teleport)
  - 分层配置
  - 分层重叠鼠标事件问题的解决方案
  - 页面的文件夹结构
  - vite alias 配置
  - 背景 gradient-patterns
