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
import userSetting from '@/views/user/userSetting'
import editphone from '@/views/user/editphone'
import changephone from '@/views/user/changephone'
import editpass from '@/views/user/editpass'
import editpaypass from '@/views/user/editpaypass'
import feedback from '@/views/user/feedback'
import memberegistrate from '@/views/user/memberegistrate'
import shareCode from '@/views/user/shareCode'
import wallet from '@/views/wallet/wallet'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
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
    },
    // 个人中心-设置
    {
      path: '/user/userSetting',
      name: 'userSetting',
      component: userSetting
    },
    // 个人中心-设置-绑定手机号
    {
      path: '/user/editphone',
      name: 'editphone',
      component: editphone
    },
    // 个人中心-设置-修改手机号
    {
      path: '/user/changephone',
      name: 'changephone',
      component: changephone
    },
    // 个人中心-设置-修改密码
    {
      path: '/user/editpass',
      name: 'editpass',
      component: editpass
    },
     // 个人中心-设置-修改支付密码
     {
      path: '/user/editpaypass',
      name: 'editpaypass',
      component: editpaypass
    },
     // 个人中心-设置-意见反馈
     {
      path: '/user/feedback',
      name: 'feedback',
      component: feedback
    },
    // 个人中心-会员注册
    {
      path: '/user/memberegistrate',
      name: 'memberegistrate',
      component: memberegistrate
    },
     // 个人中心-分享二维码
     {
      path: '/user/shareCode',
      name: 'shareCode',
      component: shareCode
    },
    // 个人中心-我的钱包
    {
      path: '/wallet/wallet',
      name: 'wallet',
      component: wallet
    }
    
  ]
})
