<template>
  <div id="bingoBall">
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  name: "BingoBall",
  props: {
    num: {
      type: Number
    }
  }
};
</script>

<style scoped>
#bingoBall {
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  border: 2px solid #f8f0ee;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 5px;
}

p {
  margin-top: 0.1em;
  font-size: 3em;
  text-align: center;
}
</style>