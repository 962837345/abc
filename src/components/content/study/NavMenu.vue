<template>
  <el-row class="tac">
    <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        router>
      <el-menu-item index="/home/webpack">webpack的使用</el-menu-item>
      <el-menu-item index="/home/vModel">v-model的使用及实现原理</el-menu-item>
      <el-menu-item index="/home/v-showAndV-if">v-show和v-if的区别</el-menu-item>
      <el-menu-item index="/home/vueCom">vue中的通信</el-menu-item>
      <el-menu-item index="/home/routerCom">vue-router的使用</el-menu-item>
      <el-menu-item index="/home/promise">promise的使用</el-menu-item>
      <el-menu-item index="/home/vuex">vuex的使用</el-menu-item>
      <el-menu-item index="/home/axios">axios的使用</el-menu-item>
      <el-menu-item index="/home/jsFunction">Js高阶函数的使用</el-menu-item>
      <el-menu-item index="/home/betterScroll">better-scroll的使用</el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        userId: '123'
      }
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

  .el-menu-vertical-demo{
    border: 0;
  }
</style>

