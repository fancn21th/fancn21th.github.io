module.exports = [
  // 前端
  {
    text: "前端",
    children: [
      {
        text: "前置条件",
        children: ["/zh/frontend/prerequisite/"],
      },
      {
        text: "How To",
        children: ["/zh/frontend/howto/"],
      },
      {
        text: "Convention",
        children: ["/zh/frontend/convention/"],
      },
      {
        text: "架构",
        children: ["/zh/frontend/architect/"],
      },
    ],
  },
  // Javascript
  {
    text: "Javascript",
    link: "/zh/javascript/",
  },
  // Node
  {
    text: "Node",
    children: [
      {
        text: "基础",
        children: [
          "/zh/node/basic/timeline/",
          "/zh/node/basic/wtf/",
          "/zh/node/basic/restful/",
        ],
      },
      {
        text: "Npm",
        children: [
          "/zh/node/npm/basic/",
          "/zh/node/npm/package/",
          "/zh/node/npm/publish/",
        ],
      },
      {
        text: "Prod",
        children: [
          "/zh/node/prod/process/",
          "/zh/node/prod/child-process/",
          "/zh/node/prod/fs/",
          "/zh/node/prod/error-handler/",
        ],
      },
      {
        text: "CLI",
        children: ["/zh/node/cli/executable/", "/zh/node/cli/guidance/"],
      },
      {
        text: "Convention",
        children: ["/zh/node/convention/basic/", "/zh/node/convention/trick/"],
      },
    ],
  },
  // Technology
  {
    text: "现代前端技术",
    children: [
      {
        text: "语言",
        children: ["/zh/technology/language/typescript/what-is-ts"],
      },
      {
        text: "ThreeJs",
        children: ["/zh/technology/threejs/what-is-threejs"],
      },
      {
        text: "技术栈",
        children: [
          "/zh/technology/stack/css/",
          "/zh/technology/stack/react/",
          "/zh/technology/stack/vue/",
          "/zh/technology/stack/angularjs/",
          "/zh/technology/stack/next/",
        ],
      },
      {
        text: "工具链",
        children: [
          "/zh/technology/toolchain/monorepos/",
          "/zh/technology/toolchain/nx/",
          "/zh/technology/toolchain/rxjs/",
          "/zh/technology/toolchain/git/tips/",
        ],
      },
    ],
  },
];
