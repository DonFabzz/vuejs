<template>
  <div></div>
</template>
<script>
import router from "../router";
export default {
  name: 'Logout',
  mounted(){
      localStorage.removeItem('usertoken')
      localStorage.removeItem('user')
      router.push('/login')
  }
}
</script>