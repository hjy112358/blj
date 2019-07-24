<template>
  <div class="teamReturn">
    <div class="grade">
      <div class="grade01">
        <div class="gradeonebox">
          <div class="gradeoneMsg flex jus-start">
            <div class="gradeoneimg">
              <img src="../../assets/images/public/user.png" alt />
            </div>
            <div class="gradeoneline">
              <p>{{date.nickname}}</p>
              <span class="font-10">还有{{date.cha}}点升级</span>
            
              <div class="gradeclass flex jus-between">
                <span>v{{star}}</span>
                <span>v{{end}}</span>
              </div>
            </div>
          </div>
          <div class="gradetext">
            <p class="font-13">{{date.all_money}}</p>
            <p class="font-10">我的团队收益</p>
          </div>
        </div>
      </div>
      <div class="grade02">
        <div class="grade02Class">
          <ul class="clearfix">
            <li>
              <a href="#myteam">
                <img src="../../assets/images/wallet/team.png" alt width="23" height="21" />
                <p class="font-16">团队人数</p>
              </a>
            </li>
            <li>
              <a href="#myteam">
                <img src="../../assets/images/wallet/privilege.png" alt width="23" height="21" />
                <p class="font-16">我的特权</p>
              </a>
            </li>
            <li>
              <a href="javascript:void()" @click="teamReturnRebate()">
                <img src="../../assets/images/wallet/rebate.png" alt width="21" height="21" />
                <p class="font-16">代理收益</p>
              </a>
            </li>
            <li>
              <a href="#growth">
                <img src="../../assets/images/wallet/graph.png" alt width="18" height="18" />
                <p class="font-16" style="margin-top:11px">成长周</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- 我的团队人数 -->
        <div class="myteam" id="myteam">
          <div class="flex jus-between align-c">
            <p class="maintitle">我的团队人数</p>
            <p class="font-16 maincolor" style="padding-top:10px">{{date.all_count}}人</p>
          </div>

          <div class="teamlist">
            <ul class="clearfix">
              <li>
                <div>
                  <img src="../../assets/images/public/user.png" alt />
                </div>
                <p class="font-14">{{date.nickname}}</p>
              </li>

              <li>
                <div>
                  <img src="../../assets/images/wallet/addteam.png" alt />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 我的特权 -->
        <div class="privilege" id="myteam">
          <p class="maintitle">我的特权</p>
          <div class="prilist">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0)" @click="teamReturnRebate()">
                    <div>
                      <img src="../../assets/images/wallet/pri02.png" alt />
                    </div>
                    <p class="font-12">代理收益</p>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)" @click="teamReturnOther()">
                    <div>
                      <img src="../../assets/images/wallet/pri04.png" alt />
                    </div>
                    <p class="font-12">合伙人收益</p>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)" @clicl="teamReturnOther()">
                    <div>
                      <img src="../../assets/images/wallet/pri05.png" alt />
                    </div>
                    <p class="font-12">商家收益</p>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)" @clicl="teamReturnOther()">
                    <div>
                      <img src="../../assets/images/wallet/pri05.png" alt />
                    </div>
                    <p class="font-12">市代收益</p>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)" @clicl="teamReturnOther()">
                    <div>
                      <img src="../../assets/images/wallet/pri05.png" alt />
                    </div>
                    <p class="font-12">县代收益</p>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a href="javascript:void(0)">
                    <div>
                      <img src="../../assets/images/wallet/pri01.png" alt />
                    </div>
                    <p class="font-12">加速释放</p>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a href="javascript:void(0)">
                    <div>
                      <img src="../../assets/images/wallet/pri03.png" alt />
                    </div>
                    <p class="font-12">收益分红</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/wallet/teamreturn.css";
@import "swiper/dist/css/swiper.css";

</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import $ from "jquery";
export default {
  name: "teamReturn",
  data: function() {
    return {
      date: {
        nickname: "测试",
        cha: "100",
        all_money: "48.52",
        all_count: "2"
      },
      star: 1
    };
  },
  computed: {
    end: function() {
      return this.star + 1;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
     
  },
  mounted(){
    //   new Swiper('.swiper-container', {
    //         slidesPerView: 5,
    //         spaceBetween: 7,
    //         freeMode: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //     });
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

