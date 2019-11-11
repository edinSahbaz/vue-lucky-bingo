<template>
  <div class="middleBottom">
    <Ball />
    <Ball />
    <Ball />
    <Ball />
    <Ball />
    <Ball />
    <Ball />
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
  display: flex;
  align-items: center;
  border-top: 4px dotted #f8f0ee;
  justify-content: center;
}
</style>