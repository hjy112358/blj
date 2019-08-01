import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// 公共底部
import foot from '@/components/foot'
// 产品底部
import profoot from '@/components/product_foot'
// 产品
import Productlist from '@/views/product/productlist'
import Productdetal from '@/views/product/productDtail'
import Productdetails from '@/views/product/productdetails'
// 登录
import login from '@/views/index/login'
// 注册
import reg from '@/views/index/reg'
import forget_pwd from '@/views/index/forget_pwd'
import userindex from '@/views/user/index'
// 个人中心设置
import userSetting from '@/views/user/userSetting'
import editphone from '@/views/user/editphone'
import changephone from '@/views/user/changephone'
import editpass from '@/views/user/editpass'
import editpaypass from '@/views/user/editpaypass'
import feedback from '@/views/user/feedback'
import memberegistrate from '@/views/user/memberegistrate'
import shareCode from '@/views/user/shareCode'
// 我的钱包
import wallet from '@/views/wallet/wallet'
import coupon from '@/views/wallet/coupon'
import accout from '@/views/wallet/accout'
import changetick from '@/views/wallet/changetick'
import tradingFloor from '@/views/wallet/tradingFloor'
import scaleList from '@/views/wallet/scaleList'
import teamReturn from '@/views/wallet/teamReturn'
import teamReturnRebate from '@/views/wallet/teamReturnRebate'
import teamReturnOther from '@/views/wallet/teamReturnOther'
import tradeFloorZ from '@/views/wallet/tradeFloorZ'
// 店铺
import storelist from '@/views/store/storelist'
import storeindex from '@/views/store/storeindex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper) 
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
    },
    //我的钱包-转化
    {
      path: '/wallet/coupon',
      name: 'coupon',
      component: coupon
    },
    //我的钱包-转化-去转账
    {
      path: '/wallet/accout',
      name: 'accout',
      component: accout
    },
     //我的钱包-转化-去兑换
     {
      path: '/wallet/changetick',
      name: 'changetick',
      component: changetick
    },
     //我的钱包-交易大厅
     {
      path: '/wallet/tradingFloor',
      name: 'tradingFloor',
      component: tradingFloor
    },
    //我的钱包-交易大厅-买入
    {
     path: '/wallet/scaleList',
     name: 'scaleList',
     component: scaleList
   },
   //我的钱包-分享收益
   {
    path: '/wallet/teamReturn',
    name: 'teamReturn',
    component: teamReturn
  },
   //我的钱包-分享收益-代理收益
   {
    path: '/wallet/teamReturnRebate',
    name: 'teamReturnRebate',
    component: teamReturnRebate
  },
  //我的钱包-分享收益-其他收益
  {
   path: '/wallet/teamReturnOther',
   name: 'teamReturnOther',
   component: teamReturnOther
 }, //我的钱包-交易记录
 {
   path: '/wallet/tradeFloorZ',
   name: 'tradeFloorZ',
   component: tradeFloorZ
 }, //店铺列表
 {
   path: '/store/storelist',
   name: 'storelist',
   component: storelist
 }, //店铺首页
 {
   path: '/store/storeindex',
   name: 'storeindex',
   component: storeindex
 }
 
    
  ]
})
