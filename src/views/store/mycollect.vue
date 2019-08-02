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
                  <li class="edit" v-for="(collect,index) in collects" :key='index'>
                    <div class="productmsg">
                      <div class="flex jus-start margin-t10 margin-b20">
                        <div class="collectimg flex jus-start align-c">
                          <img :src="collect.original_img" alt class />
                        </div>
                        <div class="collectdetail">
                          <p class="collectmsg font-16">{{collect.goods_name}}</p>
                          <p class="collectnum font-16">{{collect.collect_sum}}人收藏</p>
                          <p class="collectprice maincolor font-16">￥{{collect.shop_price}}</p>
                        </div>
                      </div>
                    </div>
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
  data:function(){
      return {
          collects:[{goods_name:'必量家合伙人-终极密码系列套装',collect_sum:'10',shop_price:'100',original_img:'http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg'},
          {goods_name:'必量家合伙人-终极密码系列套装2',collect_sum:'23',shop_price:'500',original_img:'http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg'},
          {goods_name:'必量家合伙人-终极密码系列套装3',collect_sum:'22',shop_price:'80',original_img:'http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg'},
          {goods_name:'必量家合伙人-终极密码系列套装4',collect_sum:'36',shop_price:'50',original_img:'http://abc.fyc365.cn/public/upload/goods/20190527/682424800500aaf584b209e230088a80.jpg'}]
      }
  }
};
</script>

