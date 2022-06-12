const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

module.exports = {
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "UA-150469501-1",
    }),
  ],
};
