<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span class="animated infinite fadeIn">{{get_display}}</span>
    </div>
    <div class="balls">
      <MainBall :num="get_lastNum" />
      <div class="firstRow">
        <BingoBall />
        <BingoBall />
        <BingoBall />
        <BingoBall />
      </div>
      <div class="secondRow">
        <BingoBall />
        <BingoBall />
        <BingoBall />
        <BingoBall />
      </div>
    </div>
  </div>
</template>

<script>
import BingoBall from "./Elements/BingoBall";
import MainBall from "./Elements/MainBall";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "middleUpper",
  computed: {
    ...mapGetters(["get_display", "get_lastNum", "get_Combination"])
  },
  components: {
    BingoBall,
    MainBall
  },
  methods: {
    ...mapActions(["timer", "generateCombination"])
  },
  mounted() {
    this.timer();
    setTimeout(() => {
      this.generateCombination();
    }, 56000);
  }
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

.middleUpper {
  display: grid;
  grid-area: middleUpper;
  grid-template-rows: 0.3fr 1.7fr;
}

.starterTimer {
  font-size: 3em;
  padding-left: 0.5em;
  padding-top: 0.2em;
}

.balls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.firstRow {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em;
}

.secondRow {
  display: flex;
  flex-direction: column;
}
</style>