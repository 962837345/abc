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
          <code class="hljs">&lt;el-input v-model=<span class="hljs-string">"input"</span> :placeholder="placeholder"&gt;&lt;/el-input>
&lt;script&gt;
export default {
  data() {
    return {
      input: '',
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
          <code class="hljs">&lt;el-button @click=<span class="hljs-string">"click"</span> &gt;click me&lt;/el-button>

&lt;script&gt;
export default {
    methods:{
      click:function () {
        alert("你点击了按钮")
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
        placeholder: '请输入内容'
      }
    },
    methods:{
      click:function () {
        alert("你点击了按钮")
      }
    }
  }
</script>

<style>
  .hljs-string {
    color: #756bb1;
  }

  .page_component > .page_content {
    margin-top: 20px;
    border: 1px solid #E4E7ED;
  }

  .page_content > .page_code {
    margin: 20px 0 0 20px;
  }
</style>