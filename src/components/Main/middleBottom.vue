<template>
  <div class="middleBottom">
    middleBottom
    <Ball />
  </div>
</template>

<script>
import Ball from "./Elements/Ball.vue";
export default {
  name: "middleBottom",
  components: {
    Ball
  }
};
</script>

<style scoped>
.middleBottom {
  grid-area: middleBottom;
  border: 1px solid deepskyblue;
}
</style>