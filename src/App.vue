<template>
  <div id="app">
    <Landing />
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
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #757575;
}
</style>
