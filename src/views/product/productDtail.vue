<template>
  <div class="productDtail">
    <div class="tophead maincolorbg align-c flex jus-between">
      <div class="flex jus-start align-c">
        <a href="javascript:void(0)"  @click="go" class="backicon">
          <img src="../../assets/images/public/backW.png" alt>
        </a>
        <div class="inputbox pos-r">
          <input type="search" id="search_text" placeholder="搜索关键字">
        </div>
      </div>
      <div class="msgbox">
        <img src="../../assets/images/public/goodscar.png" alt>
      </div>
    </div>

    <div class="detailist padding-t136">
      <div class="detailtype">
        <ul class="clearfix">
          <li  @click="change(1)" :class="color=='1'?'on':''">综合</li>
          <li  @click="change(2)" :class="color=='2'?'on':''">销量</li>
          <li  @click="change(3)" :class="color=='3'?'on':''">
            价格
            <span class="arrow-up"></span>
            <span class="arrow-down"></span>
          </li>
        </ul>
      </div>
      <div class="detailPro">
        <div v-if="prodoctlist.length=='0'">
          <p class="goods_title">抱歉暂时没有相关结果，换个筛选条件试试吧</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="(pro,index) in prodoctlist" :key="index" @click="toDetail()">
                <a href="javascript:void(0)" class="item flex jus-start">
                    <div class="pic_box" style="width:25%;margin-right: 15px">
                        <img v-lazy="pro.imgulr">
                    </div>
                    <div style="width:75%">
                        <div class="title_box">{{pro.name}}</div>
                        <div class="price_box" style="line-height:56px">
                            <span class="new_price"><i style="font-size:14px">￥{{pro.price}}元</i></span>
                            <span style="font-size:12px;color:#ccc;margin-left:14px">库存:{{pro.count}}</span>
                        </div>
                        <div class="flex jus-start align-c" style="margin-top: -15px;font-size: 12px;color: #ccc;">
                            <img src="../../assets/images/public/autarky.png" alt="" width="50" height="20" style="margin-right:8px">
                            <p style="margin-right: 26px;">1000条好评</p>
                            <p>100%好评率</p>
                        </div>
                    </div>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/product/productetail.css";
</style>

<script>
export default {
  name: "productDtail",
  data: function() {
    return {
      prodoctlist: [
          {imgulr:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/364e8f536c471597612ba0ed86ffba44bc39e2dc.jpeg",name:'精制特级雪菊',price:"855.00",count:"100"},
          {imgulr:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/364e8f536c471597612ba0ed86ffba44bc39e2dc.jpeg",name:'精制特级雪菊1',price:"8551.00",count:"1000"}
          ],
          color:1
    };
  },
  created: function() {
    this.$emit("footer", true);
  },
  methods:{
    change:function(num){
      this.color=num;
      
    },
    toDetail:function(){
      this.$router.push("/product/productDetails")
    },
     go:function(){
        this.$router.go(-1);//返回上一页
    }
  }
};
</script>

