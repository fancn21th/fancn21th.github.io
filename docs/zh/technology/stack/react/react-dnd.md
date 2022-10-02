# React DnD

我非常推荐 大家阅读原文 [React Dnd Tutorial](https://react-dnd.github.io/react-dnd/docs/tutorial)，

`Dan` 是少数几个给我启发最大并且我还记得住名字的作者。

在 教程中 他 不仅仅讲述了 如何 使用 `React-Dnd` 更重要的是 展现了他 如何编写前端程序的 思维方式。

## 思维方式

- 方向 或者 顺序
  - 从下而上，从细节到抽象
  - 始终能看得到程序的变化
  - 为了能让细节能工作，在抽象层面可以做一些临时的方案
    - 例如 往 `Board` 棋盘对象里面传递 一个 `Knight` 骑士 🐴 的位置
  - 先从简单的规则开始 再到具体复杂的规则
    - 例如 先实现一个 旗子的移动 再 增加移动的约束
- 先目的，后技术
  - 最终的方案不是一撮而就
  - 先有需求（目的）
  - 后有技术，选择合理的技术方案
- 状态设计
  - 什么是 props，是不是必要的
  - 什么是 states，到底有多少个相关的 业务状态

## APP 设计细节

- `i` vs `[x,y]`

  - 如果我来设计 一个 关于格子 位置的 入参 我大概率会先考虑 `[x,y]`，我觉得这样简单直观 符合语义
  - 但是 再仔细一想， `i` 从数据结构上来讲更简单， 而且 `[x,y]` 更像是 派生状态 而不是原始的状态

- `observe`

  - 我加上我个人的理解，拖拽可以理解成 `UI交互`的两个状态， 一个是起始位置，一个是终点位置
  - 对于 棋子 而言 我只需知道我的下一个位置 然后我正确的渲染到这个位置即可
  - 这样一来 一个简单的 事件订阅完全就能满足 引入 `Drag and Drop API` 前， 游戏状态的设计需求

- `Square` 的位置
  :::tip
  If a component doesn't need some data for rendering, it doesn't need that data at all.
  :::
  - 位置是不是应该是 `Square` 的 `Props` 一直是 `Dan` 抓住的 矛盾主线。这确实很重要。 不到万不得已不要轻易给 一个 `组件` 增加 不必要的 状态(数据)

## Dnd 接口设计

### useDrag

```jsx
function Knight() {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>,
  )
}
```

- `In & Out`

  - In
    - `type`
      - 给予 被拖拽元素 一个类型标识
    - `collect` callback
      - 你可以根据这个回调访问 `dnd` 的核心接口，从而自定义你需要的状态
      - 换句话说 `dnd` 不关系你程序的 具体业务状态 比如 `isDragging` , 相反是你自己基于 `monitor.isDragging()` 接口 计算了这个状态
  - Out

    - `drag`

      `drag` 是一个 `ref`，所以它也不单纯是输出 也可以看做是输入，将被拖拽的 元素传入到 `useDrag hook`

    - `{}`
      - `isDragging` 是 自定义的状态

### useDrop

```jsx
function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      canDrop: () => canMoveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  );
}
```

- `In & Out`

  - In

    - `accept`
      - 对应 `useDrag` 传入的 `type`
    - `canDrop` callback
      - 是否可以 放下
      - 依赖于 `上下文` 信息
    - `drop` callback
      - 放下后执行的回调
    - `collect` callback
      - 和 `useDrag` 一样 你也需要自己定制你需要的业务状态
      - 通过 访问 `monitor` 的 API

  - Out

    - `drop`

      `drop` 是一个 `ref`，所以它也不单纯是输出 也可以看做是输入，将可被落下的 元素传入到 `useDrop hook`

  - `{}`
    - `isOver` 是 自定义的状态
    - `canDrop` 是 自定义的状态

### 小结

`Dnd` 的 接口设计

- 基于 `hook`
- 相对于常见的 `hook` 接口设计无疑是比较复杂的
  - 这里返回的第一个参数无疑非常 有趣
    - 你可以理解 不是 `dnd` 设计 接口 而是用户自己 ！只不过你需要通过 `monitor` 的 `API` 来计算每个接口属性
  - 当你熟悉了这个接口 你又会认为这个 设计 无疑是 足够抽象简洁
    - 没有对比，没有伤害
    - 业务复杂（拖拽），接口不可能简单
    - 不简单不意味着不简洁
- Drag
  - 关注
    - 拖动元素的类型
- Drop
  - 关注
    - 可接受的 拖动元素的类型（能放下）
    - 是否可以 接受的放下 操作的回调 （允许放下）
    - 放下后的 后续动作的回调
- 换句话说
  - 我们关心
    - 什么被拖动了
    - 什么能够被放下
    - 什么情况下允许被放下
    - 放下后的后续操作
