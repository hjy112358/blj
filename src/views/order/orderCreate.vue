<template>
  <div class="orderCreate">
    <div class="orderCreateDetail font-16">
      <p>
        订单金额：
        <span class="maincolor">￥1233</span>
      </p>
      <p>订单编号：123243342443</p>
    </div>
    <div class="orderTime">
      <p class="font-16">请在 30 分钟内完成支付</p>
      <div class="flex jus-between align-c">
        <p class="font-16">逾期订单将自动取消</p>
        <p class="maincolor font-18">28:39min</p>
      </div>
    </div>

    <div class="payment">
      <h3 class="font-18">支付方式</h3>
      <div class="paymentlist">
        <!-- <ul>
          <li class="flex jus-start align-c">
            <div class="flex jus-start align-c paymentImg">
              <img src="../../assets/images/good/zfb.png" alt style="width:20px;height:20px" />
            </div>
            <div class="flex jus-between align-c paymentbox">
              <p class="font-16">支付宝支付</p>
              <div class="checkimg flex align-c">
                <input type="radio" class="inputcheck" v-model="radio" vaule="1" />
              </div>
            </div>
          </li>
          <li class="flex jus-start align-c">
            <div class="flex jus-start align-c paymentImg">
              <img src="../../assets/images/good/wx.png" alt style="width：25px;height:18px" />
            </div>
            <div class="flex jus-between align-c paymentbox">
              <p class="font-16">微信支付</p>
              <div class="checkimg flex align-c">
                <input type="radio" class="inputcheck" v-model="radio" vaule="2" />
              </div>
            </div>
          </li>
          <li class="flex jus-start align-c lastLI">
            <div class="flex jus-start align-c paymentImg">
              <img src="../../assets/images/good/yu.png" alt style="width:25px;height:25px" />
            </div>
            <div class="flex jus-between align-c paymentbox">
              <p class="font-16">余额支付</p>
              <div class="checkimg flex align-c">
                <input type="radio" class="inputcheck" v-model="radio" vaule="3" />
              </div>
            </div>
          </li>
        </ul>-->
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="支付宝支付" clickable @click="radio = '1'">
              <img src="../../assets/images/good/zfb.png" alt style="width:20px;height:20px" />
              <van-radio slot="right-icon" name="1" checked-color="#ff4c4c" icon-size="18px" />
            </van-cell>
            <van-cell title="微信支付" clickable @click="radio = '2'">
              <img src="../../assets/images/good/wx.png" alt style="width：25px;height:18px" />
              <van-radio slot="right-icon" name="2" checked-color="#ff4c4c" icon-size="18px" />
            </van-cell>
            <van-cell title="余额支付" clickable @click="radio = '3'" style="border-bottom:0">
              <img src="../../assets/images/good/yu.png" alt style="width:25px;height:25px" />
              <van-radio slot="right-icon" name="3" checked-color="#ff4c4c" icon-size="18px" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="footBtn">
      <a href="javascript:void(0)" class="maincolorbg" @click="paynow()">立即支付</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderCreate",
  data() {
    return {
      radio: "1"
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods:{
    paynow:function(){
      this.$router.push("/order/paystatus")
    }
  }
  
};
</script>
<style scoped>
@import "../../assets/css/order/goodstyle.css";
.payment h3 {
  padding-bottom: 20px;
}
.van-cell {
  width: auto;
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #333635;
  overflow: inherit;
  margin-left: 70px;
  padding-left: 0;
}
.van-cell__title span {
  font-size: 26px;
}
.van-cell__value {
  position: absolute;
  top: 6px;
  left: -66px;
}
</style>
