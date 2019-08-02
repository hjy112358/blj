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
        <li class="swiper-slide" @click="goindex()">
          <p class="font-18">首页</p>
        </li>
        <li class="swiper-slide active-nav" >
          <p class="font-18">宝贝</p>
        </li>
      </ul>
    </div>
    <div id="page" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slidepage" >
          <div id="nav3" class="swiper-container maincolorbg">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(nav3,index) in nav3s" :key='index' :class='addactive==index?"active-nav":""' @click="changeli(index)">
                <a href="javascript:void(0)">
                  <p class="font-16">{{nav3.name}}</p>
                </a>
              </li>
            </ul>
          </div>
          <div id="page3" class="swiper-container storeindexpage">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidepage" v-for="(stores,index) in storelist" :key='index' v-show='shopage==index'>
                <div class="goodslist">
                  <ul class="clearfix">
                      <li v-for="(store,index) in stores.stores" :key='index'>
                          <div class="googsimg">
                            <img :src="store.original_img" alt />
                          </div>
                          <p class="font-16">{{store.goods_name}}</p>
                          <div class="padding0-10">
                            <div class="flex jus-between align-c">
                              <p class="font-16 maincolor">￥{{store.shop_price}}</p>
                              <p class="font-14 goodpay">{{store.sale_num}}人付款</p>
                            </div>
                          </div>
                      </li>
                  </ul>
                </div>
              </div>
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
      nav3s:[{name:'综合'},{name:'销量'},{name:'新品'},{name:'价格'}],
      addactive:0,
      storelist:[
            {stores:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/2fd042862fa523cddbecc9cefad47ede8d1c7599.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉1',shop_price:'100',sale_num:"10"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/36a0b3b8c6a04b3a9c64c35daa5373c255830211.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉1',shop_price:'1000',sale_num:"20"}]},
            {stores:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/2fd042862fa523cddbecc9cefad47ede8d1c7599.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉2',shop_price:'100',sale_num:"10"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/36a0b3b8c6a04b3a9c64c35daa5373c255830211.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉2',shop_price:'1000',sale_num:"20"}]},
            {stores:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/2fd042862fa523cddbecc9cefad47ede8d1c7599.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉3',shop_price:'100',sale_num:"10"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/36a0b3b8c6a04b3a9c64c35daa5373c255830211.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉3',shop_price:'1000',sale_num:"20"}]},
            {stores:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/2fd042862fa523cddbecc9cefad47ede8d1c7599.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉4',shop_price:'100',sale_num:"10"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/36a0b3b8c6a04b3a9c64c35daa5373c255830211.jpeg",goods_name:'苗疆老苗汤肝肾养护泡脚粉4',shop_price:'1000',sale_num:"20"}]},

           ]
    };
  },
  methods: {
   
    chagepage: function(index) {
      this.pageone = index;
      this.pageclass = index;
    },
    changeli:function(index){
      this.addactive=index;
      this.shopage=index
    },
    goindex:function(){
        this.$router.push("/store/storeindex")
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

