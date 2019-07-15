<template>
  <div class="foot" id="app-footer">
    <ul class="clearfix">
      <li @click="indexMain();changeimg($event)" class="on indexli">
        <div class="footimg">
          <img src="../assets/images/public/homeNormal.png" alt class="before hidden">
          <img src="../assets/images/public/home.png" alt class="after">
        </div>
        <p>首页</p>
      </li>
      <li @click="product();changeimg($event)">
        <div class="footimg">
          <img src="../assets/images/public/classify.png" alt class="before">
          <img src="../assets/images/public/classifyActive.png" alt class="hidden after">
        </div>
        <p>分类</p>
      </li>
      <li class="scan">
        <div class="footimg">
          <img src="../assets/images/public/scan01.png" alt>
        </div>
        <p></p>
      </li>
      <li @click="changeimg($event)">
        <div class="footimg">
          <img src="../assets/images/public/shopsCar.png" alt class="before">
          <img src="../assets/images/public/shopsCarActive.png" alt class="hidden after">
        </div>
        <p>购物车</p>
      </li>
      <li @click="changeimg($event)">
        <div class="footimg">
          <img src="../assets/images/public/personal.png" alt class="before">
          <img src="../assets/images/public/personalActive.png" alt class="hidden after">
        </div>
        <p>个人</p>
      </li>
    </ul>
  </div>
</template>


<script>
import "../assets/css/public/foot.css";
export default {
  name: "app-footer",
  methods: {
    product() {
      this.$router.push("/product/productlist");
    },
    indexMain() {
      this.$router.push("/");
    },
    changeimg:function(event){
      $(event.currentTarget).addClass("on")
      $(event.currentTarget).find(".before").addClass("hidden")
      $(event.currentTarget).find(".after").removeClass("hidden")
      $(event.currentTarget).siblings().find(".before").removeClass("hidden")
      $(event.currentTarget).siblings().find(".after").addClass("hidden")
      $(event.currentTarget).siblings().removeClass("on")
    }
  }
};
</script>


