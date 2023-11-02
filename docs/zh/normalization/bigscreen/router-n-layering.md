# 路由与分层

这块的设计与考虑完全是经验学. 技术侧为主, 考虑到大屏在页面级别交互高度统一, 路由有相应的 `规范化` 设计.

## 交织

`业务目的` 优先

::: tip
业务需求:

- 大屏有若干个业务模块组成
- 每个业务模块都需要能下钻
  - 当用户在地图上进行 `下钻操作` 的时候, 地图会切换到 `下一级地图`, 这时 `信息卡片` 会发生变化, 而 `公共部分` 不会变化.

:::

`实现手段` 其次

- 路由是 `SPA` 的核心, [Vue Router](https://router.vuejs.org/zh/introduction.html) 是 [VueJS](https://cn.vuejs.org/guide/introduction.html) 标配, 进化到无以复加了.

- 分层 是 大屏设计 特有的, 简单来说 我们把一张大屏 从后往前 至少设计成 4 层的叠加.

  - 背景层
  - 地图层
  - 信息卡层
  - 公共部分
    - 导航
    - 页头

路由和分层是交织在一起的

- [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
