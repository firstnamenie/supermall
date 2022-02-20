<template>
  <div class="item_check">
    <div class="item_check" :class="{check:isChecked}">
      <img src="@/assets/img/cart/tick.svg"/>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      check:true
    };
  }
};
</script>
<style scoped>
  .item_check {
    width: 1.2rem;
  }
.item_check{
  position: relative;
  top: calc(50% - 0.35rem);
  width: 0.7rem;
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem;

  border: 0.04rem solid rgba(128, 128, 128, 0.4);
}
  .check{
    border-color: red;
    background-color: red;
  }


</style>
