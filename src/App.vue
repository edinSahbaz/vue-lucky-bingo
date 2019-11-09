<template>
  <div id="app">
<!--    <Landing />-->
    <Main/>
  </div>
</template>

<script>
// import Landing from "./components/Landing.vue";
import Main from "./components/Main";

export default {
  name: "app",
  components: {
    Main,
    // Landing
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #2D3440;
}
</style>
