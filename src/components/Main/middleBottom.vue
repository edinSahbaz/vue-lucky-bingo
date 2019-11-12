<template>
  <div class="middleBottom">
    <Ball :num="get_winnerCombination['winnerComb'][0]"/>
    <Ball :num="get_winnerCombination['winnerComb'][1]"/>
    <Ball :num="get_winnerCombination['winnerComb'][2]"/>
    <Ball :num="get_winnerCombination['winnerComb'][3]"/>
    <Ball :num="get_winnerCombination['winnerComb'][4]"/>
    <Ball :num="get_winnerCombination['winnerComb'][5]"/>
    <Ball :num="get_winnerCombination['winnerComb'][6]"/>
    <Ball :num="get_winnerCombination['winnerComb'][7]"/>
  </div>
</template>

<script>
import Ball from "./Elements/Ball.vue";
import { mapGetters } from "vuex";

export default {
  name: "middleBottom",
  computed: {
    ...mapGetters(['get_winnerCombination'])
  },
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