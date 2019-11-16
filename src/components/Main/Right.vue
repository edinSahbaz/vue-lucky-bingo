<template>
  <div class="right">
    <div class="manual">
      <h1>Manual</h1>
      <span>Grab your tickets before the timer hits 00:00.</span>
      <span>On your ticket, you will see</span>
      <span>combination of 8 numbers and ID of your ticket.</span>
      <span>You can't make new tickets when the timer hits 00:00.</span>
      <span
        >New timer arrives and every 6 seconds new number will be
        generated.</span
      >
      <span>Our bingo will create a combination of 8 different numbers.</span>
      <span>On screen you will see which ticket has the highest hits.</span>
      <span>Ticket with most hits is a winner.</span>
      <span
        >If you are lucky enough and you guess all of eight numbers, you scored
        Bingo.</span
      >
      <span>Good luck!</span>
    </div>
    <div class="authors">
      <button id="authInfo" @click="showAuthors">Credits</button>
      <a href="https://github.com/edinSahbaz/Gambling-Game" target="_blank"
        ><font-awesome-icon id="githubIcon" :icon="['fab', 'github']"
      /></a>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Right",
  methods: {
    showAuthors() {
      Swal.fire({
        title: "Authors",
        html: "<span>Kenan Sejmenović</span><br><span>Edin Šahbaz</span>",
        icon: "info",
        confirmButtonColor: "#41B883",
        confirmButtonText: "Great work!"
      });
    }
  }
};
</script>

<style scoped>
.right {
  grid-area: right;
  border-left: 4px dotted #f8f0ee;
}

.manual {
  margin: 10% 5%;
  line-height: 1.4;
  height: 60vh;
}

.manual h1 {
  margin-bottom: 5px;
}

.manual span {
  display: block;
  font-size: 16px;
}

.authors {
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#authInfo {
  background-color: #ef424c;
  outline: none;
  border: 0;
  color: #f8f0ee;
  font-size: 1.2em;
  border-radius: 0.8em;
  width: 8em;
  height: 2em;
  transition: 0.4s;
  cursor: pointer;
}

#authInfo:hover {
  background-color: #383f4d;
}

#githubIcon {
  font-size: 40px;
  cursor: pointer;
  margin-top: 20px;
}

a {
  color: #f8f0ee;
  text-decoration: none;
  transition: 0.4s;
}

a:hover {
  color: #18191b;
}

.Swal-title {
  font-size: 4444px;
}
</style>
