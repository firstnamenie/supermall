import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import("@/views/home/Home.vue")
const classify=()=>import("@/views/classify/classify.vue")
const profile=()=>import("@/views/profile/profile.vue")
const shopping=()=>import("@/views/shopping/shopping.vue")
const detail=()=>import("@/views/detail/detail.vue")
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: home,
    },
    {
        path:'/classify',
        component: classify
    },
    {
        path:'/profile',
        component: profile
    },
    {
        path:'/shopping',
        component: shopping
    },
    {
      path:'/detail/:iid',
      component:detail
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
    mode:'history'
})

export default router
