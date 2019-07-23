<template>
  <div class="productDetails">
    <div class="tophead maincolorbg align-c flex jus-between">
      <a href="javascript:void(0)" @click="go" class="backicon">
        <img src="../../assets/images/public/backW.png" alt />
      </a>
      <p class="centerP">商品详情页</p>
      <a href="javascript:void(0)"></a>
    </div>
    <div class="prodetailsbox ">
      <section class="myswiper">
        <swiper :options="swiperOption">
          <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key">
            <a href="javascript:void(0)">
              <img class="my-swp-img" v-lazy="slide.imgUrl" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <div class="prodetailtext">
        <div class="goodsdetail goodsbox">
          <p class="maincolor font-20">
            <i class="font-12">￥</i>
            {{prodetail.shop_price}}
          </p>
          <p class="font-18 goodstitle">{{prodetail.goods_name}}</p>
          <p class="font-14 goodstrait">{{prodetail.keywords}}</p>
        </div>

        <div class="welfare">
          <div class="flex jus-between align-c" style="font-weight: 600">
            <div class="flex jus-start">
              <p class="maincolor font-16">Z券</p>
              <p class="walfareml38 maincolor font-16">赠送Z券</p>
            </div>
            <p class="maincolor font-16">{{prodetail.coupon_price}}</p>
          </div>
        </div>

        <!-- 保障 -->
        <div class="safeguard flex jus-start align-c">
          <p class="font-14">保障</p>
          <div class="flexgrow1 flex jus-between align-c walfareml38">
            <p class="welfare2c font-14">正品保证 极速退货 七天退换</p>
            <p class="font-14">></p>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <h3 class="font-18">宝贝详情</h3>
      <div class="detailsbox" v-html="prodetail.goods_content">{{prodetail.goods_content}}</div>
    </div>

    <a href="javascript:void(0)" class="returnTop" @click="gotop()">
      <img src="../../assets/images/public/gotop.png" alt />
    </a>

    <!-- 规格型号 -->
    <div class="choosemodels" v-show='showmodel==1'>
      <div class="modelsbox">
        <div class="modelMsg flex jus-start align-c">
          <img :src="goods_info.original_img" alt />
          <div>
            <span class="maincolor font-16" id="attr_price">￥{{goods_info.attr_price}}</span>
            <p
              class="font-18"
              style="word-wrap:break-word;line-height:20px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;width: 100%;"
            >{{goods_info.goods_name}}</p>
          </div>
        </div>
        <!-- 型号 -->
        <div class="goodstype">
          <p>规格</p>
          <ul class="clearfix">
            <li
              :class="{on:i===key}"
              v-for="(attr, key) in goods_info.goodsattr"
              :key="key"
              @click="active(key)"
            >{{attr.attr_value}}</li>
          </ul>
        </div>
        <div class="buycount flex jus-between align-c">
          <p class="font-16">购买数量</p>
          <div class="changeCount">
            <a href="javascript:void(0)" class="font-15 subtractCount" @click="sub()">-</a>
            <input type="text" v-model="num" class="font-15 coutnum" id="attr_num"  readonly style="width:3rem"/>
            <a href="javascript:void(0)" class="font-15 addCount" @click="add()">+</a>
          </div>
        </div>
        <div class="flex jus-between align-c goodsbtn" style="text-align: center">
          <a href="javascript:void(0)" class="font-18 maincolorbg" @click="joinshop()" v-show="shopcar==1">加入购物车</a>
          <a href="javascript:void(0)" class="font-18 maincolorbg" @click="buyshop()" v-show="shopbuy==1">立即购买</a>
        </div>
        <div class="closechoose" @click="closemoel()">
          <img src="../../assets/images/good/quit.png" alt class="closeb" />
        </div>
      </div>
    </div>

      <!-- 协议 -->
    <div class="agreement" v-show="agreebox==1">
        <div class="agreementbox">
            <div class="agreementmsg">
                <p>甲方：江苏必量家电子商务有限公司</p>
                <p>乙方：</p>
                <p>在签署本协议之前，请乙方仔细阅读本协议各条款，如有疑问请及时咨询。</p>
                <p>乙方在签署本协议后即视为完全理解并同意接受本协议的全部条款。</p>
                <p>根据《中华人民共和国合同法》相关法律、法规，甲乙双方在平等、自愿、公平、诚实、信用的基础上，就甲方为乙方提供产品服务的有关事宜，达成协议如下：</p>
                <p>一、乙方的权利及义务</p>
                <p>1、乙方参与本活动必须符合以下条件：年龄在22-60周岁内。</p>
                <p>2、乙方参与活动时，应向甲方提供乙方的真实且有效中华人民共和国居民身份证，中国建设银行或中国农业银行或中国银行储蓄卡，有效手机号码。</p>
                <p>3、乙方应配合甲方工作人员完成信用备案。</p>
                <p>4、乙方自愿参加甲方合约销售活动，并承诺：</p>
                <p>账户名称 </p>
                <p>自本协议签订之日起 （时间）内在平台完成推广任务</p>
                <p>账户下必量家本次活动所赠注册券每周释放余额不得低于 </p>
                <p>注册券释放到余额的释放方式，详见附则</p>
                <p>乙方支付产品费1元，在甲方平台购买产品。 </p>
                <p>产品名称 </p>
                <p>产品型号 </p>
                <p>产品总价值 </p>
                <p>产品赠送注册券 </p>
                <p>4、本协议生效后，乙方所选产品的售后服务由甲方指定的售后服务网点承担，按照国家标准享受“三包服务”。</p>
                <p>5、在本协议有效期内，乙方不得降低每周最低注册券转换余额标准，参与活动最低释放标准</p>
                <p>为 。</p>
                <p>若乙方实际注册券转换率达不到最低标准，由甲方进行督促：</p>
                <p>协议期第一周未完成任务，由甲方APP平台督促。</p>
                <p>协议期第二周未完成任务，由甲方客服专员督促。</p>
                <p>协议期第三周未完成任务，由甲方客服经理督促。</p>
                <div class="agreebox">

                    <p for="agree" class="font-16">同意签署本协议</p>
                </div>
            </div>
            <img src="../../assets/images/good/close.png" alt="" class="closeAgree" @click="agreeclose()">
        </div>
    </div>

    <profoot />
  </div>
</template>
<style scoped>
@import "../../assets/css/product/productetail.css";
@import "swiper/dist/css/swiper.css";
</style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
import profoot from "../../components/product_foot.vue";
export default {
  name: "productDetails",
  data: function() {
    return {
      swiperOption: {
        // pagination: { el: ".swiper-pagination" }, // 分页按钮
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },
      iconSwiperOption: {
        pagination: { el: ".swiper-pagination" }
      },
      swiperList: [
        {
          imgUrl:
            "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/3d06735baf2d50c1f2e0108775eb81f0.jpg"
        },
        {
          imgUrl:
            "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/441c13e903dd4eacfb74fec32767af88.jpg"
        },
        {     
          imgUrl:
            "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/6a1088a271aa1a50b83ed7bbf0ff08d7.jpg"
        }
      ],
      prodetail: {
        shop_price: 123.0,
        goods_name: "白桦茸粉",
        keywords: "120 * 120",
        coupon_price: "100",
        goods_content:
          '<p><img src="http://abc.fyc365.cn/public/upload/goods/2019/05-22/928b88333dab043b0d6c6b8b4ba40442.png" style="float:none;" title="1.png"></p>'
      },
      goods_info: {
        original_img:
          "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/28705cfdca4e2c7c121d32d344373033.jpg",
        attr_price: 1,
        goods_name: 1,
        goodsattr: [
          { attr_value: "120*120" },
          { attr_value: "红色150" },
          { attr_value: "蓝色120" },
          { attr_value: "蓝色120" },
          { attr_value: "蓝色120" },
          { attr_value: "蓝色120" }
        ]
      },
      i: 0,
      num:1,
      showmodel:0,
      shopcar:0,
      shopbuy:0,
      agreebox:0
    };
  },
  components: {
    swiper,
    swiperSlide,
    profoot
  },
  methods: {
    go: function() {
      this.$router.go(-1); //返回上一页
    },
    agreeclose:function(){
      this.agreebox=0
    },
    gotop: function() {
      window.scrollTo(0, 0);
    },
    active: function(key) {
      this.i = key;
    },
    sub:function(){
      if(this.num>=2){
          this.num=this.num-1
      }else{
         this.num=1
      }
    },
    add:function(){
       this.num=this.num+1
    },
    closemoel:function(){
      this.showmodel=0
    },
    joinshop:function(){
      this.showmodel=0
    },
    buyshop:function(){
      this.showmodel=0
    },
    showmodelbox:function(){
      this.showmodel=1,
      this.shopcar=1,
      this.shopbuy=0
    },
    showmodelboxbuy:function(){
      this.showmodel=1,
      this.shopcar=0,
      this.shopbuy=1
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
  }
};
</script>

