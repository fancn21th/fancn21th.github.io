# 布局

## 业务

- 大屏整体布局
  - 头部
  - 左侧导航
  - 右侧信息卡区域
  - 左侧地图
- 大屏上的信息卡 需要能够根据权限 动态的显示或者隐藏
- 大屏上的信息卡 可能需要支持用户自定义 :rocket:
- 大屏的 Grid 布局设计 纵向为 16 列
  - 其中 业务单元 卡片 占右侧的 6 列
    - 每一个信息卡 可以是 1-6 列宽度

## 技术

### gridster.js

绝佳的技术方案 应该是 <Product>gridster.js</Product> , 它能满足以上所有业务需求.
<Product>vue3-grid-layout</Product> 是开源社区提供的 Vue3 版本.

## 源码

- 提交

  - [📦 NEW: 布局 Fix #2](https://github.com/fancn21th/scream/commit/e0b06eca718028b2b53283d15818649d68d86ed9)
  - [📦 NEW: 头部组件 Fix #3](https://github.com/fancn21th/scream/commit/b4058d67e247a305025937a96a3e4e2e842438fd)
  - [📦 NEW: 布局侧边栏导航 Fix #4](https://github.com/fancn21th/scream/commit/ed6a77dc318b1e843af5fd74e95b554e045d0124)

- 功能点

  - 树干, 树枝, 树叶 文件夹结构

    方便对应到具体项目具体业务需求中的 业务层级含义, 建议 <Term>语义化</Term> 命名原则.

  - 卡片布局组件 (gridster.js)
  - 卡片配置
  - 布局组件调整
