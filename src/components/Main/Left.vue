<template>
  <div class="left">
    <button v-on:click="increment">GET Ticket</button>
    <p>Tickets withdrew: {{count}}</p>
  </div>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      return ++this.count;
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