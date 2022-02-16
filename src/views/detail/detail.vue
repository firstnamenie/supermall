<template>
  <div id="detail">
    <childComponts></childComponts>
    <scroll class="scroll"  ref="scroll">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detailGoodsInfo :goods="goods"></detailGoodsInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailParams :GoodsParam="paramInfo"></detailParams>
      <detailGoods :detailInfo="detailInfo" @loadImgEvent="loadImg"></detailGoods>
    </scroll>
  </div>
</template>

<script>
    import childComponts from './childComponts/detailNavBar'
    import detailSwiper from './childComponts/detailSwiper'
    import detailShopInfo from './childComponts/DetailShopInfo'
    import detailGoodsInfo from './childComponts/DetailGoods'
    import detailGoods from './childComponts/DetailGoodsInfo'
    import detailParams from './childComponts/DetailParams'



    import {detail,Goods,Shop,GoodsParam} from '@/network/detail'
    import scroll from '@/components/common/scroll/Scroll'
    export default {
      name: "detail",
      components:{
        childComponts,
        detailSwiper,
        detailShopInfo,
        detailGoodsInfo,
        scroll,
        detailGoods,
        detailParams
      },
      methods:{
        loadImg(){
          this.$refs.scroll.scroll.refresh()
        }
      },
      data(){
        return{
          iid:null,
          topImage:[],
          goods:{},
          shop:{},
          detailInfo:[],
          GoodsParam:[]
        }
      },
      created(){
        this.iid= this.$route.params.iid
        detail(this.iid).then((res)=>{
          console.log(res)
          this.topImage=res.result.itemInfo.topImages
          this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
          this.shop=new Shop(res.result.shopInfo)
          this.detailInfo=res.result.detailInfo
          this.GoodsParam=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
        })


      }
    }
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 15;
  background-color: #fff;
  height: 100vh;
}

.scroll {
height: calc(100% - 44px);
overflow-y: scroll;
}
</style>
