<template>
  <div class="storelist">
     <div class="maincolorbg flex jus-between align-c tophead">
            <div class="inputbox  pos-r">
                <input type="text" placeholder="搜索店铺内宝贝" class="font-15">
            </div>
            <a href="javascript:void(0)"></a>
        </div>


        <div id="nav" class="swiper-container ">
            <ul class="swiper-wrapper clearfix">
                <li class="swiper-slide" v-for="(nav,index) in navs" :key='index' @click="changepage(index)"  :class="activeClass == index ? 'active':''">
                    <a href="javascript:void(0)">
                    <p class="font-16">{{nav.sc_name}}</p>
                    </a>
                </li>   
              
               
            </ul>
        </div>
        <div id="page" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slidepage" v-for="(stores,index) in storelist" :key='index' v-show='shopage==index'> 
                    <div class="storesbox ">
                        <ul>
                            <li v-for="(store,index) in stores.stores" :key='index'>
                                <div class=" flex jus-between align-c">
                                    <div class="flex jus-start">
                                        <div class="storeimg">
                                            <img :src="store.store_avatar" alt="" v-if='store.store_avatar!=""'>
                                            <img src="../../assets/images/public/user.png" alt="" v-else>
                                        </div>
                                        <div>
                                            <p class="font-16">{{store.store_name}}</p>
                                            <p class="font-10 col8f">{{store.tag_first}} | {{store.tag_second}} | {{store.tag_third}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a class="font-16 goIn" href="javascript:void(0)" @click="gostore()">进店</a>
                                    </div>
                                </div>
                                <div class="storegoodsimg flex jus-start align-c">
                                    <div v-for="(storeimg,index) in store.imgs" :key='index'>
                                        <a href="javascript:void(0)" >
                                        <img :src="storeimg.original_img" alt="">
                                        </a>
                                    </div>
                                </div>
                            </li>   
                        </ul>
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
  name: "storelist",
  data:function(){
      return {
          navs:[{sc_name:'全部'},{sc_name:'养生'},{sc_name:'食品'},{sc_name:'美妆'},{sc_name:'自营'},{sc_name:'男装'},{sc_name:'手机'}],
          storelist:[
              {stores:[
                  {store_avatar:'',store_name:'品质珠饰专营店0',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                  {store_avatar:'',store_name:'品质珠饰专营店0',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]},
                 
              {stores:[
                  {store_avatar:'',store_name:'品质珠饰专营店1',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}
                      ]},
                  {store_avatar:'',store_name:'品质珠饰专营店1',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]
                      }]},
              {stores:[
                  {store_avatar:'',store_name:'品质珠饰专营店2',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                  {store_avatar:'',store_name:'品质珠饰专营店2',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]},
              {stores:[
                  {store_avatar:'',store_name:'品质珠饰专营店3',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                  {store_avatar:'',store_name:'品质珠饰专营店3',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]},
              {stores:[{store_avatar:'',store_name:'品质珠饰专营店4',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                  {store_avatar:'',store_name:'品质珠饰专营店4',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]},
              {stores:[
                  {store_avatar:'',store_name:'品质珠饰专营店5',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                      {store_avatar:'',store_name:'品质珠饰专营店5',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                          {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                          {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]},
              {stores:[{store_avatar:'',store_name:'品质珠饰专营店6',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                  {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
                  {store_avatar:'',store_name:'品质珠饰专营店6',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},
                      {original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]}
            

           ],
           shopage:0,
           activeClass:0
      }
  },mounted: function() {
         var myNav = new Swiper('#nav', {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        on: {
            tap: function () {
                myPage.slideTo(myNav.clickedIndex)
            }  
        }
    })
  
  },
  methods:{
    
    changepage:function(index){
        this.shopage=index
        this.activeClass=index
    },
    gostore:function(){
        this.$router.push("/store/storeindex")
    }
  },
  created: function() {
    this.$emit("footer", false);
  },
   beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next()
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next()
  }
  
};
</script>

<style>
</style>
