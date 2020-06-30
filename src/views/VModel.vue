<template>
  <section class="page_component">
    <h2>v-model的使用及实现原理</h2>

    <h3>v-bind(前置知识点)</h3>
    <p>v-bind用于绑定data中的变量,v-bind可以使用语法糖，直接用:绑定属性</p>
    <div class="page_content">
      <div class="page_code">
        <el-input v-model="input" :placeholder="placeholder" style="width: 200px"></el-input>
      </div>
      <pre>
          <code class="hljs">&lt;template&gt;
  &lt;el-input :placeholder=<span class="hljs-string">"placeholder"</span>&gt;&lt;/el-input>
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      placeholder: '请输入内容'
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <h3>v-on(前置知识点)</h3>
    <p>v-on用于绑定methods中的变量,v-on可以使用语法糖，直接用@绑定方法</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="click">click me</el-button>
      </div>
      <pre>
          <code class="hljs">&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"click"</span> &gt;click me&lt;/el-button>
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods:{
      click() {
        alert("你点击了按钮")
      }
    }
  }
&lt;/script&gt;
          </code>
      </pre>
    </div>

    <h3>v-model</h3>
    <p>v-model用于input中数据的双向绑定</p>
    <div class="page_content">
      <div class="page_code">
        <el-input v-model="input" :placeholder="placeholder" style="width: 200px"></el-input>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;el-input v-model=<span class="hljs-string">"input"</span> :placeholder="placeholder"&gt;&lt;/el-input>
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: '{{input}}',
        placeholder: '请输入内容'
      }
    }
  }
&lt;/script&gt;
          </code>
        </pre>
    </div>

    <p>v-model实际是语法糖，原理实现:value绑定对应值，input属性能监听input标签中数据的变化，当数据发生改变时，进行对inputText值的修改</p>
    <div class="page_content">
      <div class="page_code">
        <input :value="inputText" @input="inputChange" :placeholder="placeholder" style="width: 200px"></input>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;input :value=<span class="hljs-string">"inputText"</span> @input=<span
              class="hljs-string">"inputChange"</span> :placeholder="placeholder"&gt;&lt;/input>
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        inputText: '{{inputText}}',
        placeholder: '请输入内容'
      }
    },
    methods: {
      inputChange(event) {
        this.inputText = event.target.value;
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
    name: "v-model",
    data() {
      return {
        input: '',
        inputText: '',
        placeholder: '请输入内容'
      }
    },
    methods: {
      click() {
        alert("你点击了按钮")
      },
      inputChange(event) {
        this.inputText = event.target.value;
      }
    }
  }
</script>

<style scoped>
  @import "../../public/CSS/style.css";
</style>