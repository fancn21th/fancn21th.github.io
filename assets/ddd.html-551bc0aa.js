import{_ as d,r as t,o as a,c,a as l,b as e,d as n,e as i}from"./app-e3dbf12f.js";const r="/images/Bounded-Contexts-Reorg-1.png",p={},s=i('<h1 id="ddd" tabindex="-1"><a class="header-anchor" href="#ddd" aria-hidden="true">#</a> DDD</h1><h2 id="ddd-没有-lib" tabindex="-1"><a class="header-anchor" href="#ddd-没有-lib" aria-hidden="true">#</a> DDD 没有 Lib</h2><p><code>DDD</code> 的目的 首先是解决业务层面的沟通问题，而不是解决技术层面问题，正因为和具体的业务功能无关，所以没有相关的 <code>Lib</code>。</p><p>你可以看到在 <code>B</code> 站，有人声称自己创建了一个 <code>DDD</code> 的框架，从 <code>Eric Evans</code> 自己的观点来看， 这种说法是相对不正确的。<code>DDD</code> 没有提供任何具体的业务功能。</p><h2 id="stop-leg-itinerary" tabindex="-1"><a class="header-anchor" href="#stop-leg-itinerary" aria-hidden="true">#</a> Stop, Leg, Itinerary</h2>',5),u=l("code",null,"Eric Evans",-1),h={href:"https://www.youtube.com/watch?v=pMuiVlnGqjk",target:"_blank",rel:"noopener noreferrer"},_=l("code",null,"领域专家",-1),m=l("code",null,"软件专家",-1),x=i('<p>他举了一个 案例, 关于 如何为 物流领域的一个案例进行建模。在这个案例里面 他对比了 两种不同的方案。</p><ul><li>基于实现 <code>stop</code> 模型</li><li>基于业务 <code>leg</code> 模型</li></ul><p>站在被解决的业务问题来看 <code>leg</code> 是正确的模型。 但是在最后，他提出了一个新的业务需求，这时 <code>stop</code> 模型 （不是站在技术角度）更符合新问题的解决思路。</p><p>所以 你可能有 3 种选择</p><ul><li>坚持 <code>stop</code> 模型</li><li>坚持 <code>leg</code> 模型</li><li>同时支持 两种模型以及相互的装换</li></ul><p>这让我想起了 <code>Robert C Martin</code> 在他的 <code>Clean Architecture</code> 一书的第八章 <code>OCP 原则</code> 一文中 用到的 <code>财务报表</code> 案例， <code>Financial Report Generator</code> 作为核心的业务单元是处于整个设计的最顶层，所有其他的类都依赖于它。</p><h2 id="complexity-复杂度" tabindex="-1"><a class="header-anchor" href="#complexity-复杂度" aria-hidden="true">#</a> Complexity 复杂度</h2><ul><li><p>Scale</p><p>可扩展的复杂度</p><ul><li>like twitter</li></ul></li><li><p>Domain</p><p>领域的复杂度</p></li></ul><h2 id="bounded-context" tabindex="-1"><a class="header-anchor" href="#bounded-context" aria-hidden="true">#</a> Bounded Context</h2><p>限定上下文</p><ul><li><p>context</p><ul><li><code>宝贝</code><ul><li>如果 一对夫妻 使用 这个词汇 我们可以推测 这一般是指 他们的孩子</li><li>如果 你在指环王里面 听到这个 词汇 你很清楚这个指的是 <code>魔戒</code></li></ul></li></ul><p>相同的词汇 在不同上下文里 有不同的含义</p></li><li><p>people with agreement</p><p>边界上下文必须对团队所有成员都可见并且认同他们如何出现在 在<code>设计</code>，<code>架构</code>与<code>流程</code>里</p><ul><li>developer</li><li>other team roles</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Multiple models</p><p>Isolated in multiple bounded contexts</p><p>Focused on distinct problem sets</p></div></li><li><p>Example - bank</p><ul><li><p>contexts</p><ul><li><p>day 1</p><ul><li>现金账号</li><li>信用卡账号</li></ul></li><li><p>day 10</p><ul><li>商业用户</li><li>个人用户</li></ul><p><img src="'+r+'" alt="Reorg"></p></li></ul></li></ul></li></ul><h2 id="ubiquitous-language" tabindex="-1"><a class="header-anchor" href="#ubiquitous-language" aria-hidden="true">#</a> Ubiquitous Language</h2><ul><li><p>清晰地描述领域问题和解决方案</p></li><li><p>上下文</p><ul><li>不同的问题</li></ul></li></ul><h2 id="战略设计-与-战术设计" tabindex="-1"><a class="header-anchor" href="#战略设计-与-战术设计" aria-hidden="true">#</a> 战略设计 与 战术设计</h2><ul><li><p>战略</p><ul><li>业务</li></ul></li><li><p>战术</p><ul><li>技术</li></ul></li></ul>',15);function b(g,D){const o=t("ExternalLinkIcon");return a(),c("div",null,[s,l("p",null,[u,e(" 在 2019 年 的演讲 "),l("a",h,[e("What is DDD"),n(o)]),e(" 中 阐述了 领域语言作为 "),_,e(" 与 "),m,e(" 共有的语言。")]),x])}const v=d(p,[["render",b],["__file","ddd.html.vue"]]);export{v as default};