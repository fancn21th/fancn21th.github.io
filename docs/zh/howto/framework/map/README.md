# 离线地图

离线地图 相对普通组件 更为复杂.

::: tip
离线地图并非一定要用 <Product>Echarts</Product> 地图方案. 这里不作展开这个方案选择的过程.
:::

## 难点

### 引子

::: tip

[ECharts 基础教程](https://study.163.com/course/courseMain.htm?courseId=1016007) 中 作者 抱怨 `读者` 不善于阅读 `API 文档`.

个人认为 这本质是 <Term>心智模型</Term> 的问题. 大部分 `读者` 会 基于 <Term>惯性思维</Term> 去做判断 下结论.

在 <Product>React</Product> 官网有 [thinking-in-react](https://react.dev/learn/thinking-in-react) 一文 解释如何 用 <Product>React</Product> 的思维方式去 开发 web 程序.

在 <Product>Vue3</Product> 官网中有 [单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html#introduction) 一文 做了类似的解释.

然而 <Product>Echarts</Product> 官网 [echarts 官网](https://echarts.apache.org/handbook/zh/get-started) 我并没有 看到 相关的文章.

:::

我们来看看 最基础的 一个 Echarts 案例, [绘制一个简单的图表](https://echarts.apache.org/handbook/zh/get-started#%E7%BB%98%E5%88%B6%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%9B%BE%E8%A1%A8). 注意高亮的 17-36 行

<Badge type="danger" text="重点" vertical="middle" /> <Product>Echarts</Product> 的 API 可以 幼稚地 来说就是 设置 一个 [option](https://echarts.apache.org/zh/option.html) 对象.

::: details 绘制一个简单的图表 点击查看源代码

```html {17-36}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>ECharts</title>
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="echarts.js"></script>
  </head>
  <body>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    </script>
  </body>
</html>
```

:::

再来看看 [map-usa](https://echarts.apache.org/examples/zh/editor.html?c=map-usa) 这个地图类型 案例. 可以 发现 `option` 明显变大了很多.

::: details Echarts 美国地图案例 点击查看源代码

```javascript {29-141}
import * as echarts from "echarts";

var ROOT_PATH = "https://echarts.apache.org/examples";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get(ROOT_PATH + "/data/asset/geo/USA.json", function (usaJson) {
  myChart.hideLoading();
  echarts.registerMap("USA", usaJson, {
    Alaska: {
      left: -131,
      top: 25,
      width: 15,
    },
    Hawaii: {
      left: -110,
      top: 28,
      width: 5,
    },
    "Puerto Rico": {
      left: -76,
      top: 26,
      width: 2,
    },
  });
  option = {
    title: {
      text: "USA Population Estimates (2012)",
      subtext: "Data from www.census.gov",
      sublink: "http://www.census.gov/popest/data/datasets.html",
      left: "right",
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: "right",
      min: 500000,
      max: 38000000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: "left",
      top: "top",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "USA PopEstimates",
        type: "map",
        roam: true,
        map: "USA",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: "Alabama", value: 4822023 },
          { name: "Alaska", value: 731449 },
          { name: "Arizona", value: 6553255 },
          { name: "Arkansas", value: 2949131 },
          { name: "California", value: 38041430 },
          { name: "Colorado", value: 5187582 },
          { name: "Connecticut", value: 3590347 },
          { name: "Delaware", value: 917092 },
          { name: "District of Columbia", value: 632323 },
          { name: "Florida", value: 19317568 },
          { name: "Georgia", value: 9919945 },
          { name: "Hawaii", value: 1392313 },
          { name: "Idaho", value: 1595728 },
          { name: "Illinois", value: 12875255 },
          { name: "Indiana", value: 6537334 },
          { name: "Iowa", value: 3074186 },
          { name: "Kansas", value: 2885905 },
          { name: "Kentucky", value: 4380415 },
          { name: "Louisiana", value: 4601893 },
          { name: "Maine", value: 1329192 },
          { name: "Maryland", value: 5884563 },
          { name: "Massachusetts", value: 6646144 },
          { name: "Michigan", value: 9883360 },
          { name: "Minnesota", value: 5379139 },
          { name: "Mississippi", value: 2984926 },
          { name: "Missouri", value: 6021988 },
          { name: "Montana", value: 1005141 },
          { name: "Nebraska", value: 1855525 },
          { name: "Nevada", value: 2758931 },
          { name: "New Hampshire", value: 1320718 },
          { name: "New Jersey", value: 8864590 },
          { name: "New Mexico", value: 2085538 },
          { name: "New York", value: 19570261 },
          { name: "North Carolina", value: 9752073 },
          { name: "North Dakota", value: 699628 },
          { name: "Ohio", value: 11544225 },
          { name: "Oklahoma", value: 3814820 },
          { name: "Oregon", value: 3899353 },
          { name: "Pennsylvania", value: 12763536 },
          { name: "Rhode Island", value: 1050292 },
          { name: "South Carolina", value: 4723723 },
          { name: "South Dakota", value: 833354 },
          { name: "Tennessee", value: 6456243 },
          { name: "Texas", value: 26059203 },
          { name: "Utah", value: 2855287 },
          { name: "Vermont", value: 626011 },
          { name: "Virginia", value: 8185867 },
          { name: "Washington", value: 6897012 },
          { name: "West Virginia", value: 1855413 },
          { name: "Wisconsin", value: 5726398 },
          { name: "Wyoming", value: 576412 },
          { name: "Puerto Rico", value: 3667084 },
        ],
      },
    ],
  };
  myChart.setOption(option);
});

option && myChart.setOption(option);
```

:::

回过头来看 [业务需求](/zh/normalization/bigscreen/map.html#业务) 的描述, 应该不难想象 `难点` 到底在哪里了.

### option 的动态构造

不难想到 在任意一个时刻 地图的 `option` 大致会包括:

- 若干个 [geo](https://echarts.apache.org/zh/option.html#geo) 控制 地图的绘制

- 若干个 [series](https://echarts.apache.org/zh/option.html#series) 控制 地图上的图表的绘制

- [dataset](https://echarts.apache.org/handbook/zh/concepts/dataset) 控制 地图上的图表依赖的数据

- 其他 例如 legend, tooltip 等等

随着 用户的交互 这些 `option` 还会动态变化.

下面是 demo 程序中的 `option`. 生产环境的 `option` 会更加复杂, 代码行数 会成倍增加.

::: details 地图 demo 的 option 点击查看 源代码

```javascript
{
    "tooltip": {},
    "legend": {
        "top": "5%",
        "right": "5%",
        "orient": "vertical"
    },
    "geo": [
        {
            "show": true,
            "silent": true,
            "id": "S1",
            "zlevel": 1,
            "roam": true,
            "label": {
                "normal": {
                    "show": true
                }
            },
            "map": "中国",
            "boundingCoords": [
                [
                    108.366964,
                    33.275616
                ],
                [
                    116.135188,
                    29.029488
                ]
            ],
            "layoutCenter": [
                "50%",
                "50%"
            ],
            "layoutSize": 1080,
            "itemStyle": {
                "color": "transparent",
                "borderColor": "#414753",
                "borderWidth": 2
            },
            "regions": [
                {
                    "name": "湖北省",
                    "selected": true
                }
            ],
            "select": {
                "itemStyle": {
                    "shadowColor": "#0B7FD1",
                    "shadowBlur": 5,
                    "shadowOffsetX": 10,
                    "shadowOffsetY": 20
                }
            }
        },
        {
            "show": true,
            "silent": false,
            "id": "S2",
            "zlevel": 2,
            "roam": true,
            "label": {
                "normal": {
                    "show": true
                }
            },
            "map": "湖北省",
            "boundingCoords": [
                [
                    108.366964,
                    33.275616
                ],
                [
                    116.135188,
                    29.029488
                ]
            ],
            "layoutCenter": [
                "50%",
                "50%"
            ],
            "layoutSize": 1080,
            "itemStyle": {
                "color": {
                    "image": "/img/bg.c72a3e88.png",
                    "repeat": "no-repeat"
                },
                "borderWidth": 3,
                "borderColor": "#fff"
            }
        },
        {
            "show": false,
            "silent": false,
            "id": "S3",
            "zlevel": 3,
            "roam": true,
            "label": {
                "normal": {
                    "show": true
                }
            },
            "map": "湖北省",
            "boundingCoords": [
                [
                    108.366964,
                    33.275616
                ],
                [
                    116.135188,
                    29.029488
                ]
            ],
            "layoutCenter": [
                "50%",
                "50%"
            ],
            "layoutSize": 1080,
            "itemStyle": {
                "color": "transparent"
            }
        },
        {
            "show": false,
            "id": "S4",
            "zlevel": 4,
            "roam": true,
            "label": {
                "normal": {
                    "show": true
                }
            },
            "map": "湖北省",
            "boundingCoords": [
                [
                    108.366964,
                    33.275616
                ],
                [
                    116.135188,
                    29.029488
                ]
            ],
            "layoutCenter": [
                "50%",
                "50%"
            ],
            "layoutSize": 1080,
            "itemStyle": {
                "color": {
                    "image": "/img/bg.c72a3e88.png",
                    "repeat": "no-repeat"
                },
                "borderWidth": 3,
                "borderColor": "#fff"
            }
        }
    ],
    "dataset": {
        "source": [
            [
                [
                    "county",
                    "geo",
                    "项目数",
                    "总金额"
                ],
                [
                    "宜昌市",
                    [
                        111.140801,
                        30.747312
                    ],
                    "16",
                    "900.00"
                ],
                [
                    "武汉市",
                    [
                        114.348204,
                        30.623025
                    ],
                    "13",
                    "700.00"
                ],
                [
                    "孝感市",
                    [
                        113.885608,
                        31.118116
                    ],
                    "12",
                    "720.00"
                ],
                [
                    "十堰市",
                    [
                        110.446495,
                        32.45798
                    ],
                    "9",
                    "700.00"
                ]
            ],
            [
                [
                    "county",
                    "geo",
                    "项目数",
                    "总金额"
                ],
                [
                    "黄冈市",
                    [
                        115.343867,
                        30.717343
                    ],
                    "22",
                    "900.00"
                ],
                [
                    "荆州市",
                    [
                        112.574526,
                        29.995051
                    ],
                    "24",
                    "700.00"
                ],
                [
                    "襄阳市",
                    [
                        111.944787,
                        31.930988
                    ],
                    "50",
                    "700.00"
                ]
            ]
        ]
    },
    "series": [
        {
            "type": "scatter",
            "coordinateSystem": "geo",
            "tooltip": {},
            "symbolSize": 30,
            "label": {
                "position": "inside",
                "show": true
            },
            "labelLine": {
                "show": false
            },
            "animationDuration": 0,
            "zlevel": 5,
            "name": "数据A",
            "data": [
                {
                    "name": "宜昌市",
                    "value": [
                        111.140801,
                        30.747312,
                        {
                            "项目数": "16",
                            "总金额": "900.00"
                        }
                    ]
                },
                {
                    "name": "武汉市",
                    "value": [
                        114.348204,
                        30.623025,
                        {
                            "项目数": "13",
                            "总金额": "700.00"
                        }
                    ]
                },
                {
                    "name": "孝感市",
                    "value": [
                        113.885608,
                        31.118116,
                        {
                            "项目数": "12",
                            "总金额": "720.00"
                        }
                    ]
                },
                {
                    "name": "十堰市",
                    "value": [
                        110.446495,
                        32.45798,
                        {
                            "项目数": "9",
                            "总金额": "700.00"
                        }
                    ]
                }
            ]
        },
        {
            "type": "scatter",
            "coordinateSystem": "geo",
            "tooltip": {},
            "symbolSize": 30,
            "label": {
                "position": "inside",
                "show": true
            },
            "labelLine": {
                "show": false
            },
            "animationDuration": 0,
            "zlevel": 5,
            "name": "数据B",
            "data": [
                {
                    "name": "黄冈市",
                    "value": [
                        115.343867,
                        30.717343,
                        {
                            "项目数": "22",
                            "总金额": "900.00"
                        }
                    ]
                },
                {
                    "name": "荆州市",
                    "value": [
                        112.574526,
                        29.995051,
                        {
                            "项目数": "24",
                            "总金额": "700.00"
                        }
                    ]
                },
                {
                    "name": "襄阳市",
                    "value": [
                        111.944787,
                        31.930988,
                        {
                            "项目数": "50",
                            "总金额": "700.00"
                        }
                    ]
                }
            ]
        }
    ]
}

```

:::

## 方案

问题复杂 必然就会 考虑如何 <Term>分而治之</Term>

### SOLID 原则

- <Pattern>依赖倒置</Pattern>

<Badge type="danger" text="重点" vertical="middle" /> 把 `option` 作为 `底层的基础操作`. 将 `绘制地图的业务需求` 作为 `高层的业务抽象`.

### 编程范式

- <Paradigm>函数式</Paradigm>

<Badge type="danger" text="重点" vertical="middle" /> 借鉴 [reducers](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers) 把上文 提到的 `绘制地图的业务需求` 作为 <Paradigm>纯函数</Paradigm> 来实现.

### 设计图
