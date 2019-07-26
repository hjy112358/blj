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
              <el-progress :percentage="percentage" :format="format" :text-inside="true"></el-progress>
              <div class="gradeclass flex jus-between">
                <span>v{{star}}</span>
                <span>v{{end}}</span>
              </div>
            </div>
          </div>
          <div class="gradetext">
            <p class="font-16">{{date.all_money}}</p>
            <p class="font-16">我的团队收益</p>
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
                <p class="font-16">{{date.nickname}}</p>
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
            <!-- <section class="my-swiper">
              <swiper :swiperOption="swiperOption">
                <swiper-slide class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key">
                  <a href="javascript:void(0)" @click="teamReturnRebate()">
                    <div>
                      <img class="my-swp-img" :src="slide.imgUrl" />
                    </div>
                    <p class="font-16">{{slide.text}}</p>
                  </a>
                </swiper-slide>
              </swiper>
            </section>-->
            <section class="my-icons">
              <swiper :options="iconSwiperOption">
                <swiper-slide class="my-icons-silde" v-for="(slide, key) in iconsList" :key="key">
                  <ul class="my-icons-ul">
                    <li
                      class="my-icons-li"
                      v-for="(value, key) in slide.list"
                      :key="key"
                      data-id="value.id"
                    >
                      <a href="javascript:void(0)">
                        <div>
                          <img class="my-swp-img" :src="value.imgSrc" />
                        </div>
                        <p class="font-16">{{value.text}}</p>
                      </a>
                    </li>
                  </ul>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </section>
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
<style>
.teamReturn .el-progress-bar {
  width: 420px;
  height: 4px;
}
.teamReturn .el-progress-bar__inner,
.teamReturn .el-progress-bar__outer {
  height: 4px !important;
}
.el-progress-bar__inner {
  background: -webkit-linear-gradient(left, #c99758, #f6d7a3);
  background: -o-linear-gradient(left, #c99758, #f6d7a3);
  background: -moz-linear-gradient(left, #c99758, #f6d7a3);
  background: linear-gradient(to right, #c99758, #f6d7a3);
}
.el-progress-bar__outer {
  overflow: initial;
}
.el-progress-bar__innerText {
  color: #ff4c4c;
  margin-top: 10px;
}
.el-progress-bar__inner:after {
  content: "";
  width: 20px;
  height: 12px;
  background: #fff;
  position: absolute;
  top: -4px;
  right: -10px;
  border: 2px solid #ca9759;
  border-radius: 10px;
}
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
      star: 1,
      percentage: 20,
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
      iconsList: [
        {
          menu: [
            {
              list: [
                {
                  imgUrl: require("../../assets/images/wallet/pri02.png"),
                  text: "代理收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri04.png"),
                  text: "合伙人收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "商家收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "市代收益"
                }
              ]
            },
            {
              list: [
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "县代收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri01.png"),
                  text: "加速释放"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri03.png"),
                  text: "收益分红"
                }
              ]
            }
          ],
          menu: [
            {
              list: [
                {
                  imgUrl: require("../../assets/images/wallet/pri02.png"),
                  text: "代理收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri04.png"),
                  text: "合伙人收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "商家收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "市代收益"
                }
              ]
            },
            {
              list: [
                {
                  imgUrl: require("../../assets/images/wallet/pri05.png"),
                  text: "县代收益"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri01.png"),
                  text: "加速释放"
                },
                {
                  imgUrl: require("../../assets/images/wallet/pri03.png"),
                  text: "收益分红"
                }
              ]
            }
          ]
        }
      ]
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
  methods: {
    format(percentage) {
      return percentage >= 0 ? `${percentage}` : `${percentage}`;
    }
  },
  mounted() {},
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

