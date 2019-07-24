<template>
  <div class="coupon">
    <div class="advertise">
      <img src="../../assets/images/wallet/tickchangeBg.png" alt class="conponbg" />
    </div>
    <div class="couponlist">
      <!-- 未失效 -->
      <div class="valid">
        <ul>
          <!-- Z券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/ticketZ.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>Z券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>
            <div class="price">
                <p>{{coupon.zquan}}</p>
            </div>
          </li>
          <!-- 余额券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/balanceT.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>余额券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>

            <div class="price">
                <p>{{coupon.yquan}}</p>
                <a href="javascript:void(0)" style="margin-top:10px" @click="accout()">去转账</a>
            </div>
          </li>
          <!-- 万用券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/general.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>万用券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>

            <div class="price">
                <p>{{coupon.wquan}}</p>
                <a href="javascript:void(0)" class="conversion" style="margin-top:10px" @click="changetick()">去兑换</a>
            </div>
          </li>
          <!-- 荣誉券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/honor.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>荣誉券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>

            <div class="price">
                <p>{{coupon.rquan}}</p>
            </div>
          </li>
          <!-- 注册券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/register.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>注册券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>

            <div class="price">
                <p>{{coupon.cquan}}</p>
            </div>
          </li>
          <!-- 挂售券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/attached.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>挂售券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>

            <div class="price">
               <p>{{coupon.gquan}}</p>
            </div>
          </li>
          <!-- 消费券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/consume.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>消费券</span>
                <p>凡推荐一次用户注册即可获取</p>
              </div>
            </div>
            <div class="price">
               <p>{{coupon.xquan}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 失效 -->
      <div class="efficacy valid">
        <h3>已回收</h3>
        <ul>
          <!-- 挂售券 -->
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/wallet/attached.png" alt class="ticketzimg" />
              <div class="ticketmsg">
                <span>挂售券</span>
                <p>每天24点系统自动收回</p>
              </div>
            </div>
            <div class="price"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../assets/css/user/wallet.css";
</style>
<script>
export default {
  name: "coupon",
  data:function(){
      return {
          coupon:{zquan:'1',yquan:'2',wquan:'3',rquan:'4',cquan:'5',gquan:'6',xquan:'7'}
      }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor ='#ff4c4c'
     
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  methods:{
      accout:function(){
          this.$router.push("/wallet/accout")
      },
      changetick:function(){
          this.$router.push("/wallet/changetick")
      }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

