<template>
  <div class="left">
    <router-link v-bind:to="newId" target="_blank">
      <button :disabled="this.get_buttonState" v-on:click="increment">GET Ticket</button>
    </router-link>
    <p>Tickets withdrew: {{count}}</p>
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
}

button:hover {
  cursor: pointer;
}

p {
  margin-top: 1.2em;
  font-size: 1.2em;
}
</style>