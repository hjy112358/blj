<template>
  <div class="mycollect">
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
                  :class="{movec:candelete.id==item.id}"
                  @touchstart="touchStart(item)"
                  @touchend="touchEnd(item)"
                  :key="index"
                >
                  <div class="productmsg">
                    <div class="flex jus-start margin-t10 margin-b20">
                      <div class="collectimg flex jus-start align-c">
                        <img :src="item.original_img" alt class />
                      </div>
                      <div class="collectdetail">
                        <p class="collectmsg font-16">{{item.goods_name}}</p>
                        <p class="collectnum font-16">{{item.collect_sum}}人收藏</p>
                        <p class="collectprice maincolor font-16">￥{{item.shop_price}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="del delcollect" @click="deleteItem(index)">删除</div>
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
<script>
export default {
  name: "mycollect",
  data() {
    return {
      // 数据
      list: [
        {
          id: 1,
          goods_name: "品质珠饰专营店",
          collect_sum: "10",
          shop_price:'10',
          original_img:"http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg"  
        },
       {
          id: 2,
          goods_name: "品质珠饰专营店2",
          collect_sum: "102",
          shop_price:'102',
          original_img:"http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg"  
        },
        {
          id: 3,
          goods_name: "品质珠饰专营店3",
          collect_sum: "130",
          shop_price:'130',
          original_img:"http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg"  
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

