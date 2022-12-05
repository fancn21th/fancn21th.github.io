# DDD

## DDD 没有 Lib

`DDD` 目的是为了解决沟通问题，而不是解决技术层面问题，正因为不是解决技术问题，所以没有相关的 `Lib`

你可以看到在 `B` 站，有人声称自己创建了一个 `DDD` 的框架，从 `Eric Evans` 自己的观点来看， 这种说法是相对不正确的。

### Stop, Leg, Itinerary

`Eric Evans` 在 2019 年 的演讲 [What is DDD](https://www.youtube.com/watch?v=pMuiVlnGqjk) 中 阐述了 领域语言作为 `领域专家` 与 `软件专家` 共有的语言。

他举了一个 案例, 关于 如何为 物流领域的一个案例进行建模。在这个案例里面 他对比了 两种不同的方案。

- 基于实现 `stop` 模型
- 基于业务 `leg` 模型

站在被解决的业务问题来看 `leg` 是正确的模型。 但是在最后，他提出了一个新的业务需求，这时 `stop` 模型 （不是站在技术角度）更符合新问题的解决思路。

所以 你可能有 3 种选择

- 坚持 `stop` 模型
- 坚持 `leg` 模型
- 同时支持 两种模型以及相互的装换

这让我想起了 `Robert C Martin` 在他的 `Clean Architecture` 一书的第八章 `OCP 原则` 一文中 用到的 `财务报表` 案例， `Financial Report Generator` 作为核心的业务单元是处于整个设计的最顶层，所有其他的类都依赖于它。

### Complexity

- Scale

  - like twitter

- Domain
