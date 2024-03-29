# 离线地图

::: tip

离线地图是 <Term>业务需求</Term>. 而且 所有的 信息卡的数据 都是被 地图驱动的.

因此地图可以说是 皇冠上的 宝石. 它是最复杂和最有挑战的部分.

:::

## 业务

- 局域网内部署
- 下钻
  - 驱动 信息卡的数据更新
- 显示定制化区域
  - 比如将 若干个区域作为一个整体来展示
- 打点
  - 基于 经纬度信息 在地图 上现实业务数据

## 技术

### Echarts

Echarts 虽然 也是业务需求的一部分, 但是 其本身 确实也是 开源设计中 最优秀的 数据可视化 方向的 UI 组件库之一, 加上 它和 <Product>Vue</Product> 或 <Product>React</Product> 无关.

### 设计模式

离线地图 可以说是一个组件 但是也可以说是一个 轻量级的框架. 自然 不少设计模式. 更多细节 请参考 [详细设计](#详细设计)

### 详细设计

[离线地图 设计](/zh/howto/framework/map/README.md)

## 源码

- 提交

  - [📦 NEW: OOS map 依赖的 geo json 文件](https://github.com/fancn21th/scream/commit/d72b53185458bd3620cdd9e76b80c62962ba1d72)
  - [📦 NEW: 在地图工程中显示一个湖北省地图 Fix #8](https://github.com/fancn21th/scream/commit/949532bc03053748d0e983d84535b91407fc630c)
