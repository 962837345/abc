<template>
  <section class="page_component">
    <h2>axios的使用</h2>
    <h3>axios实例和模块封装</h3>
    <p>使用axios实例而不是使用axios全局对象可以方便以后扩展使用不同ip地址</p>
    <p>对axios进行模块封装可以使得更方便维护</p>
    <div class="page_content">
      <div class="page_code">
        <span>在request.js中对axios进行实例化和封装</span>
      </div>
      <pre>
        <code class="hljs">import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  return instance(config)
}
        </code>
      </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <el-button @click="buttonClick">发送请求</el-button>
      </div>
      <pre>
        <code class="hljs">&lt;el-button @click=<span class="hljs-string">"buttonClick"</span>&gt;发送请求&lt;/el-button&gt;

&lt;script&gt;
  import {request} from "../network/request";

  export default {
    name: "Axios",
    methods: {
      buttonClick() {
        request({
          url: 'home/multidata'
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </div>

    <h3>axios拦截器</h3>
      <pre>
        <code class="hljs">
  //请求拦截
  instance.interceptors.request.use(config => {
    // 1.config中的一些信息不符合服务器的要求

    // 2.每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求（登录（token）），必须携带一些特殊的信息
    return config
  },err => {
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res => {
    // 只返回data，不返回额外附加的一些属性
    return res.data
  },err => {
    console.log(err);
  });
        </code>
      </pre>
  </section>

</template>

<script>
  import {request} from "../network/request";

  export default {
    name: "Axios",
    methods: {
      buttonClick() {
        request({
          url: 'home/multidata'
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>