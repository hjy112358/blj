<template>
  <div class="sendMsg">
    <communityhead />
    <div class="commutype">
      <ul class="clearfix">
        <li class @click="aboutMe()">
          <a href="javascript:void(0)" class="font-16">@我</a>
        </li>
        <li class="bol-0" @click="inform()">
          <a href="javascript:void(0)" class="font-16">通知</a>
        </li>
        <li class="bol-0" @click="comment()">
          <a href="javascript:void(0)" class="font-16">评论</a>
        </li>
        <li class="on" @click="sendMsg()">
          <a href="javascript:void(0)" class="font-16">发帖</a>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="sendmsgbox">
      <p class="sendmsgHead maincolor">发表帖子</p>
      <div class="antistop">
        <input type="text" value="#皇的新衣家的衣服好好看#" />
      </div>
      <div class="issuebox">
        <textarea name id="issuemsg" cols="30" autoHeight="true" @input="descInput" v-model="desc"></textarea>
        <div class="normaltext">
          <span  v-show='txtVal==0'>发布你的帖子</span>
          </div>
        <div class="imglist">
          <blockquote class="layui-elem-quote layui-quote-nm">
            <div class="layui-upload-list clearfix" id="previewimg"></div>
          </blockquote>
        </div>
        <div class="addimg">
          <div class="upload">
            <van-uploader v-model="fileList" multiple :uploadText="text" :previewSize="80" />
          </div>
          <div>
            <van-uploader v-model="fileList1" multiple :uploadText="text1" :previewSize="80" />
          </div>
        </div>
      </div>

      <a href="javascript:void(0)" class="publish">发布</a>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/community/community.css";
</style>
<script>
import communityhead from "../../components/communityhead.vue";
export default {
  name: "sendMsg",
  data() {
    return {
      fileList: [],
      fileList1: [],
      text: "添加图片",
      text1: "添加视频",
      desc:'',
      txtVal: 0,
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  components: {
    communityhead
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
    descInput:function(){
      this.txtVal=this.desc.length
    }
  }
};
</script>

<style>
</style>
