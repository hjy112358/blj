<template>
  <div class="profoot align-c flex jus-between">
    <div class="profootlist ">
      <ul class="flex jus-between align-c">
        <li >
          <div class="footimg">
            <img src="../assets/images/public/storeFoot.png"/>
          </div>
          <p>店铺</p>
        </li>
        <li >
          <div class="footimg">
            <img src="../assets/images/public/serviceFoot.png" />
          </div>
          <p>客服</p>
        </li>
        <li  @click="chageco()">
          <div class="footimg" >
            <img src="../assets/images/public/collectFoot.png"  v-show="!iscollect"/>
            <img src="../assets/images/public/collectFootR.png" v-show="iscollect" />
          </div>
          <p><span v-show="iscollect">已</span>收藏</p>
        </li>
      </ul>
    </div>
    <div class="profootbtn flex jus-between align-c">
        <a href="javascript:void(0)" class="shopcar" @click="showmodelbox()">加入购物车</a>
        <a href="javascript:void(0)" class="maincolorbg buyNow" @click="showmodelboxbuy()">立即购买</a>
    </div>
  </div>
</template>


<script>
import "../assets/css/public/foot.css";
export default {
  name: "profoot",
  data:function(){
      return {
          iscollect:false
      }
  },
  methods:{
      chageco:function(){
          this.iscollect = !this.iscollect
      },
      showmodelbox:function(){
        console.log(1)
        this.$parent.showmodelbox();
      },
       showmodelboxbuy:function(){
        this.$parent.showmodelboxbuy();
      }
  }
};
</script>


