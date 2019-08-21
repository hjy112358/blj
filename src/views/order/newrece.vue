<template>
  <div class="newrece">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <span class="font-18">保存</span>
    </div>

    <div class="datelist">
      <div class="flex jus-between dateone  align-c">
        <label for>收货人姓名</label>
        <input type="text" value />
      </div>
      <div class="flex jus-between dateone  align-c">
        <label for>手机号码</label>
        <input type="text" value />
      </div>
      <div class="flex jus-between dateone  align-c">
        <label for>邮政编码</label>
        <input type="text" value />
      </div>
      <div class="flex jus-between dateone  align-c">
        <label for>省、市、区</label>
       
      </div>
      <div class="flex jus-between dateone  adressDetail">
        <label for>详细地址</label>
        <textarea name id rows="5"></textarea>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/goodstyle.css";
</style>
<script>
export default {
  name: "newrece",
  data() {
    return {};
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
