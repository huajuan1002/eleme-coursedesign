import Vue from 'vue'
import Router from 'vue-router'
import Login from '/components/login.vue'
Vue.use(Router)

export default new Router({
     {
       path:'/',
       redirect:'/login'
      //  输入/也会重定向到login页面
     },
     {
       path:'/login',
       name:'login',
       component:login
     }
})
