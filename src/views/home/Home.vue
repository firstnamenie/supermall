<template>
  <div id="home">
    <navbar class="home-nav">
      <template v-slot:center>
        创益星购物街
      </template>
    </navbar>
    <homeseiper :banners="banners"></homeseiper>
    <recommendView :recommends="recommends"></recommendView>
    <feature></feature>
    <tabcontrol class="tab-Item" :titles="['流行','新款','精选']"></tabcontrol>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>
    <div><span>div</span></div>

  </div>
</template>

<script>

  import navbar from '@/components/common/navbar/NavBar'
  import tabcontrol from '@/components/content/tabControl/tabControl'
  import homeseiper from './childComps/homeSwiper'
  import recommendView from './childComps/recommendView'
  import feature from './childComps/feature'

  import {getHomeMultidata} from '@/network/home'

  export default {
    name: "Home",
    components: {
      navbar,
      homeseiper,
      recommendView,
      feature,
      tabcontrol
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    methods: {

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

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .tab-Item{
    position: sticky;
    top:44px
  }
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
  /*overflow: hidden;*/
  /*margin-top: 44px;*/
  /*}*/
</style>
