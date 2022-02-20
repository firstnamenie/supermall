<template>
  <div id="detail">
    <childComponts @detail-nav-bar-click="detailNavBarClick" ref="childCom"></childComponts>
    <scroll class="scroll"  ref="scroll" :probe-type="3"  @scroll="scrollPostion">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detailGoodsInfo :goods="goods"></detailGoodsInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailParams :GoodsParam="paramInfo" ref="detailTop"></detailParams>
      <detailGoods :detailInfo="detailInfo" @loadImgEvent="loadImg" ref="detailinfo"></detailGoods>
      <detailComment :comment="CommentInfor" ref="comment"></detailComment>
      <goodlist :goods="recommends" ref="recommend"></goodlist>
    </scroll>
    <detail-botton-bar @addEvent="shoppingChart"></detail-botton-bar>
    <back-top @click="backTopClick" v-show="isShowBackTop"></back-top>
    <toest :message="message" :isShowTip="isShowTip"></toest>
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
    import {itemImageMinin,backTopMixin} from '@/common/mixin'
    import detailBottonBar from './childComponts/detailBottonBar'
    import toest from  '@/components/common/toest/toest'

    import {debounce}from '@/common/utils'
    import { mapActions } from 'vuex'

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
        goodlist,
        detailBottonBar,
        toest
      },
      mixins:[itemImageMinin,backTopMixin],
      methods:{
        ...mapActions(['addShoppingCart']),
        shoppingChart(){
          const product={}
          product.img=this.topImage[0]
          product.title=this.goods.title
          product.desc=this.goods.desc
          product.price=this.goods.newPrice
          product.iid=this.iid
          this.addShoppingCart(product).then((res)=>{
            this.message=res
            this.isShowTip=true
            setTimeout(()=>{
              this.message=res
              this.isShowTip=false
            },2000)
          })
          // this.$store.commit("addShoppingCart",product)
          // this.$store.dispatch("addShoppingCart",product).then((res)=>{
          //   console.log(res);
          // })


        },
        scrollPostion(position){
          this.isShowBackTop = (-position.y) > 1000
          let positonY=-position.y
          let length=this.detailThimeTop.length
          for(let i=0;i<length-1;i++ ) {

            if(this.currentIndexs!==i&&positonY>=this.detailThimeTop[i]&&positonY<=this.detailThimeTop[i+1])
            {
                  this.currentIndexs=i
                  this.$refs.childCom.indexflag=this.currentIndexs
            }
            // if(this.currentIndexs!==i&&((i<length-1)&&(positonY>=this.detailThimeTop[i])&&positonY<this.detailThimeTop[i+1])||((i===length-1)&&(positonY>=this.detailThimeTop[i]))){
            //     this.currentIndexs=i
            //     this.$refs.childCom.indexflag=this.currentIndexs
            // }

          }
        },

        loadImg(){
          this.imgLoaditem()
          this.detailThimeFun()
        },
        detailNavBarClick(index){
          this.$refs.scroll.scrollTo(0,-this.detailThimeTop[index],100)
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
          recommends:[],
          detailThimeTop:[],
          detailThimeFun:null,
          currentIndexs:0,
          message:'',
          isShowTip:false
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
          const data=res.result
          if(data.rate.cRate!=0){
            this.CommentInfor=data.rate.list[0]
          }

        });
        recommend().then((res)=>{
          this.recommends=res.data.list
        })

        this.detailThimeFun=debounce(()=>{
          this.detailThimeTop=[]
          this.detailThimeTop.push(0)
          this.detailThimeTop.push(this.$refs.detailinfo.$el.offsetTop)
          this.detailThimeTop.push(this.$refs.comment.$el.offsetTop)
          this.detailThimeTop.push(this.$refs.recommend.$el.offsetTop)
          this.detailThimeTop.push(Number.MAX_VALUE)
        },100)


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
