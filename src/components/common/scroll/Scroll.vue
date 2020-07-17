<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      },
      mouseWheel:{
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        // 0和1不侦测实时位置
        // 2.在手指拖动的过程中侦测，而手指离开时的惯性不侦测
        // 3.只要是滚动都侦测惯性
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: this.mouseWheel
      })

      //2.监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position);
        })
      }

      //3.监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })

    },
    methods: {
      //滚动至某处
      scrollTo(x, y, time=300){     //time=300 300为默认值
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //完成上拉操作
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      //刷新
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      //获得当前滚动的Y值
      getScrollY() {
        return this.scroll? this.scroll.y : 0
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>

</style>