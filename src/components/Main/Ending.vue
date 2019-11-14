<template>
  <div class="ending">
    <div class="endMessage">
      <span>GAME FINISHED</span>
      <span class="msgId">Winner's ticket id: {{this.get_winnerCombination["id"]}}</span>
      <span class="combs">Correct combinations: {{this.get_correctCombinations}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Ending",
  computed: {
    ...mapGetters(["get_winnerCombination", "get_correctCombinations"])
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
</style>