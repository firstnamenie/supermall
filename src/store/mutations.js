export default {
  addCount(state,payLoad){
    payLoad.count++
  },
  addToChart(state,payLoad){
    payLoad.checked=true
    state.cartList.push(payLoad)
  }
}
