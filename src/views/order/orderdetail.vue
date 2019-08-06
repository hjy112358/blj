<template>
    <div class="orderdetail orderDetailbox">
         <div class="maincolorbg  tophead" style="text-align: right" v-if='type==0'>
            <p class="cancleOrder font-16" >取消订单</p>
        </div>
        <div v-if='type==0'>
            <div class="non-payment pos-r ">
                <div class="payStatus">
                    <p>待支付…</p>
                    <span>订单超过30分钟自动取消......</span>
                </div>
                <div class="paydetail pos-a">
                    <div class="paydetailbox">
                        <div class="proInfor">
                            <div class="flex align-c jus-between">
                                <p class="inforTitle">订单编号：</p>
                                <p class="inforDetail">{{order_info.order_sn}}</p>
                            </div>
                            <div class="flex align-c jus-between">
                                <p class="inforTitle">订单总价：</p>
                                <p class="inforDetail">{{order_info.total_amount}}元</p>
                            </div>
                            <div class="flex align-c jus-between">
                                <p class="inforTitle">购买数量：</p>
                                <p class="inforDetail">{{order_info.goods_num}}</p>
                            </div>
                            <div class="diviLine"></div>
                            <!-- 订单详情 -->
                            <div class="flex align-c jus-between ">
                                <p class="inforTitle">金额：</p>
                                <p class="inforDetail maincolor">￥{{order_info.total_amount}}</p>
                            </div>
                            <div class="flex align-c jus-between ">
                                <p class="inforTitle">Z券：</p>
                                <p class="inforDetail ">{{order_info.zcoupon}}</p>
                            </div>
                            <div class="flex align-c jus-between ">
                                <p class="inforTitle">应付金额：</p>
                                <p class="inforDetail maincolor">￥{{order_info.total_amount}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="paybtn" style="margin-bottom:10px">
                        <a href="javascript:void(0)" class="maincolorbg">立即支付</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="orderpaid">
                <div class="orderAdress flex jus-between  align-c">
                    <div class="flex jus-start adressLocation align-c">
                        <img src="../../assets/images/good/locationOrder.png" alt="">
                        <p>{{order_info.address}}</p>
                    </div>
                    <div class="adressDetail ">
                        <img src="../../assets/images/good/nextB.png" alt="">
                    </div>
                </div>
                <div class="orderDetail">
                    <div class="orderTitle ">
                        <div class="flex align-c jus-start titleText">
                            <img src="../../assets/images/good/shopcar.png" alt="">
                            <p>商品详情</p>
                        </div>
                    </div>
                    <div class="productDetail flex jus-start">
                        <div class="productImg flex jus-between align-c">
                            <img :src="order_info.original_img" alt="">
                        </div>
                        <div class="productmsg">
                            <p>{{order_info.goods_name}}</p>
                            <span>x{{order_info.goods_num}}</span>
                            <p class="price">￥{{order_info.attr_price}}</p>
                        </div>
                    </div>
                    <div class="orderTitle flex align-c jus-between pos-r">
                        <div class="flex align-c jus-start titleText">
                            <img src="../../assets/images/good/orderDetail.png" alt="">
                            <p>订单详情</p>
                        </div>
                        <p class="paid" v-if='order_info.order_status==1&&order_info.shipping_status==0'>待发货</p>
                        <p class="paid" v-else-if='order_info.order_status==1&&order_info.shipping_status==1'>待收货</p>
                        <p class="paid" v-else-if='order_info.type==2&&order_info.shipping_status==1'>待评价</p>
                      
                    </div>
                    <div class="proInfor">
                        <div class="flex align-c jus-between">
                            <p class="inforTitle">订单编号：</p>
                            <p class="inforDetail">{{order_info.order_sn}}</p>
                        </div>
                        <div class="flex align-c jus-between">
                            <p class="inforTitle">订单总价：</p>
                            <p class="inforDetail">{{order_info.total_amount}}元</p>
                        </div>
                        <div class="flex align-c jus-between">
                            <p class="inforTitle">购买数量：</p>
                            <p class="inforDetail">{{order_info.goods_num}}</p>
                        </div>
                        <div class="flex align-c jus-between margin-t20">
                            <p class="inforTitle">下单时间：</p>
                            <p class="inforDetail">
                                    {{order_info.add_time}}</p>
                        </div>
                        <!-- 订单详情 -->
                        <div class="flex align-c jus-between ">
                            <p class="inforTitle">支付方式：</p>
                            <p class="inforDetail flex align-c maincolor" v-if='order_info.pay_code=="alipayMobile"'>
                                <img src="../../assets/images/good/zfb.png" alt="">
                                支付宝支付
                            </p>
                            <p class="inforDetail flex align-c maincolor" v-else-if='order_info.pay_code=="yue"'>
                                    余额支付
                                </p>
                            <p class="inforDetail flex align-c maincolor" v-else>
                                    微信支付
                                </p>
                        </div>
                        <div class="flex align-c jus-between ">
                            <p class="inforTitle">订单总价：</p>
                            <p class="inforDetail maincolor">￥{{order_info.total_amount}}</p>
                        </div>

                       
                        <div class="flex align-c jus-between ">
                            <p class="inforTitle">支付方式：</p>
                            <p class="inforDetail maincolor">在线支付</p>
                        </div>

                    </div>
                   
                    <div class="ruleBtn">
                        <a href="javascript:void(0)" class="maincolorbg"  v-if='order_info.order_status==1&&order_info.shipping_status==1'>确认收货</a>
                        <a href="javascript:void(0)" class="maincolorbg" v-else-if='order_info.type==2&&order_info.shipping_status==1'  @click="evalute()">去评价</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "../../assets/css/order/orderdetail.css";
.cancleOrder{
    line-height: 136px
}
.proInfor>div{
    line-height: 60px
}
</style>
<script>
export default {
    name:'orderdetail',
    data:function(){
        return {
            type:'',
            order_info:{order_sn:'I627034601578388',total_amount:'20.0',goods_num:'2',total_amount:'40',
            zcoupon:'20',total_amount:'40',
            address:'江苏省南通市开发区益兴大厦23层',original_img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/31171c88b006b359ed408bff99b3479d48dadc7f.jpeg',
            goods_name:'鹿茸',attr_price:'20.0',add_time:'2019-07-01',
            order_status:'1',shipping_status:'1'
            }
        }
    },
    mounted:function(){
        this.type=this.$route.params.id
    },
     created: function() {
    this.$emit("footer", false);
  },
  methods:{
    evalute:function(){
        this.$router.push("/order/evaluate")
    }
  }
}
</script>
