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
  position: relative;
  z-index: 1;
  animation: tsunami 2s infinite;
}

#authInfo:hover {
  animation: hoverTsunami 1s, hoverInfiniteTsunami 700ms infinite 1s;
}

#authInfo:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

#authInfo:active {
  color: #ef424c;
}

#authInfo:active:after {
  background: transparent;
}

#authInfo:hover:before {
  opacity: 1;
}

#authInfo:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ef424c;
  left: 0;
  top: 0;
  border-radius: 10px;
  transition: 0.7s;
}

#authInfo:hover:after {
  background: #383f4d;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes tsunami {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0.4deg) scale(1.003);
  }
  40% {
    transform: rotate(-0.4deg) scale(1);
  }
  60% {
    transform: rotate(0.4deg) scale(1.003);
  }
  80% {
    transform: rotate(-0.4deg) scale(1);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes hoverTsunami {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-2deg);
  }
  40% {
    transform: rotateZ(6deg);
  }
  60% {
    transform: rotateZ(-2deg);
  }
  80% {
    transform: rotateZ(6deg) scale(1.01);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

@keyframes hoverInfiniteTsunami {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-0.5deg);
  }
  40% {
    transform: rotateZ(0.5deg);
  }
  60% {
    transform: rotateZ(-0.5deg);
  }
  80% {
    transform: rotateZ(0.5deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
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
  color: hsla(0,0%,100%,.7);
}

.Swal-title {
  font-size: 4444px;
}
</style>
