export default {
  addShoppingCart(context,payload){
    let oldPrudect=null
    for(let item of context.state.cartList){
      if(item.iid===payload.iid){
        oldPrudect=item
      }
    }
    if(oldPrudect){
      context.commit('addCount',oldPrudect)
    }else {
      payload.count=1
      context.commit('addToChart',payload)

    }

  }
}
