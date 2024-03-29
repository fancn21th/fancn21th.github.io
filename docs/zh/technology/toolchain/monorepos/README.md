# Monorepos

Monorepos 是一个相对较 `新` 的技术 `名词`， 最简单的解释就是 把 多个代码仓库放在同一个 `git repo` 下面进行管理。

技术是为了解决问题，为什么要把不同的代码仓库 放在 同一个 `git repo` 下面？

## 优点

- one place

  - 把 PC 端， 服务端， 移动端程序 代码仓库 放在一起管理

  - 统一执行 `npm` 命令
    - 假设 你的仓库包括 一个 `前端工程`， 一个 `后端工程`， 你可以同时启动它们

- 一致性

  - 配置
  - 文档
  - TS

- 依赖管理

  - 统一安装依赖
    - 你可以给一个 仓库 安装依赖， 也可以给多个仓库安装依赖
  - 统一的测试
    - 你可以给一个 仓库 测试， 也可以给多个仓库测试
  - 跨仓库的依赖
    - 假设 你仓库包括一个 `Library 功能库`， 可以在 `前端工程` 和 `后端工程` 中使用，你不必将代码复制到两个仓库中
    - 更绝的是 当你更新了 `Library 功能库` 也不必手动更新依赖， 使用到它的工程会自动更新 :sparkles:

- CI/CD

## 缺点

- build
  - 当你的程序越来越大 编译越来越复杂
    - 解决方案 nx vs turborepo
      - smart build
        - computation cache
        - parallel task execution
        - code generators

## 流行的 Monorepos 方案

- yarn workspaces
- npm workspaces
- lerna
- nx

## References 参考

- [awesome monorepos](https://github.com/korfuri/awesome-monorepo)
