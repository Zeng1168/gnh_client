// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex' // 引入vuex
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.use(Vuex)


// 引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 自定义封装http
import {get, post } from './functions/http'
Vue.prototype.$get = get;
Vue.prototype.$post = post;

// 引入css
import './assets/css/gnh.css' // 自定义样式
import './assets/css/common.css' // 自定义通用常用样式
import './assets/css/animate.css' // 动画css库
import './assets/css/font-awesome.css' // 字体图标css库

//  全局方法、全局实体类
import globalEntity from './functions/globalEntity'
Vue.use(globalEntity)
import globalFunctions from './functions/globalFunctions'
Vue.use(globalFunctions)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})