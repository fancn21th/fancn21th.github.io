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
      children: [
        "/zh/frontend/architect/README.md",
        "/zh/frontend/architect/react-vs-vue.md",
      ],
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
          children: ["/zh/technology/language/typescript/what-is-ts.md"],
        },
      ],
    },
    {
      text: "技术栈",
      collapsible: true,
      children: [
        {
          text: "CSS",
          children: [
            "/zh/technology/stack/css/README.md",
            "/zh/technology/stack/css/comparisons.md",
          ],
        },
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
            "/zh/technology/stack/react/react-antd-lite.md",
            "/zh/technology/stack/react/hooks.md",
            "/zh/technology/stack/react/react-query.md",
            "/zh/technology/stack/react/react-admin.md",
            "/zh/technology/stack/react/react-dnd.md",
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
          children: ["/zh/technology/toolchain/monorepos/README.md"],
        },
        {
          text: "Nx",
          children: ["/zh/technology/toolchain/nx/README.md"],
        },
        {
          text: "Rxjs",
          children: [
            "/zh/technology/toolchain/rxjs/README.md",
            "/zh/technology/toolchain/rxjs/getting-started.md",
          ],
        },
        {
          text: "Git",
          children: ["/zh/technology/toolchain/git/tips.md"],
        },
      ],
    },
  ],
};
