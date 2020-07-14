<template>
  <div>
    <p>{{message}}</p>
    <el-button v-for="fruit in fruits" @click="childrenClick(fruit)" :key="fruit">{{fruit}}</el-button>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "children",
    data() {
      return {}
    },
    props: {
      message: {
        type: String, //类型限制
        default: '我是默认值',  //默认值
        required: true  //true时为必传值，不传就会报错
      },
      fruits: {
        //类型是对象或者数组时。，默认值必须是一个函数
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      childrenClick(fruit){
        this.$emit('buttonClick',fruit);
      }
    }
  }
</script>

