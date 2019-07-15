<template>
  <div class="productDetails" >
    <div class="tophead maincolorbg align-c flex jus-between">
      <a href="javascript:void(0)" @click="go" class="backicon">
        <img src="../../assets/images/public/backW.png" alt />
      </a>
      <p class="centerP">商品详情页</p>
      <a href="javascript:void(0)"></a>
    </div>
    <div class="prodetailsbox padding-t136">
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
      <img src="../../assets/images/public/gotop.png" alt="">
    </a>

    <!-- 规格型号 -->
    <div class="choosemodels hidden">
        <div class="modelsbox">
            <div class="modelMsg flex jus-start align-c">
                <img :src="goods_info.original_img" alt="">
                <div>
                    <span class="maincolor font-17" id="attr_price">￥{{goods_info.attr_price}}</span>
                    <p class="font-15 " style="line-height:20px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;width: 100%;">{{goods_info.goods_name}}</p>
                </div>

            </div>
            <!-- 型号 -->
            <div class="goodstype">
                <p>规格</p>
                <ul class="clearfix">
                    <li class="on" ></li>
                </ul>
            </div>
            <div class="buycount flex jus-between align-c">
                <p class="font-14">购买数量</p>
                <div class="changeCount">
                    <a href="javascript:void(0)" class="font-15 subtractCount">-</a>
                    <input type="text" value="1" class="font-15 coutnum" id="attr_num">
                    <a href="javascript:void(0)" class="font-15 addCount">+</a>
                </div>
            </div>

            <div class="closechoose">
                <img src="__STATIC__/images/newimg/quit.png" alt="" class="closeb">
            </div>
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
      goods_info:{
        original_img:"https://2019-05-31.oss-cn-shanghai.aliyuncs.com/28705cfdca4e2c7c121d32d344373033.jpg",
        attr_price:1,
        goods_name:1,



      }
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
    gotop:function(){
       window.scrollTo(0, 0);
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

