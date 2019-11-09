<template>
  <div class="ticket">
    <p>
      Ticket ID:
      <b>#3</b>
      <br />These are the numbers that have been generated for you:
    </p>
    <div class="balls">
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
    </div>
  </div>
</template>

<script>
import Ball from "./../components/Main/Elements/Ball.vue";

export default {
  name: "Ticket",
  components: {
    Ball
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