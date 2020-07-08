const getContentFromPath = async function (contextPath) {
  const contentFiles = await require.context(
    contextPath,
    false,
    /\.json$/
  )
  return contentFiles.keys().map((key) => {
    const res = contentFiles(key)
    res.slug = key.slice(2, -5)
    return res
  })
}

export const state = () => ({
  blogPosts: [],
  games: []
})

export const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  },
  setGames (state, list) {
    state.blogPosts = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await commit('setBlogPosts', getContentFromPath('@/assets/content/blog/'))
    await commit('setGames', getContentFromPath('@/assets/content/games/'))
  }
}
