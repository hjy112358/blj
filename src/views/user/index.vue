<template>
  <div class="userindex" id="personCenter">
    <div class="wrap settingwrap" id="signIn">
      <div class="setting" style="padding:0 15px;">
        <div class="flex jus-between align-c usermsg" style="padding-top:65px">
          <div class="flex jus-between align-c" style="width:100%">
            <div class="flex jus-start align-c">
              <div class="userimg" @click="upimg()">
                <img src="../../assets/images/public/user.png" alt />
              </div>
              <div class="editbox" @click="userSetting()">
                <a href="javascript:void(0)">
                  <span>{{user_info.nickname}}</span>
                  <img src="../../assets/images/user/indexedit.png" alt class="editimg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="personClassify">
        <div>
          <ul class="clearfix spantop">
            <li>
              <a href="javascript:void(0)" @click="gowallet()">
                <img src="../../assets/images/user/perWallet.png" alt width="21" height="18" />
                <p class="font-12">我的钱包</p>
              </a>
            </li>
            <li class="pos-r" @click="mycollet()">
              <a href="javascript:void(0)">
                <img src="../../assets/images/user/perCollect.png" alt width="20" height="17" />
                <p class="font-12">我的收藏</p>
                <span>10</span>
              </a>
            </li>
            <li class="pos-r">
              <a href="javascript:void(0)">
                <img src="../../assets/images/user/perStore.png" alt width="23" height="19" />
                <p class="font-12">关注店铺</p>
                <span>10</span>
              </a>
            </li>
          </ul>
        </div>
        <div style="margin-top:15px;">
          <ul class="clearfix">
            <li  @click="teamReturn()">
              <a href="javascript:void(0)">
                <img src="../../assets/images/user/perStar.png" alt width="19" height="19" />
                <p class="font-12">我的星级</p>
                <span class="font-18">{{userdata.star}}</span>
              </a>
            </li>
            <li @click="coupon()">
              <a href="javascript:void(0)">
                <img
                  src="../../assets/images/user/perZ.png"
                  alt
                  width="21"
                  height="15"
                  style="margin-bottom:3px"
                />
                <p class="font-12">我的Z券</p>
                <span class="font-18">{{userdata.zquan}}</span>
              </a>
            </li>
            <li @click="teamReturnRebate()">
              <a href="javascript:void(0)">
                <img src="../../assets/images/user/perRecommend.png" alt width="20" height="20" />
                <p class="font-12">推荐人数</p>
                <span class="font-18">{{userdata.yidai}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="signMainbox">
        <div class="myorder">
          <div class="signinTitle" style="margin-top:20px">
            <p class="font-24">我的<span style="color:#fdfecb">订单</span>
            </p>
            <span class="allorder">
              <a href="javascript:void(0)">查看全部订单</a>
            </span>
          </div>
          <div class="orderStatus clearfix">
            <div class="orderstatusbox">
              <ul class="clearfix">
                <li>
                  <a href="javascript:void(0)">
                    <div>
                      <div class="statimg pos-r">
                        <img
                          src="../../assets/images/user/daifukuan.png"
                          alt
                          width="28px"
                          height="20px"
                        />
                        <i class="maincolorbg pos-a">{{userdata.daifu}}</i>
                      </div>
                      <p class="maincolor">待付款</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <div>
                      <div class="statimg pos-r">
                        <img
                          src="../../assets/images/user/daishou.png"
                          alt
                          width="23px"
                          height="23px"
                        />
                        <i class="maincolorbg pos-a">{{userdata.weifa}}</i>
                      </div>
                      <p class="maincolor">待发货</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <div>
                      <div class="statimg pos-r">
                        <img
                          src="../../assets/images/user/daifahuo.png"
                          alt
                          width="25px"
                          height="20px"
                        />
                        <i class="maincolorbg pos-a">{{userdata.daishou}}</i>
                      </div>
                      <p class="maincolor">待收货</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <div>
                      <div class="statimg pos-r">
                        <img
                          src="../../assets/images/user/qianshou.png"
                          alt
                          width="18px"
                          height="19px"
                        />
                      </div>

                      <p class="maincolor">评价</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" id="contact">
                    <div>
                      <div class="statimg pos-r">
                        <img
                          src="../../assets/images/user/tuikuan.png"
                          alt
                          width="21px"
                          height="21px"
                        />
                      </div>
                      <p class="maincolor">退款/售后</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="signinTitle" style="margin-top:20px">
            <p class="font-24">我的<span style="color:#fdfecb">资产</span>
            </p>
          </div>
          <div class="propertylist pos-r">
            <ul>
              <li class="flex align-c jus-start" >
                <a href="javascript:void(0)" class="flex align-c jus-start" @click="shareCode()">
                  <div class="flex align-c">
                    <img src="../../assets/images/user/friend.png" alt />
                  </div>
                  <p>邀请好友</p>
                  <span>快邀请好友加入必量家吧！</span>
                </a>
              </li>
              <li class>
                <a href="javascript:void(0)" class="flex align-c jus-start" @click="memberegistrate()">
                  <div class="flex align-c">
                    <img src="../../assets/images/user/member.png" alt />
                  </div>
                  <p>会员注册</p>
                  <span>协助好友注册，快速开通账号</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="flex align-c jus-start">
                  <div class="flex align-c">
                    <img src="../../assets/images/user/balance.png" alt />
                  </div>
                  <p>我的余额</p>
                  <span>满满的余额，满满的余额</span>
                </a>
              </li>
              <li class>
                <a href="javascript:void(0)" class="flex align-c jus-start">
                  <div class="flex align-c">
                    <img src="../../assets/images/user/joinin.png" alt />
                  </div>
                  <p>申请店铺</p>
                  <span>注册店铺，一起暴富</span>
                </a>
              </li>
            </ul>
            <img src="../../assets/images/user/img001.png" alt class="pos-a property" />
          </div>
        </div>
        <div class="nextStep">
          <a href="javascript:void(0)">退出登录</a>
        </div>
      </div>

      <div class="uploadimg" v-show="showupimg=='1'">
        <div class="checklist">
          <ul>
            <li class="takePhoto">
              从相册里选择
              <input type="file" name="image_file" id="image_file" />
            </li>
            <!-- <li class="album">从相册里选择</li> -->
            <li class="maincolor cancle" @click="changeup()">取消</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/user/userindex.css";
</style>
<script>
export default {
  name: "userindex",
  data: function() {
    return {
      user_info: { nickname: "测试用户名" },
      userdata: {
        star: "1",
        zquan: "1",
        yidai: "1",
        daifu: "5",
        weifa: "3",
        daishou: "1"
      },
      showupimg: 0
    };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f8214a";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  methods: {
    userSetting: function() {
      this.$router.push("/user/userSetting");
    },
    changeup: function() {
      this.showupimg = 0;
    },
    upimg: function() {
      this.showupimg = 1;
    },
    memberegistrate:function(){
      this.$router.push("/user/memberegistrate");
    },
    shareCode:function(){
      this.$router.push("/user/shareCode");
    },
    gowallet:function(){
      this.$router.push("/wallet/wallet");
    },
    teamReturn:function(){
      this.$router.push("/wallet/teamReturn");
    },
     coupon:function(){
      this.$router.push("/wallet/coupon");
    },
     teamReturnRebate:function(){
      this.$router.push("/wallet/teamReturnRebate");
    },
    mycollet:function(){
      this.$router.push("/store/mycollect");
    }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>


