<template>
  <div id="bingoBall"></div>
</template>

<script>
export default {
  name: "BingoBall"
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
</style>