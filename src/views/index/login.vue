<template>
  <div class="login" >
    <div class="loginwrap" id="login">
      <div class="loginImg">
        <img src="../../assets/images/public//user.png" alt />
      </div>
      <div class="loginform">
        <form action>
          <div class="userName fillOut flex jus-start">
            <img src="../../assets/images/public/username.png" alt />
            <input type="text" name="username" id="username" placeholder="手机号码" />
          </div>
          <div class="fillOut flex jus-start">
            <img src="../../assets/images/public/pass.png" alt style="height:1.7rem"/>
            <input type="password" name="password" id="password" placeholder="密码" />
          </div>
          <div class="flex jus-between register">
            <a class="maincolor" href="javascript:void(0)" @click="reg()">注册新账号</a>
            <a class="forPass" href="javascript:void(0)" @click="forget()">忘记密码</a>
          </div>
          <div class="loginBtn">
            <a href="javascript:void(0)" @click="goindex()">登 陆</a>
          </div>
          <div class="otherlogin">
            <img src="../../assets/images/public/or.png" alt />
            <div class="flex jus-center otherLog">
              <img src="../../assets/images/public/qq.png"  style="margin-right:5rem;width:2rem ;height:2rem"/>
              <img src="../../assets/images/public/wx.png" alt style="width:2rem;height: 1.6rem;margin-top: 0.4rem;" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/public/login.css";
</style>
<script>
export default {
  name: "login",
  methods:{
    reg:function(){
       this.$router.push("/index/reg");
    },
    forget:function(){
      this.$router.push("/index/forget_pwd");
    },
    goindex:function(){
       this.$router.push("/user/index");
    }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

