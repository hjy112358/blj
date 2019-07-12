<template>
  <div class="productDetails">
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
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/product/productetail.css";
@import "swiper/dist/css/swiper.css";
</style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
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
            "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/3d06735baf2d50c1f2e0108775eb81f0.jpg",
          shop_price: 123.0,
          goods_name: "白桦茸粉",
          keywords: 120 * 120
        },
        {
          imgUrl:
            "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/441c13e903dd4eacfb74fec32767af88.jpg"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    go: function() {
      this.$router.go(-1); //返回上一页
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
    this.$emit("AppFoot", false);
  }
};
</script>

