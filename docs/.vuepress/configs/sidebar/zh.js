module.exports = {
  // 前端
  "/zh/frontend/": [
    {
      text: "How to",
      collapsible: true,
      children: [
        "/zh/frontend/howto/README.md",
        "/zh/frontend/howto/getting-started.md",
        "/zh/frontend/howto/todo-list.md",
      ],
    },
    {
      text: "Architect",
      collapsible: true,
      children: ["/zh/frontend/architect/README.md"],
    },
    {
      text: "Convention",
      collapsible: true,
      children: ["/zh/frontend/convention/README.md"],
    },
  ],
  // Javascript
  "/zh/javascript/": [
    {
      text: "Javascript",
      children: [
        "/zh/javascript/README.md",
        "/zh/javascript/getting-started.md",
        "/zh/javascript/algorithm-data.md",
        "/zh/javascript/algorithm-perf.md",
        "/zh/javascript/convention.md",
        "/zh/javascript/regex.md",
      ],
    },
  ],
  // NodeJS
  "/zh/node/": [
    {
      text: "基础",
      collapsible: true,
      children: [
        "/zh/node/basic/timeline.md",
        "/zh/node/basic/wtf.md",
        "/zh/node/basic/restful.md",
      ],
    },
    {
      text: "Npm",
      collapsible: true,
      children: ["/zh/node/npm/basic.md", "/zh/node/npm/package.md"],
    },
    {
      text: "File",
      collapsible: true,
      children: ["/zh/node/file/path.md"],
    },
    {
      text: "CLI",
      collapsible: true,
      children: ["/zh/node/cli/executable.md"],
    },
    {
      text: "Convention",
      collapsible: true,
      children: [
        "/zh/node/convention/basic.md",
        "/zh/node/convention/trick.md",
      ],
    },
  ],
  // 技术
  "/zh/technology/": [
    {
      text: "语言",
      collapsible: true,
      children: [
        {
          text: "Typescript",
          children: [
            "/zh/technology/language/typescript/README.md",
            "/zh/technology/language/typescript/getting-started.md",
          ],
        },
      ],
    },
    {
      text: "技术栈",
      collapsible: true,
      children: [
        {
          text: "Vue",
          children: [
            "/zh/technology/stack/vue/README.md",
            "/zh/technology/stack/vue/getting-started.md",
            "/zh/technology/stack/vue/essentials.md",
            "/zh/technology/stack/vue/advanced.md",
          ],
        },
        {
          text: "React",
          children: [
            "/zh/technology/stack/react/README.md",
            "/zh/technology/stack/react/getting-started.md",
            "/zh/technology/stack/react/hooks.md",
            "/zh/technology/stack/react/react-query.md",
          ],
        },
      ],
    },
    {
      text: "工具链",
      collapsible: true,
      children: [
        {
          text: "Monorepos",
          children: [
            "/zh/technology/toolchain/monorepos/README.md",
            "/zh/technology/toolchain/monorepos/getting-started.md",
          ],
        },
        {
          text: "Rxjs",
          children: [
            "/zh/technology/toolchain/rxjs/README.md",
            "/zh/technology/toolchain/rxjs/getting-started.md",
          ],
        },
      ],
    },
  ],
};
