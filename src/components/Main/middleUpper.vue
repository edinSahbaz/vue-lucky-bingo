<template>
  <div class="middleUpper">
    <div class="starterTimer">
      <span>60:00</span>
    </div>
    <div class="middleBalls">
      <div class="emptyPlace1"></div>
      <div class="emptyPlace2"></div>
      <div class="emptyPlaceBottom"></div>
      <div class="kernelBallsDiv">
        <div id="ball1">
          <BingoBall />
        </div>
        <div id="ball2">
          <BingoBall />
        </div>
        <div id="ball3">
          <BingoBall />
        </div>
        <div id="ball4">
          <BingoBall />
        </div>
        <div id="ball5">
          <BingoBall />
        </div>
        <div id="ball6">
          <BingoBall />
        </div>
        <div id="ball7">
          <BingoBall />
        </div>
        <div id="ball8">
          <BingoBall />
        </div>
        <div id="ball9">
          <BingoBall />
        </div>
        <div id="ball10">
          <BingoBall />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BingoBall from "./Elements/BingoBall";

export default {
  name: "middleUpper",
  components: {
    BingoBall
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
  font-size: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.middleBalls {
  display: grid;
  grid-template-rows: 90% 10%;
  grid-template-columns: 15% 70% 15%;
  grid-template-areas:
    "emptyPlace1 balls emptyPlace2"
    "emptyPlaceBottom emptyPlaceBottom emptyPlaceBottom";
}

.emptyPlace1 {
  grid-area: emptyPlace1;
}

.emptyPlace2 {
  grid-area: emptyPlace2;
}

.emptyPlaceBottom {
  grid-area: emptyPlaceBottom;
}

.kernelBallsDiv {
  grid-area: balls;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(5, 1fr);
}

.kernelBallsDiv div {
  display: flex;
  justify-content: center;
  align-items: center;
}

#ball1 {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}

#ball2 {
  grid-row: 2 / 3;
  grid-column: 4 / 5;
}

#ball3 {
  grid-row: 3 / 4;
  grid-column: 5 / 6;
}

#ball4 {
  grid-row: 4 / 5;
  grid-column: 5 / 6;
}

#ball5 {
  grid-row: 5 / 6;
  grid-column: 4 / 5;
}

#ball6 {
  grid-row: 6 / 7;
  grid-column: 3 / 4;
}

#ball7 {
  grid-row: 5 / 6;
  grid-column: 2 / 3;
}

#ball8 {
  grid-row: 4 / 5;
  grid-column: 1 / 2;
}

#ball9 {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
}

#ball10 {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
</style>