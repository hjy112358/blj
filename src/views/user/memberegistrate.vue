<template>
  <div class="memberegistrate">
    <div class="registerbg"></div>
    <div class="registerform">
      <div class="formbox">
        <img src="../../assets/images/user/username.png" alt width="17" />
        <input type="text" placeholder="用户名" id="nickname" class="font-16" />
      </div>
      <div class="formbox">
        <img src="../../assets/images/user/phone.png" alt width="17" />
        <input type="text" placeholder="手机号" id="mobile" class="font-16" />
      </div>
      <div class="formbox">
        <img src="../../assets/images/user/pass01.png" alt width="17" />
        <input type="text" placeholder="6-20位登录密码" id="pwd1" class="font-16" />
      </div>
      <div class="formbox">
        <img src="../../assets/images/user/pass.png" alt width="17" />
        <input type="text" placeholder="再次确认密码" id="pwd2" class="font-16" />
      </div>
      <a href="javascript:void(0)" id="registerbtn" class="font-20">立即注册</a>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/user/memberegiste.css";
</style>

<script>
export default {
  name: "memberegistrate",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

