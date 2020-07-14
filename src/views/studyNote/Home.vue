<template>
  <div class="home">
    <Container></Container>
  </div>
</template>

<script>
   // @ is an alias to /src
  import Container from 'components/content/study/Container.vue'

  export default {
    name: 'Home',
    components: {
      Container
    }
  }
</script>
