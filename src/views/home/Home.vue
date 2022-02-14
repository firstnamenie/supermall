<template>
  <div id="home">
    <navbar class="home-nav">
      <template v-slot:center>
        创益星购物街
      </template>
    </navbar>
    <scroll  class="content"
             ref="scroll" :probe-type="3"
             @scroll="contentScroll"
    >
      <homeseiper :banners="banners"></homeseiper>
      <recommendView :recommends="recommends"></recommendView>
      <feature></feature>
      <tabcontrol  class="tab-Item" :titles="['流行','新款','精选'] " @imgClick="tabclick"></tabcontrol>
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

  import {getHomeMultidata,getHomeGoods} from '@/network/home'

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
      this.getHomeGood('pop')
      this.getHomeGood('new')
      this.getHomeGood('sell')
    },
    methods: {
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
          // this.$refs.scroll.scroll.finishPullUp()
        })
      },
      tabclick(index){
        switch (index) {
          case 0:this.currenttype='pop';break;
          case 1:this.currenttype='new';break;
          case 2:this.currenttype='sell';break;
        }
      },
      backTopClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,300)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
      }
      // loadMore(){
      //   this.getHomeGood(this.currenttype)
      // }
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

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /*.tab-control {*/
    /*position: sticky;*/
    /*top: 44px;*/
    /*z-index: 9;*/
  /*}*/
  .tab-Item{
    position: sticky;
    top:44px;
    z-index: 9;
  }
  .content {
    overflow-y: scroll;
    position: absolute;
    top: 0px;
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
