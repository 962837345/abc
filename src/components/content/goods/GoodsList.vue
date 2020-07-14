<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem from "components/content/goods/GoodsListItem";
  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props:{
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 3px;
  }
</style>