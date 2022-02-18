<template>
    <div>
      <navbar class="centren">
          <template v-slot:center >
              购物车({{shoppCart}})
          </template>
      </navbar>
      <cart-list></cart-list>
    </div>
</template>

<script>
    import navbar from '@/components/common/navbar/NavBar'
    import cartList from './childComps/CartList'
    import { mapGetters } from 'vuex'
    export default {
      name: "shopping",
      components:{
        navbar,
        cartList
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
