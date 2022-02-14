<template>
    <div class="tab-control">
      <div v-for="(item ,index) in titles" class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "tabControl",
      methods:{
        itemClick(index){
          this.currentIndex=index
          this.$emit('imgClick',this.currentIndex)
        }
      },
      data(){
        return{
          currentIndex:0
        }
      },
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: pink;

  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: 3px solid pink;
  }
</style>
