module.exports = {
  // 前端
  "/zh/frontend/": [
    {
      text: "Prerequisite",
      collapsible: true,
      children: [
        "/zh/frontend/prerequisite/README.md",
        "/zh/frontend/prerequisite/dev-environment.md",
        "/zh/frontend/prerequisite/javascript.md",
      ],
    },
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
        "/zh/frontend/architect/ddd.md",
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
        "/zh/javascript/event-loop.md",
        "/zh/javascript/algorithm-web.md",
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
      children: [
        "/zh/node/npm/basic.md",
        "/zh/node/npm/package.md",
        "/zh/node/npm/publish.md",
      ],
    },
    {
      text: "Production",
      collapsible: true,
      children: [
        "/zh/node/prod/process.md",
        "/zh/node/prod/child-process.md",
        "/zh/node/prod/fs.md",
        "/zh/node/prod/error-handler.md",
      ],
    },
    {
      text: "CLI",
      collapsible: true,
      children: ["/zh/node/cli/executable.md", "/zh/node/cli/guidance.md"],
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
            "/zh/technology/language/typescript/what-is-ts.md",
            "/zh/technology/language/typescript/trick.md",
            "/zh/technology/language/typescript/vue-in-ts.md",
          ],
        },
        {
          text: "FP",
          children: [
            "/zh/technology/language/fp/what-is-fp.md",
            "/zh/technology/language/fp/lodash-fp.md",
          ],
        },
      ],
    },
    {
      text: "ThreeJS",
      collapsible: true,
      children: [
        {
          text: "Threejs",
          children: ["/zh/technology/threejs/what-is-threejs.md"],
        },
      ],
    },
    //技术栈
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
        {
          text: "AngularJS",
          children: [
            "/zh/technology/stack/angularjs/README.md",
            "/zh/technology/stack/angularjs/directives.md",
          ],
        },
        {
          text: "Next",
          children: ["/zh/technology/stack/next/README.md"],
        },
      ],
    },
    {
      text: "工具链",
      collapsible: true,
      children: [
        {
          text: "VsCode",
          children: [
            "/zh/technology/toolchain/vscode/README.md",
            "/zh/technology/toolchain/vscode/javascript.md",
          ],
        },
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
        {
          text: "Vite",
          children: ["/zh/technology/toolchain/vite/README.md"],
        },
      ],
    },
    {
      text: "小程序",
      collapsible: true,
      children: [
        {
          text: "Wechat",
          children: ["/zh/technology/miniapp/wechat/README.md"],
        },
      ],
    },
  ],
};
