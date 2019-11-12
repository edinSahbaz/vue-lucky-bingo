<template>
  <div class="ticket">
    <p>
      Ticket ID:
      <b>#{{get_TicketId}}</b>
      <br />These are the numbers that have been generated for you:
    </p>
    <div class="balls">
      <Ball :num="combination[0]" />
      <Ball :num="combination[1]" />
      <Ball :num="combination[2]" />
      <Ball :num="combination[3]" />
      <Ball :num="combination[4]" />
      <Ball :num="combination[5]" />
      <Ball :num="combination[6]" />
      <Ball :num="combination[7]" />
    </div>
  </div>
</template>

<script>
import Ball from "./../components/Main/Elements/Ball.vue";
import { mapGetters, mapActions } from "vuex";

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
      combination: []
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