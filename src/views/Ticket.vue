<template>
  <div class="ticket">
    <p>
      Ticket ID:
      <strong>#{{get_TicketId}}</strong>
      <br />These are the numbers that have been generated for you:
    </p>
    <div class="balls">
      <Ball :num="combination[combination.length - 1]['comb'][0]" />
      <Ball :num="combination[combination.length - 1]['comb'][1]" />
      <Ball :num="combination[combination.length - 1]['comb'][2]" />
      <Ball :num="combination[combination.length - 1]['comb'][3]" />
      <Ball :num="combination[combination.length - 1]['comb'][4]" />
      <Ball :num="combination[combination.length - 1]['comb'][5]" />
      <Ball :num="combination[combination.length - 1]['comb'][6]" />
      <Ball :num="combination[combination.length - 1]['comb'][7]" />
    </div>
  </div>
</template>

<script>
import Ball from "./../components/Main/Elements/Ball.vue";
import { mapGetters, mapActions } from "vuex";

// Ne prepoznaje mutaciju, ne želi ugrabit generalnu vrijednost mutacije
// a tempId treba da bude odvojen od logike i da se povećava svaki put kad
// se klikne dugme
// Moro sam promjenit u Left.vue da poziva akciju iz combinationModule jer druagčije
// nemoš promjenit state kroz mutaciju
// Ticket ne prepoznaje mutaciju, to bi bilo fino sredit
// Ja nisam jeo od škole, jbg, riješio bih al et vrijeme jebe

export default {
  name: "Ticket",
  computed: {
    ...mapGetters(["get_userCombinations", "get_TicketId"])
  },
  components: {
    Ball
  },
  data() {
    return {
      combination: {}
    };
  },
  methods: {
    ...mapActions(["generateUserCombination"])
  },
  created() {
    this.generateUserCombination();
    this.combination = this.get_userCombinations;
  }
};
</script>

<style scoped>
p {
  margin-top: 0.5em;
  margin-left: 1em;
  color: #ef424c;
  font-size: 1.4em;
}

.ticket {
  margin: 20px;
  border-radius: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #f8f0ee;
}

.balls {
  display: flex;
  flex-direction: row;
}
</style>