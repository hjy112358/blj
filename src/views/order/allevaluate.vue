<template>
  <div class="allevaluate">
    <div id="leftTabBox" class="evalutebox" style="margin-top:0px;">
      <div class="hd">
        <ul class="clearfix">
          <a href="javascript:void(0)">
            <li  :class="alleva==0?'on font-16':'font-16'" @click="changeeva(0)">全部</li>
          </a>
          <a href="javascript:void(0)">
            <li :class="alleva==1?'on font-16':'font-16'" @click="changeeva(1)">有图</li>
          </a>
        </ul>
      </div>
      <div class="bd">
        <div class="evalutedetail" v-show='alleva==0'>
        <ul>
            <li v-for="(eva,index) in evas" :key="index">
            <div class="evalutedetailimg flex jus-start align-c">
                <img :src="eva.head_pic" alt v-if="eva.head_pic!=''" />
                <img src="../../assets/images/public/user.png" alt v-else />
                <p class="font-16">{{eva.nickname}}</p>
            </div>
            <p class="font-16 evalutemsg">{{eva.add_time}} {{eva.attr_value}}</p>
            <p class="font-16 evalutetext">{{eva.content}}</p>
            <div class="evaluteimglist" v-show="eva.imglist!=''" >
                <ul class="clearfix">
                <li v-for="(evaimg,index) in eva.imglist" :key="index">
                    <img :src="evaimg.img" alt />
                </li>
                </ul>
            </div>
            <div class="evalutegoods flex jus-start align-c">
                <img :src="eva.original_img" alt />
                <div>
                <p class="font-16 evalutegoodsmsg">{{eva.goods_name}}</p>
                <p class="font-16">
                    ￥{{eva.attr_price}}
                    <span
                    class="maincolor margin-l10"
                    v-if="eva.goods_rank==1"
                    >很差</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==2">差</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==3">一般</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==4">好</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==5">很好</span>
                </p>
                </div>
            </div>
            </li>
        </ul>
        </div>
       <div class="evalutedetail"  v-show='alleva==1'>
        <ul>
            <li v-for="(eva,index) in evasb" :key="index">
            <div class="evalutedetailimg flex jus-start align-c">
                <img :src="eva.head_pic" alt v-if="eva.head_pic!=''" />
                <img src="../../assets/images/public/user.png" alt v-else />
                <p class="font-16">{{eva.nickname}}</p>
            </div>
            <p class="font-16 evalutemsg">{{eva.add_time}} {{eva.attr_value}}</p>
            <p class="font-16 evalutetext">{{eva.content}}</p>
            <div class="evaluteimglist" v-show="eva.imglist!=''" >
                <ul class="clearfix">
                <li v-for="(evaimg,index) in eva.imglist" :key="index">
                    <img :src="evaimg.img" alt />
                </li>
                </ul>
            </div>
            <div class="evalutegoods flex jus-start align-c">
                <img :src="eva.original_img" alt />
                <div>
                <p class="font-16 evalutegoodsmsg">{{eva.goods_name}}</p>
                <p class="font-16">
                    ￥{{eva.attr_price}}
                    <span
                    class="maincolor margin-l10"
                    v-if="eva.goods_rank==1"
                    >很差</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==2">差</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==3">一般</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==4">好</span>
                    <span class="maincolor margin-l10" v-else-if="eva.goods_rank==5">很好</span>
                </p>
                </div>
            </div>
            </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/order.css";
</style>
<script>
export default {
  name: "allevaluate",
  data: function() {
    return {
      evas: [
        {
          head_pic: "",
          nickname: "HIAO",
          add_time: "5-21",
          attr_value: "颜色分类",
          content:
            "物美价廉，图片和实物相符合，个人很喜欢，没有色差我特别喜欢，推荐给大家。",
          goods_name: "短袖女2019新款夏ins潮韩版打底衫百白白白",
          attr_price: "20",
          goods_rank: "3",
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
          imglist: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg"
            },
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg"
            }
          ]
        },
        {
          head_pic: "",
          nickname: "HIAO",
          add_time: "5-21",
          attr_value: "颜色分类",
          content:
            "物美价廉，图片和实物相符合，个人很喜欢，没有色差我特别喜欢，推荐给大家。",
          goods_name: "短袖女2019新款夏ins潮韩版打底衫百白白白",
          attr_price: "20",
          goods_rank: "3",
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
          imglist: ""
        }
      ],
      evasb: [
        {
          head_pic: "",
          nickname: "HIAO1",
          add_time: "5-21",
          attr_value: "颜色分类",
          content:
            "物美价廉，图片和实物相符合，个人很喜欢，没有色差我特别喜欢，推荐给大家。",
          goods_name: "短袖女2019新款夏ins潮韩版打底衫百白白白",
          attr_price: "20",
          goods_rank: "3",
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
          imglist: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg"
            },
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg"
            }
          ]
        },
        {
          head_pic: "",
          nickname: "HIAO1",
          add_time: "5-21",
          attr_value: "颜色分类",
          content:
            "物美价廉，图片和实物相符合，个人很喜欢，没有色差我特别喜欢，推荐给大家。",
          goods_name: "短袖女2019新款夏ins潮韩版打底衫百白白白",
          attr_price: "20",
          goods_rank: "3",
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
          imglist: ""
        }
      ],
      alleva:0
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
  methods:{
      changeeva:function(index){
          this.alleva=index
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
