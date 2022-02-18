export default {
  addCount(state,payLoad){
    payLoad.count++
  },
  addToChart(state,payLoad){
    state.cartList.push(payLoad)
  }
}
