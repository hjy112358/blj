<template>
  <div class="tradingFloor tradewrap">
    <div class="setting">
      <div class="flex jus-start align-c usermsg">
        <div class="userimg">
          <img src="../../assets/images/public/user.png" alt />
        </div>
        <div class="editbox">
          <span>{{user_info.nickname}}</span>
          <p>这个人很懒，什么也没留下</p>
        </div>
      </div>
      <div class="transtype">
        <div class="tickets clearfix">
          <ul>
            <li>
              <p>挂售券</p>
              <span class="maincolor" id="total">{{trade.guashou}}</span>
            </li>
            <li>
              <p>余额</p>
              <span class="maincolor">{{trade.yue}}</span>
            </li>
          </ul>
        </div>
        <div class="transbtn">
          <a href="javascript:void(0)" @click="scaleIn()">买入</a>
          <a href="javascript:void(0)" class="saleout" @click="scaleout()">卖出</a>
        </div>
        <p class="maincolor tradewarn">*24点挂售券未售出，系统将自动收回</p>
      </div>

      <div class="tradecode">
        <ul>
          <li v-for="(attr,index) in date" :key='index'>
              <div class="tradecodeTitle flex align-c jus-between">
                <p>{{attr.key}}</p>
                <p>
                  交易记录：
                  <span class="maincolor">{{attr.arr_count}}条</span>
                </p>
              </div>
              <div class="tradecodelist">
                <ul>
                    <li class="flex align-c" v-for="(attr1,index) in attr.datelist" :key='index'>
                        <img src="../../assets/images/wallet/buy.png" alt v-if='attr1.ticket_change_type==6 '/>
                        <img src="../../assets/images/wallet/scaleOut.png" alt  v-else-if='attr1.ticket_change_type==9 ' />
                        <img src="../../assets/images/wallet/buy.png" alt v-if='attr1.ticket_change_type==7 ' />
                        <img src="../../assets/images/wallet/scaleOut.png" alt v-if='attr1.ticket_change_type==8 ' />
                        <div class="tradedetail flex align-c jus-between">
                            <p v-if='attr1.ticket_change_type==6 '>我通过自动挂售获得了{{attr1.ticket_change_number}}张余额券</p>
                            <p v-else-if='attr1.ticket_change_type==9 '>我通过自动挂售消耗了{{attr1.ticket_change_number}}张挂售券</p>
                            <p v-if='attr1.ticket_change_type==7 '>我通过交易所出售获得了{{attr1.ticket_change_number}}张万用券</p>
                            <p v-if='attr1.ticket_change_type==8 '>我通过交易所出售消耗了{{attr1.ticket_change_number}}张挂售券</p>
                            <span v-if='attr1.ticket_change_type==6 '>+{{attr1.ticket_change_number}}张</span>
                            <span v-else-if='attr1.ticket_change_type==9 '>-{{attr1.ticket_change_number}}张</span>
                            <span v-else-if='attr1.ticket_change_type==7 '>+{{attr1.ticket_change_number}}张</span>
                            <span v-else-if='attr1.ticket_change_type==8 '>-{{attr1.ticket_change_number}}张</span>
                        </div>
                    </li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="scaleConbox" v-show='scalebox==1'>
      <div class="scaleCon">
        <p>卖出券量</p>
        <input type="text" placeholder="请填写卖出券量" id="scalenum" v-model="scaloutnum"/>
        <div class="scaleBtn">
          <a href="javascript:void(0)" class="cancle" style="margin-right: 20px" @click="scalecancle()">取消</a>
          <a href="javascript:void(0)" class="sure" @click="scale()">确定</a>
        </div>
      </div>
    </div>

    <div class="successBg" v-show="scaleoutSuccess==1">
      <div class="succpup">
        <div class="saleBg">
          <p id="valaa">卖出{{scaloutnum}}张</p>
        </div>
        <a href="javascript:void(0)" class="sureBtn" @click="check()">
          <img src="../../assets/images/wallet/suebtn.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../assets/css/user/wallet.css";
</style>

<script>
export default {
  name: "tradingFloor",
  data:function(){
      return {
            user_info:{nickname:'测试'},
            trade:{guashou:'1',yue:'1'},
            date:[
                {key:'2019.07.19-星期五',arr_count:'4',datelist:[
                    {ticket_change_type:'6',ticket_change_number:'2'},
                    {ticket_change_type:'6',ticket_change_number:'4'},
                    {ticket_change_type:'7',ticket_change_number:'20'}]},
                {key:'2019.07.20-星期六',arr_count:'4',datelist:[
                    {ticket_change_type:'8',ticket_change_number:'200'},
                    {ticket_change_type:'9',ticket_change_number:'2000'}
                    ]}
                ],
            scalebox:'0',
            scaleoutSuccess:'0',
            scaloutnum:''
      }
  },
  methods:{
      scaleout:function(){
           this.scalebox=1
      },
      scalecancle:function(){
           this.scalebox=0
      },
      scale:function(){
          this.scalebox=0;
          this.scaleoutSuccess=1
      },
      check:function(){
          this.scaleoutSuccess=0;
          this.scaloutnum=''
      },
      scaleIn:function(){
          this.$router.push("/wallet/scaleList")
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

