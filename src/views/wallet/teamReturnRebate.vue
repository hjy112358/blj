<template>
  <div class="teamReturnRebate">
    <div class="teamreturnmsg flex jus-start">
      <div class="returnimg">
        <img src="../../assets/images/public/user.png" alt />
      </div>
      <div>
        <p class="font-16">{{date.nickname}}</p>
        <span class="font-18">这个人很懒，什么都没留下</span>
      </div>
    </div>

    <div class="earnings">
      <div>
        <ul class="clearfix">
          <li class="returnNum pos-r">
            <p class="font-18">分享收益/数量</p>
            <span class="font-18 maincolor">￥{{date.erdai_sum}}</span>
          </li>
          <li>
            <p class="font-18">一代/二代</p>
            <span class="font-18 maincolor">{{date.yierdai_count}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="earninglist">
      <p class="font-20">类型分布</p>
      <div id="box3" style="width: 310px;height:200px;margin:0 auto"></div>
      <div class="earninglistdetailBox">
        <ul>
          <li>
            <div class="earninglistdetail flex jus-between align-c">
              <div class="earningL flex jus-start align-c">
                <img src="../../assets/images/public/user.png" alt />
                <p class="font-14">{{date.nickname}}</p>
              </div>
              <p class="font-18 maincolor">￥{{date.self_number}}</p>
              <p class="font-18 earningr">自己</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/wallet/teamreturn.css";
</style>
<script>
export default {
  name: "teamReturnRebate",
  data: function() {
    return {
      date: {
        nickname: "小果儿",
        erdai_sum: "48",
        yierdai_count: "2",
        self_number: "48"
      }
    };
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
   mounted(){
      this.drawline()
  },
  methods:{
      drawline:function(){
            var myChart3 = this.$echarts.init(document.getElementById("box3"));
           
        var option1 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['我的收益', '一代收益', '二代收益']
            },
            color: ['#0088ff', '#00b775', '#ff4c4c'],

            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 10, name: '我的收益' },
                        { value:20, name: '一代收益' },
                        { value: 30, name: '二代收益' }

                    ]
                }
            ]
        };

        myChart3.setOption(option1);
      }
  }
};
</script>
