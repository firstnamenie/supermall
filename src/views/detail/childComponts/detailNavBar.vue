<template>
    <div>
      <navbar>
        <template v-slot:left>
          <div class="back" @click="backclick">
            <img src="@/assets/img/common/back.svg"/>
          </div>
        </template>
        <template v-slot:center >
          <div class="title">
            <div v-for="(item,index) in title" class="titleItem" :class="{active:index===indexflag}" @click="titleClick(index)" :key="index">{{item}}</div>
          </div>
        </template>
      </navbar>
    </div>
</template>

<script>
  import navbar from '@/components/common/navbar/NavBar'
  export default {
    name: "detailNavBar",
    data(){
      return{
        indexflag:0,
        title:['商品','参数','评论','推荐']
      }
    },
    components:{
      navbar
    },
    methods:{
      titleClick(index){
        this.indexflag=index
      },
      backclick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
  .titleItem{
    flex: 1;
  }
  .active{
    color: #ff5777;
  }
  .back{
    margin-top: 10px;
  }
</style>
