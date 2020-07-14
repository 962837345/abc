<template>
  <div class="mall">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";


  export default {
    name: "Mall",
    components: {MainTabBar}
  }
</script>

<style scoped>
  .mall {
    width: 100%;
  }
</style>