<template>
  <div id="home">
    <navbar class="home-nav">
        <template v-slot:center>
          创益星购物街
          </template>
    </navbar>
  </div>
</template>

<script>
    import navbar from '@/components/common/navbar/NavBar'
    export default {
      name: "home",
      components:{
          navbar
      }
    }
</script>

<style scoped>
.home-nav{
  background-color: pink;
  color: white;
}
</style>
