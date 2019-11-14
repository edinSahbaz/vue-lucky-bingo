<template>
  <div class="middleBottom">
    <div v-if="get_CorrectBalls[0]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][0]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][0]" />
    </div>

    <div v-if="get_CorrectBalls[1]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][1]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][1]" />
    </div>

    <div v-if="get_CorrectBalls[2]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][2]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][2]" />
    </div>

    <div v-if="get_CorrectBalls[3]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][3]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][3]" />
    </div>

    <div v-if="get_CorrectBalls[4]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][4]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][4]" />
    </div>

    <div v-if="get_CorrectBalls[5]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][5]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][5]" />
    </div>

    <div v-if="get_CorrectBalls[6]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][6]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][6]" />
    </div>

    <div v-if="get_CorrectBalls[7]">
      <CorrectBall :num="get_winnerCombination['winnerComb'][7]" />
    </div>
    <div v-else>
      <Ball :num="get_winnerCombination['winnerComb'][7]" />
    </div>
  </div>
</template>

<script>
import Ball from "./Elements/Ball.vue";
import CorrectBall from "./Elements/CorrectBall.vue";
import { mapGetters } from "vuex";

export default {
  name: "middleBottom",
  computed: {
    ...mapGetters(["get_winnerCombination", "get_CorrectBalls"])
  },
  components: {
    Ball,
    CorrectBall
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