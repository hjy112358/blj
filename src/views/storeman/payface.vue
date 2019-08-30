<template>
  <div class="payface promantwo">
    <div class="promotionlist">
      <div class="productitle">
        <img src="../../assets/images/patternb/titlepng.png" alt />
      </div>
      <div class="promotdetail">
        <ul>
          <li>
            <div class="promotebox flex jus-between align-c">
              <div class="promoteimg">
                <img src="../../assets/images/storeman/img1.jpg" alt />
              </div>
              <div class="promotetext">
                <p class="promotedes"></p>
                <div class="promotename">
                  <p class="promotetype">支付宝刷脸支付</p>
                  <p class="promoteTypedetail"></p>
                </div>

                <div class="promotebtn flex jus-between align-c">
                  <div>
                    <p>
                      <span class="bigPrice">
                        <i>￥</i>5000
                      </span>
                    </p>
                  </div>
                  <div>
                    <a href="javascript:void(0)" class="flex jus-between align-c" @click="buyin(1)">
                      <span>立即购买</span>
                      <img src="../../assets/images/patternb/btn.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="promotebox flex jus-between align-c">
              <div class="promoteimg">
                <img src="../../assets/images/storeman/img.jpg" alt />
              </div>
              <div class="promotetext">
                <p class="promotedes"></p>
                <div class="promotename">
                  <p class="promotetype">支付宝刷脸支付</p>
                  <p class="promoteTypedetail"></p>
                </div>

                <div class="promotebtn flex jus-between align-c">
                  <div>
                    <p>
                      <span class="bigPrice">
                        <i>￥</i>5000
                      </span>
                    </p>
                  </div>
                  <div>
                    <a href="javascript:void(0)" class="flex jus-between align-c" @click="buyin(2)">
                      <span>立即购买</span>
                      <img src="../../assets/images/patternb/btn.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mark" v-show="checkdetail==1">
      <div class="applybox">
        <form action method="post" id="form">
          <h3>收货地址</h3>
          <div class="flex jus-between align-c formlist">
            <p>收货人</p>
            <input type="text" name="name" id="name" placeholder="填写收货人" />
          </div>
          <div class="flex jus-between align-c formlist">
            <p>收货地址</p>
            <div class="flex jus-between align-c"></div>
          </div>
          <div class="flex jus-between align-c formlist">
            <p>详细地址</p>
            <input type="text" name="company_address" id="corpAddress" placeholder="填写详细地址" />
          </div>

          <div class="flex jus-between align-c formlist">
            <p>联系电话</p>
            <input type="number" name="contacts_mobile" id="contactPhone" placeholder="填写联系电话" />
          </div>
          <div class="btnlist">
            <a href="javascript:void(0)" class="maincolorbg" id="cancel" @click="cancle()">取消</a>
            <a href="javascript:void(0)" class="maincolorbg" id="sure"  @click="sure()">确认</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scope>
@import "../../assets/css/patternb/patternb.css";
@import "../../assets/css/storeman/payface.css";
@import "../../assets/css/storeman/applystep.css";
.promotetype {
  width: 348px;
}
.mark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.applybox {
  position: absolute;
  width: 96%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0;
}

h3 {
  height: 90px;
  line-height: 90px;
  background: #fff;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 28px;
}

.btnlist {
  height: 90px;
  line-height: 90px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.btnlist a {
  display: block;
  width: 50%;
  text-align: center;
  color: #fff;
  background: #fff;
  float: left;
  font-size:24px
}

#sure {
  border-left: 2px solid #fff;
  box-sizing: border-box;
}

form {
  border-radius: 20px;
}

.formlist {
  padding-left: 20px;
}
</style>
<script>
export default {
  name: "payface",
  data() {
    return {
      checkdetail: 0
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundImage =
      "url(" + require("../../assets/images/storeman/b.jpg") + ")";
    window.document.body.style.backgroundSize = "100%";
    window.document.body.style.backgroundRepeat = "no-repeat";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundImage = "";
    next();
  },
  methods: {
    buyin: function() {
        this.checkdetail = 1;
    },
    cancle:function(){
        this.checkdetail = 0;
    },
    sure:function(){
        this.checkdetail = 0;
    }
  }
};
</script>

<style>
</style>
