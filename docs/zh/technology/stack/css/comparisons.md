# CSS 方案对比

这里 我们比较一下 一些常用的 `CSS` 方案， 有一些因素我们排除在考虑范围外

- 不考虑 Bundle size

| 方案                                                                       |                           谁在用                           |             特点 |                      优点 Pros |        缺点 Cons |
| -------------------------------------------------------------------------- | :--------------------------------------------------------: | ---------------: | -----------------------------: | ---------------: |
| [CSS Modules](https://github.com/css-modules/css-modules)                  |                      gatsby， nextjs                       | scoped plain css |                     无类名冲突 |   没有可编程接口 |
| [SASS](https://sass-lang.com/) [Stylus](https://stylus-lang.com/) [Less]() |                                                            |     preprocessor |                     可编程接口 |  和 程序完全分离 |
| [CSS In Js](https://cssinjs.org/?v=v10.9.2)                                | nextjs [styled jsx](https://github.com/vercel/styled-jsx)) |                  | 可编程接口， 动态样式， Scoped | 如何写好看的 CSS |
| [Tailwind](https://tailwindcss.com/)                                       |                                                            |    utility class |                         Faster | No Component Lib |
| [Bootstrap](https://getbootstrap.com/)                                     |                                                            |                  |                  Component Lib |       Unused CSS |
| [mantine](https://mantine.dev/)                                            |                                                            |                  |                  Component Lib |                  |

更多 常用组件库的比较 [npm trends](https://npmtrends.com/@chakra-ui/styled-system-vs-@mantine/core-vs-@material-ui/core-vs-@tamagui/core-node-vs-antd-vs-material-ui-vs-react-bootstrap-vs-reactstrap)
