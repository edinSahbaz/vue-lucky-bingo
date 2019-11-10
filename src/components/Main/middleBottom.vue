<template>
  <div class="middleBottom">
    <Ball num="25" />
    <Ball num="34" />
    <Ball num="83" />
    <Ball num="72" />
    <Ball num="21" />
    <Ball num="16" />
    <Ball num="96" />
    <Ball num="67" />
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