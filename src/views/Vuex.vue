<template>
  <section class="page_component">
    <h2>vuex的使用</h2>
    <h3>vuex的作用</h3>
    <p>vuex是专门为Vue.js应用程序开发的状态管理模式</p>
    <h3>vuex的核心概念</h3>
    <h3>State</h3>
    <p>State保存变量状态，对应data</p>
    <p>State的值只能通过Mutation来改变，不能通过Action来改变</p>
    <div class="page_content">
      <div class="page_code">
        <span>示例</span>
        <p>{{$store.state.name}}</p>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  <span v-pre>{{$store.state.name}}</span>
&lt;/template&gt;
        </code>
      </pre>
    </div>

    <h3>Mutation</h3>
    <p>Mutation存放一些同步操作</p>
    <p>Mutation需要通过this.$store.commit('mutations中的函数名','可选参数')进行调用</p>
    <p>多参数传递时通常使用对象进行传参</p>
    <div class="page_content">
      <div class="page_code">
        <p>示例 传参用法</p>
        <el-button @click="addCount(5)">+5</el-button>
        <span style="margin-left: 20px">{{$store.state.count}}</span>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"addCount(5)"</span>&gt;+5&lt;/el-button&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>{{$store.state.count}}</span>&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
  methods: {
    addCount(count) {
      this.$store.commit('increment',count);
      //  特殊的提交封装
      // this.$store.commit({
      //   type: 'increment',
      //   count
      // })
    }
  }
&lt;/script&gt;
        </code>
    <span>store的index.js中</span>
        <code class="hljs">
state: {
  count: 0
},
mutations: {
  increment(state,count) {
    //使用特殊的提交封装时，这里的count是一个封装对象，要调用时需改为count.count
    state.count += count;
  }
}
        </code>
      </pre>
    </div>

    <h3>Action</h3>
    <p>Action用于做一些异步操作</p>
    <p>Action需要通过this.$store.dispatch('actions中的函数名','可选参数')进行调用</p>
    <p>传参可以传数值或字符串也可以传一个对象</p>
    <p>在showMessage中返回一个Promise对象，然后在对应使用dispatch的地方使用then进行回调，达到数据响应通知的目的，是一种优雅的写法</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="buttonClick">Click Me</el-button>
        <span style="margin-left: 20px">{{$store.state.count}}</span>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  &lt;el-button @click="buttonClick"&gt;Click Me&lt;/el-button&gt;
  &lt;span style=<span class="hljs-string">"margin-left: 20px"</span>&gt;<span v-pre>{{$store.state.count}}</span>&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
  methods: {
    buttonClick() {
      this.$store.dispatch('showMessage',{
        num: 10
      }).then(res => {
        console.log(res);
      })
    }
  }
&lt;/script&gt;
        </code>

    <span>store的index.js中</span>
        <code class="hljs">
actions: {
  showMessage(context,payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //这里使用context是为了区别Module中的actions，此处commit只会在当前的mutation中调用
        context.commit('increment',payload.num)
        resolve('改变了count')
      }, 1000)
    })
  }
},
mutations: {
  increment(state, count) {
    state.count += count;
  }
},
        </code>
      </pre>
    </div>

    <h3>Getters</h3>
    <p>类似于computed，做一些计算操作</p>
    <p>使用Getters传参要在getters的函数中返回一个函数，返回的函数中进行传参</p>
    <div class="page_content">
      <div class="page_code">
        <span>示例 传参用法</span>
        <p>{{$store.getters.sayHello('hello')}}</p>
      </div>
      <pre>
        <code class="hljs">
&lt;template&gt;
  <span v-pre>{{$store.getters.sayHello('hello')}}</span>
&lt;/template&gt;
        </code>
    <span>store的index.js中</span>
        <code class="hljs">
getters: {
  sayHello(state){
    return hello => {
      return hello + ' ' + state.name
    }
  }
}
        </code>
      </pre>
    </div>

    <h3>Module</h3>
    <p>Vuex允许我们将store分割成模块，而每个模块拥有总结的state、mutations、actions、getters</p>

  </section>
</template>

<script>
  export default {
    name: "Vuex",
    data() {
      return {}
    },
    methods: {
      addCount(count) {
        this.$store.commit('increment', count);
        //特殊的提交封装
        // this.$store.commit({
        //   type: 'increment',
        //   count
        // })
      },
      buttonClick() {
        this.$store.dispatch('showMessage',{
          num: 10
        }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>