<template>
  <div id="detail">
    <childComponts></childComponts>
    <scroll class="scroll"  ref="scroll">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detailGoodsInfo :goods="goods"></detailGoodsInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailParams :GoodsParam="paramInfo"></detailParams>
      <detailGoods :detailInfo="detailInfo" @loadImgEvent="loadImg"></detailGoods>
      <detailComment :comment="CommentInfor"></detailComment>
      <goodlist :goods="recommends"></goodlist>
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
    import detailComment from './childComponts/DetailComment'
    import goodlist from '@/components/content/goods/goodslist'
    import {itemImageMinin} from '@/common/mixin'

    import {debounce}from '@/common/utils'

    import {detail,Goods,Shop,GoodsParam,recommend} from '@/network/detail'
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
        detailParams,
        detailComment,
        goodlist
      },
      mixins:[itemImageMinin],
      methods:{
        loadImg(){
          this.imgLoaditem()
        }
      },
      destroyed(){
        this.$bus.$off("itemImageLoad",this.itemListen)
      },
      data(){
        return{
          iid:null,
          topImage:[],
          goods:{},
          shop:{},
          detailInfo:[],
          GoodsParam:[],
          CommentInfor:{},
          recommends:[]
        }
      },
      created(){
        this.iid= this.$route.params.iid
        detail(this.iid).then((res)=>{
          this.topImage=res.result.itemInfo.topImages
          this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
          this.shop=new Shop(res.result.shopInfo)
          this.detailInfo=res.result.detailInfo
          this.GoodsParam=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
          const data=res.result
          if(data.rate.cRate!=0){
            this.CommentInfor=data.rate.list[0]
          }

        });
        recommend().then((res)=>{
          this.recommends=res.data.list
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
