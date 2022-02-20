export default {

  addShoppingCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldPrudect=null
      for(let item of context.state.cartList){
        if(item.iid===payload.iid){
          oldPrudect=item
        }
      }
      if(oldPrudect){
        context.commit('addCount',oldPrudect)
        resolve("当前商品数量+1")
      }else {
        payload.count=1
        context.commit('addToChart',payload)
        resolve("添加新的商品")

      }
    })
  }
}
