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
		],
	},
]);
