<template>
  <div class="hello">
    <section class="my-swiper">
      <swiper :options="swiperOption">
        <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key">
          <a href="javascript:void(0)">
            <img class="my-swp-img" v-lazy="slide.imgUrl" >
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <!-- 搜索框 -->
    <div class="searchbbox flex jus-start align-c">
      <a href="javascript:void(0)">
        <div class="location" id="location">
          <span id="city">南通市</span>
        </div>
      </a>
      <div id="fake-search " class="index_search pos-r flex align-c">
        <div class="index_search_mid">
          <form action="javascript:return true">
            <span class="pos-a">
              <img src="../assets/images/index/search.png">
            </span>
            <input type="search" id="search_text" class="search_text" placeholder="搜索商品">
          </form>
        </div>
      </div>
    </div>

    <!-- 分类 -->
    <div class="entry-list clearfix">
      <nav>
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img alt="全部分类" src="../assets/images/index/allfind.png">
              <span>全部分类</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="店铺街" src="../assets/images/index/store.png">
              <span>店铺街</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="品牌街" src="../assets/images/index/brand.png">
              <span>品牌街</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="一元购" src="../assets/images/index/one.png">
              <span>合约消费</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="合伙人" src="../assets/images/index/partner.png">
              <span>合伙人</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="我的订单" src="../assets/images/index/order.png">
              <span>VIP中心</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="购物车" src="../assets/images/index/shopcar.png">
              <span>联营消费</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="个人中心" src="../assets/images/index/personCenter.png">
              <span>一元销售</span>
            </a>
          </li>
          <li>
            <a href="https://blj.ubaoliao.com/#/">
              <img alt="淘宝" src="../assets/images/index/taobao.png">
              <span>淘宝</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img alt="社区" src="../assets/images/index/associate.png">
              <span>社区</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="mainbox">
      <!-- 头条 -->
      <div class="headline">
        <a href="javascript:void(0)">
          <span class="headlineTitle">头条</span>
          <span class="headlinemain">爆品推荐 欢迎大家立即抢购</span>
          <span class="moreimg fr">
            <img src="../assets/images/index/more.png" alt>
          </span>
        </a>
      </div>
      <!-- 优惠 -->
      <div class="discounts">
        <div class="discoutlist clearfix">
          <ul>
            <li class>
              <img src="../assets/images/index/dis01.jpg" alt>
            </li>

            <li class="margin-r0">
              <a href="javascript:void(0)">
                <img src="../assets/images/index/dis002-1.jpg" alt>
              </a>
            </li>
          </ul>
        </div>
        <div class="discoutlist clearfix">
          <ul>
            <li class>
              <a href="javascript:void(0)">
                <img src="../assets/images/index/dis03.jpg" alt>
              </a>
            </li>
            <li class="margin-r0">
              <a href="javascript:void(0)">
                <img src="../assets/images/index/dis04.jpg" alt>
              </a>
            </li>
          </ul>
        </div>
        <div class="discoutlist clearfix">
          <ul>
            <li class>
              <a href="javascript:void(0)">
                <img src="../assets/images/index/dis05-1.jpg" alt>
              </a>
            </li>
            <li class="margin-r0">
              <a href="javascript:void(0)">
                <img src="../assets/images/index/dis06.jpg" alt>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 海报 -->
      <section class="my-swiper scrollimg">
        <swiper :options="swiperOption1">
          <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList1" :key="key">
            <a href="javascript:void(0)">
              <img class="my-swp-img" v-lazy="slide.imgUrl" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <!-- 每日必逛 -->
      <div class="shopAround">
        <div class="indexTitle flex jus-start align-c">
          <img src="../assets/images/index/shopAround.png" alt>
          <p class="maincolor">每日必逛</p>
        </div>
        <div class="adverimg">
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise01.jpg" alt>
            </a>
            <a href="javascript:void(0)" class="margin-r0">
              <img src="../assets/images/index/advertise02.jpg" alt>
            </a>
          </div>
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise03.jpg" alt>
            </a>
            <a href="javascript:void(0)" class="margin-r0">
              <img src="../assets/images/index/advertise04.jpg" alt>
            </a>
          </div>
        </div>
      </div>
      <!-- 海报 -->
      <section class="my-swiper scrollimg">
        <swiper :options="swiperOption2">
          <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList2" :key="key">
            <a href="javascript:void(0)">
              <img class="my-swp-img" v-lazy="slide.imgUrl" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <!-- 酷玩潮流 -->
      <div class="shopAround">
        <div class="indexTitle flex jus-start align-c">
          <img src="../assets/images/index/coldplay.png" alt>
          <p class="font-17 maincolor">酷玩潮流</p>
        </div>
        <div class="adverimg">
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise05.jpg" alt>
            </a>
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise06.jpg" alt>
            </a>
          </div>
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise07.jpg" alt>
            </a>
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise08.jpg" alt>
            </a>
          </div>
        </div>
      </div>
      <!-- 海报 -->
      <section class="my-swiper scrollimg">
        <swiper :options="swiperOption3">
          <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList3" :key="key">
            <a href="javascript:void(0)">
              <img class="my-swp-img" v-lazy="slide.imgUrl" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <!-- 生活品质 -->
      <div class="shopAround"> 
        <div class="indexTitle flex jus-start align-c">
          <img src="../assets/images/index/qualityLife.png" alt>
          <p class="maincolor">生活品质</p>
        </div>
        <div class="adverimg">
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise09.jpg" alt>
            </a>
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise10.jpg" alt>
            </a>
          </div>
          <div class="clearfix">
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise11.jpg" alt>
            </a>
            <a href="javascript:void(0)">
              <img src="../assets/images/index/advertise12.jpg" alt>
            </a>
          </div>
          <div class="adverimglist">
            <ul class="clearfix">
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/index/advertise13.jpg" alt>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/index/advertise14.jpg" alt>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/index/advertise15.jpg" alt>
                </a>
              </li>
              <!-- <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/index/advertise16.jpg" alt>
                </a>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
      <!-- 产品推荐 -->
      <div class="productRec">
        <div class="productTitle">
          <p class="maincolor">
            产品推荐
            <span>Product recommendation</span>
          </p>
        </div>
        <div class="productlist">
          <div>
            <ul class="clearfix">
              <li v-for="(list,index) in prducilist" :key="index">
                <a href="javascript:void(0)">
                  <div class="productimg">
                    <img v-lazy="list.imgurl">
                  </div>
                  <div class="productDetail">

                    <p v-if="list.text1!=''">【{{list.text1}}】<span>{{list.text2}}</span>
                    </p>
                    <p v-else><span>{{list.text2}}</span>
                    </p>
                  </div>
                  <div class="productScale flex jus-between align-c">
                    <p class="maincolor">
                      ￥
                      <i>{{list.price}}</i>
                    </p>
                    <span>库存:{{list.inventory}}</span>
                  </div>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scope>
@import "../assets/css/public/index.css";
@import "swiper/dist/css/swiper.css";
</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
// import baidumap from "http://api.map.baidu.com/api?v=2.0&ak=ryUeCXuyh8oebZGclHCVYW4ffHHf2n7o"
export default {
  name: "index",
  data: function() {
    return {
      swiperOption: {
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },
      iconSwiperOption: {
        pagination: { el: ".swiper-pagination" }
      },
      swiperOption1: {
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },
      swiperOption2: {
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },
      swiperOption3: {
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },

      swiperList: [
        { imgUrl: require("../assets/images/index/banner01-1.jpg") },
        { imgUrl: require("../assets/images/index/banner9.jpg") },
        { imgUrl: require("../assets/images/index/banner02.jpg") },
        { imgUrl: require("../assets/images/index/banner05.jpg") },
        { imgUrl: require("../assets/images/index/banner8.jpg") }
      ],
      swiperList1: [
        { imgUrl: require("../assets/images/index/01.jpg") },
        { imgUrl: require("../assets/images/index/2.jpg") },
        { imgUrl: require("../assets/images/index/3.jpg") },
        { imgUrl: require("../assets/images/index/4.jpg") },
        { imgUrl: require("../assets/images/index/05.jpg") }
      ],
      swiperList2: [
        { imgUrl: require("../assets/images/index/6.jpg") },
        { imgUrl: require("../assets/images/index/7.jpg") },
        { imgUrl: require("../assets/images/index/8.jpg") },
        { imgUrl: require("../assets/images/index/9.jpg") },
        { imgUrl: require("../assets/images/index/10.jpg") }
      ],
      swiperList3: [
        { imgUrl: require("../assets/images/index/11.jpg") },
        { imgUrl: require("../assets/images/index/12.jpg") },
        { imgUrl: require("../assets/images/index/13.jpg") },
        { imgUrl: require("../assets/images/index/14.jpg") },
        { imgUrl: require("../assets/images/index/15.jpg") }
      ],
      prducilist:[{imgurl:require('../assets/images/index/testimg.png'),text1:"净化器 低至4998元",text2:"iPhone XR 全网通4G手机双卡双待 苹果",price:"8699",inventory:"1000"},
      {imgurl:require('../assets/images/index/testimg.png'),text1:"",text2:"iPhone XR 全网通4G手机双卡双待 苹果",price:"8699",inventory:"1000"}]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    // 获取当前地址
    getlocal() {
      if ($("#city").html() == "") {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r) {
          if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
            //坐标
            var cityName = r.address.city;
            console.log(r);
            $("#city").html(cityName);
          }
        });
      }
    },
    gofoot(){
      $(".indexli").click()
    }
  },
  mounted() {
    // this.getlocal();
    this.gofoot();
  }
};
</script>

