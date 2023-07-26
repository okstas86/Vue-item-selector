<template>
  <div class="bottom-right-block">
    <h2>Вещи на выбор:</h2>
    <ul class="items-wrapper">
      <li
        v-for="item in selectableItems"
        :key="item.id"
        @click="selectItem(item)"
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
    ...mapGetters(["selectedSelectableItem", "selectableItems"]),
  },
  methods: {
    ...mapActions(["selectSelectableItem"]),
    selectItem(item) {
      this.selectSelectableItem(item);
    },
    isSelected(item) {
      return (
        this.selectedSelectableItem &&
        this.selectedSelectableItem.id === item.id
      );
    },
  },
  props: {
    selectableItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
