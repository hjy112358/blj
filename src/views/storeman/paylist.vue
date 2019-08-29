<template>
  <div class="paylist">
    <div v-for="(payli,index) in paylists" :key='index'>
      <div class="storemanTitle flex jus-between align-c">
        <p>{{payli.key}}</p>
        <img src="../../assets/images/public/return.png" alt />
      </div>
      <div class="payorderlist">
        <ul>
          <li class="clearfix title">
            <p>商家名称</p>
            <p>购买人</p>
            <p>订单号</p>
            <p>金额</p>
          </li>

          <li class="clearfix" v-for="(paydetail,index) in payli.detail" :key='index'>
            <p>{{paydetail.store_name}}</p>
            <p>{{paydetail.mobile}}</p>
            <p>订单号:{{paydetail.id}}</p>
            <p>金额:{{paydetail.amount}}</p>
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
  name: "paylist",
  data() {
    return {
      paylists:[{key:'刷脸支付十月份订单',
      detail:[{store_name:'商家名称111',mobile:'15221905784',id:1,amount:'12.00'},
      {store_name:'商家名称111',mobile:'15221905784',id:1,amount:'12.00'}]}]
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
  }
};
</script>

<style>
</style>
