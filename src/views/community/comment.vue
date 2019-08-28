<template>
  <div class="inform">
    <communityhead />
    <div class="commutype">
      <ul class="clearfix">
        <li class @click="aboutMe()">
          <a href="javascript:void(0)" class="font-16">@我</a>
        </li>
        <li class="bol-0" @click="inform()">
          <a href="javascript:void(0)" class="font-16">通知</a>
        </li>
        <li class="on" @click="comment()">
          <a href="javascript:void(0)" class="font-16">评论</a>
          <span></span>
        </li>
        <li class="bol-0" @click="sendMsg()">
          <a href="javascript:void(0)" class="font-16">发帖</a>
        </li>
      </ul>
    </div>
    <form action="javascript:return true">
      <div class="aboutText comment">
        <ul>
          <li>
            <div class="aboutmg">
              <div class="aboutHead flex jus-start align-c">
                <div class="headimg">
                  <img src="../../assets/images/public/user.png" alt />
                </div>
                <p>Hlao</p>
              </div>
              <p>7分钟前发布</p>
            </div>
            <div class="commentDetail">
              <p>必量家真的是一个物美价廉的平台，消费改变生活，分享妆点人生。</p>
            </div>
            <div class="aboutimg">
              <ul class="clearfix">
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                    alt
                  />
                </li>
              </ul>
            </div>
            <div class="reply">
              <div class="replynum" data-show="0" >回复3条</div>
              <div class="replylist">
                <ul>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="aboutmg">
              <div class="aboutHead flex jus-start align-c">
                <div class="headimg">
                  <img src="../../assets/images/public/user.png" alt />
                </div>
                <p>Hlao</p>
              </div>
              <p>7分钟前发布</p>
            </div>
            <div class="commentDetail">
              <p>必量家真的是一个物美价廉的平台，消费改变生活，分享妆点人生。</p>
            </div>
            <div class="aboutimg">
              <ul class="clearfix">
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                  />
                </li>
                <li>
                  <img
                    src="http://abc.fyc365.cn/template/mobile/new/static/images/newimg/community/informdetal.jpg"
                    alt
                  />
                </li>
              </ul>
            </div>
            <div class="reply">
              <div class="replynum" data-show="0">回复3条</div>
              <div class="replylist">
                <ul>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                  <li onclick="revert(this)">
                    <p class="maincolor">
                      绿巨人大队长：
                      <span>她们家衣服质量好不好？</span>
                    </p>
                    <textarea name id placeholder="回复绿巨人大队长" class="hidden" type="submit"></textarea>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>
<style scoped>
@import "../../assets/css/community/community.css";
</style>
<script>
import communityhead from "../../components/communityhead.vue";
export default {
  name: "inform",
  data() {
    return {};
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

<style>
</style>
