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
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
}

img {
  margin-top: 8%;
  width: 18em;
  height: 18em;
}

h1 {
  margin: 1.2em 0;
  font-size: 1.6em;
  color: #f8f0ee;
}

button {
  background-color: rgb(40, 191, 219, 0.5);
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
</style>