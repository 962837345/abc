<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           v-for="(item,index) in menuList"
           :key="index"
           :class="{active: currentIndex === index}"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "TabMenu",
    components: {Scroll},
    props: {
      menuList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  #tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: $color-high-text;
    background-color: #fff;
    border-left: 3px solid $color-high-text;
  }
</style>