import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      userItems: [
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ],
      selectableItems: [
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ],
      selectedUserItems: [],
      selectedSelectableItem: null,
    };
  },
  mutations: {
    selectUserItem(state, item) {
      if (state.selectedUserItems.length < 6) {
        state.selectedUserItems.push(item);
      }
    },
    selectSelectableItem(state, item) {
      state.selectedSelectableItem = item;
    },
    unselectUserItem(state, item) {
      const index = state.selectedUserItems.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        state.selectedUserItems.splice(index, 1);
      }
    },
  },
  actions: {
    selectUserItem({ commit }, item) {
      commit("selectUserItem", item);
    },
    selectSelectableItem({ commit }, item) {
      commit("selectSelectableItem", item);
    },
    unselectUserItem({ commit }, item) {
      commit("unselectUserItem", item);
    },
  },
  getters: {
    userItems: (state) => state.userItems,
    selectableItems: (state) => state.selectableItems,
    selectedUserItems: (state) => state.selectedUserItems,
    selectedSelectableItem: (state) => state.selectedSelectableItem,
  },
});
