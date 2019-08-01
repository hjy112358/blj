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
        <li class="swiper-slide " @click="chagepage(1)" :class='pageclass==1?"active-nav":""'>
          <p class="font-18">首页</p>
        </li>
        <li class="swiper-slide" @click="chagepage(2)" :class='pageclass==2?"active-nav":""'>
            <p class="font-18">宝贝</p>
        </li>
      </ul>
    </div>
    <div id="page" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slidepage" v-show='pageone==1'>
          <div class="indexlit">
            <img :src="store_detail.store_adv" alt />
            <div class="classifybox">
              <div class="newgoods flex jus-between align-c">
                <p class="font-16">新品首发</p>
              </div>
            </div>
            <div class="goodsimgs"></div>
          </div>
        </div>
         <div class="swiper-slide slidepage" v-show='pageone==2'>
          <div class="indexlit">
            <img :src="store_detail.store_adv" alt />
            <div class="classifybox">
              <div class="newgoods flex jus-between align-c">
                <p class="font-16">新品首发1</p>
              </div>
            </div>
            <div class="goodsimgs"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/store/store.css";
</style>
<script>
export default {
  name: "storeindex",
  data: function() {
    return {
      store_detail: { store_name: "店铺名称", store_detail: "100" },
      focus: 0,
      pageone:1,
      pageclass:1
    };
  },
  methods: {
    collects: function() {
      this.focus = !this.focus;
    },
    chagepage:function(index){
        this.pageone=index;
        this.pageclass=index
    }
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
    var myNav = new Swiper("#nav", {
      spaceBetween: 10,
      slidesPerView: 2,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      on: {
        tap: function() {
          myPage.slideTo(myNav.clickedIndex);
        }
      }
    });
  }
};
</script>

