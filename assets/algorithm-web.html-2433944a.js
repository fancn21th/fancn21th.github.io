import{_ as n,o as s,c as a,e as t}from"./app-e3dbf12f.js";const p={},e=t(`<h1 id="算法-web-开发" tabindex="-1"><a class="header-anchor" href="#算法-web-开发" aria-hidden="true">#</a> 算法（Web 开发）</h1><blockquote><p>JS 在 Web 开发领域 有着特有（但是不是独有）的编程范式 因此一些常见的算法可以让你一窥其与众不同</p></blockquote><h2 id="网页上标签计数与排序" tabindex="-1"><a class="header-anchor" href="#网页上标签计数与排序" aria-hidden="true">#</a> 网页上标签计数与排序</h2><blockquote><p>DOM 节点计数器</p></blockquote><ul><li><p>问题</p><p>我想知道一个网页里每个标签出现的次数，以及从多到少排序</p></li><li><p>方案</p><ul><li><p>如何使用</p><ul><li>打开浏览器的开发工具 <ul><li>以 chrome 为例右键点击网页然后选择查看</li></ul></li><li>切换到 控制台 Tab (Console)</li><li>复制下面的代码到 控制台</li><li>回车执行</li><li>查看结果</li></ul></li><li><p>涉及到的编程范式</p><ul><li>递归</li><li>高阶函数</li><li>Array 函数式 方法 <ul><li>map</li><li>sort</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 遍历所有DOM节点</span>
  <span class="token keyword">function</span> <span class="token function">traverseDom</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> counter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">counter</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">traverseDom</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 计算每个节点的个数</span>
  <span class="token keyword">function</span> <span class="token function">countNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>node<span class="token punctuation">.</span>nodeName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>node<span class="token punctuation">.</span>nodeName<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>node<span class="token punctuation">.</span>nodeName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">traverseDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> countNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 排序</span>
  <span class="token keyword">const</span> sortedResult <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      tag<span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> result<span class="token punctuation">[</span>tag<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>count <span class="token operator">-</span> a<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> sortedResult <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><ul><li><p>问题</p><p>我想让一个函数 在单位时间间隔内被反复调用 只执行一次</p><p>举个例子 假设有一个事件回调函数是由鼠标滚轮事件触发，我们不希望这个回调函数频繁运行，事实上我们只希望用户停止鼠标滚动执行一次这个回调就可以了</p></li><li><p>方案</p><ul><li>涉及到的编程范式 <ul><li>高阶函数 <ul><li>原函数被包装 延时执行</li></ul></li><li>闭包 <ul><li>timeout 变量 <ul><li>确保只有一个定时器</li></ul></li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> interval <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保持原函数的 上下文与参数</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token comment">// 包装原函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 取消定时器</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 延时单位时间执行</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试 <code>debounce</code><ul><li>拷贝一下所有代码到 控制台执行</li><li>前 4 个节拍不会打印秒针数 <ul><li>因为 500ms 小于 1000ms</li></ul></li><li>后 4 个节拍会打印</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> interval <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保持原函数的 上下文与参数</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token comment">// 包装原函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 取消定时器</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 延时单位时间执行</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">beats</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  rhythm <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">action</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  repeat <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  rhythmTick <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> beatsCount <span class="token operator">=</span> rhythm<span class="token punctuation">.</span>length <span class="token operator">*</span> repeat<span class="token punctuation">,</span>
    currentBeat <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    rhythmIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">nextBeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentBeat <span class="token operator">===</span> beatsCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beats is done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    currentBeat<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rhythmIndex <span class="token operator">===</span> rhythm<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rhythmIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;heart is beating ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>nextBeat<span class="token punctuation">,</span> rhythm<span class="token punctuation">[</span>rhythmIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">*</span> rhythmTick<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">nextBeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">beats</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token function">debounce</span><span class="token punctuation">(</span>tick<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><ul><li>问题</li><li></li></ul>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","algorithm-web.html.vue"]]);export{k as default};
