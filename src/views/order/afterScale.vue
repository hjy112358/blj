<template>
    <div class="afterScale">
         <div class="tablist">
            <div id="leftTabBox" class="tabBox">
                <div class="bd">
                    <div class="productmsglist">
                        <ul>
                            <li v-for="(scale,index) in scalelist" :key='index'>
                                <div class="productmsg">
                                    <div class="flex  jus-between align-c">
                                        <div class="flex  jus-start align-c">
                                            <img src="../../assets/images/good/store.png" alt=""
                                                class="store">
                                            <p class="protitle">{{scale.name}} <i>></i></p>
                                        </div>

                                    </div>
                                    <div class="flex  jus-between margin-t10 afterscaledetail">
                                        <div class="goodsimg flex  jus-start align-c">
                                            <img :src="scale.img" alt="">
                                        </div>
                                        <div class="flex  jus-between afterscalemsg">
                                            <div>
                                                <p class="goodsdetail">{{scale.detail}}</p>
                                                <p class="goodstype">{{scale.type}}</p>
                                            </div>

                                            <span class="goodsnum">x {{scale.num}}</span>
                                        </div>
                                    </div>
                                    <div class="refundlist">
                                        <div class='refundtype flex jus-start align-c'>
                                            <img src="../../assets/images/good/refund.png" alt=""
                                                width="14" height="13">
                                            <p class="font-10 goodstatus" >仅退款 退款成功</p>
                                        </div>
                                    </div>
                                    <div class="refundbtn flex jus-end">
                                        <a href="javascript:void(0)" class="maincolor font-16"
                                            style="margin-right: 15px">售后服务评价</a>
                                        <a href="javascript:void(0)" class="maincolor font-16" @click="afterdetail()">查看详情</a>
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
.productmsglist ul li{
    margin-top:0;
    margin-bottom:30px
}
.protitle {
    line-height: 80px
}
.afterscalemsg .goodstype{
    font-size: 20px;
    line-height: 28px;
}
.refundlist .goodstatus{
    line-height:60px
}
.refundbtn{
    padding: 26px 0;
}
</style>
<script>
export default {
    name:'afterScale',
    data:function(){
        return{
            scalelist:[{
                name:'小天才儿童智能电话手表防水',img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
                detail:'儿童智能电话手表防水定位拍照多功能儿童智能电话手表防',type:'颜色分类：1.5米/一条+3c认证充电头[充电套装][快充版]',
                num:'1',
            },
            {
                name:'小天才儿童智能电话手表防水',img:'http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg',
                detail:'儿童智能电话手表防水定位拍照多功能儿童智能电话手表防',type:'颜色分类：1.5米/一条+3c认证充电头[充电套装][快充版]',
                num:'1',
            }]
        }
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
    },
    methods:{
        afterdetail:function(){
            this.$router.push("/order/afterScaleDetail")
        }
    }
}
</script>

