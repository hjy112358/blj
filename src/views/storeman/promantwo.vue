<template>
  <div class="promantwo">
    <div class="headbg"></div>
    <div class="storemanlist">
      <form method="post" action>
        <div class="newmold">
          <div class="storemanTitle flex jus-between align-c addin" @click="addbox()">
            <p>新增库存</p>
            <img src="../../assets/images/public/return.png" alt />
          </div>
          <div class="inventory">
            <ul>
              <li
                v-for="(report,index) in reportlist"
                :key="index"
                class="flex jus-between align-c"
              >
                <p>规格：{{report.specite}}</p>
                <p>库存：{{report.repert}}</p>
                <p>售价：{{report.price}}</p>
                <p>利润：{{report.profit}}</p>
                <a href="javascript:;" class="del-btnicon" @click="del(index)">
                  <img src="../../assets/images/storeman/del.png" alt />
                </a>
              </li>
            </ul>
          </div>
          <div class="line"></div>
        </div>
        <div class="flex jus-between formup">
          <label class>主图上传</label>
          <van-uploader v-model="fileList" multiple :preview-size="80" :max-count="1" />
        </div>
        <input type="hidden" name="img" id="img" />
      </form>
    </div>
    <a href="javascript:void(0)" class="nextstep maincolorbg">确认</a>

    <div class="mark" v-show="add==1">
      <div class="addrepert">
        <h2>新增库存</h2>
        <div class="addcontent">
          <input type="text" placeholder="请输入规格" v-model="specite" />
          <input type="text" placeholder="请输入库存" v-model="repert" />
          <input type="text" placeholder="请输入售价" v-model="price" />
          <input type="text" placeholder="请输入利润" v-model="profit" />
        </div>
        <div class="addbtn clearfix">
          <a href="javascript:void(0)" class="sureBtn" @click="sure()">确定</a>
          <a href="javascript:void(0)" class="canclebtn" @click="cancle()">取消</a>
        </div>
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
  name: "promantwo",
  data() {
    return {
      fileList: [],
      add: 0,
      reportlist: [],
      specite: "",
      repert: "",
      price: "",
      profit: ""
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
    cancle: function() {
      this.add = 0;
      this.clear();
    },
    sure: function() {
      this.add = 0;
      if (this.specite || this.repert || this.price || this.profit) {
        var addstr = {
          specite: this.specite,
          repert: this.repert,
          price: this.price,
          profit: this.profit
        };
        this.reportlist.push(addstr);
      }

      
      this.clear();
    },
    addbox: function() {
      this.add = 1;
    },
    del: function(index) {
      this.reportlist.splice(index, 1);
    },
    clear: function() {
      this.specite = "";
      this.repert = "";
      this.price = "";
      this.profit = "";
    }
  }
};
</script>

<style>
</style>
