# 业务单元 信息卡

## UI

- 头部
  - 业务单元 名称
  - Tabs 业务功能 名称
- 主体
  - TabItem

## 状态

按 UI 分类

- 父组件容器
  - 当前选中的 Tab
- 头部
  - 可见的 Tabs
- 主体

## 详细设计

组件开发 的思路 可能不是千人千面, 但一定是 因人而异的.

不过 如果你遵循 [UI 和 状态](./README.md#ui-和-状态) 这个基本设计原则. 那么设计一个组件的思路应该是大同小异的.

### 接口设计优先

从用户的角度入手 我们希望一个组件是如何被调用的 ? 你不难想到如下的代码. 似乎和 [vuetifyjs tabs](https://vuetifyjs.com/en/components/tabs/#usage) 接口大同小异不是吗 ? 是不是又在造轮子了 ? 不急, 继续...

```jsx
<f-card>
  <f-card-header>业务单元名称</f-card-header>
  <f-card-body>
    <f-card-tab :title='业务功能A'>
      <ChartA />
    </f-card-tab>
    <f-card-tab :title='业务功能B'>
      <ChartB />
    </f-card-tab>
    <f-card-tab :title='业务功能C'>
      <ChartC />
    </f-card-tab>
  </f-card-body>
</f-card>
```

还记得 [业务需求](/zh/normalization/bigscreen/business-card.md#业务) 中的描述吗 ? 每个 `Tab` 里面不一定是一个 `图表`, 而是 若干个 `图表`, 每个图表可以占 总宽度的 1-6 等分. 这里我们先从简, 设计 3 种 不同尺寸的容器组件.

- one-third
- two-third
- half

因为 我希望每个 `图表` 不用考虑 除了渲染意外任何其他事情. 包括 `布局` 与 `定位`.

```jsx
<f-card>
  <f-card-header>业务单元名称</f-card-header>
  <f-card-body>
    <f-card-tab :title='业务功能A'>
      <ChartA />
    </f-card-tab>
    <f-card-tab :title='业务功能B'>
      <f-card-tab-one-third>
        <ChartB />
      </f-card-tab-one-third>
       <f-card-tab-two-third>
        <ChartC />
      </f-card-tab-two-third>
    </f-card-tab>
    <f-card-tab :title='业务功能C'>
      <f-card-tab-half>
        <ChartD />
      </f-card-tab-half>
       <f-card-tab-half>
        <ChartE />
      </f-card-tab-half>
    </f-card-tab>
  </f-card-body>
</f-card>
```

### 状态设计

### UI 实现

### 技术细节

- <Pattern>Compound Component</Pattern>

- [依赖注入](https://cn.vuejs.org/guide/components/provide-inject.html)
