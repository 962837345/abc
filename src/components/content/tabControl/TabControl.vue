<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-control{
    display: flex;
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item{
    flex: 1;
  }

  .active{
    color: $color-high-text;
  }

  .active span{
    border-bottom: 3px solid $color-high-text;
    padding: 5px;
  }
</style>