<template>
  <section class="page_component">
    <h2>better-scroll的使用与封装</h2>
    <h3>better-scroll的安装</h3>
    <p>使用npm安装better-scroll</p>
    <pre>
      <code class="hljs">npm install better-scroll -S</code>
    </pre>

    <h3>better-scroll的使用</h3>
    <p>better-scroll只能包裹一个子元素，然后再通过子元素包裹其他元素，实现滚动</p>
    <p>better-scroll默认会阻止原生click事件的触发，因此在创建better-scroll的时候需设置click:true</p>
    <h3>scroll.on方法</h3>
    <p>scroll.on方法用于绑定对应的事件方法</p>
    <p>this.scroll.on('scroll',(position) => {}) //监听滚动事件</p>
    <p>this.scroll.on('pullingUp', () => {})  //监听上拉事件</p>
    <h3>probeType属性</h3>
    <p>probeType用于侦测better-scroll实时位置，默认0和1</p>
    <p>0和1不实时侦测</p>
    <p>2.在手指拖动的过程中侦测，而手指离开时的惯性不侦测</p>
    <p>3.只要是滚动都侦测惯性</p>
    <h3>pullUpLoad</h3>
    <p>pullUpload用于做上拉加载功能，当设置为true或者是一个Object时，可以开启上拉加载，加载完成后需要执行finishPullIUp方法</p>
    <p>当使用pullUpLoad方法时，当上拉加载信息，对应的高度变更时，better-scroll中的scrollerHight没有及时更新，就会出现下拉卡顿，无法继续下拉</p>
    <p>解决办法：当图片加载完成时，调用scroll对象中的refresh方法进行刷新</p>
    <p>1：在main.js中使用Vue.prototype.$bus = new Vue()添加一个事件总线</p>
    <p>2：Vue中的img通过@load方法监听图片加载完成，加载完成时，调用this.$bus.$emit('method')发射完成事件</p>
    <p> 3: 在主页面中调用this.$bus.$on('method'，function)监听该事件</p>
    <p>4：在回调函数中调用scroll对象中的refresh方法</p>

    <h3>better-scroll的封装</h3>
    <pre>
      <code class="hljs">&lt;template&gt;
  &lt;div class="wrapper" ref="wrapper"&gt;
    &lt;div class="content"&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
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
        pullUpLoad: this.pullUpLoad
      })

      //2.监听滚动的位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position);
      })

      //3.监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })
    },
  }
&lt;/script&gt;
      </code>
    </pre>
  </section>
</template>

<script>
  export default {
    name: "BetterScroll"
  }
</script>

<style scoped>

</style>