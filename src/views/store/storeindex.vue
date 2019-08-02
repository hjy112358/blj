<template>
  <div class="storeindex">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <img src="../../assets/images/public/searchR.png" alt style="width:16px; height:16px" />
    </div>
    <div class="storemsg maincolorbg flex jus-between align-c">
      <div class="flex jus-start">
        <div class="storeimgs pos-r">
          <img src="../../assets/images/public/user.png" alt class="storeimg" />
          <img src="../../assets/images/good/storeFocus.jpg" alt class="storelogo pos-a" />
        </div>
        <div class="storename">
          <p class="font-18">{{store_detail.store_name}}</p>
          <div class="flex jus-start">
            <div class="crownlist">
              <ul class="clearfix">
                <li>
                  <img src="../../assets/images/good/crown.png" alt />
                </li>
                <li>
                  <img src="../../assets/images/good/crown.png" alt />
                </li>
                <li>
                  <img src="../../assets/images/good/crown.png" alt />
                </li>
                <li>
                  <img src="../../assets/images/good/crown.png" alt />
                </li>
                <li>
                  <img src="../../assets/images/good/crown.png" alt />
                </li>
              </ul>
            </div>
            <p class="font-10">粉丝数{{store_detail.store_detail}}</p>
          </div>
        </div>
      </div>
      <p class="attention font-16" @click="collects()" id="guanzhu">
        <span v-show="focus==0">关注</span>
        <span v-show="focus==1">已关注</span>
      </p>
    </div>

    <div id="nav" class="swiper-container maincolorbg storeindex">
      <ul class="swiper-wrapper clearfix">
        <li class="swiper-slide active-nav" >
          <p class="font-18">首页</p>
        </li>
        <li class="swiper-slide" @click="allbody()">
          <p class="font-18">宝贝</p>
        </li>
      </ul>
    </div>
    <div id="page" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slidepage" >
          <div class="indexlit">
            <img :src="store_detail.store_adv" alt />
            <div class="classifybox">
              <div class="newgoods flex jus-between align-c">
                <p class="font-16">新品首发</p>
              </div>
              <div class="levelSec">
                <section class="my-swiper">
                  <swiper :options="swiperOption">
                    <swiper-slide
                      class="my-swp-silde"
                      v-for="(slide, key) in swiperList"
                      :key="key"
                    >
                      <a href="javascript:void(0)">
                        <img class="my-swp-img" v-lazy="slide.imgUrl" />
                      </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>
                </section>
              </div>
            </div>
            <div class="goodsimgs">
              <!-- 店铺详情 -->
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <storefoot />
  </div>
</template>
<style scoped>
@import "../../assets/css/store/store.css";
</style>
<style>
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background: #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #ff4c4c;
}
</style>

<script>
import storefoot from "../../components/storefoot.vue";
export default {
  name: "storeindex",
  data: function() {
    return {
      store_detail: {
        store_name: "店铺名称",
        store_detail: "100",
        store_adv:
          "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/24e718622b86e7acf60c35807307dd2ae5873180.jpeg"
      },
      focus: 0,
      pageone: 1,
      shopage:0,
      pageclass: 1,
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 2000
      },
      swiperList: [
        { imgUrl: require("../../assets/images/index/banner01-1.jpg") },
        { imgUrl: require("../../assets/images/index/banner9.jpg") },
        { imgUrl: require("../../assets/images/index/banner02.jpg") },
        { imgUrl: require("../../assets/images/index/banner05.jpg") },
        { imgUrl: require("../../assets/images/index/banner8.jpg") }
      ]    
    };
  },
  methods: {
    collects: function() {
      this.focus = !this.focus;
    },
    allbody:function(){
      this.$router.push("/store/storeall")
    }
  },
  components: {
    storefoot
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
  mounted: function() {
    new Swiper("#nav", {
      spaceBetween: 10,
      slidesPerView: 2,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    
    });
   
  }
};
</script>

