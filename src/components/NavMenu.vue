<template>
  <el-row class="tac">
    <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        router>
      <el-menu-item index="/home/webpack">Webpack的使用</el-menu-item>
      <el-menu-item index="/home/vModel">v-model的使用</el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  a {
    color: #606266;
    text-decoration: none;
  }

  .router-link-active {
    color: #409EFF;
  }
</style>

