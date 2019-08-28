<template>
  <div class="inform">
    <communityhead />
    <div class="commutype">
      <ul class="clearfix">
        <li class="" @click="aboutMe()">
          <a href="javascript:void(0)" class="font-16">@我</a>
          
        </li>
        <li class="on" @click="inform()">
          <a href="javascript:void(0)" class="font-16">通知</a>
          <span></span>
        </li>
        <li class="bol-0" @click="comment()">
          <a href="javascript:void(0)" class="font-16">评论</a>
        </li>
        <li class="bol-0" @click="sendMsg()">
          <a href="javascript:void(0)" class="font-16">发帖</a>
        </li>
      </ul>
    </div>
    <div class="informText">
      <!-- 无消息 -->
      <div class="nowtext " v-if='informlist.length==0'>
        <p>暂无消息</p>
      </div>
      <!-- 消息列表 -->
      <div class="informlist" v-else>
        <ul>
          <li  v-for="(infor,index) in informlist" :key='index'>
            <div @click="informdetail()">
              <div class="informimg">
                <img :src="infor.img" alt />
              </div>
              <div class="informsg">
                <p>{{infor.infordetail}}</p>
              </div>
            
            </div>
              <div class="participation flex jus-between align-c">
                <p># 参与人数 {{infor.count}} 人</p>
                <div class="likeimg flex" data-like="0" @click="cheklike(index)">
                  <img src="../../assets/images/community/like.png" alt class="like" v-if='infor.ischeck=="0"'/>
                  <img
                    src="../../assets/images/community/likeOn.png"
                    alt
                    class="likeon"
                    v-else
                  />
                </div>
              </div>
          </li>
        
        </ul>
      </div>
    </div>
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
    return {
      informlist:[
        {img:require('../../assets/images/community/inform.png'),infordetail:'春季保健养生必备园 | 滋补驱寒 增加免疫 告别虚弱',
        count:10,ischeck:0},
         {img:require('../../assets/images/community/inform.png'),infordetail:'春季保健养生必备园 | 滋补驱寒 增加免疫 告别虚弱',
        count:10,ischeck:0}
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
    },
    informdetail:function(){
      this.$router.push("/community/informdetail");
    },
    cheklike:function(index){
      this.informlist[index].ischeck=!(this.informlist[index].ischeck)
    }
  }
};
</script>

<style>
</style>
