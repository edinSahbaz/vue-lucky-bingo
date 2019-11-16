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
  background: -webkit-linear-gradient(to right, #56ccf2, #2f80ed); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  border: 2px solid #f8f0ee;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 5px;
  cursor: pointer;
  transition: 0.4s;
}

#bingoBall:hover {
  border-color: #fcf4f2;
  transform: scale(1.02);
  filter: brightness(101%);
}

#bingoBall:hover p {
  color: #fdf5f3;
}

p {
  margin-top: 0.1em;
  font-size: 3em;
  text-align: center;
  transition: 0.4s;
}
</style>