export function debounce(func,delay){
  let Timer=null
  return function (...arg) {
    if(Timer) clearTimeout(Timer)
    Timer=setTimeout(()=>{
        func.apply(this,arg)
      },
      delay)
  }
}
