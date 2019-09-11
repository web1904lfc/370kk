import Vue from 'vue'
import Router from 'vue-router'
// 主页组件
import Index from './components/Index.vue'
// 搜索页组件
import Search from './components/Search.vue'
import Search2 from './components/Search2.vue'
import Search3 from './components/Search3.vue'
import Search4 from './components/Search4.vue'
import Search5 from './components/Search5.vue'
// 详情页组件
import Details from './components/Details.vue'
// 登录页组件
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},             //主页
    {path: '/Index',component: Index},        //主页
    {path: '/Search',component: Search},      //搜索页
    {path: '/Search2',component: Search2},    //搜索页
    {path: '/Search3',component: Search3},    //搜索页
    {path: '/Search4',component: Search4},    //搜索页
    {path: '/Search5',component: Search5},    //搜索页
    {path: '/Details',component: Details},    //详情页
    {path: '/Login',component: Login},        //登录页
  ]
})
