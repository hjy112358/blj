<template>
  <div class="wait">
    <div class="wait">
      <div>
        <img src="../../assets/images/good/checkicon.png" alt />
        <p>等待审核中</p>
      </div>
    </div>
    <div class="tip">
      <h3>提交成功，请等待管理员审核！</h3>
      <p>请耐心等待审核完毕</p>
      <a href="javascript:void(0)" id="backindex" @click="goindex()">回到首页</a>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/applystep.css";
</style>
<script>
export default {
  name: "wait",
  data() {
    return {};
  },
  methods:{
      goindex:function(){
          this.$router.push("/")
      }
  }
};
</script>

<style>
</style>
