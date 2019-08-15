import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'

var router = new VueRouter({
    routes:[
        { path: '/', redirect:'/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/cart', component: CartContainer },
        { path: '/search', component: SearchContainer },
    ],
    linkActiveClass: 'mui-active'
})

export default router