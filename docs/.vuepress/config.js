const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

module.exports = {
  title: "快学前端",
  description: "一个学习前端的网站",
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "UA-150469501-1",
    }),
  ],
};
