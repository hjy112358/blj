<template>
  <div class="forget_pwd">
    <div class="register">
      <div class="headbox">
        <div class="flex jus-between align-c  regbg">
          
        </div>
      </div>
      <div class="registerinput">
        <form action id="mobileForm" name="mobileForm">
          <input type="hidden" name="scene" value="1" />
          <div class="formbox">
            <input type="text" id="username" name="username" placeholder="输入手机号码"/>
          </div>
          <div class="flex jus-between formbox">
            <input type="text" id="mobile_code" name="mobile_code" placeholder="验证码" />
            <span class="sendCode font-16" id="zphone" >发送验证码</span>
          </div>
           <div class="formbox">
            <input type="password" id="password" name="password"  placeholder="设置密码"/>
          </div>
          <div class="nextStep">     
            <input type="submit" id="btn_submit" name="Submit" value="确 认" />
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
  name: "forget_pwd",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>
              
