export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"HOME\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"HOME\",\"heroImage\":false,\"bgImage\":\"/assets/imgs/bgs/5.png\",\"heroText\":\">DREAM SYSTEM VER 0.1.0<\",\"heroFullScreen\":true,\"tagline\":\"\\\"romanticism is dead\\\"\",\"projects\":[{\"icon\":\"project\",\"name\":\"D4SH\",\"desc\":\"a little dino game made by me\",\"link\":\"https://github.com/Neonscape/D4SH_Final\"},{\"icon\":\"music\",\"name\":\"NCM\",\"desc\":\"me on Netease Cloud Music\",\"link\":\"https://music.163.com/#/artist?id=12649063\"}],\"footer\":\"--ESC4PE--\"},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":63},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>maybe i should place something here?</p>\\n\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
