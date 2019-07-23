<template>
  <div class="editpass">
    <div class="datelist editPass">
      <div class="flex jus-between dateone nickname">
        <input type="password" id="old_pwd" placeholder="请输入原密码" />
      </div>
      <div class="flex jus-between dateone nickname">
        <input type="password" id="pwd1" placeholder="请输入新密码" />
      </div>
      <div class="flex jus-between dateone nickname">
        <input type="password" id="pwd2" placeholder="请输入新密码" />
      </div>
      <p style="margin-top:20px">密码由6-20位字母、数字、符号组成</p>
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
  name: "editpass",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>
