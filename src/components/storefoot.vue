<template>
  <div class="storefoot foot">
    <ul class="clearfix">
      <li @click="indexMain();changeimg($event)" class="on indexli">
        <div class="footimg">
          <img src="../assets/images/good/storeindex.png" alt class="before hidden">
          <img src="../assets/images/good/storeindexa.png" alt class="after">
        </div>
        <p>首页</p>
      </li>
      <li @click="allgoods();changeimg($event)">
        <div class="footimg">
          <img src="../assets/images/good/allgoods.png" alt class="before">
          <img src="../assets/images/good/allgoodsa.png" alt class="hidden after">
        </div>
        <p>全部宝贝</p>
      </li>
    
      <li>
        <div class="footimg">
          <img src="../assets/images/good/contact.png" alt class="before">
          <img src="../assets/images/good/contacta.png" alt class="hidden after">
        </div>
        <p>客服</p>
      </li>
    
    </ul>
  </div>
</template>


<script>
import "../assets/css/public/foot.css";
export default {
  name: "storefoot",
  methods: {
    allgoods() {
      this.$router.push("/store/storeall");
    },
    indexMain() {
      this.$router.push("/store/storeindex");
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


