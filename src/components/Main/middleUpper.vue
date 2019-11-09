<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span>60:00</span>
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
  }
};
</script>

<style scoped>
.middleUpper {
  display: grid;
  grid-area: middleUpper;
  grid-template-rows: 0.3fr 1.7fr;
}

.starterTimer {
  font-size: 3em;
  display: flex;
  align-items: center;
  padding-left: 0.5em;
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