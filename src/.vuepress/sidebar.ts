import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	"/": [
		"",
		{
			text: "Logs",
			icon: "book",
			prefix: "posts/",
			children: "structure",
		},
		"intro",
	],
});
