import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Learn FE the smart way",
      description: "where you can learn FE the smart way",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "快学前端",
      description: "一个学前端的好地方",
    },
  },

  theme,
});
