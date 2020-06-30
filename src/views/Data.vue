<template>
  <section class="page_component">
    <h2>Vue中的data必须是一个函数</h2>
    <h3>组件化思想</h3>
    <p>Vue作为一个组件进行复用时，data写成一个对象时，会导致数据共享，而data为一个函数时，对该组件进行调用时data每次都会返回一个新的对象</p>
    <pre>
      <code class="hljs">&lt;script&gt;
  export default {
    data() {
      return {
        message: '你好'
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>

    <h2>组件间的通信</h2>
    <h3>父传子</h3>
    <p>父组件通过v-bind传递一个属性给子组件，子组件通过props进行接收</p>
    <div class="page_content">
      <div class="page_code">
        <p>父组件</p>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;children :message=<span class="hljs-string">"message"</span> :fruits=<span
              class="hljs-string">"fruits"</span>&gt;&lt;/children>
&lt;/template&gt;


&lt;script&gt;
  export default {
    data() {
      return {
        message: '你好子组件',
        fruits: ['apple','banana']
      }
    }
  }
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <p>子组件</p>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;p&gt;<span v-pre class="hljs-string">{{message}}</span>&lt;/p>
  &lt;el-button v-for=<span class="hljs-string">"fruit in fruits"</span> :key=<span class="hljs-string">"fruit"</span>&gt;<span
              v-pre class="hljs-string">{{fruit}}</span>&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {},
    props: {
      message: {
        type: String, //类型限制
        default: '我是默认值',  //默认值
        required: true  //true时为必传值，不传就会报错
        },
        fruits: {
          //类型是对象或者数组时。，默认值必须是一个函数
          type: Array,
          default(){
            return []
          }
        }
      }
    }
  }
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <p>效果</p>
    <div class="page_content">
      <div class="page_code">
        <children :message="message" :fruits="fruits"></children>
      </div>
    </div>

    <h3>子传父</h3>
    <p>子组件通过this.$emit()向父组件传递一个自定义函数</p>
    <div class="page_content">
      <div class="page_code">
        <p>父组件</p>
      </div>
      <pre>
          <code class="hljs">&lt;template&gt;
  &lt;children @buttonClick=<span class="hljs-string">"childrenClick"</span>&gt;&lt;/children>
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    childrenClick(fruit){
      alert('子组件点击了'+fruit);
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <p>子组件</p>
      </div>
      <pre>
          <code class="hljs">&lt;template&gt;
  &lt;p&gt;<span v-pre class="hljs-string">{{message}}</span>&lt;/p>
  &lt;el-button v-for=<span class="hljs-string">"fruit in fruits"</span> @click=<span class="hljs-string">childrenClick(fruit)</span> :key=<span
                class="hljs-string">"fruit"</span>&gt;<span class="hljs-string" v-pre>{{fruit}}</span>&lt;/el-button>
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
   childrenClick(fruit){
      this.$emit('buttonClick',fruit)
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <p>效果</p>
    <div class="page_content">
      <div class="page_code">
        <children :message="message" :fruits="fruits" @buttonClick="childrenClick"></children>
      </div>
    </div>

    <h2>父子组件间的访问</h2>
    <h3>父访问子</h3>
    <p>父组件访问子组件:使用$children或$refs</p>
    <p>大部分情况下使用$refs，使用$refs需要在调用子组件时，给子组件绑定一个ref属性，如:</p>
    <pre>
      <code class="hljs">&lt;template&gt;
  &lt;children ref=<span class="hljs-string">"child"</span>&gt;&lt;/children>
&lt;/template&gt;
      </code>
    </pre>
    <p>父组件方法中调用this.$refs.child即可</p>
    <p>此处只示例$children</p>

    <div class="page_content">
      <div class="page_code">
        <p>父组件</p>
        <el-button @click="visitChildren">访问子组件</el-button>
      </div>
      <pre>
          <code class="hljs">&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"visitChildren"</span>&gt;&lt;/el-button>
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {}
  },
  methods: {
    visitChildren() {
      alert(this.$children[0].message);
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <h3>子访问父</h3>
    <p>子组件访问父组件:使用$parent或$root</p>
    <div class="page_content">
      <div class="page_code">
        <p>同上，在子组件中给button绑定一个函数，在函数中调用this.$parent.message</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Children from "../components/children";

  export default {
    name: "Data",
    components: {Children},
    data() {
      return {
        message: '你好子组件',
        fruits: ['apple', 'banana']
      }
    },
    methods: {
      childrenClick(fruit) {
        alert('子组件点击了' + fruit)
      },
      visitChildren() {
        alert(this.$children[0].message);
      }
    }
  }
</script>

<style scoped>
  @import "../../public/CSS/style.css";
</style>