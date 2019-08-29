<template>
  <div class="limitRecharge">
    <div class="pricebox">
      <h3>充值金额</h3>
      <ul class="clearfix">
        <li data-value="100" @click="checkvalue(100)" :class="chevalue==100?'on':''">
          <p>充100元</p>
        </li>
        <li data-value="300" @click="checkvalue(300)" :class="chevalue==300?'on':''">
          <p>充300元</p>
        </li>
        <li data-value="500" @click="checkvalue(500)" :class="chevalue==500?'on':''">
          <p>充500元</p>
        </li>
        <li data-value="1000" @click="checkvalue(1000)" :class="chevalue==1000?'on':''">
          <p>充1000元</p>
        </li>
        <li data-value="2000" @click="checkvalue(2000)" :class="chevalue==2000?'on':''">
          <p>充2000元</p>
        </li>
        <li id="otherprice" @click="checkvalue(0);editvalue()" :class="chevalue==0?'on':''">
          <p>{{specitechange}}</p>
        </li>
      </ul>
    </div>
    <div class="stepbox">
      <h3>选择支付方式</h3>
      <div>
        <ul>
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/public/zfb.png" alt style="width:25px;height:25px" />
              <p>支付宝</p>
            </div>
            <div class="checkimg">
              <input type="radio" class="inputcheck" name="paytype" checked />
            </div>
          </li>
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/public/wx1.png" alt style="width:23px;height:20px" />
              <p>微信支付</p>
            </div>
            <div class="checkimg">
              <input type="radio" class="inputcheck" name="paytype" />
            </div>
          </li>
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <img src="../../assets/images/public/yu.png" alt style="width:25px;height:25px" />
              <p>余额支付</p>
            </div>
            <div class="checkimg">
              <input type="radio" class="inputcheck" name="paytype" checked />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mark" v-show="add==1">
      <div class="addrepert">
        <h2>其他金额</h2>
        <div class="addcontent">
          <input type="text" placeholder="请输入金额" v-model="specite" />
        </div>
        <div class="addbtn clearfix">
          <a href="javascript:void(0)" class="sureBtn" @click="sure()">确定</a>
          <a href="javascript:void(0)" class="canclebtn" @click="cancle()">取消</a>
        </div>
      </div>
    </div>
    <a href="javascript:void(0)" class="nextstep maincolorbg surebtn">确认</a>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
@import "../../assets/css/storeman/applystep.css";
.addrepert {
  width: 70%;
  border-radius: 1rem;
}
</style>
<script>
export default {
  name: "limitRecharge",
  data() {
    return {
      chevalue: 100,
      specitechange: "其他金额",
      specite: "",
      add: "0"
    };
  },
  created: function() {
    this.$emit("footer", false);
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
    checkvalue: function(value) {
      this.chevalue = value;
    },
    editvalue: function() {
      this.add = 1;
    },
    sure: function() {
      if (this.specite) {
        this.specitechange = '充'+this.specite+'元';
      }else{
        this.specitechange='其他金额'
      }
      this.specite = "";
      this.add = 0;
    },
    cancle: function() {
      this.specite = "";
      this.add = 0;
    }
  }
};
</script>

<style>
</style>
