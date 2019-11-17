<template>
  <div class="left">
    <img src="./../../assets/logo.png" alt="" />

    <router-link v-bind:to="newId" target="_blank">
      <button :disabled="this.get_buttonState" v-on:click="increment">
        {{(this.get_buttonState) ? 'Good Luck' : 'GET Ticket'}}
      </button>
    </router-link>
    <p>Tickets withdrew: {{ count }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Left",
  computed: {
    ...mapGetters(["get_userCombinations", "get_ticketId", "get_buttonState"])
  },
  data() {
    return {
      count: 0,
      newId: ""
    };
  },
  methods: {
    ...mapActions(["generateUserCombination"]),
    increment() {
      this.count++;
      this.generateUserCombination();
      this.newId =
        "/ticket?id=" +
        this.get_ticketId +
        "&num1=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][0] +
        "&num2=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][1] +
        "&num3=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][2] +
        "&num4=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][3] +
        "&num5=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][4] +
        "&num6=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][5] +
        "&num7=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][6] +
        "&num8=" +
        this.get_userCombinations[this.get_userCombinations.length - 1][
          "comb"
        ][7];
    }
  }
};
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: left;
  border-right: 4px dotted #f8f0ee;
}

button {
  background-color: #ef424c;
  outline: none;
  border: 0;
  color: #f8f0ee;
  font-size: 2em;
  border-radius: 0.8em;
  width: 8em;
  height: 2em;
  transition: 0.4s;
  cursor: pointer;
  position: relative;
  z-index: 0;
  animation: move infinite 1s;
}

button:hover {
  animation: hoverMove 700ms infinite;
}

button:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}

button:active {
  color: #ef424c;
}

button:active:after {
  background: transparent;
}

button:hover:before {
  opacity: 1;
}

button:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ef424c;
  left: 0;
  top: 0;
  border-radius: 10px;
  transition: 0.7s;
}

button:hover:after {
  background: #383f4d;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}

@keyframes move {
  0% {transform: rotate(0deg)}
  20% {transform: rotate(0.2deg)}
  50% {transform: rotate(-0.2deg)}
  70% {transform: rotate(0.2deg)}
  90% {transform: rotate(-0.2deg)}
  100% {transform: rotate(0deg)}
}

@keyframes hoverMove {
  0% {transform: rotateZ(0deg)}
  20% {transform: rotateZ(-0.5deg)}
  40% {transform: rotateZ(0.5deg)}
  60% {transform: rotateZ(-0.5deg)}
  80% {transform: rotateZ(0.5deg)}
  100% {transform: rotateZ(0deg)}
}

p {
  margin-top: 1.2em;
  font-size: 1.2em;
}

img {
  width: 20vh;
  height: 20vh;
  margin-bottom: 20px;
}
</style>
