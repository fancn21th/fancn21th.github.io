import{_ as a,o as n,c as e,e as s}from"./app-e3dbf12f.js";const i={},t=s(`<h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><h2 id="代码迁移" tabindex="-1"><a class="header-anchor" href="#代码迁移" aria-hidden="true">#</a> 代码迁移</h2><ul><li>把代码推送到新的 Origin</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_repo
<span class="token function">git</span> remote <span class="token function">rename</span> origin old-origin
<span class="token function">git</span> remote <span class="token function">add</span> origin git@newgitlab.digitalchina.com:very-frontend/existing-git-folder.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--all</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--tags</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除 Old Origin</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote remove old-origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),l=[t];function r(c,d){return n(),e("div",null,l)}const p=a(i,[["render",r],["__file","tips.html.vue"]]);export{p as default};
