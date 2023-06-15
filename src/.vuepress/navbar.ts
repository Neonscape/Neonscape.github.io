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
				icon: "ellipsis",
				link: "misc/catalogue",
			},
			{
				text: "notes",
				icon: "book",
				link: "notes/catalogue",
			},
		],
	},
]);
