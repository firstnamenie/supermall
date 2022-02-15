<template>
    <div class="center">
      <detailNavbar>
          <div slot="center">详情页</div>
      </detailNavbar>
    </div>
</template>

<script>
  import detailNavbar from '@/components/common/navbar/NavBar'
  export default {
    name: "detailNavBar",
    components:{
      detailNavbar
    }
  }
</script>

<style scoped>

</style>
