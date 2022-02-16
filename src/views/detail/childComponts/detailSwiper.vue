<template>
    <swiper class="swiper-item">
      <swiper-item  v-for="item in topImage">
        <img :src="item"/>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'
    export default {
      name: "detailSwiper",
      props:{
        topImage:{
          type:Array,
          data(){
            return []
          }
        }
      },
      data(){
        return{

        }
      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
