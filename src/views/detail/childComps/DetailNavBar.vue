<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt=""/>
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles"
           class="title-item"
           @click="itemClick(index)"
           :class="{active: index === currentIndex}"
           :key="index">{{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('currentIndex',this.currentIndex)
      },
      backClick() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: $color-high-text;
  }

  .back {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back img {

    width: 15px;
    height: 15px;
  }
</style>