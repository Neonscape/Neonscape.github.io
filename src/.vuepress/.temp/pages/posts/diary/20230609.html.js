export const data = JSON.parse("{\"key\":\"v-e20cf1ac\",\"path\":\"/posts/diary/20230609.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":true,\"author\":\"neonscape\",\"date\":\"2023-06-09T00:00:00.000Z\",\"image\":\"/assets/imgs/bgs/2.jpg\",\"cover\":\"/assets/imgs/bgs/2.jpg\",\"category\":[\"diary\"]},\"headers\":[{\"level\":2,\"title\":\"this is a test\",\"slug\":\"this-is-a-test\",\"link\":\"#this-is-a-test\",\"children\":[]}],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"posts/diary/20230609.md\",\"localizedDate\":\"2023年6月9日\",\"excerpt\":\"<h2> this is a test</h2>\\n\"}")

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
