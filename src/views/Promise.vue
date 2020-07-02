<template>
  <section class="page_component">
    <h2>Promise的使用</h2>
    <h3>使用Promise解决异步问题</h3>
    <p>示例</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="clickButton">点击我</el-button>
        <span style="margin-left: 50px">{{num}}</span>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"clickButton"</span>&gt;点击我&lt;/el-button>
  &lt;span style=<span class="hljs-string">"margin-left: 50px"</span>&gt;&lt;/span>
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        num: 0
      }
    },
    methods: {
      clickButton() {
        new Promise(resolve => {
          setTimeout(() => {
            resolve()
          },500)
        }).then(() => {
          this.num ++;
        })
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </div>

    <h3>Promise.all()</h3>
    <p>当所有请求都响应后再对数据进行处理可以使用Promise.all()</p>
    <p>Promise.all()中传入一个迭代类型的Promise，可以大致理解为一个包含Promise的数组，即Promise.all([promise1,promise2])</p>
    <div class="page_content">
      <div class="page_code">
        <el-button @click="sendRequest">模拟发送请求</el-button>
        <span v-show="flag" style="margin-left: 50px">两个模拟请求都完成我就会显示</span>
      </div>
      <pre>
        <code class="hljs">&lt;template&gt;
  &lt;el-button @click=<span class="hljs-string">"sendRequest"</span>&gt;模拟发送请求&lt;/el-button>
  &lt;span v-show=<span class="hljs-string">"flag"</span> style=<span class="hljs-string">"margin-left: 50px"</span>&gt;两个模拟请求都完成我就会显示&lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    sendRequest() {
      Promise.all([new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        },1000)
      }),new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        },500)
      })]).then(() => {
        this.flag = true
      })
    }
  }
}
&lt;/script&gt;
        </code>
      </pre>
    </div>

    <h3>Promise.race()</h3>
    <p>参数跟Promise.all()一样，区别在于Promise.race()当其中某个一个实例率先改变状态就传递对应实例的返回值</p>
    <p>Promise.all()和Promise.race()原理可以理解为&&(或)和||(与)</p>
  </section>
</template>

<script>
  export default {
    name: "Promise",
    data() {
      return {
        num: 0,
        flag: false
      }
    },
    methods: {
      clickButton() {
        new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 500)
        }).then(() => {
          this.num++;
        })
      },
      sendRequest() {
        Promise.all([new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          },1000)
        }),new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          },500)
        })]).then(() => {
          this.flag = true
        })
      }
    }
  }
</script>

<style scoped>

</style>