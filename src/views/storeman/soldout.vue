<template>
  <div class="soldout">
    <div class="orderhead">
      <div @click="putaway()">
        <a href="JavaScript:void(0)">已上架</a>
      </div>
      <div class="on">
        <a href="JavaScript:void(0)">已下架</a>
      </div>
    </div>
    <div class="ordercontent updown">
      <div class="contentlist">
        <ul>
          <li class="flex jus-between align-c">
            <div class="flex jus-start align-c">
              <div>
                <img src="../../assets/images/public/user.png" alt />
              </div>
              <div class="contentdetail">
                <p class="contentname">商品名称</p>
                <p class="contentext">商品描述</p>
              </div>
            </div>
            <a href="javascript:void(0)" class="updownbtn">上架</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
@import "../../assets/css/storeman/applystep.css";
</style>
<script>
export default {
  name: "soldout",
  data() {
    return {};
  },
  methods: {
    putaway: function() {
      this.$router.push("/storeman/putaway");
    }
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
  }
};
</script>

<style>
</style>
