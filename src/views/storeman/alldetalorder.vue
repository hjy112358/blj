<template>
  <div class="alldetalorder">
    <div class="detalorderhead">
      <ul class="clearfix">
        <li class="on" @click="alldetalorder()">
          <a href="javascript:void(0)">全部</a>
        </li>
        <li @click="detalorderPend()">
          <a href="javascript:void(0)">待处理</a>
        </li>
        <li @click="detalorderFa()">
          <a href="javascript:void(0)">待发货</a>
        </li>
        <li @click="detalorderProced()">
          <a href="javascript:void(0)">已处理</a>
        </li>
      </ul>
    </div>
    <div class="detalorderlist">
      <ul>
        <li class="clearfix">
          <a href="javascript:void(0)">
            <div class="flex jus-between align-c">
              <p class="ordernum">订单编号：111111111111111111111111</p>
              <p class="orderstatus">已处理</p>
            </div>
            <div class="flex jus-between align-c">
              <div class="flex jus-between align-c">
                <div class="proimg">
                  <img
                    src="http://abc.fyc365.cn/public/upload/goods/20190527/2b0b544bb3810fca422237dad2d301c7.jpg "
                    alt
                  />
                </div>
                <div class="prodetail">
                  <p class="proname">复古港味小香风海军</p>
                  <p class="promodel">黑色 / 170 (短款)</p>
                </div>
              </div>
              <div class="text-r">
                <p class="proprice">￥99.00</p>
                <p class="procount">X1</p>
              </div>
            </div>
            <div class="text-r">
              <p class="prototal">
                共计1件商品 合计：
                <span>￥99.00</span>（含运费￥0.00）
              </p>
            </div>
            <div class="btnlist text-r">
              <a href="javascript:void(0)" class="del">删除</a>
              <a href="javascript:void(0)" class="btn">完成</a>
            </div>
          </a>
        </li>
        <li class="clearfix">
          <a href="javascript:void()">
            <div class="flex jus-between align-c">
              <p class="ordernum">订单编号：111111111111111111111111</p>
              <p class="orderstatus">待发货</p>
            </div>
            <div class="flex jus-between align-c">
              <div class="flex jus-between align-c">
                <div class="proimg">
                  <img
                    src="http://abc.fyc365.cn/public/upload/goods/20190527/2b0b544bb3810fca422237dad2d301c7.jpg "
                    alt
                  />
                </div>
                <div class="prodetail">
                  <p class="proname">复古港味小香风海军</p>
                  <p class="promodel">黑色 / 170 (短款)</p>
                </div>
              </div>
              <div class="text-r">
                <p class="proprice">￥99.00</p>
                <p class="procount">X1</p>
              </div>
            </div>
            <div class="text-r">
              <p class="prototal">
                共计1件商品 合计：
                <span>￥99.00</span>（含运费￥0.00）
              </p>
            </div>
            <div class="btnlist text-r">
              <!-- <a href="javascript:void(0)" class="del">删除</a> -->
              <a href="javascript:void(0)" class="btn" @click="delive()">发货</a>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="mark" v-show="deliver==1">
      <div class="promethod layui-form">
        <h3>发货方式</h3>
        <div class="flex jus-between align-c formlist">
          <p>发货方式</p>
          <!-- <select lay-filter="prothod" id="prothos">
                <option value="1">快递</option>
                <option value="2">自提</option>
          </select>-->
        </div>
        <div class="flex jus-between align-c formlist ordernumtext">
          <p>订单号</p>
          <input type="number" id="ordernum" placeholder="请输入订单号" />
        </div>
        <div class="probtn clearfix">
          <a href="javascript:void(0)" class="cancle" @click="cancle()">取消</a>
          <a href="javascript:void(0)" class="prosure" @click="sure()">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
@import "../../assets/css/storeman/applystep.css";
</style>
<script>
export default {
  name: "alldetalorder",
  data() {
    return {
      deliver:0
    };
  },
  created: function() {
    this.$emit("footer", false);
  },

  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  methods:{
    delive:function(){
      this.deliver=1;
    },
    cancle:function(){
      this.deliver=0;
    },
    sure:function(){
      this.deliver=0;
    },
    alldetalorder:function(){
      this.$router.push("/storeman/alldetalorder")
    },
    detalorderPend:function(){
      this.$router.push("/storeman/detalorderPend")
    },
    detalorderFa:function(){
      this.$router.push("/storeman/detalorderFa")
    },
    detalorderProced:function(){
      this.$router.push("/storeman/detalorderProced")
    }
  }
};
</script>

<style>
</style>
 