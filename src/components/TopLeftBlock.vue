<template>
  <div class="top-left-block">
    <h2>Выбранные вещи:</h2>
    <ul class="items-wrapper">
      <li v-for="item in selectedUserItems" :key="item.id" class="item-square">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedUserItems"]),
  },
};
</script>


