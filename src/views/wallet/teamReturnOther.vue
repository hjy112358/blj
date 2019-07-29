<template>
  <div class="teamReturnOther teamOther">
    <div class="teamreturnmsg">
      <div>
        <p class="font-18">HIao</p>
        <span class="font-18">这个人很懒，什么都没留下</span>
      </div>
    </div>
    <div class="returnimg">
      <img src="../../assets/images/public/user.png" alt />
    </div>

    <div class="wealthlist">
      <div id="leftTabBox" class="wealthbox">
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label="用户管理" name="first"> <img src="../../assets/images/wallet/wealth.png" alt /></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"> <img src="../../assets/images/wallet/wealth.png" alt /></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"> <img src="../../assets/images/wallet/wealth.png" alt /></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"> <img src="../../assets/images/wallet/wealth.png" alt /></el-tab-pane>
        </el-tabs>
      
  
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/wallet/teamreturn.css";
</style>
<style>
.el-tabs__item{
    font-size: 24px;
    color: #666666;
    line-height: 80px;
    height:80px;
}
.el-tab-pane{
    text-align: center
}
.el-tab-pane img{
     width:424px;
    height:470px;
}
.el-tabs__content{
    margin-top:60px
}
.el-tabs__item:hover,.el-tabs__item.is-active{
     color: #666666;
     border-bottom: 1px solid #ff4c4c;
}
.el-tabs__active-bar{
       background-color: #ff4c4c;
}
</style>

<script>
export default {
  name: "teamReturnOther",
  data:function(){
       return {
        activeName: 'first'
      };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
   methods: {
      handleClick(tab, event) {
       
      }
    },

  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
