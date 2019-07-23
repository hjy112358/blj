<template>
  <div class="userSetting">
    <div class="setting">
      <div class="flex jus-between align-c tophead">
        <a href="javascript:void(0)"></a>
        <p class="font-18"></p>
        <span id="save" class="font-20">保存</span>
      </div>
      <div class="flex jus-start align-c usermsg">
        <div class="userimg" @click="upimg()">
          <img src="../../assets/images/public/user.png" alt id="portrait" />
        </div>
        <div class="editbox">
          <div>
            <span id="old_nickname">{{user_info.nickname}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="settinglist">
      <ul>
        <li class="flex jus-between align-c">
          <p>我的昵称</p>
          <input type="text" id="nickname" v-model="user_info.nickname" />
        </li>
        <li>
          <a href="javascript:void(0)" class="flex jus-between align-c" @click="editphone()">
            <div class="flex jus-start align-c">
              <p>修改手机号</p>
            </div>
            <div class="flex jus-start align-c">
              <p>{{user_info.mobile}}</p>
              <img src="../../assets/images/user/setback.png" alt width="5" height="12" />
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="flex jus-between align-c" @click="changepass()">
            <div class="flex jus-start align-c">
              <p>修改密码</p>
            </div>
            <div class="flex jus-start align-c">
              <img src="../../assets/images/user/setback.png" alt width="5" height="12" />
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="flex jus-between align-c" @click="changepay()">
            <div class="flex jus-start align-c">
              <p>修改支付密码</p>
            </div>
            <div class="flex jus-start align-c">
              <img src="../../assets/images/user/setback.png" alt width="5" height="12" />
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="flex jus-between align-c" @click="feedback()">
            <div class="flex jus-start align-c">
              <p>意见反馈</p>
            </div>
            <div class="flex jus-start align-c">
              <img src="../../assets/images/user/setback.png" alt width="5" height="12" />
            </div>
          </a>
        </li>
        <p style="margin-top: 301px;color: #ccc;font-size: 12px;text-align: center;">
          Copyright©2004-2019
          江苏必量家版权所有
        </p>
      </ul>
    </div>
    <div class="uploadimg " v-show="showupimg=='1'">
        <div class="checklist">
            <ul>
                <li class="takePhoto">
                    从相册里选择
                    <input type="file" name="image_file" id="image_file">
                </li>
                <!-- <li class="album">从相册里选择</li> -->
                <li class="maincolor cancle" @click="changeup()">取消</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/user/userindex.css";
.settinglist input {
  color: #3a3a3a;
  border: 0;
  text-align: right;
}
</style>
<script>
export default {
  name: "userSetting",
  data: function() {
    return {
      user_info: { nickname: "谁", mobile: "15221905272" },
      showupimg:0
    };
  },
  methods:{
      editphone:function(){
        this.$router.push("/user/editphone");
      },
      changepass:function(){
        this.$router.push("/user/editpass");
      },
      changepay:function(){
        this.$router.push("/user/editpaypass");
      },
      feedback:function(){
         this.$router.push("/user/feedback");
      },
      changeup:function(){
        this.showupimg=0
      },
      upimg:function(){
        this.showupimg=1;
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>
