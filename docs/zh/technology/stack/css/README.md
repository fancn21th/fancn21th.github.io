# CSS

:::danger

CSS 不应该是一个放在 `二级栏目` 的主题！

:::

事实上 随着 `组件库` 例如 `MUI` `Antd` `vuetifyjs` 的普及， `2B` 行业的前端程序员很少写大量的 `CSS`代码。 所以如果当你尝试挑战一下 [CSS Battle](https://cssbattle.dev/) 可能会感觉捉襟见肘。

那如果涉及到 `CSS` 架构层面的问题。 你可能更加不会去考虑了，因为只有当你需要开发一个全新的应用程序 你才可能因为 `大量自定义CSS`的需求 有可能会想到怎么组织好你的 `CSS`代码。 `OOCSS`, `SMACSS`， `ITCSS` 都是比较好的参考方案，他们常常会和 `BEM` 混搭使用。

CSS 架构里面考虑的问题 往往最后都 非常细节微观， 例如你甚至需要考虑如何组织一个类样式里面的 CSS 属性分类。

```css
.foo {
  /* 定位 positioning */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  /* 盒模型 box model */
  display: inline-block;
  float: left;
  width: 100px;
  height: 100px;

  /* 文字 typography */
  font: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;

  /* 皮肤 visual | skin */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;

  /* misc */
  opacity: 0.5;
}
```

最近的一个项目需要引入 CSS 架构已经是去年， 那是一个 基于 `Bootstrap 4.x` 的网站项目，我们基于 [sass-boilerplate](https://github.com/KittyGiraudel/sass-boilerplate) + `BEM` 尝试实现了 整个网站的 `CSS` 代码。

说实话 这并不轻松 太多条条框框和考虑因素的叠加 增加了维护成本，`CSS 架构` 从技术上来说 很好。 但是如果不能持续 使用，那么 `成本` 无法分摊。

至于 有 `CSS 架构` 和 没有 到底哪个效率高 哪个成本低 这个当 `质变` 不明显的时候，不会有结论。
