import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import foot from '@/components/foot'
import profoot from '@/components/product_foot'
import Productlist from '@/views/product/productlist'
import Productdetal from '@/views/product/productDtail'
import Productdetails from '@/views/product/productdetails'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/profoot',
      name: 'profoot',
      component: profoot
    },
    {
      path: '/product/productlist',
      name: 'productlist',
      component: Productlist
    },
    {
      path: '/product/productDtail',
      name: 'Productdetal',
      component: Productdetal
    },
    {
      path: '/product/productdetails',
      name: 'Productdetails',
      component: Productdetails
    }
  ]
})
