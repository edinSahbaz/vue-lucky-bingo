<template>
  <div class="right">
    <div class="manual">
      <h1>Manual</h1>
      <span>Grab your tickets before the timer hits 00:00.</span>
      <span>On your ticket, you will see</span>
      <span>combination of 8 numbers and ID of your ticket.</span>
      <span>You can't make new tickets when the timer hits 00:00.</span>
      <span>New timer arrives and every 10 seconds new number will be generated.</span>
      <span>Our bingo will create a combination of 8 different numbers.</span>
      <span>On screen you will see which ticket has the highest hits.</span>
      <span>Ticket with most hits is a winner.</span>
      <span>If you are lucky enough and you guess all of eight numbers, you scored Bingo.</span>
      <span>Good luck!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Right"
};
</script>

<style scoped>
.right {
  grid-area: right;
  border-left: 4px dotted #f8f0ee;
}

.manual {
  margin: 10% 5%;
  line-height: 1.6;
}

.manual h1 {
  margin-bottom: 5px;
}

.manual span {
  display: block;
  font-size: 16px;
}
</style>