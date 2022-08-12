const { defaultTheme } = require("@vuepress/theme-default");
const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

module.exports = {
  base: "/",
  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "Learn FE a smart way",
      description: "English Version is in progress...",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "快学前端",
      description: "一个学习前端的地方",
    },
  },
  theme: defaultTheme({
    repo: "fancn21th/fancn21th.github.io",
    docsDir: "docs",
    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        // sidebar
        sidebar: {
          "/frontend/": [
            {
              text: "前端概览",
              children: [
                "/frontend/README.md",
                "/frontend/getting-started.md",
                "/frontend/todo-list.md",
              ],
            },
          ],
        },
        // page meta
        editLinkText: "Edit this page on GitHub",
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        //  navbar
        navbar: [
          {
            text: "前端",
            link: "/zh/frontend/",
          },
          {
            text: "Javascript",
            link: "/zh/javascript/",
          },
          {
            text: "Monorepos",
            link: "/zh/monorepos/",
          },
          {
            text: "RxJs",
            link: "/zh/rxjs/",
          },
          {
            text: "Typescript",
            link: "/zh/typescript/",
          },
          {
            text: "Vue",
            link: "/zh/vue/",
          },
          {
            text: "Node",
            link: "/zh/node/",
          },
        ],
        // sidebar
        sidebar: {
          "/zh/frontend/": [
            {
              text: "前端",
              children: [
                "/zh/frontend/README.md",
                "/zh/frontend/getting-started.md",
                "/zh/frontend/todo-list.md",
              ],
            },
          ],
          "/zh/javascript/": [
            {
              text: "Javascript",
              children: [
                "/zh/javascript/README.md",
                "/zh/javascript/getting-started.md",
                "/zh/javascript/algorithm-data.md",
                "/zh/javascript/algorithm-perf.md",
              ],
            },
          ],
          "/zh/monorepos/": [
            {
              text: "Monorepos",
              children: [
                "/zh/monorepos/README.md",
                "/zh/monorepos/getting-started.md",
              ],
            },
          ],
          "/zh/typescript/": [
            {
              text: "TS",
              children: [
                "/zh/typescript/README.md",
                "/zh/typescript/getting-started.md",
              ],
            },
          ],
          "/zh/rxjs/": [
            {
              text: "Rxjs",
              children: ["/zh/rxjs/README.md", "/zh/rxjs/getting-started.md"],
            },
          ],
          "/zh/node/": [
            {
              text: "Node",
              children: [
                "/zh/node/README.md",
                "/zh/node/getting-started.md",
                "/zh/node/npm.md",
              ],
            },
          ],
          "/zh/vue/": [
            {
              text: "Vue",
              children: [
                "/zh/vue/README.md",
                "/zh/vue/getting-started.md",
                "/zh/vue/essentials.md",
                "/zh/vue/advanced.md",
              ],
            },
          ],
        },
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "UA-150469501-1",
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
};
