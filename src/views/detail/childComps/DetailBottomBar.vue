<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="serviceClick">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="showClick">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="selectClick">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buyClick">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTabBar",
    methods: {
      addToCart() {
        this.$emit('addToCart')
      },
      buyClick() {
        this.$toast.show('虚拟:请前往支付')
      },
      serviceClick() {
        this.$toast.show('客服小姐姐已经下线')
      },
      showClick() {
        this.$toast.show('店铺没有其他东西了，去其他地方看看吧')
      },
      selectClick() {
        this.$toast.show('收藏成功')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 1px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -53px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
    border-radius: 5px;
    margin-right: 5px;
  }

  .bar-right .buy {
    background-color: #f69;
    border-radius: 5px;
  }
</style>