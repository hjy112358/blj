import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// 公共底部
import foot from '@/components/foot'
// 产品底部
import profoot from '@/components/product_foot'
// 店铺底部
import storefoot from '@/components/storefoot'
// B模式底部
import patterbfoot from '@/components/patterbfoot'
// B模式头部
import patterbhead from '@/components/patterbhead'
// 产品
import Productlist from '@/views/product/productlist'
import Productdetal from '@/views/product/productDtail'
import Productdetails from '@/views/product/productdetails'
// 购物车
import shopcar from '@/views/product/shopcar'
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
import storeall from '@/views/store/storeall'
import mycollect from '@/views/store/mycollect'
import intereststore from '@/views/store/intereststore'
// 订单
import allorder from '@/views/order/allorder'
import order_daifa from '@/views/order/order_daifa'
import order_daifu from '@/views/order/order_daifu'
import order_daishou from '@/views/order/order_daishou'
import order_ping from '@/views/order/order_ping'
import evaluate from '@/views/order/evaluate'
import orderdetail from '@/views/order/orderdetail'
import logistics from '@/views/order/logistics'
import allevaluate from '@/views/order/allevaluate'
import afterScale from '@/views/order/afterScale'
import afterScaleDetail from '@/views/order/afterScaleDetail'
import settle from '@/views/order/settle'
import receivelist from '@/views/order/receivelist'
import newrece from '@/views/order/newrece'
import orderCreate from '@/views/order/orderCreate'
import paystatus from '@/views/order/paystatus'
// B模式
import mypatternb from '@/views/patternb/mypatternb'
import buyIn from '@/views/patternb/buyIn'
import seAccout from '@/views/patternb/seAccout'
import myteam from '@/views/patternb/myteam'
import scaleOut from '@/views/patternb/scaleOut'
import myasselpool from '@/views/patternb/myasselpool'



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
    // 店铺底部
    {
      path: '/storefoot',
      name: 'storefoot',
      component: storefoot
    },
    // b模式底部
    {
      path: '/patterbfoot',
      name: 'patterbfoot',
      component: patterbfoot
    },
     // B模式头部
     {
      path: '/patterbhead',
      name: 'patterbhead',
      component: patterbhead
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
    }, //店铺宝贝
    {
      path: '/store/storeall',
      name: 'storeall',
      component: storeall
    }, //收藏店铺
    {
      path: '/store/mycollect',
      name: 'mycollect',
      component: mycollect
    }
    , //关注店铺
    {
      path: '/store/intereststore',
      name: 'intereststore',
      component: intereststore
    }, //全部订单
    {
      path: '/order/allorder',
      name: 'allorder',
      component: allorder
    },
    // 订单-待发货
    {
      path: '/order/order_daifa',
      name: 'order_daifa',
      component: order_daifa
    },
    // 订单-待付款
    {
      path: '/order/order_daifu',
      name: 'order_daifu',
      component: order_daifu
    },
    // 订单-待收货
    {
      path: '/order/order_daishou',
      name: 'order_daishou',
      component: order_daishou
    },
    // 订单-待评价
    {
      path: '/order/order_ping',
      name: 'order_ping',
      component: order_ping
    },
    // 订单-评价
    {
      path: '/order/evaluate',
      name: 'evaluate',
      component: evaluate
    },
    // 订单-评价
    {
      path: '/order/orderdetail/:id',
      name: 'orderdetail',
      component: orderdetail
    },
    // 订单-查看物流
    {
      path: '/order/logistics',
      name: 'logistics',
      component: logistics
    },
    // 我的订单-评价
    {
      path: '/order/allevaluate',
      name: 'allevaluate',
      component: allevaluate
    },
    // 我的订单-退款售后
    {
      path: '/order/afterScale',
      name: 'afterScale',
      component: afterScale
    },
    // 我的订单-退款售后详情
    {
      path: '/order/afterScaleDetail',
      name: 'afterScaleDetail',
      component: afterScaleDetail
    },
    // 购物车
    {
      path: '/product/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    // 结算订单
    {
      path: '/order/settle',
      name: 'settle',
      component: settle
    },
    // 收货列表
    {
      path: '/order/receivelist',
      name: 'receivelist',
      component: receivelist
    },
    // 新增收货地址
    {
      path: '/order/newrece',
      name: 'newrece',
      component: newrece
    },
    // 生成订单
    {
      path: '/order/orderCreate',
      name: 'orderCreate',
      component: orderCreate
    },
    // 订单支付状态
    {
      path: '/order/paystatus',
      name: 'paystatus',
      component: paystatus
    },
    // B模式首页
    {
      path: '/patternb/mypatternb',
      name: 'mypatternb',
      component: mypatternb
    },
    // B模式-购物车
    {
      path: '/patternb/buyIn',
      name: 'buyIn',
      component: buyIn
    },
     // B模式-购物车-提交订单
     {
      path: '/patternb/seAccout',
      name: 'seAccout',
      component: seAccout
    },
    // B模式-我的团队
    {
      path: '/patternb/myteam',
      name: 'myteam',
      component: myteam
    },
    // B模式-我的资产包
    {
      path: '/patternb/scaleOut',
      name: 'scaleOut',
      component: scaleOut
    },
    // B模式-我的资产包
    {
      path: '/patternb/myasselpool',
      name: 'myasselpool',
      component: myasselpool
    },
    
    
  ]
})
