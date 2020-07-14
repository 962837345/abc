<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message = '实例文本', duration = 2000){
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 40%;
    left:50%;
    font-size: 14px;
    transform: translate(-50%,50%);
    color: white;
    background-color: rgba(0,0,0,0.75);
    padding: 8px 10px;
    z-index: 999;
  }
</style>