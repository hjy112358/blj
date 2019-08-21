<template>
  <div class="patterbfoot">
    <div class="patternbfooter">
      <ul class="clearfix">
        <li @click="mypatternb()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/homeNormal.png" class="home" />
            <p class="font-16">首页</p>
          </a>
        </li>
        <li @click="buyIn()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/page.png" class="page"/>
            <p class="font-16">购物车</p>
          </a>
        </li>
        <li @click="myasselpool()">
          <a href="javascript:void(0)">
            <img src="../assets/images/public/personal.png" class="personal" />
            <p class="font-16">个人中心</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/public/foot.css";
.home {
  width: 31px;
  height: 32px;
}
.page {
  width: 32px;
  height: 32px;
}
.personal {
  width: 34px;
  height: 32px;
}
</style>
<script>
export default {
  name: "patterbfoot",
  data() {
    return {};
  },
  methods: {
    mypatternb: function() {
      this.$router.push("/patternb/mypatternb");
    },
    buyIn: function() {
      this.$router.push("/patternb/buyIn");
    },
    myasselpool: function() {
      this.$router.push("/patternb/asselPool");
    }
  }
};
</script>


