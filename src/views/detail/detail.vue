<template>
  <div id="detail">
    <childComponts></childComponts>
  </div>
</template>

<script>
    import childComponts from './childComponts/detailNavBar'
    export default {
      name: "detail",
      components:{
        childComponts
      },
      data(){
        return{
          iid:null
        }
      },
      created(){
        this.iid= this.$route.params.iid
      }
    }
</script>

<style scoped>

</style>
