<template>
  <div class="shopcar">
    <div id="cart-content" v-if="produlist==''">
      <div class="qb_tac">
        <img src="../../assets/images/good/empty_cart.png" width="100" height="95" />
        <p>购物车还是空的</p>
      </div>
      <div class="qb_gap">
        <a href="javascript:void(0)" class="mod_btn btn_strong" @click="goindex()">马上逛逛</a>
      </div>
    </div>
    <div v-else>
      <div class="tablist">
        <div id="leftTabBox" class="tabBox">
          <div class="bd">
            <div class="productmsglist">
              <ul>
                <li v-for="(pro,index) in produlist" :key="index">
                  <div class="productmsg">
                    <div class="flex jus-between align-c">
                      <div class="flex jus-start align-c">
                        <div class="checkimg" style="margin-top:3px">
                          <input
                            type="checkbox"
                            class="inputcheck"
                            @click="Checkpro(pro,index)"
                            v-model="pro.ischeck"
                          />
                        </div>
                        <img src="../../assets/images/good/store.png" alt class="store" />
                        <p class="proname">
                          {{pro.name}}
                          <i>></i>
                        </p>
                      </div>
                      <span class="maincolor">领券</span>
                    </div>
                    <div
                      class="flex jus-start margin-t10 margin-b20 align-c pos-r"
                      style="padding-bottom:10px"
                      v-for="(pros,index1) in pro.prokids"
                      :key="index1"
                    >
                      <div class="checkimg">
                        <input
                          type="checkbox"
                          class="inputcheck"
                          @click="CheckItem(pros,index)"
                          v-model="pros.checkstatus"
                        />
                      </div>
                      <div class="goodsimg flex jus-start align-c">
                        <img :src="pros.img" alt />
                      </div>
                      <div style="max-width: 200px;margin-left:15px;">
                        <p class="goodsdetail">{{pros.prodetail}}</p>
                        <div
                          class="goodproceAnum flex jus-between align-c"
                          style="max-width: 200px;margin-top:10px"
                        >
                          <span class="maincolor">￥{{pros.price}}</span>
                          <div class="flex jus-between align-c shopNum">
                            <a href="javascript:void(0)" @click="sub(index,index1)">-</a>
                            <input type="text" v-model="pros.num" readonly />
                            <a href="javascript:void(0)" @click="add(index,index1)">+</a>
                          </div>
                        </div>
                      </div>
                      <div class="del el-icon-delete"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="settle flex jus-between align-c">
        <div class="flex jus-start align-c" style="margin-left:15px">
          <input
            type="checkbox"
            class="inputcheck"
            id="checkall"
            @click="allcheck()"
            v-model="checkall"
          />
          <label for="checkall" class="font-16" style="margin-left:15px">全选</label>
        </div>
        <div class="flex jus-start align-c">
          <p class="font-16">
            合计：
            <span class="maincolor font-16">￥400</span>
          </p>
          <p class="accounts font-18 maincolorbg" @click="settle()">结算</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/order.css";
.productmsglist ul li {
  margin-top: 0;
  margin-bottom: 30px;
}
.productmsg .proname {
  line-height: 70px;
}
</style>
<script>
export default {
  name: "shopcar",
  data: function() {
    return {
      produlist: [
        {
          name: "小天才儿童智能电话手表防水",
          ischeck: false,
          prokids: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "1",
              checkstatus: false
            },
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "2",
              checkstatus: false
            }
          ]
        },
        {
          name: "小天才儿童智能电话手表防水1",
          ischeck: false,
          prokids: [
            {
              img:
                "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/d7d2d3596ab46e240aa97fbeb31018dc42f16dba.jpeg",
              prodetail: "儿童智能电话手表防水定位拍照多功能儿童智能电话手表防",
              price: "89",
              num: "1",
              checkstatus: false
            }
          ]
        }
      ],
      totalnum: 0,
      checkall: false
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
    goindex: function() {
      this.$router.push("/");
    },
    sub: function(index, index1) {
      var list = this.produlist;
      var num = list[index].prokids[index1].num;
      if (num > 1) {
        num = parseInt(num) - 1;
        list[index].prokids[index1].num = num;
      }
    },
    add: function(index, index1) {
      var list = this.produlist;
      var num = list[index].prokids[index1].num;
      num = parseInt(num) + 1;
      list[index].prokids[index1].num = num;
    },
    // 全选
    total: function(status) {
      var nums = 0;
      $.each(this.produlist, function(i, v) {
        v.ischeck = status;
        $.each(v.prokids, function(is, vs) {
          nums = parseInt(nums) + parseInt(vs.num);
          vs.checkstatus = status;
        });
      });
      this.totalnum = nums;
    },
    totalstore: function(index, status) {
      var storelist = this.produlist[index].prokids;
      $.each(storelist, function(is, vs) {
        vs.checkstatus = status;
      });
    },
    allcheck: function() {
      this.checkall = !this.checkall;
      this.total(this.checkall);
    },
    CheckItem: function(pro, index) {
      pro.checkstatus = !pro.checkstatus;
      var lenth = this.produlist[index].prokids.length;
      var storelist = this.produlist[index].prokids;
      var check = lenth;
      $.each(storelist, function(is, vs) {
        if (!vs.checkstatus) {
          --check;
        }
      });
      if (check == lenth) {
        this.produlist[index].ischeck = true;
      } else {
        this.produlist[index].ischeck = false;
      }
      this.ischeckall();
    },
    Checkpro: function(pro, index) {
      pro.ischeck = !pro.ischeck;
      this.totalstore(index, pro.ischeck);
      this.ischeckall();
    },
    ischeckall: function() {
      var lenght = this.produlist.length;
      var check = 0;
      $.each(this.produlist, function(i, v) {
        if (v.ischeck) {
          ++check;
        }
      });
      if (check == lenght) {
        this.checkall = true;
      }else{
        this.checkall = false;
      }
    },
    settle:function(){
      this.$router.push("/order/settle")
    }
  }
};
</script>


