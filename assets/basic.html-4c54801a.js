import{_ as a,o as n,c as s,e}from"./app-e3dbf12f.js";const t={},i=e(`<h1 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h1><h2 id="创建-package-json" tabindex="-1"><a class="header-anchor" href="#创建-package-json" aria-hidden="true">#</a> 创建 package.json</h2><blockquote><p>consumed by npm</p></blockquote><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="modules-模块化" tabindex="-1"><a class="header-anchor" href="#modules-模块化" aria-hidden="true">#</a> Modules 模块化</h2><h3 id="common-js" tabindex="-1"><a class="header-anchor" href="#common-js" aria-hidden="true">#</a> Common JS</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">http</span><span class="token operator">:</span> http<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ecmascript-modules" tabindex="-1"><a class="header-anchor" href="#ecmascript-modules" aria-hidden="true">#</a> ECMAScript Modules</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">http</span><span class="token operator">:</span> http<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-in-package-json" tabindex="-1"><a class="header-anchor" href="#config-in-package-json" aria-hidden="true">#</a> Config in package.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span> <span class="token comment">// default: &quot;commonjs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[i];function c(p,r){return n(),s("div",null,o)}const l=a(t,[["render",c],["__file","basic.html.vue"]]);export{l as default};
