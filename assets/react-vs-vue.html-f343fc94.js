import{_ as n,o as a,c as s,e as t}from"./app-e3dbf12f.js";const e={},p=t(`<h1 id="react-vs-vue" tabindex="-1"><a class="header-anchor" href="#react-vs-vue" aria-hidden="true">#</a> React Vs Vue</h1><table><thead><tr><th>功能</th><th style="text-align:center;">React &lt;16.8</th><th style="text-align:center;">React &gt;=16.8</th><th style="text-align:center;">Vue2</th><th>Vue3</th></tr></thead><tbody><tr><td>响应式数据</td><td style="text-align:center;"></td><td style="text-align:center;">useState(...)</td><td style="text-align:center;">{ data:{...} }</td><td>const foo = ref(...) /const foo = reactive(...)</td></tr><tr><td>派生数据/计算属性</td><td style="text-align:center;"></td><td style="text-align:center;">const c = a + b</td><td style="text-align:center;">{ computed:{ foo: () =&gt; {...} }</td><td>const foo = computed(() =&gt; {...})</td></tr><tr><td>Watch 监听</td><td style="text-align:center;"></td><td style="text-align:center;">useEffect(() =&gt; {...}, [target])</td><td style="text-align:center;">{ watch:{foo: () =&gt; {...} }</td><td><a href="#watch">watch in vue3</a></td></tr><tr><td>hook vs composable</td><td style="text-align:center;"></td><td style="text-align:center;">const [ a, b, ...] = useXXX(...)</td><td style="text-align:center;">N/A</td><td>const { a, b, ...} = useXXX(...)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>... = {} | primitive type</li></ul></div><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>
  numbers<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：这里的 newValue 和 oldValue 是 reactive 对象 永远相同</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldValue<span class="token punctuation">.</span>foo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newValue<span class="token punctuation">.</span>foo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldValue<span class="token punctuation">.</span>bar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newValue<span class="token punctuation">.</span>bar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newValue<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>oldValue<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue <span class="token operator">!==</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      history<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 只会监听 count 的变化</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","react-vs-vue.html.vue"]]);export{r as default};
