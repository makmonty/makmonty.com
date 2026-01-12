export const state = () => ({
  items: []
})

export const mutations = {
  setItems (state, list) {
    state.items = list
  }
}

export const getters = {
  byCategory (state) {
    console.log(state.items)
    return category => state.items.find(i => (i.categories || []).includes(category))
  }
}
