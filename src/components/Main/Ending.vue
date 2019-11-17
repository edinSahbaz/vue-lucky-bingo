<template>
  <div class="ending">
    <div class="timeDisplay" v-if="this.display">
      <span class="animated infinite fadeIn">{{ get_endTimer }}</span>
    </div>

    <div class="endMessage" v-else>
      <span>GAME FINISHED</span>
      <span class="msgId"
        >Winner's ticket id: {{ this.get_winnerCombination["id"] }}</span
      >
      <span class="combs"
        >Correct combinations: {{ this.get_correctCombinations }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Ending",
  data() {
    return {
      display: true
    };
  },
  computed: {
    ...mapGetters([
      "get_winnerCombination",
      "get_correctCombinations",
      "get_endTimer"
    ])
  },
  methods: {
    displayTime() {
      setTimeout(() => {
        this.display = false;
      }, 5000);
    },

    ...mapActions(["endingCountdown"])
  },
  created() {
    this.displayTime();
    this.endingCountdown();
  }
};
</script>

<style scoped>
.endMessage {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  flex-direction: column;
}

.msgId {
  font-size: 30px;
  margin-top: 65px;
}

.combs {
  font-size: 25px;
  margin-top: 55px;
}

.timeDisplay {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.timeDisplay span {
  font-size: 5em;
}
</style>
