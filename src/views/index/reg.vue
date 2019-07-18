<template>
  <div class="reg">
    <div class="register">
      <div class="headbox">
        <div class="flex jus-between align-c tophead regbg">
          <a href="javascript:void(0)"></a>
          <p class="font-18" style="margin-left: 45px">注册账号</p>
          <a href="https://51gsc.com/app/mianyang0411" style="color:#fff">下载APP</a>
        </div>
      </div>
      <div class="registerinput">
        <form
          action
          id="mobileForm"
          name="mobileForm"
          method="post"
          onsubmit="return check_submit()"
        >
          <input type="hidden" name="scene" value="1" />
          <div class="formbox">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="输入手机号码"
              onBlur="checkMobilePhone(this.value);"
            />
          </div>

          <div class="formbox">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="设置密码"
              onBlur="check_password(this.value);"
            />
          </div>
          <div class="formbox">
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="确认密码"
              onBlur="check_confirm_password(this.value);"
            />
          </div>
          <div class="formbox">
            <input
              type="text"
              id="invitatecode"
              name="invitatecode"
              placeholder="邀请码"
              value="{$invite_id}"
              onBlur="check_invitatecode(this.value);"
            />
          </div>
          <div class="formbox">
            <input type="text" name="nickname" placeholder="昵称(可选填)" />
          </div>
          <div class="flex jus-between formbox">
            <input type="text" id="mobile_code" name="mobile_code" placeholder="验证码" />
            <span class="sendCode font-12" id="zphone" onClick="sendcode(this)">发送验证码</span>
          </div>
          <div class="nextStep">
            <input type="submit" id="btn_submit" name="Submit" value="注 册" />
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
  name: "reg",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>
              
