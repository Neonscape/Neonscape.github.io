import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: ">DREAM SYSTEM VER 0.1.0<",
	description: "fade into an neon ocean",

	theme,
	// Enable it with pwa
	// shouldPrefetch: false,
});
