const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

module.exports = {
  title: "巧撸前端",
  description: "现代前端工程实践",
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "UA-150469501-1",
    }),
  ],
};
