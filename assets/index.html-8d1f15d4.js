import{_ as t,r as o,o as c,c as p,a as n,b as s,d as e,e as l}from"./app-e3dbf12f.js";const i={},u=n("h1",{id:"css",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),s(" CSS")],-1),d=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"警告"),n("p",null,[s("CSS 不应该是一个放在 "),n("code",null,"二级栏目"),s(" 的主题！")])],-1),r=n("code",null,"组件库",-1),k=n("code",null,"MUI",-1),v=n("code",null,"Antd",-1),m=n("code",null,"vuetifyjs",-1),_=n("code",null,"2B",-1),b=n("code",null,"CSS",-1),h={href:"https://cssbattle.dev/",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>那如果涉及到 <code>CSS</code> 架构层面的问题。 你可能更加不会去考虑了，因为只有当你需要开发一个全新的应用程序 你才可能因为 <code>大量自定义CSS</code>的需求 有可能会想到怎么组织好你的 <code>CSS</code>代码。 <code>OOCSS</code>, <code>SMACSS</code>， <code>ITCSS</code> 都是比较好的参考方案，他们常常会和 <code>BEM</code> 混搭使用。</p><p>CSS 架构里面考虑的问题 往往最后都 非常细节微观， 例如你甚至需要考虑如何组织一个类样式里面的 CSS 属性分类。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 定位 positioning */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token comment">/* 盒模型 box model */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token comment">/* 文字 typography */</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>

  <span class="token comment">/* 皮肤 visual | skin */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e5e5e5<span class="token punctuation">;</span>

  <span class="token comment">/* misc */</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=n("code",null,"Bootstrap 4.x",-1),y={href:"https://github.com/KittyGiraudel/sass-boilerplate",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"BEM",-1),C=n("code",null,"CSS",-1),g=n("p",null,[s("说实话 这并不轻松 太多条条框框和考虑因素的叠加 增加了维护成本，"),n("code",null,"CSS 架构"),s(" 从技术上来说 很好。 但是如果不能持续 使用，那么 "),n("code",null,"成本"),s(" 无法分摊。")],-1),B=n("p",null,[s("至于 有 "),n("code",null,"CSS 架构"),s(" 和 没有 到底哪个效率高 哪个成本低 这个当 "),n("code",null,"质变"),s(" 不明显的时候，不会有结论。")],-1);function E(N,I){const a=o("ExternalLinkIcon");return c(),p("div",null,[u,d,n("p",null,[s("事实上 随着 "),r,s(" 例如 "),k,s(),v,s(),m,s(" 的普及， "),_,s(" 行业的前端程序员很少写大量的 "),b,s("代码。 所以如果当你尝试挑战一下 "),n("a",h,[s("CSS Battle"),e(a)]),s(" 可能会感觉捉襟见肘。")]),S,n("p",null,[s("最近的一个项目需要引入 CSS 架构已经是去年， 那是一个 基于 "),f,s(" 的网站项目，我们基于 "),n("a",y,[s("sass-boilerplate"),e(a)]),s(" + "),x,s(" 尝试实现了 整个网站的 "),C,s(" 代码。")]),g,B])}const V=t(i,[["render",E],["__file","index.html.vue"]]);export{V as default};
