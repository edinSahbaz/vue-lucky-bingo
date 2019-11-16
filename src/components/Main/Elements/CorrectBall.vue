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
  /*background-image: linear-gradient(to top, #ffef08 0%, #ffb199 100%);*/
  background: -webkit-linear-gradient(to right, #56ab2f, #a8e063); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #56ab2f, #a8e063);
  border-radius: 50%;
  border: 2px solid #f8f0ee;
  width: 4em;
  height: 4em;
  margin: 1em;
  cursor: pointer;
  transition: 0.4s;
}

#ball:hover {
  border-color: #fff7f5;
  transform: scale(1.1);
  filter: brightness(105%);
}

p {
  color: #f8f0ee;
  margin-top: 0.3em;
  font-size: 2em;
  text-align: center;
}
</style>