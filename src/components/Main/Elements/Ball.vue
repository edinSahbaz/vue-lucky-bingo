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
  background: -webkit-linear-gradient(to right, #d31027, #ea384d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #d31027, #ea384d);
  border-radius: 50%;
  border: 2px solid #f8f0ee;
  width: 4em;
  height: 4em;
  margin: 1em;
  transition: 0.4s;
  cursor: pointer;
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