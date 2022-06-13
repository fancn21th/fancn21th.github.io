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
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "UA-150469501-1",
    }),
  ],
};
