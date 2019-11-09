<template>
  <div id="app">
    <Landing />
    <vue-particles
      color="#dedede"
      :particleOpacity="1"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      linesColor="#EF424C"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "app",
  components: {
    Landing
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Raleway", sans-serif;
  width: 100%;
  height: 100%;
  background-color: #2d3440;
}
</style>
