<template>
  <div class="aboutMe">
    <communityhead />
    <div class="commutype">
      <ul class="clearfix">
        <li class="on" @click="aboutMe()">
          <a href="javascript:void(0)" class="font-16">@我</a>
          <span></span>
        </li>
        <li class="bol-0" @click="inform()">
          <a href="javascript:void(0)" class="font-16">通知</a>
        </li>
        <li class="bol-0" @click="comment()">
          <a href="javascript:void(0)" class="font-16">评论</a>
        </li>
        <li class="bol-0" @click="sendMsg()">
          <a href="javascript:void(0)" class="font-16">发帖</a>
        </li>
      </ul>
    </div>

    <div class="aboutText">
      <ul>
        <li v-for="(about,index) in aboutlist" :key="index">
          <div class="aboutmg">
            <div class="aboutHead flex jus-start align-c">
              <div class="headimg">
                <img :src="about.img" alt />
              </div>
              <p>{{about.name}}</p>
            </div>
            <p>
              评论：
              <span class="maincolor">@{{about.which}}</span>
              {{about.detail}}
            </p>
          </div>

          <div class="aboutimg" v-show="about.imglist.length>0">
            <ul class="clearfix">
              <li v-for="(img,index) in about.imglist" :key="index">
                <img :src="img.imgurl" alt />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/community/community.css";
</style>
<script>
import communityhead from "../../components/communityhead.vue";
export default {
  name: "aboutMe",
  data() {
    return {
      aboutlist: [
        {
          img: require("../../assets/images/public/user.png"),
          name: "Hlao",
          which: "漂亮姐姐的小白猫",
          detail: "这家店的衣服好好看",
          imglist: [
            { imgurl: require("../../assets/images/patternb/bigshop.png") }
          ]
        },
        {
          img: require("../../assets/images/public/user.png"),
          name: "Hlao",
          which: "漂亮姐姐的小白猫",
          detail: "这家店的衣服好好看",
          imglist: []
        }
      ]
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  components: {
    communityhead
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  methods: {
    aboutMe: function() {
      this.$router.push("/community/aboutMe");
    },
    inform: function() {
      this.$router.push("/community/inform");
    },
    comment: function() {
      this.$router.push("/community/comment");
    },
    sendMsg: function() {
      this.$router.push("/community/sendMsg");
    }
  }
};
</script>

