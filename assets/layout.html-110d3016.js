import{_ as c,r as t,o as d,c as u,a as e,b as l,d as n,w as o}from"./app-e3dbf12f.js";const _={},h=e("h1",{id:"布局",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#布局","aria-hidden":"true"},"#"),l(" 布局")],-1),f=e("h2",{id:"业务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#业务","aria-hidden":"true"},"#"),l(" 业务")],-1),m=e("li",null,[l("大屏整体布局 "),e("ul",null,[e("li",null,"头部"),e("li",null,"左侧导航"),e("li",null,"右侧信息卡区域"),e("li",null,"左侧地图")])],-1),p=e("li",null,"大屏上的信息卡 需要能够根据权限 动态的显示或者隐藏",-1),b=e("li",null,"大屏上的信息卡 可能需要支持用户自定义 🚀",-1),x=e("ul",null,[e("li",null,"每一个信息卡 可以是 1-6 列宽度")],-1),g=e("h2",{id:"技术",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术","aria-hidden":"true"},"#"),l(" 技术")],-1),k=e("h3",{id:"gridster-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gridster-js","aria-hidden":"true"},"#"),l(" gridster.js")],-1),E=e("h2",{id:"源码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#源码","aria-hidden":"true"},"#"),l(" 源码")],-1),N=e("p",null,"提交",-1),j={href:"https://github.com/fancn21th/scream/commit/e0b06eca718028b2b53283d15818649d68d86ed9",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/fancn21th/scream/commit/b4058d67e247a305025937a96a3e4e2e842438fd",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/fancn21th/scream/commit/ed6a77dc318b1e843af5fd74e95b554e045d0124",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"功能点",-1),V=e("p",null,"树干, 树枝, 树叶 文件夹结构",-1),y=e("li",null,[e("p",null,"卡片布局组件 (gridster.js)")],-1),F=e("li",null,[e("p",null,"卡片配置")],-1),T=e("li",null,[e("p",null,"布局组件调整")],-1);function W(w,C){const s=t("BestPractice"),a=t("Product"),r=t("ExternalLinkIcon"),i=t("Term");return d(),u("div",null,[h,f,e("ul",null,[m,p,b,e("li",null,[l("大屏的 Grid 布局设计 纵向为 16 列 "),e("ul",null,[e("li",null,[l("其中 "),n(s,null,{default:o(()=>[l("业务单元")]),_:1}),l(" 卡片 占右侧的 6 列 "),x])])])]),g,k,e("p",null,[l("绝佳的技术方案 应该是 "),n(a,null,{default:o(()=>[l("gridster.js")]),_:1}),l(" , 它能满足以上所有业务需求.")]),n(a,null,{default:o(()=>[l("vue3-grid-layout")]),_:1}),l(" 是开源社区提供的 Vue3 版本."),E,e("ul",null,[e("li",null,[N,e("ul",null,[e("li",null,[e("a",j,[l("📦 NEW: 布局 Fix #2"),n(r)])]),e("li",null,[e("a",B,[l("📦 NEW: 头部组件 Fix #3"),n(r)])]),e("li",null,[e("a",v,[l("📦 NEW: 布局侧边栏导航 Fix #4"),n(r)])])])]),e("li",null,[P,e("ul",null,[e("li",null,[V,e("p",null,[l("方便对应到具体项目具体业务需求中的 业务层级含义, 建议 "),n(i,null,{default:o(()=>[l("语义化")]),_:1}),l(" 命名原则.")])]),y,F,T])])])])}const L=c(_,[["render",W],["__file","layout.html.vue"]]);export{L as default};