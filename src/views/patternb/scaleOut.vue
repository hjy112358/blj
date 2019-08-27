<template>
  <div class="scaleOut myteam scalebody">
    <patterbhead />
    <div class="scaleOrderbox">
      <ul>
        <li
          class="flex jus-start align-c"
          v-for="(buylist,index) in buylists"
          :key="index"
          :class="{movec:candelete.id==buylist.id}"
          @touchstart="touchStart(buylist)"
          @touchend="touchEnd(buylist)"
        >
          <div class="checkimg">
            <input
              type="checkbox"
              class="inputcheck"
              @click="checkinput(index,buylist.id)"
              v-model="checked"
              :value="buylist.id"
            />
          </div>
          <div class="scaleimg">
            <img :src="buylist.img" alt />
          </div>
          <div class="scaledetail">
            <p class="scalegoods">{{buylist.name}}</p>
            <div class="priceAnum flex jus-between align-c">
              <p>
                <span>￥</span>
                {{buylist.bgoods_price}}
              </p>
              <van-stepper v-model="buylist.value" input-width="40px" button-size="34px" />
            </div>
          </div>
          <div class="del delcollect" @click="deleteItem(index)">删除</div>
        </li>
      </ul>
    </div>

    <div class="scalebottom flex jus-between align-c">
      <div>
        <input type="checkbox" id="checkall" @click="checkalls()" v-model="checkall" />
        <label for="checkall">全选</label>
      </div>
      <div class="paymsg flex jus-start align-c">
        <p>
          卖出总计：￥
          <span id="total_price">{{total_price}}</span>
        </p>
        <a href="javascript:void(0);" @click="seAccout()">提交订单</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>
<style >
.van-stepper__minus::before,
.van-stepper__plus::before {
  width: 26px;
  height: 2px;
}
.van-stepper__minus::after,
.van-stepper__plus::after {
  width: 2px;
  height: 26px;
}
.van-stepper__input {
  font-size: 26px;
}
</style>
<script>
import patterbhead from "../../components/patterbhead.vue";
export default {
  name: "scaleOut",
  data() {
    return {
      value: 1,
      total_price: 0,
      buylists: [
        {
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/8f139706a05547656552a04a607ca6ed7b596537.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "39999.00",
          value: 1,
          id: 1
        },
        {
          img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9b346204df98592a52888256ad8603dac7c546dd.jpeg",
          name: "B-VIP399大礼包（清荷玫瑰茶*1+黄疸泡浴包*1+冰宝泡澡片*1）",
          bgoods_price: "399.00",
          value: 1,
          id: 2
        }
      ],
      checkall: false,
      checked: [],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  },
  components: {
    patterbhead
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods: {
    checkalls: function() {
      var _this = this;
      if (this.checkall) {
        // 实现反选
        this.checked = [];
      } else {
        // 实现全选
        this.checked = [];
        var list = this.buylists;

        $.each(list, function(i, v) {
          _this.checked.push(v.id);
        });
      }
      if (this.checked.length === this.buylists.length) {
        this.checkall = true;
      }
    },
    checkinput: function(index, id) {
      var _this = this;
      console.log(_this.checked);
      if (_this.checked.indexOf(id) != "-1") {
        _this.checked.splice(index, 1);
      } else {
        _this.checked.push(this.buylists[index].id);
      }

      if (_this.checked.length == this.buylists.length) {
        this.checkall = true;
      } else {
        this.checkall = false;
      }
    },
    seAccout: function() {
      this.$router.push("/patternb/seAccout");
    },
    minus: function() {
      console.log(1);
    },
    /**
     * 删除item
     * index是下标
     */
    deleteItem(index) {
      this.buylists.splice(index, 1);
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
    }
  }
};
</script>

<style>
</style>
