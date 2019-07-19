import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import foot from '@/components/foot'
import profoot from '@/components/product_foot'
import Productlist from '@/views/product/productlist'
import Productdetal from '@/views/product/productDtail'
import Productdetails from '@/views/product/productdetails'
import login from '@/views/index/login'
import reg from '@/views/index/reg'
import forget_pwd from '@/views/index/forget_pwd'
import userindex from '@/views/user/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: index
    },
    // 公共底部
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    // 产品底部
    {
      path: '/profoot',
      name: 'profoot',
      component: profoot
    },
    // 商品列表
    {
      path: '/product/productlist',
      name: 'productlist',
      component: Productlist
    },
    // 商品分类列表
    {
      path: '/product/productDtail',
      name: 'Productdetal',
      component: Productdetal
    },
    // 商品详情
    {
      path: '/product/productdetails',
      name: 'Productdetails',
      component: Productdetails
    },
    // 登录
    {
      path: '/index/login',
      name: 'login',
      component: login
    },
    // 注册
    {
      path: '/index/reg',
      name: 'reg',
      component: reg
    },
    // 忘记密码
    {
      path: '/index/forget_pwd',
      name: 'forget_pwd',
      component: forget_pwd
    },
     // 个人中心
     {
      path: '/user/index',
      name: 'userindex',
      component: userindex
    }
  ]
})
