<template>
  <div class="wallet">
    <div class="walletTop">
      <div class="tophead" id="topAnchor" style="text-align: center;">
        <p class="font-18" style="margin-left:0"></p>
      </div>
      <div class="walletclassify clearfix">
        <ul>
          <li>
            <p>余额（元）</p>
            <span>{{walletdata.yue}}</span>
          </li>
          <li>
            <p>Z券</p>
            <span>{{walletdata.zquan}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="transaction">
      <ul class="clearfix">
        <li class="bor-l0" @click="coupon()">
          <a href="javascript:void(0)" >
            <img src="../../assets/images/wallet/change.png" alt width="29" height="26" />
            <p class="font-16">转化</p>
          </a>
        </li>
        <li @click="tradefloor()">
          <a href="javascript:void(0)" >
            <img src="../../assets/images/wallet/tradingfloor.png" alt width="27" height="24" />
            <p class="font-16" style="margin-top:12px">交易大厅</p>
          </a>
        </li>
        <li @click="teamReturn()">
          <a href="javascript:void(0)" >
            <img src="../../assets/images/wallet/teamreturn.png" alt width="28" height="26" />
            <p class="font-16">分享收益</p>
          </a>
        </li>
        <li @click="tradeFloorZ()">
          <a href="javascript:void(0)">
            <img src="../../assets/images/wallet/record.png" alt width="28" height="26" />
            <p class="font-16">交易记录</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="walletdate">
      <div class="walletdatebox">
        <ul class="percent clearfix">
          <li>
            <span class="maincolor">1%</span>
            <p class="maincolor">今日总增长</p>
          </li>
          <li>
            <span class="maincolor">1%</span>
            <p class="maincolor">昨日总增长</p>
          </li>
          <li>
            <span class="maincolor">7%</span>
            <p class="maincolor">7天总增长</p>
          </li>
        </ul>
      </div>

      <div class="walletdatebox">
        <div class="todayDate">
          <h3>今日券值</h3>
          <div id="box"></div>
        </div>

        <div class="todayDate">
          <h3>昨日券值</h3>
          <div id="box2"></div>
        </div>

        <div class="todayDate">
          <h3 style="margin-bottom:-40px">过去7天Z券的劵值</h3>
          <div id="box3"></div>
        </div>
        <p class="summarize pos-r">本周完成订单量增长，同比上涨20%。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/user/wallet.css";
</style>

<script>

export default {
  name: "wallet",
  data: function() {
    return {
      walletdata: { yue: "0", zquan: "0" }
    };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundImage =
      "url(" + require("../../assets/images/wallet/walletbgs.jpg") + ")";
    window.document.body.style.backgroundSize = "100% 100%";
    window.document.body.style.backgroundRepeat = "no-repeat";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundImage = "";
    next();
  },
  methods: {
    drawline:function() {
      var myChart = this.$echarts.init(document.getElementById("box"));
      var myChart1 =this.$echarts.init(document.getElementById("box2"));
      var option = {
        backgroundColor: "#FBFBFB",
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 30,
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: "#CECECE"
              }
            },
            type: "category",
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#CECECE"
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            // symbol: 'none',
            smooth: 0.01,
            color: ["#ff4c4c"],
            data: [0.1, 0.101, 0.102, 0.103, 0.104, 0.105, 0.106],
            itemStyle: { normal: { label: { show: true } } }
          }
        ]
      };
      myChart.setOption(option);
      myChart1.setOption(option);
      var myChart3 = this.$echarts.init(document.getElementById("box3"));
      var option1 = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [0.1, 0.101, 0.102, 0.103, 0.104, 0.105, 0.106],
            type: "line",
            areaStyle: {},
            color: ["#ff4c4c", "#f00"]
          }
        ]
      };
      myChart3.setOption(option1);
    },
    coupon:function(){
      this.$router.push("/wallet/coupon")
    },
    tradefloor:function(){
      this.$router.push("/wallet/tradingFloor")
    },
    teamReturn:function(){
      this.$router.push("/wallet/teamReturn")
    },
    tradeFloorZ:function(){
      this.$router.push("/wallet/tradeFloorZ")
    }
  },
  mounted(){
      this.drawline()
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

