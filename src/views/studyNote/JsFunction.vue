<template>
  <section class="page_component">
    <h2>JavaScript高阶函数的使用</h2>
    <h3>map</h3>
    <p>map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="mapClick">map</el-button>
        <span style="margin-left: 20px">{{this.mapArray}}</span>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"mapClick"</span>&gt;map&lt;/el-button&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>{{this.mapArray}}</span>&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: "Js高阶函数",
    data() {
      return {
        mapArray: [1, 2, 3, 4, 5, 6]
      }
    },
    methods: {
      mapClick() {
        this.array = this.array.map(x => x*x);
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </div>

    <h3>reduce</h3>
    <p>Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="reduceClick">reduce</el-button>
        <span style="margin-left: 20px">{{this.reduceArray}}</span>
        <span style="margin-left: 20px">the sum is :{{this.reduceNum}}</span>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"reduceClick"</span>&gt;reduce&lt;/el-button&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>{{this.reduceArray}}</span>&lt;/span&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span
            v-pre>the sum is :{{this.reduceNum}}</span>&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: "Js高阶函数",
    data() {
      return {
        reduceArray: [1,3,5,7,9],
        reduceNum: ''
      }
    },
    methods: {
      reduceClick() {
        this.reduceNum = this.reduceArray.reduce((x,y) => x + y)
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </div>

    <h3>filter</h3>
    <p>filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="filterClick">filter</el-button>
        <span style="margin-left: 20px">before:{{this.filterBefore}}</span>
        <span style="margin-left: 20px">after:{{this.filterAfter}}</span>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"reduceClick"</span>&gt;reduce&lt;/el-button&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>before:{{this.filterBefore}}</span>&lt;/span&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>after:{{this.filterAfter}}</span>&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: "Js高阶函数",
    data() {
      return {
        filterBefore: [4,8,12,16,20],
        filterAfter: []
      }
    },
    methods: {
      filterClick() {
        this.filterAfter = this.filterBefore.filter(x => x > 10)
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Js高阶函数",
    data() {
      return {
        mapArray: [1, 2, 3, 4, 5, 6],
        reduceArray: [1, 3, 5, 7, 9],
        reduceNum: '',
        filterBefore: [4,8,12,16,20],
        filterAfter: []
      }
    },
    methods: {
      mapClick() {
        this.mapArray = this.mapArray.map(x => x * x);
      },
      reduceClick() {
        this.reduceNum = this.reduceArray.reduce((x, y) => x + y)
      },
      filterClick() {
        this.filterAfter = this.filterBefore.filter(x => x > 10)
      }
    }
  }
</script>

<style scoped>

</style>