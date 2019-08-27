<template>
  <div class="myasselpool">
      <patterbhead />
    <div class="mypooldetailbox">
      <div class="mypooltype clearfix">
        <div class="shortype bor-r">
          <a href="javascript:void(0)" @click="myteam()">
            <img src="../../assets/images/patternb/team.png" alt style="width:2.35rem;height:2rem" />
            <p>我的团队</p>
          </a>
        </div>
        <div class="shortype">
          <a href="javascript:void(0)" @click="scaleOut()">
            <img
              src="../../assets/images/patternb/poolticket.png"
              alt
              style="width:2.75rem;height:2.35rem;margin-top:-0.35rem;"
            />
            <p>我的资产包</p>
          </a>
        </div>
        <div class="hightype bor-r">
          <a href="javascript:void(0)" @click="seAccout()">
            <img
              src="../../assets/images/patternb/scalin.png"
              alt
              style="width:2.3rem;height:2.2rem"
            />
            <p>买入</p>
          </a>
        </div>
        <div class="hightype">
          <a href="javascript:void(0)" @click="scaleOut()">
            <img
              src="../../assets/images/patternb/scaleout.png"
              alt
              style="width:2.25rem;height:2.15rem"
            />
            <p>卖出</p>
          </a>
        </div>
      </div>

      <div class="mypoolorder">
        <div class="poolordertop flex jus-between align-c">
          <p>我的订单</p>
          <p class="allorder">
            最近60条订单
            <span>></span>
          </p>
        </div>
        <div class="mypoolorderdetail">
          <div class="detailist">
            <ul>
              <li class="flex jus-start align-c" v-for="(pool,index) in poolist" :key="index">
                <img src="../../assets/images/patternb/scalin.png" alt />
                <div class="flex jus-between align-c detailbox">
                  <p class="detailboxtext" v-if="pool.is_sale==1">卖出({{pool.goods_name}}*{{pool.order_nums}})</p>
                  <p class="detailboxtext" v-else>买入({{pool.goods_name}}*{{pool.order_nums}})</p>
                  <p class="detailboxtime">{{pool.pay_time}}</p>
                  <p class="maincolor" style="margin-left:5px">{{pool.total_amount}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <patterbfoot />
  </div>
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>
<script>
import patterbhead from "../../components/patterbhead.vue";
import patterbfoot from "../../components/patterbfoot.vue";
export default {
  name: "myasselpool",
  data() {
    return {
      poolist:[{is_sale:'1',goods_name:'资产包',order_nums:'1',pay_time:'2019.7.30',total_amount:'399.00'},
      {is_sale:'2',goods_name:'资产包',order_nums:'1',pay_time:'2019.7.30',total_amount:'399.00'},
      {is_sale:'1',goods_name:'资产包',order_nums:'1',pay_time:'2019.7.30',total_amount:'399.00'}]
    };
  },
  components: {
    patterbhead,
    patterbfoot
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods:{
    myteam:function(){
      this.$router.push("/patternb/myteam")
    },
    scaleOut:function(){
      this.$router.push("/patternb/scaleOut")
    },
    seAccout:function(){
      this.$router.push("/patternb/seAccout")
    }
  }
};
</script>

<style>
</style>

