import{_ as n,o as a,c as s,e}from"./app-e3dbf12f.js";const t={},o=e('<h1 id="约定" tabindex="-1"><a class="header-anchor" href="#约定" aria-hidden="true">#</a> 约定</h1><h2 id="node-env" tabindex="-1"><a class="header-anchor" href="#node-env" aria-hidden="true">#</a> NODE_ENV</h2><p>同一份源代码 需要指定不同的配置文件， 最常见的做法就是指定一个环境变量。 <code>NODE_ENV</code> 是常见的 环境变量 用来区分代码运行在什么环境。 基于这个 变量 我们可以指定不一样的 配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">||</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./config/.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>env<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h2>',5),c=[o];function p(i,r){return a(),s("div",null,c)}const d=n(t,[["render",p],["__file","basic.html.vue"]]);export{d as default};