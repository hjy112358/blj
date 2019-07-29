<template>
  <div class="tradeFloorZ tradez">
    <div class="wrap tradewrap">
      <div class="setting">
        <div class="flex jus-start align-c tradezSetting">
          <div class="userimg">
            <img src="../../assets/images/public/user.png" alt />
          </div>
          <div class="editbox">
            <span>{{user_info.nickname}}</span>
            <p>这个人很懒，什么也没留下</p>
          </div>
        </div>
        <p class="recycle">*24点挂售券未售出，系统将自动收回</p>
        <div class="transtype">
          <div class="tickets clearfix">
            <ul>
              <li>
                <p>Z券</p>
                <span class="maincolor">{{trade.zquan}}</span>
              </li>
              <li>
                <p>余额</p>
                <span class="maincolor">{{trade.yue}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="tradecode">
          <ul>
            <li v-for="(tade,index) in date" :key="index">
             
                <div class="tradecodeTitle flex align-c jus-between">
                  <p>{{tade.key}}</p>
                  <p>
                    交易记录：
                    <span class="maincolor">{{tade.arr_count}}条</span>
                  </p>
                </div>
                <div class="tradecodelist">
                  <ul>
                   
                      <li class="flex align-c" v-for="(tadeone,index) in tade.datelist" :key="index">
                        <img :src="tadeone.imgurl" alt />
                        <div class="tradedetail flex align-c jus-between">
                          <p>{{tadeone.ticket_change_type}}</p>
                          <span>{{tadeone.ticket_change_number}}个</span>
                        </div>
                      </li>
                  
                  </ul>
                </div>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/user/wallet.css";
</style>
<script>
export default {
  name: "tradeFloorZ",
  data:function(){
      return {
           user_info:{nickname:'测试'},
            trade:{zquan:'1',yue:'1'},
            date:[
                {key:'2019.07.19-星期五',arr_count:'4',datelist:[
                    {ticket_change_number:'+2',ticket_change_type:'我通过后台自动释放获得了20个挂售券',imgurl:require('../../assets/images/wallet/add.png')},
                    {ticket_change_type:'我通过自动挂售消耗了20个挂售券',ticket_change_number:'-4',imgurl:require('../../assets/images/wallet/sub.png')}]},
                {key:'2019.07.20-星期六',arr_count:'4',datelist:[
                    {ticket_change_type:'我通过自动挂售消耗了20个挂售券',ticket_change_number:'-200',imgurl:require('../../assets/images/wallet/sub.png')},
                    {ticket_change_type:'我通过后台自动释放获得了20个挂售券',ticket_change_number:'+2000',imgurl:require('../../assets/images/wallet/add.png')}
                    ]}
                ],
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
