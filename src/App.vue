<template>
  <div id="app">
    <Landing />
    <Particles />
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main";
import Landing from "./components/Landing.vue";
import Particles from "./components/Particles.vue";

export default {
  name: "app",
  components: {
    Main,
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
  height: 100vh;
  background-color: #2d3440;
}
</style>
