import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
	author: {
		name: "Neonscape",
		url: "https://github.com/Neonscape",
	},

	favicon: "/assets/imgs/avatar.jpg",

	iconAssets: "fontawesome-with-brands",

	logo: "/assets/imgs/avatar.jpg",

	repo: "https://github.com/Neonscape/neonscape.github.io",

	docsDir: "src",

	// navbar
	navbar,

	// sidebar
	sidebar,

	footer: ">sleepwalking through a sad scene<",

	displayFooter: true,

	blog: {
		description: "N/A",
		intro: "/intro.html",
		medias: {
			BiliBili: "https://space.bilibili.com/472932271",
			GitHub: "https://github.com/Neonscape",
			Gmail: "mailto:neonscapemail@gmail.com",
			QQ: "1587739476",
			Steam: "https://steamcommunity.com/profiles/76561199346101883/",
			Twitter: "https://twitter.com/neonscape_music",
			Youtube: "https://www.youtube.com/@Neonscape",
		},
	},

	// page meta
	plugins: {
		blog: true,

		comment: false,
		// all features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ["ts", "vue"],
			},
			presentation: ["highlight", "math", "search", "notes", "zoom"],
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		// uncomment these if you want a PWA
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
	encrypt:{
		config: {
			"/diary": ["PROPHECYOFDEMISE"]
		}
	}
});
