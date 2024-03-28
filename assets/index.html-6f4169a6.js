import{_ as e,o as a,c as n,e as s}from"./app-e3dbf12f.js";const i={},l=s(`<h1 id="nx" tabindex="-1"><a class="header-anchor" href="#nx" aria-hidden="true">#</a> Nx</h1><p>A Monorepo Helper</p><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><ul><li>list</li></ul><p>show a list of plugins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> nx list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>list plugin</li></ul><p>show plugin commands</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> nx list @nrwl/react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>generate</li></ul><p>get help first</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> nx generate @/nrwl/react:application <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>dry run (to see what will be generated)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> nx generate @/nrwl/react:application <span class="token punctuation">[</span>application name<span class="token punctuation">]</span> --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),d=[l];function r(t,c){return a(),n("div",null,d)}const p=e(i,[["render",r],["__file","index.html.vue"]]);export{p as default};