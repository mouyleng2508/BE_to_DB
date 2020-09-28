<template>
  <div id="app">
    <PostComponent/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 0px;
  background-image: url('./assets/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
}

</style>
