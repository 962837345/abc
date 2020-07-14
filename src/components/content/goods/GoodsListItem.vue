<template>
  <div class="goods-list-item">
    <img :src="showImage" alt="" @load="imageLoad" @click="itemClick"/>
    <div class="item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        //将事件发射到事件总线
        if(this.$route.path.indexOf('/myHome') !== -1 || this.$route.path.indexOf('/category') !== -1){
          this.$bus.$emit('itemImageLoad')
        }
      },
      itemClick() {
        if(this.goodsItem.iid !== undefined){
          this.$router.push('/mall/detail/' + this.goodsItem.iid);
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .item-info {
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
    overflow: hidden;
  }

  .item-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .item-info .price {
    color: $color-high-text;
    margin-right: 20px;
  }

  .item-info .collect {
    position: relative;
  }

  .item-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>