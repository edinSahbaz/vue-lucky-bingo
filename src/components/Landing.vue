<template>
  <div id="container">
    <img src="./../assets/logo.png" alt />
    <h1>Want to try out your luck?</h1>
    <button>PLAY</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
}

img {
  width: 15em;
  height: 15em;
}

h1 {
  font-size: 1.6em;
  color: #f3fe7e;
}

button {
  margin-top: 1em;
  background-color: #ddf796;
  outline: none;
  border: 0;
  color: #757575;
  font-size: 2em;
  border-radius: 2em;
  width: 8em;
  height: 2em;
}

button:hover {
  cursor: pointer;
}
</style>