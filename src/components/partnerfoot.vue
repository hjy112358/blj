<template>
  <div class="partnerfoot">
    <div class="storefooter partner">
      <ul class="clearfix">
        <li @click="goindex()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/storeindex.png" alt width="17" height="17" />
            <p class="font-16">首页</p>
          </a>
        </li>
        <li @click="partall()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/allgoods.png" alt width="15" height="17" />
            <p class="font-16">全部宝贝</p>
          </a>
        </li>
        <li class="contractCus" @click="contact()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/serviceFoot.png" alt width="18" height="17" />
            <p class="font-16">联系客服</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="contact " v-show='cont==1'>
      <div class="contactimg">
        <p class="font-16">
          拨打电话
          <span>(0513)5588 5526</span>
        </p>
        <a href="tel:0513-5588-5526" class="contactus"></a>
        <img src="../assets/images/good/close.png" alt class="closeimg" @click="close()" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/public/foot.css";
</style>
<script>
export default {
  name: "partnerfoot",
  data() {
    return {
      cont:0
    };
  },
  methods:{
      goindex:function(){
          this.$router.push("/")
      },
      partall:function(){
          this.$router.push("/partner/partner_all")
      },
      contact:function(){
        this.cont=1
      },
      close:function(){
         this.cont=0
      }
  }
};
</script>

<style>
</style>
