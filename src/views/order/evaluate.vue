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
      <div class="add-img clearfix" v-show="imgList.length">
        <ul class="img-list">
          <li v-for="(url,index) in imgList" :key='index'>
            <span class="el-icon-circle-close del" @click.stop="delImg(index)" ></span>
            <img :src="url.file.src" />
          </li>
        </ul>
      </div>
      <input
        @change="fileChange($event)"
        type="file"
        id="upload_file"
        multiple
        style="display: none"
      />
      <div class="add" @click="chooseType">
        <div class="add-image" align="center">
          <i class="el-icon-camera"></i>
          <p class="font-16">添加图片</p>
        </div>
      </div>
      
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
      showFace: false,
    imgList: [],
    size: 0,
    limit:6, //限制图片上传的数量
    tempImgs:[]
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
    chooseType() {
    document.getElementById('upload_file').click();
   },
   fileChange(el) {
    if (!el.target.files[0].size) return;
    this.fileList(el.target);
    el.target.value = ''
   },
   fileList(fileList) {
    let files = fileList.files;
    for (let i = 0; i < files.length; i++) {
     //判断是否为文件夹
     if (files[i].type != '') {
      this.fileAdd(files[i]);
     } else {
      //文件夹处理
      this.folders(fileList.items[i]);
     }
    }
   },
   //文件夹处理
   folders(files) {
    let _this = this;
    //判断是否为原生file
    if (files.kind) {
     files = files.webkitGetAsEntry();
    }
    files.createReader().readEntries(function (file) {
     for (let i = 0; i < file.length; i++) {
      if (file[i].isFile) {
       _this.foldersAdd(file[i]);
      } else {
       _this.folders(file[i]);
      }
     }
    });
   },
   foldersAdd(entry) {
    let _this = this;
    entry.file(function (file) {
     _this.fileAdd(file)
    })
   },
   fileAdd(file) {
    if (this.limit !== undefined) this.limit--;
    if (this.limit !== undefined && this.limit < 0) return;
    //总大小
    this.size = this.size + file.size;
    //判断是否为图片文件
    if (file.type.indexOf('image') == -1) {
     this.$dialog.toast({mes: '请选择图片文件'});
    } else {
     let reader = new FileReader();
     let image = new Image();
     let _this = this;
     reader.readAsDataURL(file);
     reader.onload = function () {
      file.src = this.result;
      image.onload = function(){
       let width = image.width;
       let height = image.height;
       file.width = width;
       file.height = height;
       _this.imgList.push({
        file
       });
       console.log( _this.imgList);
      };
      image.src= file.src;
     }
    }
   },
   delImg(index) {
    this.size = this.size - this.imgList[index].file.size;//总大小
    this.imgList.splice(index, 1);
    if (this.limit !== undefined) this.limit = 6-this.imgList.length;
   },
   displayImg() {
   }
  }
};
</script>

<style>
</style>
