import { createRouter, createWebHashHistory} from 'vue-router'
const routes = [{
    path:'/',
    name:'login',
    component:()=>import('@/views/Login.vue')
},{
    path:'/card',
    name:'card',
    component:()=>import('@/views/Card.vue')
}]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
