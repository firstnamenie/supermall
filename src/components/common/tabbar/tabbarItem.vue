<template>
    <div class="tabbar-item" @click="itemClick">
        <slot v-if="!active" name="slot-icon" ></slot>
        <slot v-else name="slot-icon-active" ></slot>
        <div :style="actvieClass">
            <slot  name="slot-font"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabbarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
            }
        },
        computed:{
            active(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            actvieClass(){
                return this.active? {color:this.activeColor}:{}
            }
        },
        methods:{
            itemClick(){
                console.log("click");
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .slotFont{
        color: red;
    }


</style>
