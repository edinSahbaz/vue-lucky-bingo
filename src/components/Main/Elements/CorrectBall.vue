<template>
  <div id="ball">
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number
    }
  }
};
</script>

<style scoped>
#ball {
  background-image: linear-gradient(to top, #ffef08 0%, #ffb199 100%);
  border-radius: 50%;
  border: 2px solid #f8f0ee;
  width: 4em;
  height: 4em;
  margin: 1em;
}

p {
  color: #f8f0ee;
  margin-top: 0.3em;
  font-size: 2em;
  text-align: center;
}
</style>