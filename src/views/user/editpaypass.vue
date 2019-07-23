<template>
  <div class="editpaypass">
    <div class="datelist editPass">
      <div class="flex jus-between dateone nickname">
        <input type="password" id="old_paypwd" maxlength="6" placeholder="请输入原密码 " />
      </div>
      <div class="flex jus-between dateone nickname">
        <input type="password" id="paypwd" maxlength="6" placeholder="请输入新密码" />
      </div>
      <div class="flex jus-between dateone nickname">
        <input type="password" id="paypwd1" maxlength="6" placeholder="请再次确认新密码" />
      </div>
      <p style="margin-top:20px">密码为6位纯数字，默认密码为手机号码后六位</p>
      <div class="nextStep">
        <a id="submit" href="javascript:void(0)">确认</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../assets/css/user/userindex.css";
</style>
<script>
export default {
  name: "editpaypass",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

