<template>
  <div class="afterScaleDetail afterscale afterscaledetail">
    <div class="tablist">
      <div class="refuntime">
        <p class="font-16">退款成功</p>
        <p class="font-16">2019年5月12日 22：36</p>
      </div>
      <div id="leftTabBox" class="tabBox">
        <div class="bd">
          <div class="productmsglist">
            <ul>
              <li style="margin-top:10px">
                <div class="productmsg">
                  <div class="flex jus-between align-c">
                    <p>退款总金额</p>
                    <p class="maincolor">￥{{scale.price}}</p>
                  </div>
                  <p class="line"></p>
                  <div class="flex jus-between align-c">
                    <p>退款支付宝</p>
                    <p>￥{{scale.price}}</p>
                  </div>
                  <p class="line"></p>
                  <div class="flex jus-between align-c">
                    <p>退款信息</p>
                  </div>
                  <div class="flex jus-between afterscaledetail">
                    <div class="goodsimg flex jus-start align-c">
                      <img :src="scale.img" alt />
                    </div>
                    <div class="flex jus-between afterscalemsg">
                      <div>
                        <p class="goodsdetail">{{scale.detail}}</p>
                        <p class="goodstype font-10">{{scale.type}}</p>
                      </div>
                      <span class="goodsnum">x {{scale.num}}</span>
                    </div>
                  </div>
                  <div class="refundReason">
                    <p>
                      退款原因：
                      <span>{{scale.reason}}</span>
                    </p>
                    <p>
                      退款金额：
                      <span>￥{{scale.price}}</span>
                    </p>
                    <p>
                      申请时间：
                      <span>{{scale.time}}</span>
                    </p>
                    <p>
                      退款编号：
                      <span>{{scale.no}}</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/order.css";
.afterscaledetail .productmsg>div{
    padding: 30px 20px;
    background: #fff;
    margin-bottom: 10px;
}
.productmsglist ul li{
    background:#f2f2f2
}
.afterscalemsg .goodstype{
    font-size: 20px;
    line-height: 28px;
}
</style>
<script>
export default {
  name: "afterScaleDetail",
  data: function() {
    return {
      scale: 
        {
          price: "89",
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
          detail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
          type: "颜色分类：1.5米/一条+3c认证充电头[充电套装][快充版]",
          num: "1",
          reason: "不想要",
          time: "2019-07-21",
          no: "2546892233549845787"
        }
       
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
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
