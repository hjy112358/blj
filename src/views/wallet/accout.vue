<template>
  <div class="accout">
    <div class="datelist">
      <div class="flex jus-between dateone">
        <input type="number" name="tel" id="tel" placeholder="输入用户手机号" />
      </div>
      <div class="flex jus-between dateone">
        <input type="hidden" name="has_yue" value="{$yue}" id="max" />
        <input type="number" name="yue" id="yue" placeholder="输入转账金额" />
      </div>
      <div class="flex jus-between dateone">
        <input type="password" name="paypwd" placeholder="默认交易密码为手机号后六位" id="paypwd" />
      </div>
    </div>
    <div class="nextStep">
      <a id="submit" href="javascript:void(0)">确认</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "accout",
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style scoped>
.datelist input {
  width: 100%;
  border: none;
}
.nextStep {
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
  
}

.dateone {
  border-bottom: 0;
  margin-bottom: 20px;
  padding: 0 20px;
}

.datelist input {
  border: 1px solid #303032;
  border-radius: 20px;
  height: 88px;
  line-height: 88px;
  text-indent: 30px;
}
.datelist {
  margin-top: 20px;
}
</style>
