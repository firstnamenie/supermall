<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BtScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  BtScroll.use(Pullup)
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      upload: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BtScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      })
      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        console.log(".............")
        this.scroll&&this.scroll.refresh()
      },
      tabRefresh(){
        return this.scroll?this.scroll.y:0
      }
    }
  }
</script>

<style scoped>

</style>
