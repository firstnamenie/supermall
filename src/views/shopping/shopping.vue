<template>
    <div>
      <navbar class="centren">
          <template v-slot:center >
              购物车({{shoppCart}})
          </template>
      </navbar>
      <cart-list></cart-list>
      <cart-button-bar ></cart-button-bar>
    </div>
</template>

<script>
    import navbar from '@/components/common/navbar/NavBar'
    import cartList from './childComps/CartList'
    import cartButtonBar from './childComps/CartButtonBar'
    import { mapGetters } from 'vuex'
    export default {
      name: "shopping",
      components:{
        navbar,
        cartList,
        cartButtonBar
      },
      computed:{
        ...mapGetters([
          'shoppCart'
          // ...
        ])
      }
    }
</script>

<style scoped>
.centren{
  background-color: #ff8198;
  color: white;
}

</style>
