# 路由与分层

## 业务

- 大屏上的 `核心元素`

  这些元素是从业务需求中分析得来.

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

  ```shell
  .
  └── router
    └── level1               # 地图层级 1
        └── level2           # 地图层级 2
            └── level3       # 地图层级 3
  ```

## 技术

### 分层

不同于一般的前端项目的布局与定位, 大屏项目更适合用 分层 和 绝对定位 的方式来实现 前端的布局. 更多 `布局` 的设计细节 我会在单独章节展开. 这里我只讲解 `分层` 的设计 和 `路由` 的设计 产生关联的部分.

### 路由

路由是前端项目的基础

- 地图驱动

  - 有的时候 地图是 <Pattern>单一数据源</Pattern>, 其他 `业务模块` 是被地图驱动的.
  - 有的时候 每个页面都有独立的地图.

- 地图驱动 与 地图层级

  - 标准化项目中, 选择的是 `地图驱动` 的方式. 这样 路由设计 依赖于 `地图层级`.

### 路由和分层

- 路由的层级 对应 分层的层级 (TODO: 这里需要用图例说明)

### 技术栈

- [teleport](https://cn.vuejs.org/guide/built-ins/teleport.html#teleport)
- [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

## 源代码

[📦 NEW: 实现路由与分层 Close #1](https://github.com/fancn21th/scream/commit/8d2d4cdf209572d4680eca500a32254a7ce6bea2)
