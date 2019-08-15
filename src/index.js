import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './APP.vue'
import { Header } from 'mint-ui'
import {
    Swipe,
    SwipeItem,
    Grid,
    GridItem
} from 'vant'

/* Vue相关 */
import VueResource from 'vue-resource'

/* minui */
import 'mint-ui/lib/header/style.css'

/* vant */
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'
import 'vant/lib/grid/index.css'
import 'vant/lib/grid-item/index.css'

/* 外部组件 */
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Grid.name, Grid)
Vue.component(GridItem.name, GridItem)

Vue.use(VueRouter)
Vue.use(VueResource)


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