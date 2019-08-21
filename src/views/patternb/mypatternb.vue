<template>
  <div class="mypatternb">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="promotionlist">
      <div class="productitle">
        <img src="../../assets/images/patternb/titlepng.png" alt />
      </div>
      <div class="promotdetail">
        <ul>
          <li v-for="(list,index) in mypatternblist1" :key="index">
            <div class="promotebox flex jus-between align-c">
              <div class="promoteimg">
                <img :src="list.imgUrl" alt />
              </div>
              <div class="promotetext">
                <p class="promotedes">{{list.description}}</p>
                <div class="promotename">
                  <p class="promotetype">{{list.name}}</p>
                  <p class="promoteTypedetail">{{list.keywords}}</p>
                </div>

                <div class="promotebtn flex jus-between align-c">
                  <div>
                    <p>
                      <span class="bigPrice">
                        <i>￥</i>
                        {{list.amount}}
                      </span>
                    </p>
                  </div>
                  <div>
                    <a href="javascript:void(0);" v-if="list.type==1">
                      <span>备货</span>
                      <img src="../../assets/images/patternb/btn.png" alt />
                    </a>
                    <a href="javascript:void(0);" v-else>
                      <span>进货</span>
                      <img src="../../assets/images/patternb/btn.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="productitle">
        <img src="../../assets/images/patternb/titlepng.png" alt />
      </div>
      <div class="promoteminilist clearfix">
        <ul>
          <li v-for="(list1,index) in mypatternblist2" :key="index">
            <div>
              <div class="minliimg">
                <img :src='list1.imgUrl' alt />
              </div>
              <div class="minititle">{{list1.name}}</div>
              <div class="promotebtn flex jus-between align-c">
                <div>
                  <p class="miniprice">
                    <span>￥</span>
                    {{list1.amount}}
                  </p>
                </div>
                <div>
                  <a href="javascript:void(0);" v-if="list1.type==2">
                    <span>备货</span>
                    <img src="../../assets/images/patternb/btn.png" alt />
                  </a>
                  <a href="javascript:void(0);" v-else>
                    <span>进货</span>
                    <img src="../../assets/images/patternb/btn.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <patterbfoot />
  </div>
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>

<script>
import patterbfoot from "../../components/patterbfoot.vue";
export default {
  name: "mypatternb",
  data: function() {
    return {
      images: [
        { imgUrl: require("../../assets/images/patternb/banner01.png") },
        { imgUrl: require("../../assets/images/patternb/banner01.png") }
      ],
      mypatternblist1: [
        {
          imgUrl:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/8f139706a05547656552a04a607ca6ed7b596537.jpeg",
          description: "清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          keywords: "清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1",
          amount: "386.00",
          type: "1"
        },
        {
          imgUrl:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9b346204df98592a52888256ad8603dac7c546dd.jpeg",
          description:
            "经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1",
          name:
            "B-VIP2000大礼包（经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1）",
          keywords:
            "经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1）",
          amount: "2000.00",
          type: "2"
        }
      ],
      mypatternblist2: [
        {
          imgUrl:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/8f139706a05547656552a04a607ca6ed7b596537.jpeg",
          description: "清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          keywords: "清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1",
          amount: "386.00",
          type: "1"
        },
        {
          imgUrl:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9b346204df98592a52888256ad8603dac7c546dd.jpeg",
          description:
            "经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1",
          name:
            "B-VIP2000大礼包（经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1）",
          keywords:
            "经典多效洁面膏*1+赋活多效精华露*1+发酵玫瑰柔肤水*1+舒缓柔肤喷雾*1）",
          amount: "2000.00",
          type: "2"
        }
      ]
    };
  },
  components: {
    patterbfoot
  },

  created: function() {
    this.$emit("footer", false);
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#e74435";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  }
};
</script>





