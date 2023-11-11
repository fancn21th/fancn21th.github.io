# 业务单元 信息卡

## 业务

- 每个信息卡关联独立的 <BestPractice>业务单元</BestPractice>

- 信息卡支持 Tabs 切换
  - 每个 Tab 显示独立的 图表
  - 每个 Tab 能够 根据业务场景显示隐藏
  - 每个 Tab 里面 的图表可以占 1/3, 2/3, 1/3 宽度

## 技术

### 设计模式

很明显 信息卡组件 会在整个大屏项目中 反复出现, 封装组件是必然的.

Vue3 官方提供了 <Term>逻辑复用</Term> 的多种方式.

但是怎么把 这些 技术细节结合到一起 这已经超出了 Vue3 基础的范畴.

设计模式 终于登场了, 这里我们要用的是 <Pattern>Compound Component</Pattern>.

### 详细设计

[业务单元 信息卡 设计](/zh/howto/component/business-card.md)

## 源码

- 提交

  - [📦 NEW: 业务单元信息卡 Fix #5](https://github.com/fancn21th/scream/commit/6cd947f2394aac1ad38381a8cae1c409f948bba6)
  - [📦 NEW: 业务单元信息卡 内部的布局组件 Fix #6](https://github.com/fancn21th/scream/commit/e2b0d3e54404e111d1632b6fad64c1d6f12d2801)

- 功能点

  ::: tip
  详细设计 请参考 [业务单元 信息卡 设计](/zh/howto/component/business-card.md)

  实际上组件随着业务发展会越来越复杂.
  :::

  - 信息卡组件
  - 头部的标题
  - 头部 Tabs
  - 头部 Tabs 切换 和 主体 Tab 的联动
  - 主体的 Tab
  - 主体的 Tab 内部布局组件
