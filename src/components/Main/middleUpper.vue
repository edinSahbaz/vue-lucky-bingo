<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span class="animated infinite fadeIn">{{display}}</span>
    </div>
    <div class="balls">
      <MainBall num="30" />
      <div class="strow">
        <BingoBall num="24" />
        <BingoBall num="35" />
        <BingoBall num="68" />
        <BingoBall num="26" />
      </div>
      <div class="ndrow">
        <BingoBall num="72" />
        <BingoBall num="17" />
        <BingoBall num="41" />
        <BingoBall num="30" />
      </div>
    </div>
  </div>
</template>

<script>
import BingoBall from "./Elements/BingoBall";
import MainBall from "./Elements/MainBall";

export default {
  name: "middleUpper",
  components: {
    BingoBall,
    MainBall
  },
  data() {
    return {
      num: 0,
      countDown: 60,
      display: "01:00"
    };
  },
  methods: {
    removeDisplay: function() {
      this.display = "";
    },
    timer: function() {
      if (this.countDown >= 0) {
        setTimeout(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.display = "The Game has started!";
            setTimeout(this.removeDisplay, 3000);
            this.generateComb;
          } else {
            this.timer();
            if (this.countDown > 9) {
              this.display = "00:" + this.countDown;
            } else {
              this.display = "00:" + "0" + this.countDown;
            }
          }
        }, 1000);
      }
    }
  },
  mounted() {
    setTimeout(this.timer, 2500);
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

.strow {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em;
}

.ndrow {
  display: flex;
  flex-direction: column;
}
</style>