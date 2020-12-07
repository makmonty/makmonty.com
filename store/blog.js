export const state = () => ({
  items: []
});

export const mutations = {
  setItems(state, list) {
    state.items = list;
  }
};

export const getters = {
  byCategory(state) {
    return category => state.items.filter(i => !i.draft && (i.categories || []).includes(category));
  },
  publishedItems(state) {
    return state.items.filter(i => !i.draft);
  }
};
