<template>
       <div class="datelist bindphone changephone changephone">
            <div class="">
                <p>更换手机后，下次登录可使用新手机号登录。</p>
            </div>
            <div class="forminput">
                <div class="flex jus-start">
                    <input type="text" placeholder="输入手机号码">
                </div>
                <div class="flex jus-between lastinput align-c">
                    <input type="text" placeholder="验证码">
                    <span class="sendCode ">发送验证码</span>
                </div>
            </div>
            <div class="nextStep">
                <a href="javascript:void(0)">确认</a>
            </div>
        </div>
</template>
<style scoped>
@import "../../assets/css/user/userindex.css";
</style>
<script>
export default {
    name:'changephone',
  created: function() {
    this.$emit("footer", false);
  }
}
</script>

