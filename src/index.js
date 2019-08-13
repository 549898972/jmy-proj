import Vue from 'vue'
import app from './APP.vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import './lib/mui/css/mui.min.css'
Vue.component('mt-header', Header);

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    data: {

    },
    methods: {

    }
})