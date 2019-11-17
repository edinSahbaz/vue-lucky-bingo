<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span class="animated infinite fadeIn">{{ get_display }}</span>
    </div>
    <div class="balls">
      <div class="mainBallAndTimer">
        <MainBall :num="get_lastNum" />
        <span class="animated infinite fadeIn">{{ get_ballTimer }}</span>
      </div>
      <div class="firstRow">
        <BingoBall :num="combination[0]" />
        <BingoBall :num="combination[1]" />
        <BingoBall :num="combination[2]" />
        <BingoBall :num="combination[3]" />
      </div>
      <div class="secondRow">
        <BingoBall :num="combination[4]" />
        <BingoBall :num="combination[5]" />
        <BingoBall :num="combination[6]" />
        <BingoBall :num="combination[7]" />
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
    ...mapGetters([
      "get_display",
      "get_lastNum",
      "get_Combination",
      "get_ballTimer"
    ])
  },
  components: {
    BingoBall,
    MainBall
  },
  data() {
    return {
      combination: [],
      counter: 0
    };
  },
  methods: {
    ...mapActions([
      "timer",
      "generateCombination",
      "findWinner",
      "ballTimerCountdown"
    ]),
    fillBalls() {
      let ntrvl = setInterval(() => {
        if (this.counter < 7) {
          this.combination.push(this.get_Combination[this.counter]);
          this.counter++;
        } else {
          this.combination.push(this.get_Combination[this.counter]);
          clearInterval(ntrvl);
        }
      }, 6000);
    }
  },
  created() {
    setTimeout(() => {
      this.timer();
    }, 2000);
    setTimeout(() => {
      this.generateCombination();
      this.fillBalls();
      this.ballTimerCountdown();
    }, 58000);
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

.mainBallAndTimer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mainBallAndTimer span {
  font-size: 1.8em;
  margin-top: 10px;
  height: 1.8em;
}
</style>
