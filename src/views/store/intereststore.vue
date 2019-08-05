<template>
  <div class="intereststore">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <img src="../../assets/images/public/searchR.png" alt style="width:16px; height:16px" />
    </div>

    <div class="tablist classify">
      <div id="leftTabBox" class="tabBox">
        <div class="bd">
          <!-- 全部类目 -->
          <div class="typebox">
            <div class="productmsglist">
              <ul>
                <li
                  v-for="(item,index) in list"
                  :class="{move:candelete.id==item.id}"
                  @touchstart="touchStart(item)"
                  @touchend="touchEnd(item)"
                  :key="index"
                >
                  <div class="productmsg">
                    <div class="flex jus-between margin-t10 margin-b20">
                      <div class="storeimg flex jus-start align-c">
                        <img :src="item.store_log" alt class="storeimgs" />
                        <img
                          src="../../assets/images/good/storeFocus.jpg"
                          alt
                          class="storeicon"
                        />
                      </div>
                      <div class="flex jus-between storemsg align-c">
                        <p class="goodsdetail">{{item.store_name}}</p>
                        <div class="goodproceAnum">
                          <span class="font-16 maincolor">收藏人数</span>
                          <span class="font-16 maincolor">{{item.store_collect}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="del" @click="deleteItem(index)">删除</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/store/mycollect.css";
</style>
<style>

</style>

<script>
export default {
  name: "intereststore",
  data() {
    return {
      // 数据
      list: [
        {
         id:1,
          store_name: "品质珠饰专营店",
          store_collect:'10',
          store_log:'http://abc.fyc365.cn/public/upload/store/20190528/7c3ac13df5776c759647b1e7696a317a.gif'
        },
        {
          id:2,
          store_name: "品质珠饰专营店",
          store_collect:'20',
          store_log:'http://abc.fyc365.cn/public/upload/store/20190528/7c3ac13df5776c759647b1e7696a317a.gif'
        },
        {
         id:3,
          store_name: "品质珠饰专营店",
          store_collect:'30',
          store_log:'http://abc.fyc365.cn/public/upload/store/20190528/7c3ac13df5776c759647b1e7696a317a.gif'
        }
      ],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods: {
    /**
     * 删除item
     * index是下标
     */
    deleteItem(index) {
      this.list.splice(index, 1);
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

