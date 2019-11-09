<template>
  <div id="app">
    <Landing />
    <Particles />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import Particles from "./components/Particles.vue";

export default {
  name: "app",
  components: {
    Landing,
    Particles
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
