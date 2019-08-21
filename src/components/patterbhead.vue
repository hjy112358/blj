<template>
  <div class="patterbhead">
    <div class="mypoolmsgbox">
      <div class="mypoolmsg">
        <div class="mypoolimg">
          <img src="../assets/images/public/user.png" alt />
        </div>
        <div class="mypoolid">
          <p>{{user.nickname}}</p>
          <p>ID：{{user.user_id}}</p>
          <p>资产包：{{user.bei_good}}</p>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/patternb/patternb.css";
</style>
<script>
export default {
  name: "patterbhead",
  data() {
    return {
        user:{nickname:'测试',user_id:354,bei_good:'399'}
    };
  },
  
  created: function() {
    this.$emit("footer", false);
  },
};
</script>

<style>
</style>
