import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "凌云弈塔产品文档",
  description: "凌云弈塔产品使用说明与API文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "首页", link: "/" },{ text: "CloudSentinel", link: "/cloud-sentinel" }],
    sidebar: {
      "/": [
        {
          text: "首页",
          link: "/",
        },
        {
          text: "云塔账号通行证",
          collapsed: false,
          items: [
            { text: "邮箱后缀", link: "/account/email-suffix" },
            { text: "常见问题", link: "/account/qa" },
            { text: "隐私政策", link: "/account/privacy" },
            { text: "服务条款", link: "/account/tos" },
          ],
        },
        {
          text: "云哨 CloudSentinel",
          collapsed: false,
          items: [
            { text: "项目简介", link: "/cloud-sentinel" },
            { text: "快速开始", link: "/cloud-sentinel/getting-started" },
            { text: "变更记录", link: "/cloud-sentinel/changelog" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/YunTower" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present YunTower Team",
    },
  },
});
