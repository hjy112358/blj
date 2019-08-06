<template>
  <div class="allorder">
    <div class="tablist">
      <div id="leftTabBox" class="tabBox">
        <div class="hd">
          <ul>
             <li class="on" >
              <a href="javascript:void(0)" class="maincolor">全部</a>
            </li>
            <li  @click="order_daifu()">
              <a href="javascript:void(0)">待付款</a>
            </li>
            <li @click="order_daifa()">
              <a href="javascript:void(0)">待发货</a>
            </li>
            <li @click="order_daishou()">
              <a href="javascript:void(0)">待收货</a>
            </li>
            <li @click="order_ping()">
              <a href="javascript:void(0)">待评价</a>
            </li>
          </ul>
        </div>
        <div class="bd">
          <div class="productmsglist">
            <ul>
                <li v-for="(good,index) in goodlist" :key='index' >
                  <a href="javascript:void(0)">
                    <div class="productmsg">
                      <div class="flex jus-between align-c">
                        <div class="flex jus-start align-c">
                          <img src="../../assets/images/good/store.png" alt class="store" />
                          <p class="storename">
                            {{good.store_name}}
                            <i>></i>
                          </p>
                        </div>
                        <span class="maincolor" v-if='good.type=="0"'>待付款</span>
                        <span class="maincolor" v-else-if='good.type=="1"&&good.shipping_status=="0"'>待发货</span>
                        <span class="maincolor" v-else-if='good.type=="1"&&good.shipping_status=="1"'>待收货</span>
                        <span class="maincolor" v-else-if='good.type=="2"&&good.shipping_status=="1"'>待评价</span>
                        
                      </div>
                      <div class="flex jus-between margin-t20"  @click='orderdetail(good.type)'>
                        <div class="goodsimg flex jus-start align-c">
                          <img :src="good.original_img" alt />
                        </div>
                        <p class="goodsdetail">{{good.goods_name}}</p>
                        <div class="goodproceAnum">
                          <span>￥{{good.attr_price}}</span>
                          <span class="goodsnum">x {{good.goods_num}}</span>
                        </div>
                      </div>
                      <p class="total">共{{good.goods_num}}件商品 合计：￥{{good.total_amount}}</p>
                      <div class="btnlist" v-if='good.order_status==1&&good.shipping_status==1'>
                            <a v-if="good.is_self==1"
                              href="javascript:void(0)"
                              class="maincolor font-16 checkbtn"
                              @click="logistics()"
                            >查看物流</a>
                              <a 
                            href="javascript:void(0)"
                            class="maincolor font-16 checkbtn"
                          >确认收货</a>
                      </div>
                      <div class="btnlist" v-else-if="good.type==0">
                        <a href="javascript:void(0)"
                            class="maincolor font-16 checkbtn"
                          >取消订单</a>
                      </div>
                      <div class="btnlist" v-else-if='good.type==2&&good.shipping_status==1'>
                            <a 
                              href="javascript:void(0)"
                              class="maincolor font-16 checkbtn"
                              @click="evalute()"
                            >评价</a>
                            
                      </div>
                    </div>
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/order.css";
</style>
<script>
export default {
  name: "allorder",
  data:function(){
      return {
          goodlist:[{store_name:'必量家综合超市付款',type:'0',shipping_status:'',order_status:'',is_self:'',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            {store_name:'必量家综合超市发货',type:'1',shipping_status:'0',order_status:'',is_self:'',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            {store_name:'必量家综合超市收货',type:'1',shipping_status:'1',order_status:'1',is_self:'',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            {store_name:'必量家综合超市收2货',type:'1',shipping_status:'1',order_status:'1',is_self:'1',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            {store_name:'必量家综合超市评价',type:'2',shipping_status:'1',order_status:'',is_self:'',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            ]
      }
  },
  
  created: function() {
    this.$emit("footer", false);
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next()
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next()
  },
  methods:{
      
    order_daifa:function(){
      this.$router.push("/order/order_daifa")
    },
    order_daifu:function(){
      this.$router.push("/order/order_daifu")
    },
    order_daishou:function(){
      this.$router.push("/order/order_daishou")
    },
    order_ping:function(){
      this.$router.push("/order/order_ping")
    },
    evalute:function(){
        this.$router.push("/order/evaluate")
    },
    orderdetail:function(id){
      this.$router.push(`/order/orderdetail/${id}`)
    },
    logistics:function(){
      this.$router.push("/order/logistics")
    }
  }
};
</script>

<style>
</style>
