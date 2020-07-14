<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import CartList from "views/cart/childComps/CartList";
  import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

  export default {
    name: "cart",
    components: {CartBottomBar, CartList, NavBar},
    data() {
      return {}
    },
    computed: {
      cartLength() {
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped lang="scss">
  .cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: $color-tint;
    color: #fff;
  }
</style>