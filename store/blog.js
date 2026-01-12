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
    return category => state.items.filter(i => (i.categories || []).includes(category));
  }
};
