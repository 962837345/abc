<template>
  <section class="page_component">
    <h2>动态路由</h2>
    <h3>el-menu结合router跳转页面</h3>
    <p>el-menu标签包裹el-menu-item</p>
    <p>el-menu标签中默认active必须动态设置为当前页面路径</p>
    <p>必须给el-menu标签添加一个router属性</p>
    <p>el-menu-item标签中使用index赋值对应路径进行跳转</p>
    <div class="page_content">
      <div class="page_code">
        <p>实例</p>
      </div>
      <pre>
        <code class="hljs">&lt;el-menu
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    router&gt;
  &lt;el-menu-item index="/home/webpack"&gt;webpack的使用&lt;/el-menu-item&gt;
&lt;/el-menu&gt;
        </code>
      </pre>
    </div>

    <h2>vue-router传递参数</h2>
    <h3>params类型</h3>
    <p>在router中配置路由格式:/router/:id</p>
    <p>在path后面跟上对应的值</p>
    <p>传递后形成的路径/router/abc</p>
    <p>传递过来的值用$route.params.id进行接收，id与配置在router中的id对应</p>

    <p>示例</p>
    <div class="page_content">
      <div class="page_code">
        <p>router中</p>
      </div>
      <pre>
              <code class="hljs">{
  path: 'vueCom/:id',
  name: 'vueCom',
  component: () => import('../views/VueCommunication.vue')
},
              </code>
            </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <p>跳转页面中</p>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;el-menu-item :index=<span class="hljs-string">"'/home/vueCom/'+userId"</span>&gt;vue中的通信&lt;/el-menu-item&gt;
&lt;template&gt;
或
&lt;template&gt;
  &lt;router-view :to=<span class="hljs-string">"'/home/vueCom/'+userId"</span>&gt;&lt;/router-view&gt;
&lt;template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        userId: '123'
      }
    }
  }
&lt;/script&gt;</code>
      </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <p>接收页面中</p>
      </div>
      <pre>
        <code class="hljs"><span v-pre>{{$route.params.id}}</span></code>
      </pre>
    </div>

    <h3>query类型</h3>
    <p>router中无需修改，直接在跳转页面中写入query</p>
    <p>传递后形成的路径/router?id="123"&name="abc"</p>
    <p>接收页面中使用$route.query进行接收</p>
    <div class="page_content">
      <div class="page_code">
        <p>跳转页面中</p>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;el-menu-item :index="{path:'/home/vueCom',query:{id:'123',name:'abc'}}">vue中的通信&gt;&lt;/el-menu-item>
&lt;/template&gt;
        </code>
      </pre>
    </div>

    <div class="page_content">
      <div class="page_code">
        <p>接收页面中</p>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  <span v-pre>{{$route.query.id}}</span>
  <span v-pre>{{$route.query.name}}</span>
&lt;/template&gt;
        </code>
      </pre>
    </div>

    <h2>导航守卫</h2>
    <h3>全局守卫</h3>
    <p>全局守卫通常用于判断用户是否已登录，未登录则跳转到登录页面</p>
    <p>前置钩子</p>
    <p>router.beforeEach((to,from,next) => {})</p>
    <p>回调函数中的参数，to：进入到哪个路由去，from：从哪个路由离开，next：函数，决定是否展示你要看到的路由页面,通常next都得调用</p>
    <div class="page_content">
      <div class="page_code">
        <p>示例:通过全局守卫修改页面title</p>
        <p>在main.js中</p>
      </div>
      <pre>
        <code class="hljs">router.beforeEach((to,from,next) => {
  document.title = to.meta.title;
  next();
})
        </code>
      </pre>
    </div>

    <h3>路由独享守卫</h3>
    <p>beforeEnter:(to,from,next) => {}</p>
    <p>在路由对象中进行配置，只在这个路由下起作用</p>
    <h3>组件内守卫</h3>
    <p>beforeRouteEnter:(to,from,next) => {}</p>
    <p>beforeRouteUpdate:(to,from,next) => {}</p>
    <p>beforeRouteLeave:(to,from,next) => {}</p>

    <h2 style="margin-top: 30px">keep-alive</h2>
    <p>使用keep-alive标签包裹router-view，可以使组件不被频繁创建和销毁，使得页面的内容点击状态不刷新</p>
    <p>keep-alive有include和exclude属性，属性对应注册组件时的name属性</p>
  </section>
</template>

<script>
  export default {
    name: "RouterCommunication"
  }
</script>

<style scoped>

</style>