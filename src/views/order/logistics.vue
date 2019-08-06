<template>
  <div class="logistics">
    <div class="wrap">
      <div class="logisticmsg">
        <ul>
            <!-- <li class="waitpress" v-for="(logistic,index) in logistics" :key='index'>
              <i></i>
              <div>
                <p class="font-12">{{logistic.status}}</p>
              </div>
              <div class="time">
                <span>{{logistic.riqi}}</span>
                <span>{{logistic.shijian}}</span>
              </div>
            </li> -->
              <li class="receiveg now">
                    <i></i>
                    <div>
                        <p class="font-14">已签收</p>
                        <p class="font-12">[自提柜]已签收，签收人凭取货码签收。感谢使用
                            丰巢自提柜，期待再次为您服务。</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitTake ">
                    <i></i>
                    <div>
                        <p class="font-14">待取件</p>
                        <p class="font-12">[自提柜]您的快件已存放在丰巢[自提柜]，请及时
                            取件。有问题请联系快递员<span class="maincolor">132456789</span></p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitDeli ">
                    <i></i>
                    <div>
                        <p class="font-14">派送中</p>
                        <p class="font-12">[南通市]配送员小张<span class="maincolor">132456789</span>正在为您派送，感
                            谢您的耐心等待</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitde ">
                    <i ></i>
                    <div>
                        <p class="font-14">运输中</p>
                        <p class="font-12">[南通市]你的包裹已到达[狼山站]，准备分配派送员</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitpress ">
                    <i ></i>
                    <div>
                        <p class="font-14">已揽件</p>
                        <p class="font-12">[南通市]你的包裹已到由物流公司揽收</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitship ">
                    <i ></i>
                    <div>
                        <p class="font-14">已发货</p>
                        <p class="font-12">包裹正在等待揽收</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li  class="waitremoval ">
                    <i></i>
                    <div>
                        <p class="font-14">已出库</p>
                        <p class="font-12">包裹已出库</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li>
                <li class="waitentrepot ">
                    <i ></i>
                    <div>
                        <p class="font-14">仓库已接单</p>
                        <p class="font-12">仓库已接单</p>
                    </div>
                    <div class="time">
                        <span>05-23</span>
                        <span>17:09</span>
                    </div>
                </li> 
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/logistic.css";
</style>
<script>
export default {
  name: "logistics",
  data:function(){
      return {
          logistics:[{status:'状态',riqi:'2019-07-02 9:00',shijian:'快递快递快递'}]
      }
  }

};
</script>

