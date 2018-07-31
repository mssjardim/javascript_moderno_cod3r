<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./main/Calculator";
export default {
  components: { Calculator }
};
</script>

<style>
* {
  font-family: "Consolas", monospace;
}
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ffffff;
  background: linear-gradient(to right, rgb(183, 105, 118), rgb(41, 46, 73));
}
</style>
