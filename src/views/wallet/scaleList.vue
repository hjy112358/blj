<template>
  <div class="scaleList tradewrap tradez">
    <div class="setting" style="background:none">
      <div class="transtype">
        <div class="tickets clearfix">
          <ul>
            <li>
              <p>数量</p>
              <span class="maincolor">{{sum}}</span>
            </li>
            <li>
              <p>今日券值</p>
              <span class="maincolor">{{ticket_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="tradecode">
        <ul>
          <li>
            <div class="tradecodelist">
              <ul>
                  <li class="flex align-c" v-for="(dates,index) in date" :key='index'>
                    <img src="../../assets/images/wallet/buy.png" alt />
                    <div class="tradedetail flex align-c jus-between">
                      <p>{{dates.sell_number}}张挂售券</p>
                      <span>买入</span>
                    </div>
                  </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/user/wallet.css";
.tradecodelist ul li{
    line-height: 100px
}
.tradecode{
    margin-top:10px
}
</style>
<script>
export default {
  name: "scaleList",
  data:function(){
      return {
          sum:7561,
          ticket_price:0.1,
          date:[{sell_number:'1',sell_user_id:'2',sell_id:'1'},
          {sell_number:'1',sell_user_id:'2',sell_id:'1'},
          {sell_number:'1',sell_user_id:'2',sell_id:'1'},
          {sell_number:'1',sell_user_id:'2',sell_id:'1'}]
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

