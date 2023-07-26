<template>
  <div class="top-right-block">
    <h2>Выбранная вещь из вещей на выбор:</h2>
    <p class="item-square">
      {{ selectedItem ? selectedItem.name : "Ничего не выбрано" }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedSelectableItem"]),
    selectedItem() {
      return this.selectedSelectableItem;
    },
  },
};
</script>

