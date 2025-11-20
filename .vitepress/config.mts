import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "凌云弈塔产品文档",
  description: "凌云弈塔产品使用说明与API文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "CloudSentinel", link: "/cloud-sentinel" },
    ],
    sidebar: {
      "/cloud-sentinel/": [
        {
          text: "安装指南",
          items: [
            {
              text: "安装 Dashboard",
              link: "/cloud-sentinel/install/dashboard",
            },
            { text: "安装 Agent", link: "/cloud-sentinel/install/agent" },
          ],
        },
        { text: "常见问题", link: "/cloud-sentinel/changelog" },
        { text: "更新日志", link: "/cloud-sentinel/changelog" },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present YunTower Team",
    },
  },
});
