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
  justify-content: center;
}
</style>