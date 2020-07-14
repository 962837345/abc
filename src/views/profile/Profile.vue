<template>
  <div class="profile">
    <user-info></user-info>
  </div>
</template>

<script>

  import UserInfo from "@/views/profile/childComps/UserInfo";
  export default {
    name: "profile",
    components: {UserInfo}
  }
</script>

<style scoped>

</style>