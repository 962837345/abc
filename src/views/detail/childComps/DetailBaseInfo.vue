<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="price-high">{{goods.newPrice}}</span>
      <span class="price-low">{{goods.oldPrice}}</span>
      <span class="price-discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-info{
    width: 100%;
    border-bottom: 5px solid #f2f5f8;
    margin-top: 15px;
    padding: 0 8px;
    box-sizing: border-box;
  }

  .info-title{
    font-size: 14px;
  }

  .info-price{
    margin-top: 15px;
  }

  .price-high{
    color: $color-high-text;
    font-size: 18px;
  }

  .price-low{
    font-size: 12px;
    font-style: unset;
    color: $color-text;
    text-decoration-line: line-through;
    margin: 0 3px;
  }

  .price-discount{
    background-color: $color-high-text;
    border-radius: 10px;
    font-size: 13px;
    padding: 0 5px;
    margin-bottom: 10px;
    color: white;
  }

  .info-other{
    color: $color-text;
    font-size: 12px;
    line-height: 25px;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-service{
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-service-item img{
    width: 10px;
    height: 10px;
  }
</style>