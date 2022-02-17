// /**
//  * 防抖minxin封装
//  */
// import { deBounce } from "common/utils.js";
// export const itemListenerMinxin = {
//   data() {
//     return {
//       bcFunc: null
//     };
//   },
//   mounted() {
//     // 防抖
//     let deBounceRefresh = deBounce(this.$refs.scroll.refresh, 50);
//     this.bcFunc = () => {
//       //利用 $bus 事件监听，去刷新 scroll的高度
//       deBounceRefresh();
//     };
//   }
// };
//
// /**
//  * 回到顶部minxin封装
//  */
// import BackTop from "components/content/backTop/BackTop.vue";
// export const backTopMinxin = {
//   components: {
//     BackTop
//   },
//   data() {
//     return {
//       isShowTop: false
//     };
//   },
//   methods: {
//     backClick() {
//       this.$refs.scroll.scrollTo(0, 0);
//     }
//   }
// };

import {debounce}from '@/common/utils'
export const itemImageMinin={
  data(){
    return{
      itemListen:null,
      imgLoaditem:null
    }
  },
  mounted(){

    this.imgLoaditem=debounce(this.$refs.scroll.refresh,500)
    this.itemListen=()=>{
      this.imgLoaditem()
    }
    this.$bus.$on("itemImageLoad",this.itemListen)
    console.log("我是混入数据");
  }
}
