import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "PROJECT MIRALAND | DEVLOG",
  description: "Devlog of the ProjectMiraland game",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    // logo: "/avatar.png",
    author: "whiteviera",
    authorAvatar: "/avatar.png",
    docsRepo: "https://github.com/Neonscape/Neonscape.github.io",
    docsBranch: "main",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: false,
    navbar: [
      { text: "Home", link: "/" },
      { text: "Devlogs", link: "/blogs/index.html" },
    ],
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
