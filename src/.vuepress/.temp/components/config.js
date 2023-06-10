import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/Coding/myBlog/neonscape.github.io/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "E:/Coding/myBlog/neonscape.github.io/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/Coding/myBlog/neonscape.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/Coding/myBlog/neonscape.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/Coding/myBlog/neonscape.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/Coding/myBlog/neonscape.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
