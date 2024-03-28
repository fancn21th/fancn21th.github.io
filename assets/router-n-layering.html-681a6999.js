import{_ as i,r as t,o as r,c as d,a,b as n,d as s,w as e,e as c}from"./app-e3dbf12f.js";const k={},h=c(`<h1 id="路由与分层" tabindex="-1"><a class="header-anchor" href="#路由与分层" aria-hidden="true">#</a> 路由与分层</h1><h2 id="业务" tabindex="-1"><a class="header-anchor" href="#业务" aria-hidden="true">#</a> 业务</h2><ul><li><p>大屏上的 <code>核心元素</code></p><p>这些元素是从业务需求中分析得来.</p><blockquote><p>以下用文件夹层级结构的展现形式来表现其层级结构.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
└── shared-screen           <span class="token comment"># 共享屏</span>
    └── map                 <span class="token comment"># 地图</span>
        └── biz-cards       <span class="token comment"># 业务卡片</span>
            └── background  <span class="token comment"># 背景</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>大屏的页面</p><p>每个大屏页面是一个独立的路由, 每个页面都包含 <code>核心元素</code>.</p></li><li><p>大屏的下钻需求</p><blockquote><p>以下用文件夹层级结构的展现形式来表现其层级结构.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
└── router
  └── level1               <span class="token comment"># 地图层级 1</span>
      └── level2           <span class="token comment"># 地图层级 2</span>
          └── level3       <span class="token comment"># 地图层级 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="技术" tabindex="-1"><a class="header-anchor" href="#技术" aria-hidden="true">#</a> 技术</h2><h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3><p>不同于一般的前端项目的布局与定位, 大屏项目更适合用 <code>分层</code> 和 <code>绝对定位</code> 的方式来实现 前端的 <code>布局</code>. 更多 <code>布局</code> 的设计细节 我会在单独章节展开. 这里我只讲解 <code>分层</code> 的设计 和 <code>路由</code> 的设计 产生关联的部分.</p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>路由是前端项目的基础</p>`,8),v=a("p",null,"地图驱动",-1),m=a("p",null,"地图驱动 是指 整个大屏的交互设计 都围绕地图展开, 比如 用户点击地图某个区域进行下钻 整个大屏的信息卡就会响应发生 变化. 这些变化 既有 UI 层面的 也有 数据 层面的.",-1),g={class:"custom-container tip"},b=a("p",{class:"custom-container-title"},"提示",-1),_=a("p",null,"在后续的 DEMO 和 代码 中 你可以看到 以下数据流设计.",-1),q=c(`<h3 id="路由-和-分层" tabindex="-1"><a class="header-anchor" href="#路由-和-分层" aria-hidden="true">#</a> 路由 和 分层</h3><table><thead><tr><th style="text-align:center;">完整路由</th><th style="text-align:center;">路由</th><th style="text-align:center;">分层层级</th><th style="text-align:center;">分层内容</th></tr></thead><tbody><tr><td style="text-align:center;">/shared-screen/</td><td style="text-align:center;">/shared-screen/</td><td style="text-align:center;">layer@1000, layer@1</td><td style="text-align:center;">头部, 左侧边栏 在 1000. 背景在 1</td></tr><tr><td style="text-align:center;">/shared-screen/trunk-a/</td><td style="text-align:center;">/trunk-a/</td><td style="text-align:center;">layer@100</td><td style="text-align:center;">地图</td></tr><tr><td style="text-align:center;">/shared-screen/trunk-a/branch-a/</td><td style="text-align:center;">/branch-a/</td><td style="text-align:center;">layer@10</td><td style="text-align:center;">信息卡</td></tr></tbody></table><ul><li><p>路由是层级结构</p></li><li><p>分层是扁平结构</p></li></ul><blockquote><p>这是 通过 <code>teleport</code> 实现的</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-v-app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-9070052b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer fullscreen<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 1000</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-9070052b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer fullscreen<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 10</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-9070052b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer fullscreen<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 100</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-9070052b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer fullscreen<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 1</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h3>`,6),x={href:"https://cn.vuejs.org/guide/built-ins/teleport.html#teleport",target:"_blank",rel:"noopener noreferrer"},y={href:"https://router.vuejs.org/zh/guide/essentials/nested-routes.html",target:"_blank",rel:"noopener noreferrer"},f=a("h2",{id:"源码",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#源码","aria-hidden":"true"},"#"),n(" 源码")],-1),P=a("p",null,"提交",-1),z={href:"https://github.com/fancn21th/scream/commit/8d2d4cdf209572d4680eca500a32254a7ce6bea2",target:"_blank",rel:"noopener noreferrer"},N=a("li",null,[a("p",null,"功能点"),a("ul",null,[a("li",null,"等比缩放"),a("li",null,"分层组件 (Teleport)"),a("li",null,"分层配置"),a("li",null,"分层重叠鼠标事件问题的解决方案"),a("li",null,"页面的文件夹结构"),a("li",null,"vite alias 配置"),a("li",null,"背景 gradient-patterns")])],-1);function B(E,V){const p=t("Pattern"),o=t("Product"),u=t("BestPractice"),l=t("ExternalLinkIcon");return r(),d("div",null,[h,a("ul",null,[a("li",null,[v,m,a("p",null,[n("这种驱动关系是通过 改变路由 来间接实现的. 因此 地图是 "),s(p,null,{default:e(()=>[n("单一数据源")]),_:1}),n(".")]),a("div",g,[b,a("p",null,[n("在这里 "),s(p,null,{default:e(()=>[n("单一数据源")]),_:1}),n(" 是指 大屏发生数据变化的源头.")]),_,a("p",null,[n("地图 ==> 路由 ==> "),s(o,null,{default:e(()=>[n("Pinia")]),_:1}),n(" ==> "),s(u,null,{default:e(()=>[n("业务单元")]),_:1})])])])]),q,a("ul",null,[a("li",null,[a("a",x,[n("teleport"),s(l)])]),a("li",null,[a("a",y,[n("嵌套路由"),s(l)])])]),f,a("ul",null,[a("li",null,[P,a("ul",null,[a("li",null,[a("a",z,[n("📦 NEW: 实现路由与分层 Close #1"),s(l)])])])]),N])])}const I=i(k,[["render",B],["__file","router-n-layering.html.vue"]]);export{I as default};
