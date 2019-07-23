<template>
  <div class="feedback">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <span class="font-20">发送</span>
    </div>
    <div class="datelist feedbackbox">
      <div class="flex jus-between">
        <textarea name id cols="30" rows="10" placeholder="请输入您对我们的建议与意见···"></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/user/userindex.css";
</style>
<script>
export default {
  name: "feedback",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

