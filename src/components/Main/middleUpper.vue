<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span class="animated infinite pulse">{{display}}</span>
    </div>
    <div class="balls">
      <MainBall />
      <div class="strow">
        <BingoBall />
        <BingoBall />
        <BingoBall />
        <BingoBall />
      </div>
      <div class="ndrow">
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

export default {
  name: "middleUpper",
  components: {
    BingoBall,
    MainBall
  },
  data() {
    return {
      countDown: 60,
      display: "01:00"
    };
  },
  methods: {
    timer: function() {
      if (this.countDown >= 0) {
        setTimeout(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.display = "The Game has started!";
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
    setTimeout(this.timer(), 2500); //!:SKONTATI STO TIMEOUT NE RADI!
    //!:Poziva funkciju odmah na mont komponente umjesto da saceka 2.5 s
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