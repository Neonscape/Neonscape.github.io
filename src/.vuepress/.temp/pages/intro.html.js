export const data = JSON.parse("{\"key\":\"v-184f4da6\",\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/imgs/bgs/4.png\",\"image\":\"/assets/imgs/bgs/4.png\",\"category\":[\"introduction\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"intro.md\",\"excerpt\":\"<h1> 介绍页</h1>\\n<p>将你的个人介绍和档案放置在此处。</p>\\n\"}")

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
