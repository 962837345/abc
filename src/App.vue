<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/css/style.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

</style>
<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";

  export default {
    components: {MainTabBar}
  }
</script>