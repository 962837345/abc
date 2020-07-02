<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Container></Container>
  </div>
</template>

<script>
   // @ is an alias to /src
  import Container from '@/components/Container.vue'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
      Container
    }
  }
</script>
