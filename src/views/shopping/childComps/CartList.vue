<template>
    <div class="cart-list">
      <scroll class="scroll">
        <cart-list-item
          v-for="(item, index) in $store.state.cartList"
          :key="index"
          :item="item"
        ></cart-list-item>
      </scroll>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import scroll from '@/components/common/scroll/Scroll'
    import CartListItem from "./CartListItem.vue";
    export default {
      name: "CartList",
      components:{
        scroll,
        CartListItem
      },
      computed:{
        ...mapGetters([
          'shopCartList'
          // ...
        ])
      }
    }
</script>

<style>
  .cart-list{
    height:calc(100% - 44px - 49px - 40px);
  }
  .scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
