<template>
  <div class="order_ping">
    <div class="tablist">
      <div id="leftTabBox" class="tabBox">
        <div class="hd">
          <ul>
            <li @click="allorder()">
              <a href="javascript:void(0)">全部</a>
            </li>
            <li @click="order_daifu()">
              <a href="javascript:void(0)" >待付款</a>
            </li>
            <li @click="order_daifa()">
              <a href="javascript:void(0)">待发货</a>
            </li>
            <li @click="order_daishou()">
              <a href="javascript:void(0)">待收货</a>
            </li>
            <li class=" on">
              <a href="javascript:void(0)" class="maincolor">待评价</a>
            </li>
          </ul>
        </div>
        <div class="bd">
          <!-- 全部 -->
          <ul>
            <li>
              <div class="productmsglist">
                <ul>
                  <li v-for="(good,index) in goodlist" :key="index">
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
                          <span class="maincolor">订单完成</span>
                        </div>
                        <div class="flex jus-between margin-t20">
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
                        <div class="btnlist">
                          <a href="javascript:void(0)" class="maincolor font-16 checkbtn">评价</a>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
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
  name: "order_ping",
  data: function() {
    return {
        goodlist:[{store_name:'必量家综合超市1',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'},
            {store_name:'必量家综合超市2',
            original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
            goods_name:'耐高温保鲜膜300m*20cm',attr_price:'19.90',goods_num:'1',total_amount:'19.9'}
         
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
    allorder:function(){
      this.$router.push("/order/allorder")
    },
    order_daifa:function(){
      this.$router.push("/order/order_daifa")
    },
    order_daishou:function(){
      this.$router.push("/order/order_daishou")
    },
    order_daifu:function(){
      this.$router.push("/order/order_daifu")
    }
  }
};
</script>

<style>
</style>
