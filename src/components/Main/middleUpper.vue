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
//Ti sad trebas napravit da u svaki ovaj BingoBall ubaci novi broj koji se prikaze u MainBall
//i da ide redom...puni od 1. do 8. loptice

//mozda moze se odrait sa v-for pa da ih kreira kako se izvlaci kombinacija,al eto...na tebi je kako
//ces uradit.Znaci sad kad ovamo izvuce 5. broj npr treba prosljedit u 5. lopticu.

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
  created() {
    setTimeout(() => {
      this.timer();
    }, 2000);
    setTimeout(() => {
      this.generateCombination();
    }, 55000);

    //poziva timer pri "montiranju" modula i posto treba 6s da se prikaze novi br,stavio sam da
    //nakon sto krene timer krene i timeout za poziv funkcije koja ispisuje onaj lastNum iz modula
    //jer bi bilo glupo da krene igra i cekas prvi broj 6s,ovako ga cekas samo 1s a ostalo ide isto :)
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