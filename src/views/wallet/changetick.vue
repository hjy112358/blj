<template>
  <div class="changetick">
    <div class="datelist">
      <div class="flex jus-between align-c">
        <p>兑换对象</p>
        <select name id="conversion">
          <option value="1">自己</option>
          <option value="2">他人</option>
        </select>
      </div>

      <div class="flex jus-between align-c">
        <p>兑换券类型</p>
        <div class="typebox" style="width:70%">
          <select name id="type" style="width:100%">
            <option value="1">注册券</option>
            <option value="2">消费券</option>
            <option value="4">挂售券</option>
          </select>
        </div>
      </div>
      <div class="flex jus-between align-c">
        <p>兑换数量</p>
        <input type="text" id="number" />
        <input type="hidden" name="has_yue" value="{$wanyong}" id="max" />
      </div>
      <div class="flex jus-between otherId hidden">
        <p>手机号</p>
        <input type="text" placeholder="请填写对方手机号" id="other_id" />
      </div>
      <div class="flex jus-between">
        <p>交易密码</p>
        <input type="password" id="paypwd" placeholder="默认交易密码为手机号后六位" />
      </div>
    </div>
    <div class="nextStep">
      <a id="submit" href="javascript:void(0)">确认</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "changetick"
};
</script>

<style>
.datelist {
  padding: 20px;
}

.datelist > div {
  height: 76px;
  line-height: 76px;
  margin-bottom: 20px;
}

.datelist p {
  font-size: 28px;
  color: #999;
}

.datelist select,
.datelist input {
  width: 70%;
  height: 76px;
  line-height: 76px;
  color: #999;
}

.datelist input {
  border: 1px solid #ccc;
  height: 86px;
  line-height: 86px;
  text-indent: 10px;
}

.nextStep {
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
}
</style>
