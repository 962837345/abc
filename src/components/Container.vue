<template>
  <el-container>
    <el-header style="height: 60px">Vue学习笔记</el-header>
    <el-container>
      <el-aside width="250px">
        <NavMenu></NavMenu>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavMenu from '@/components/NavMenu.vue'

  export default {
    name: "Container",
    components: {
      NavMenu
    }
  }
</script>

<style scoped>
  .el-container {
    width: 1200px;
    height: 95%;
  }

  .el-header {
    color: #409EFF;
    text-align: center;
    line-height: 60px;
    width: 100%;
    position: relative;
    border-bottom: #E4E7ED 1px solid;
  }

  .el-aside {
    text-align: left;
    color: #333;
    line-height: 200px;
    border-right: solid 1px #e6e6e6;
  }

  .el-main {
    color: #333;
    width: 100%;
  }

  body .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>