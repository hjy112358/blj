<template>
  <div class="rebate">
    <form action>
      <div class="rebateformlist flex align-c">
        <label for>
          <img src="../../assets/images/storeman/phone.png" alt />
        </label>
        <input type="number" name="phone" value />
      </div>
      <div class="rebateformlist flex align-c">
        <label for>
          <img src="../../assets/images/storeman/money.png" alt class="money" />
        </label>
        <input type="number" name="amount" value />
      </div>

      <p>微信支付</p>
      <a href="javascript:void(0)" class="rebatebtn">确认</a>
    </form>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
@import "../../assets/css/storeman/applystep.css";
form p {
  font-size: 24px;
  color: #000;
  margin: 20px 0;
  width:400px;
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>
<script>
export default {
  name: "rebate",
  data() {
    return {};
  },
  created: function() {
    this.$emit("footer", false);
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundImage =
      "url(" + require("../../assets/images/storeman/bg.jpg") + ")";
    window.document.body.style.backgroundSize = "100%";
    window.document.body.style.backgroundRepeat = "no-repeat";
    window.document.body.style.backgroundPosition = "0 -70px";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundImage = "";
    window.document.body.style.backgroundPosition = " 0 0";
    next();
  }
};
</script>

<style>
</style>
