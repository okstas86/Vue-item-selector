<template>
  <div class="app">
    <div class="top-block">
      <top-left-block></top-left-block>
      <top-right-block></top-right-block>
    </div>
    <div class="bottom-block">
      <bottom-left-block :userItems="userItems"></bottom-left-block>
      <bottom-right-block
        :selectableItems="selectableItems"
      ></bottom-right-block>
    </div>
  </div>
</template>

<script>
import BottomLeftBlock from "./components/BottomLeftBlock.vue";
import BottomRightBlock from "./components/BottomRightBlock.vue";
import TopLeftBlock from "./components/TopLeftBlock.vue";
import TopRightBlock from "./components/TopRightBlock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BottomLeftBlock,
    BottomRightBlock,
    TopLeftBlock,
    TopRightBlock,
  },
  computed: {
    ...mapGetters(["userItems", "selectableItems"]),
  },

  methods: {
    selectUserItem(item) {
      this.selectedUserItems.push(item);
    },
    selectSelectableItem(item) {
      this.selectedSelectableItem = item;
    },
    unselectUserItem(item) {
      const index = this.selectedUserItems.indexOf(item);
      if (index !== -1) {
        this.selectedUserItems.splice(index, 1);
      }
    },
  },
};
</script>

<style>
.app {
  margin: 30px;
}

.top-block {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 20px;
}

.bottom-block {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.top-right-block {
  width: 300px;
  height: 200px;
  border: 4px solid #0a0a0a;
  padding: 10px;
}

.top-left-block {
  width: 300px;
  height: 200px;
  border: 4px solid #0a0a0a;
  padding: 10px;
}

.bottom-right-block {
  width: 500px;
  height: 500px;
  border: 4px solid #0a0a0a;
  padding: 10px;
}

.bottom-left-block {
  width: 500px;
  height: 500px;
  border: 4px solid #0a0a0a;
  padding: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  cursor: pointer;
  margin: 5px 0;
}

.selected {
  background-color: #ccc;
}

.item-square {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #0a0a0a;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.items-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
