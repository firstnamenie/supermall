<template>
  <div id="home">
    <navbar class="home-nav">
      <template v-slot:center>
        创益星购物街
      </template>
    </navbar>
    <tabcontrol  class="tabcontrol1" :titles="['流行','新款','精选'] "  @imgClick="tabclick" ref="tabControl1" v-show="istabcontrol"></tabcontrol>
    <scroll  class="content"
             ref="scroll"
             :probe-type="3"
             :upload="true"
             @scroll="contentScroll"
             @pullingup="loadMore"
    >
      <homeseiper :banners="banners"  @imageItemLoad="imageItemLoad"></homeseiper>
      <recommendView :recommends="recommends"></recommendView>
      <feature></feature>
      <tabcontrol  :titles="['流行','新款','精选'] "  @imgClick="tabclick" ref="tabControl2"></tabcontrol>
      <goodlist :goods="goodItem"></goodlist>
    </scroll>
    <backTop @click="backTopClick" v-show="isShowBackTop"></backTop>
  </div>
</template>
<script>

  import navbar from '@/components/common/navbar/NavBar'
  import tabcontrol from '@/components/content/tabControl/tabControl'
  import homeseiper from './childComps/homeSwiper'
  import recommendView from './childComps/recommendView'
  import feature from './childComps/feature'
  import goodlist from '@/components/content/goods/goodslist'
  import scroll from '@/components/common/scroll/Scroll'
  import backTop from '@/components/content/backtop/backTop'
  import {itemImageMinin} from '@/common/mixin'

  import {getHomeMultidata,getHomeGoods} from '@/network/home'
  import {debounce}from '@/common/utils'

  export default {
    name: "Home",
    components: {
      navbar,
      homeseiper,
      recommendView,
      feature,
      tabcontrol,
      goodlist,
      scroll,
      backTop
    },
    data() {
      return {
        currenttype:'pop',
        banners: [],
        recommends: [],
        isShowBackTop:false,
        istabcontrol:false,
        offsetTop:0,
        saveY:0,
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }
      }
    },
    computed:{
      goodItem(){
        return this.goods[this.currenttype].list
      }
    },
    created() {
      this.getHomeMultidatas();
    },
    mixin:[itemImageMinin],
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.tabRefresh()
      this.$bus.$off("itemImageLoad",this.itemListen)
    },
    mounted(){
      this.getHomeGood('pop')
      this.getHomeGood('new')
      this.getHomeGood('sell')
    },
    methods: {
      imageItemLoad(){
        this.offsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      getHomeMultidatas(){
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(res)
        })
      },
      getHomeGood(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then((res)=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.refresh()
        })
      },
      tabclick(index){
        switch (index) {
          case 0:this.currenttype='pop';break;
          case 1:this.currenttype='new';break;
          case 2:this.currenttype='sell';break;
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      backTopClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,300)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
        this.istabcontrol=(-position.y) > this.offsetTop
      },
      loadMore(){
        this.getHomeGood(this.currenttype)
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .tabcontrol1{
    position: relative;
    z-index: 10;
  }

  /*.tab-control {*/
    /*position: sticky;*/
    /*top: 44px;*/
    /*z-index: 9;*/
  /*}*/

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow-y: scroll;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
