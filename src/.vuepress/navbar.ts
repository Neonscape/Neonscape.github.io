import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "BLOGS",
		icon: "pen-to-square",
		prefix: "/posts/",
		children: [
			{
				text: "Diary",
				icon: "pen-to-square",
				link: "diary/catalogue",
			},
			{
				text: "Misc",
				icon: "misc",
				link: "misc/catalogue",
			},
			{
				text: "Logs",
				icon: "log",
				link: "logs/catalogue",
			},
		],
	},
]);
