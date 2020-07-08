export const state = () => ({
  items: []
})

export const mutations = {
  setItems (state, list) {
    state.items = list
  }
}
