<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span class="select-all">全选</span>
    </div>
    <div class="right">
      <span class="total-price">合计:￥{{totalPrice}}</span>
      <span class="settle-button" @click="settleClick">结算({{getCheckCount}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "views/cart/childComps/CheckButton"

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      //  商品总价格
      totalPrice() {
        return this.$store.getters.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return item.realPrice * item.count + preValue;
        },0)
      },
      //  选中商品的长度
      getCheckCount() {
        return this.$store.getters.cartList.filter(item => {
          return item.checked
        }).length
      },
      //  判断是否全部选中，find中只要找到checked为false的时候就返回，再取反即表示没有全部选中
      isSelectAll() {
        if(this.$store.getters.cartList.length === 0) return false;
        return !this.$store.getters.cartList.find(item => !item.checked);
      },

      //  是否有选中某一项
      haveSelect() {
        return this.$store.getters.cartList.find(item => item.checked)
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll){
          this.$store.commit('selectAll',false)
        }else {
          this.$store.commit('selectAll',true)
        }
      },
      settleClick() {
        if(!this.haveSelect){
          this.$toast.show('请选择购买的商品')
        }else {
          this.$toast.show('请支付:'+this.totalPrice+'元')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .bottom-bar {
    height: 40px;
    background-color: #fff;
    position: relative;
    border-top: 1px solid #eee;
    display: flex;
    width: 100%;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .check-content .select-all{
    margin-left: 10px;
  }

  .check-button {
    width: 15px;
    height: 15px;
  }

  .bottom-bar .right{
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10px;
  }

  .right .total-price {
    margin-right: 10px;
  }

  .right .settle-button{
    background-color: $color-tint;
    border-radius: 20px;
    padding: 4px 20px;
    color: #fff;
  }

</style>