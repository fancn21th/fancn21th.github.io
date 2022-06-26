const { defaultTheme } = require("@vuepress/theme-default");
const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

module.exports = {
  base: "/",
  lang: "zh-CN",
  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "Learn FE a smart way",
      description: "where learning frontend programming in a smart way",
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
            text: "Vue",
            link: "/zh/vue/",
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
              ],
            },
          ],
          "/zh/vue/": [
            {
              text: "Vue",
              children: ["/zh/vue/README.md", "/zh/vue/getting-started.md"],
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
