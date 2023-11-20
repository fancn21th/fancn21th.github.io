import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { navbarEn, sidebarEn, navbarZh, sidebarZh } from "./configs/index.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "A_ll I_nn",
      description:
        "20% time, chop wood|complete delivery; 80% time, sharpen|strive for perfection",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "快学前端（内测版）",
      description: "20%时间, 劈柴|完成交付; 80%时间, 磨刀|精益求精",
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
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
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
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
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
      id: "G-5MFQK1QFYT",
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
