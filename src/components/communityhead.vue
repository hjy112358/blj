<template>
  <div class="communityhead">
    <div class="bannerlistbg">
      <!-- <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>-->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/banner.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/banner.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
      <div class="bannermark">
        <img src="../assets/images/community/bannerimgBg.png" alt />
      </div>
    </div>
  </div>
</template>

<style scope>
@import "../assets/css/public/index.css";
</style>
<style>
.van-swipe {
  border-radius: 20px;
  z-index: 2;
}
.van-swipe__track {
  height: 340px;
}
.van-swipe-item img {
  height: 340px;
}
.van-swipe__indicator {
  width: 16px;
  height: 16px;
  border: 2px solid #ff4c4c;
  background: #fff;
  opacity:1
}
.van-swipe__indicator--active {
  background: #ff4c4c;
  background-color:#ff4c4c !important;
}
</style>
<script>
export default {
  name: "communityhead",
  data() {
    return {
      images: [
        "http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/banner.jpg",
        "http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/banner.jpg"
      ]
    };
  }
};
</script>

<style>
</style>
