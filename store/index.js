const getContentFromFiles = function (files) {
  return files.keys().map((key) => {
    const res = files(key)
    res.slug = key.slice(2, -5)
    return res
  })
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await commit('blog/setItems', getContentFromFiles(await require.context(
      '@/assets/content/blog/',
      false,
      /\.json$/
    )))
    await commit('games/setItems', await getContentFromFiles(await require.context(
      '@/assets/content/games/',
      false,
      /\.json$/
    )))
  }
}
