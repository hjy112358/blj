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
        <div class="flex jus-between align-c step">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <van-progress
            :percentage=0
            :pivot-text=percente
        /> 
        <van-rate v-model="value" :count="3" size="20px" 
  void-icon="star"
  void-color="#ccc"
  readonly/>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/patternb/patternb.css";
</style>
<style> 
.van-progress{    
    height: 30px;
    border-radius: 20px;
}
.van-progress__pivot{
  border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.van-rate{
  margin-left: 35px
}
.van-rate__item{
  width:33%;
}
.van-rate__icon{
  float:right
}
.van-progress__pivot{
  background:#ff4c4c !important;
  }
</style>
<script>
export default {
  name: "patterbhead",
  data() {
    return {
      user: { nickname: "测试", user_id: 354, bei_good: "399" },
      percente:'70',
      value:1
    };
  },

  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
