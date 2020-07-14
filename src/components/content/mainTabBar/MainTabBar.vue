<template>
    <tab-bar>
      <tab-bar-item path="/mall/myHome" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabBar/home.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabBar/home_active.svg"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/mall/category">
        <img slot="item-icon" src="~assets/img/tabBar/category.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabBar/category_active.svg"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/mall/cart">
        <img slot="item-icon" src="~assets/img/tabBar/cart.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabBar/cart_active.svg"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mall/profile">
        <img slot="item-icon" src="~assets/img/tabBar/profile.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabBar/profile_active.svg"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabBar/TabBar";
  import TabBarItem from "components/common/tabBar/TabBarItem";

  export default {
    name: "mainTabBar",
    components: {TabBarItem, TabBar}
  }
</script>

<style scoped>

</style>