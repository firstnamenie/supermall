<template>
    <tabbar>
        <tabbaritem path="/home" activeColor="red">
            <template v-slot:slot-icon>
                <img src="@/assets/img/tabbar/home.png"/>
            </template>
            <template v-slot:slot-icon-active>
                <img src="@/assets/img/tabbar/home_red.png"/>
            </template>
            <template v-slot:slot-font>
                <div >首页</div>
            </template>
        </tabbaritem>

        <tabbaritem path="/classify" activeColor="red">
            <template v-slot:slot-icon>
                <img src="@/assets/img/tabbar/classify.png"/>
            </template>
            <template v-slot:slot-icon-active>
                <img src="@/assets/img/tabbar/classify_red.png"/>
            </template>
            <template v-slot:slot-font>
                <div >分类</div>
            </template>
        </tabbaritem>

        <tabbaritem path="/shopping" activeColor="red">
            <template v-slot:slot-icon>
                <img src="@/assets/img/tabbar/shopping.png"/>
            </template>
            <template v-slot:slot-icon-active>
                <img src="@/assets/img/tabbar/shopping_red.png"/>
            </template>
            <template v-slot:slot-font>
                <div >购物车</div>
            </template>
        </tabbaritem>

        <tabbaritem path="/profile" activeColor="red">
            <template v-slot:slot-icon>
                <img src="@/assets/img/tabbar/profile.png"/>
            </template>
            <template v-slot:slot-icon-active>
                <img src="@/assets/img/tabbar/profile_red.png"/>
            </template>
            <template v-slot:slot-font>
                <div >我的</div>
            </template>
        </tabbaritem>

    </tabbar>
    <router-view></router-view>
</template>

<script>
    import tabbar from '@/components/common/tabbar/tabbar'
    import tabbaritem from '@/components/common/tabbar/tabbarItem'
    export default {
        name: "mainTabbar",
        components:{
            tabbar,
            tabbaritem
        }
    }
</script>

<style scoped>
    .tabbar-item img{
        margin-top: 3px;
        height: 24px;
        width: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>
