<template>
  <div id="app">
    <transition
      name="router-anim"
      enter-active-class="animated fadeInRight delay-1s"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
* {
  margin: 0;
  padding: 0;
}

body{
  overflow: hidden;
}

#app {
  font-family: "Raleway", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #2d3440;
}
</style>
