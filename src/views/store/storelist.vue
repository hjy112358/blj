<template>
  <div class="storelist">
     <div class="maincolorbg flex jus-between align-c tophead">
            <div class="inputbox  pos-r">
                <input type="text" placeholder="搜索店铺内宝贝" class="font-15">
            </div>
            <a href=""></a>
        </div>


        <div id="nav" class="swiper-container ">
            <ul class="swiper-wrapper clearfix">
                <li class="swiper-slide" v-for="(nav,index) in navs" :key='index'>
                    <a href="javascript:void()">
                    <p class="font-13">{{nav.sc_name}}</p>
                    </a>
                </li>   
              
               
            </ul>
        </div>
        <div id="page" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slidepage">
                    <div class="storesbox ">
                        <ul>
                            
                            <li v-for="(store,index) in storelist" :key='index'>
                                <div class=" flex jus-between align-c">
                                    <div class="flex jus-start">
                                        <div class="storeimg">
                                            <img :src="store.store_avatar" alt="" v-if='store.store_avatar!=""'>
                                            <img src="../../assets/images/public/user.png" alt="" v-else>
                                        </div>
                                        <div>
                                            <p class="font-14">{{store.store_name}}</p>
                                            <p class="font-10 col8f">{{store.tag_first}} | {{store.tag_second}} | {{store.tag_third}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a class="font-12 goIn" href="javascript:void()">进店</a>
                                    </div>
                                </div>
                                <div class="storegoodsimg flex jus-between align-c">
                                    <div v-for="(storeimg,index) in store.imgs" :key='index'>
                                        <a href="javascript:void(0)">
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
/* @import "../../assets/css/store/store.css"; */
</style>
<script>
export default {
  name: "storelist",
  data:function(){
      return {
          navs:{sc_name:'全部',sc_name:'养生',sc_name:'食品',sc_name:'美妆',sc_name:'自营',sc_name:'男装',sc_name:'手机'},
          storelist:[{store_avatar:'',store_name:'品质珠饰专营店',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]},
          {store_avatar:'',store_name:'品质珠饰专营店',tag_first:'正在热卖',tag_second:"超值优惠",tag_third:'新品首发',imgs:[{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"},{original_img:"http://2019-05-31.oss-cn-shanghai.aliyuncs.com/009113c27e0c750f9d1c36adbe7f9b9d4b735834.jpeg"}]}]
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
    var myPage = new Swiper('#page', {
        on: {
            slideChangeTransitionStart: function () {
                updateNavPosition()
            }
        }
    })
  },
  
  created: function() {
    this.$emit("footer", false);
  }
  
};
</script>

<style>
</style>
