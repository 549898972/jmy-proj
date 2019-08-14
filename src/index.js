import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './APP.vue'
import { Header } from 'mint-ui'
import { Swipe, SwipeItem } from 'vant'

/* minui */
import 'mint-ui/lib/header/style.css'

/* vant */
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'

/* 外部组件 */
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)


import router from './router'

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    data: {

    },
    methods: {

    },
    router: router,
})