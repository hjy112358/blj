<template>
  <div class="storemanindex">
        <div class="limitbox">
            <div class="limit">
                <span>额度</span>
                <p>{{zquota}}</p>
            </div>
        </div>
        <div class="storemanlist">
            <div class="storemanTitle  flex jus-between align-c">
                <p>推荐应用</p>
                <img src="../../assets/images/public/return.png" alt="">
            </div>
            <div class="recommend">
                <ul class="clearfix">
                    <li>
                        <a href="{:url('storeman/proman')}">
                            <img src="../../assets/images/storeman/proman.png" alt="">
                            <p>产品管理</p>
                        </a>
                    </li>
                    <li>
                        <a href="{:url('storeman/proman')}">
                            <img src="../../assets/images/storeman/upload.png" alt="">
                            <p>上传产品</p>
                        </a>
                    </li>
                    <li>
                        <a href="{:url('storeman/limitRecharge')}">
                            <img src="../../assets/images/storeman/inventory.png" alt="">
                            <p>充值</p>
                        </a>
                    </li>
                    <li>
                        <a href="{:url('storeman/rebate')}">
                            <img src="../../assets/images/storeman/rebate.png" alt="">
                            <p>刷脸返利</p>
                        </a>
                    </li>

                    <!-- <li>
                        <a href="{:url('storeman/alldetalorder')}">
                            <img src="../../assets/images/storeman/order.png" alt="">
                            <p>充值</p>
                        </a>
                    </li>
                    <li>
                        <a href="{:url('storeman/neworder')}">
                            <img src="../../assets/images/storeman/new.png" alt="">
                            <p>新订单</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/putaway.png" alt="">
                            <p>上架</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/scalout.png" alt="">
                            <p>下架</p>
                        </a>
                    </li>  -->
                </ul>
            </div>
        </div>
        <div class="storemanlist">
            <div class="storemanTitle  flex jus-between align-c">
                <p>销售</p>
                <img src="../../assets/images/public/return.png" alt="">
            </div>
            <div class="scaletype">
                <ul class="clearfix">
                    <li>
                        <a href="{:url('storeman/paylist')}">
                            <img src="../../assets/images/storeman/scaleorder.png" alt=""
                                style="width:29px;height:29px">
                            <p style="margin-top:-4px">刷脸支付订单</p>
                        </a>
                    </li>
                    <!-- <li class="stockborder">
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/stock.png" alt=""
                                style='width:20px;height:25px;'>
                            <p>销售出库单</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/scalereturn.png" alt=""
                                style='width:22px;height:25px;'>
                            <p>销售退货单</p>
                        </a>
                    </li>  -->
                </ul>
            </div>
        </div>
         <!-- <div class="storemanlist">
            <div class="storemanTitle  flex jus-between align-c">
                <p>查询追踪</p>
                <img src="../../assets/images/public/return.png" alt="">
            </div>
            <div class="scaletype">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/search.png" alt=""
                                style="width:1.05rem;height:1.275rem">
                            <p >单据查询</p>
                        </a>
                    </li>
                    <li class="stockborder">
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/searchstock.png" alt=""
                                style='width:1.5rem;height:1.275rem;'>
                            <p>库存查询</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/images/storeman/scalenum.png" alt=""
                                style='width:1.75rem;height:1.275rem;'>
                            <p>序列号查询</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div> -->
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
</style>
<script>
export default {
  name: "storemanindex",
  data() {
    return {
        zquota:'10'
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
};
</script>

