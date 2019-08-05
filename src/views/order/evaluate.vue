<template>
  <div class="orderDetail">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <span class="font-18">发布</span>
    </div>

    <div class="productgrade flex jus-between align-c">
      <div class="gradeimg">
        <img :src="order_goods.original_img" alt />
      </div>
      <p class="font-16">满意度</p>
      <div class="gradelist">
        <ul class="clearfix">
          <li data-id="1" :class="grade>=1?'active':''" @click="grades(1)"></li>
          <li data-id="2" :class="grade>=2?'active':''" @click="grades(2)"></li>
          <li data-id="3" :class="grade>=3?'active':''" @click="grades(3)"></li>
          <li data-id="4" :class="grade>=4?'active':''" @click="grades(4)"></li>
          <li data-id="5" :class="grade>=5?'active':''" @click="grades(5)"></li>
        </ul>
      </div>
      <p class="font-16 badGrade" v-if="gradetext==0"></p>
      <p class="font-16 badGrade" v-else-if="gradetext==1">很差</p>
      <p class="font-16 badGrade" v-else-if="gradetext==2">差</p>
      <p class="font-16 badGrade" v-else-if="gradetext==3">一般</p>
      <p class="font-16 badGrade" v-else-if="gradetext==4">好</p>
      <p class="font-16 badGrade" v-else-if="gradetext==5">很好</p>
    </div>

    <div class="evaluate">
      <div>
        <textarea name="content" id="content" rows="10" placeholder="产品用着还满意吗？请畅所欲言···"></textarea>
      </div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class=""></i>
      </el-upload>
    </div>

    <div class="storeEvalute" style="padding-top:10px">
      <div class="flex jus-start align-c">
        <img src="../../assets/images/good/storeimg.png" alt width="16" height="14" />
        <p class="font-16">店铺评分</p>
      </div>
      <div class="evalutelist">
        <ul class="clearfix">
          <li class="flex jus-start align-c">
            <p class="font-16">物流服务</p>
            <div class="logisticslist">
              <ul>
                <li data-id="1" :class="logis>=1?'active':''" @click="logi(1)"></li>
                <li data-id="2" :class="logis>=2?'active':''" @click="logi(2)"></li>
                <li data-id="3" :class="logis>=3?'active':''" @click="logi(3)"></li>
                <li data-id="4" :class="logis>=4?'active':''" @click="logi(4)"></li>
                <li data-id="5" :class="logis>=5?'active':''" @click="logi(5)"></li>
              </ul>
            </div>
          </li>
          <li class="flex jus-start align-c">
            <p class="font-16">服务态度</p>
            <div class="servelist">
              <ul>
                <li data-id="1" :class="serve>=1?'active':''" @click="serves(1)"></li>
                <li data-id="2" :class="serve>=2?'active':''" @click="serves(2)"></li>
                <li data-id="3" :class="serve>=3?'active':''" @click="serves(3)"></li>
                <li data-id="4" :class="serve>=4?'active':''" @click="serves(4)"></li>
                <li data-id="5" :class="serve>=5?'active':''" @click="serves(5)"></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/goodstyle.css";
</style>
<script>
export default {
  name: "evaluate",
  data: function() {
    return {
      order_goods: {
        original_img:
          "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/ccccda1586b2b9b4ee43c0df853425dc864ef218.jpeg"
      },
      grade: 0,
      logis: 0,
      serve: 0,
      gradetext: 0,
       dialogImageUrl: '',
        dialogVisible: false
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods: {
    grades: function(index) {
      this.grade = index;
      this.gradetext = index;
    },
    logi: function(index) {
      this.logis = index;
    },
    serves: function(index) {
      this.serve = index;
    },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>

<style>
</style>
