<template>
  <div class="buyIn myteam scalebody">
    <patterbhead />
    <div class="scaleOrderbox">
      <ul>
        <li class="flex jus-start align-c" v-for="(buylist,index) in buylists" :key="index">
          <div class="checkimg">
            <input
              type="checkbox"
              class="inputcheck"
              onclick="checkinput(this,{$vo.cart_id})"
              checked
            />
          </div>
          <div class="scaleimg">
            <img :src="buylist.img" alt />
          </div>
          <div class="scaledetail">
            <p class="scalegoods">{{buylist.name}}</p>
            <div class="priceAnum flex jus-between align-c">
              <p>
                <span>￥</span>
                {{buylist.bgoods_price}}
              </p>
              <van-stepper v-model="buylist.value"  input-width="40px" button-size="34px"/>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="scalebottom flex jus-between align-c">
      <div>
        <input type="checkbox" id="checkall" />
        <label for="checkall">全选</label>
      </div>
      <div class="paymsg flex jus-start align-c">
        <p>
          买入总计：￥
          <span id="total_price">{{total_price}}</span>
        </p>
        <a href="javascript:void(0);">提交订单</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>
<style >
.van-stepper__minus::before, .van-stepper__plus::before{
    width:26px;
    height:2px
}
.van-stepper__minus::after, .van-stepper__plus::after{
    width:2px;
    height: 26px;;
}
.van-stepper__input{
    font-size:26px;
}
</style>
<script>
import patterbhead from "../../components/patterbhead.vue";
export default {
  name: "buyIn",
  data() {
    return {
      value: 1,
      total_price: 0,
      buylists: [
        {  
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/8f139706a05547656552a04a607ca6ed7b596537.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "39999.00",
          value:1
        },
        {
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9b346204df98592a52888256ad8603dac7c546dd.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "399.00",
          value:1
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  components: {
    patterbhead
  },
   created: function() {
    this.$emit("footer", false);
  },
};
</script>

<style>
</style>
