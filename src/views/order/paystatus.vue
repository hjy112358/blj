<template>
  <div class="paystatus">
    <div class="paystatus">
      <div class="paystatusimg">
          <img src="../../assets/images/good/paysucc.png" alt v-if='status=="0"'/>
          <img src="../../assets/images/good/payfail.png" alt  v-else/>
      </div>
      <div class="paystatusmg">
          <p class="font-18 maincolor" v-if="type=='1'">付款成功</p>
          <p class="font-18 maincolor" v-else>付款失败</p>
      </div>

      <div class="paydetail">
        <p class="font-18 payname">必量家</p>
      </div>

      <a href="javascript:void(0)" class="completebtn maincolor">确定</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "paystatus",
  data() {
    return {
        status:'0',
        type:'1'
    };
  }
};
</script>

<style scoped>
@import "../../assets/css/order/order.css";
</style>
