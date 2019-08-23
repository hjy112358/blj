<template>
  <div class="seAccout">
    <patterbhead />
    <div class="accountbox">
      <div class="accoutitle flex jus-start align-c">
        <img src="../../assets/images/patternb/store.png" alt />
        <p>我的资产包结算</p>
      </div>
      <div class="accoutlist">
        <ul>
          <li v-for="(acout,index) in acoutlist" :key="index"
            :class="{movec:candelete.id==acout.id}"
          @touchstart="touchStart(acout)"
          @touchend="touchEnd(acout)">
            <div class="flex jus-between align-c">
              <div class="accoutimg">
                <img :src="acout.img" alt />
              </div>
              <div class="accoutdetail">
                <p class="accoutype">{{acout.name}}</p>
                <p class="maincolor">￥{{acout.amount}}</p>
                <p class="accoutnum">x{{acout.order_nums}}</p>
              </div>
            </div>
            <div class="del delcollect" @click="deleteItem(index)">删除</div>
          </li>
        </ul>
      </div>
      <div class="flex jus-between align-c paybox yuepay">
        <p>余额支付：</p>
        <p class="maincolor">
          ￥
          <span id="total_price">{{total_price}}</span>
        </p>
      </div>
    </div>
    <div class="paybtn">
      <a href="javascript:void(0)" @click="myasselpool()">结算</a>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>
<script>
import patterbhead from "../../components/patterbhead.vue";
export default {
  name: "seAccout",
  data() {
    return {
      acoutlist:  [
        {
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/8f139706a05547656552a04a607ca6ed7b596537.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "39999.00",
          order_nums: 1,
          id: 1,
          amount:'399'
        },
        {
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9b346204df98592a52888256ad8603dac7c546dd.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "399.00",
          order_nums: 1,
          id: 2,
          amount:'399'
        }
      ],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {}, // 滑动的item
      total_price:0
    };
  },
  components: {
    patterbhead
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods: {
    deleteItem(index) {
      this.acoutlist.splice(index, 1);
      // splice方法是删除数组某条数据，或者向某个位置添加数据
    },
    touchStart(item) {
      let touchs = event.changedTouches[0];
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX;
      this.candelete = {};
    },
    touchEnd(item) {
      let touchs = event.changedTouches[0];
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX;
      this.candelete = {};
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 &&
        Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault();
        this.candelete = item;
      } else if (
        this.clientNum.x2 > this.clientNum.x1 &&
        Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault();
        this.candelete = {};
      }
    },
    myasselpool:function(){
        this.$router.push('/patternb/myasselpool')
    }
  },
    beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
};
</script>

<style>
</style>
