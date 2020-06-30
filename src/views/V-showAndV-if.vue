<template>
  <section class="page_component">
    <h2>v-show和v-if的区别</h2>
    <p>v-show和v-if都可以决定一个元素是否渲染</p>
    <h3>v-show</h3>
    <p>v-show当条件为false时，仅仅是将元素的display属性设置为none而已</p>

    <h3>v-if</h3>
    <p>v-if当条件为false时，压根不会有对应的元素存在DOM中</p>

    <h3>总结</h3>
    <p>当需要在显示与隐藏之间切换很频繁时，使用v-show</p>
    <p>当只有一次切换时，通常使用v-if</p>

    <h3>回流(reflow)</h3>
    <p>当render
      tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建render
      tree</p>

    <h3>重绘(repaint)</h3>
    <p>在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘</p>

    <h3>区别</h3>
    <p>回流必将引起重绘，而重绘不一定会引起回流</p>
    <p>比如：只有颜色改变的时候就只会发生重绘而不会引起回流 </p>
    <p>当页面布局和几何属性改变时就需要回流</p>
    <p>比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变</p>
  </section>
</template>

<script>
  export default {
    name: "V-showAndV-if"
  }
</script>

<style scoped>
  @import "../../public/CSS/style.css";
</style>