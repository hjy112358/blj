<template>
  <div class="shopcar">
    <div id="cart-content" v-if="produlist==''">
      <div class="qb_tac">
        <img src="../../assets/images/good/empty_cart.png" width="100" height="95" />
        <p>购物车还是空的</p>
      </div>
      <div class="qb_gap">
        <a href="javascript:void(0)" class="mod_btn btn_strong" @click="goindex()">马上逛逛</a>
      </div>
    </div>
    <div v-else>
      <div class="tablist">
        <div id="leftTabBox" class="tabBox">
          <div class="bd">
            <div class="productmsglist">
              <ul>
                <li v-for="(pro,index) in produlist" :key="index">
                  <div class="productmsg">
                    <div class="flex jus-between align-c">
                      <div class="flex jus-start align-c">
                        <img src="../../assets/images/good/waitcheck.png" alt class="checkimg" />
                        <img src="../../assets/images/good/store.png" alt class="store" />
                        <p class="proname">
                          {{pro.name}}
                          <i>></i>
                        </p>
                      </div>
                      <span class="maincolor">领券</span>
                    </div>
                    <div
                      class="flex jus-start margin-t10 margin-b20"
                      style="padding-bottom:10px"
                      v-for="(pros,index) in pro.prokids"
                      :key="index"
                    >
                      <div class="flex align-c">
                        <img src="../../assets/images/good/waitcheck.png" alt class="checkimg" />
                      </div>
                      <div class="goodsimg flex jus-start align-c">
                        <img :src="pros.img" alt />
                      </div>
                      <div style="max-width: 200px;margin-left:15px;">
                        <p class="goodsdetail">{{pros.prodetail}}</p>
                        <div
                          class="goodproceAnum flex jus-between align-c"
                          style="max-width: 200px;margin-top:10px"
                        >
                          <span class="maincolor">￥{{pros.price}}</span>
                          <div class="flex jus-between align-c shopNum">
                            <a href="javascript:void(0)">-</a>
                            <input type="text" v-model="pros.num" />
                            <a href="javascript:void(0)">+</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="settle flex jus-between align-c">
        <div class="flex jus-start align-c">
          <img src="../../assets/images/good/waitcheck.png" alt />
          <p class="font-16">全选</p>
        </div>
        <div class="flex jus-start align-c">
          <p class="font-16">
            合计：
            <span class="maincolor font-16">￥400</span>
          </p>
          <p class="accounts font-18 maincolorbg">结算(1)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/order.css";
.productmsglist ul li{
    margin-top:0;
    margin-bottom:30px
}
.productmsg .proname{
    line-height: 70px
}
</style>
<script>
export default {
  name: "shopcar",
  data: function() {
    return {
      produlist: [
        {
          name: "小天才儿童智能电话手表防水",
          prokids: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "1"
            },
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "2"
            }
          ]
        },
        {
          name: "小天才儿童智能电话手表防水1",
          prokids: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "1"
            }
          ]
        }
      ]
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
  methods: {
    goindex:function() {
      this.$router.push("/");
    }
  }
};
</script>


