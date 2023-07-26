<template>
  <div class="bottom-left-block">
    <h2>Вещи у пользователя:</h2>
    <ul class="items-wrapper">
      <li
        v-for="item in userItems"
        :key="item.id"
        @click="toggleUserItem(item)"
        :class="{ selected: isSelected(item) }"
        class="item-square"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedUserItems", "userItems"]),
  },
  methods: {
    ...mapActions(["selectUserItem", "unselectUserItem"]),
    toggleUserItem(item) {
      if (this.isSelected(item)) {
        this.unselectUserItem(item);
      } else {
        this.selectUserItem(item);
      }
    },
    isSelected(item) {
      return this.selectedUserItems.some(
        (selectedItem) => selectedItem.id === item.id
      );
    },
  },
};
</script>
