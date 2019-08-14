import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './APP.vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/swipe-item/style.css'
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