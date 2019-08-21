<template>
  <div class="settle">
    <div class="addreslist">
      <ul>
        <li class="flex align-c jus-between" @click="receivelist()">
          <div>
            <p class="font-16">收货人</p>
            <p>{{settle.adress.name}} {{settle.adress.tel}}</p>
            <p>{{settle.adress.address}}</p>
          </div>
          <div class="nextimg">
            <img src="../../assets/images/good/go000.png" alt />
          </div>
        </li>
      </ul>
    </div>

    <div class="goodsDetail flex jus-between align-c">
      <div class="flex jus-start">
        <div class="goodsimg">
          <img
            src="http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg"
            alt
          />
        </div>
        <div class="goodsIntrdouce">
          <h3 class="font-16">{{settle.good.name}}</h3>
          <p class="font-16">型号：{{settle.good.type}}</p>
          <span class="maincolor font-16">￥{{settle.good.price}}</span>
        </div>
      </div>
      <p class="goodsCount maincolor font-16">x{{settle.good.num}}</p>
    </div>
    <div class="subtotal">
      <p class="font-16">
        商品小计：
        <span class="maincolor">￥{{settle.good.total}}</span>
      </p>
    </div>
    <div class="choosecoupon flex jus-between align-c">
      <p class="font-16">选择优惠券</p>
      <img src="../../assets/images/good/go000.png" alt />
    </div>
    <div class="actuallyPay flex jus-between align-c">
      <p class="font-18">实付金额</p>
      <p class="maincolor">￥{{settle.good.pay}}</p>
    </div>

    <div class="footBtn">
      <a href="javascript:void(0)" class="maincolorbg" @click="pay()">确认</a>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/goodstyle.css";
</style>
<script>
export default {
  name: "settle",
  data() {
    return {
      settle: {
        adress: {
          name: "张三",
          tel: "18888888888",
          address: "江苏省 南通市 开发区 南通市 益兴大厦"
        },
        good: {
          name: "智能空气净化器",
          type: "x393",
          price: "1232",
          num: "1",
          pay: "1232",
          total: "1232"
        }
      }
    };
  },
  methods: {
    receivelist: function() {
      this.$router.push("/order/receivelist");
    },
    pay:function(){
      this.$router.push("/order/orderCreate");
    }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
