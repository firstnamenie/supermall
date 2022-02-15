<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imageload"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'
  export default {
    name: "homeSwiper",
    data(){
      return{
        imageFlag:true
      }
    },
    methods:{
      imageload(){
        if(this.imageFlag){
          this.$emit("imageItemLoad")
          this.imageFlag=false
        }
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }

  }
</script>

<style scoped>
  .slide img {
    width: 100%;
  }
</style>
