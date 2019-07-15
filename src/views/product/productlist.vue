<template>
  <div class="products">
    <div class="tophead maincolorbg align-c flex jus-between">
      <div class="flex jus-start align-c">
        <a href="javascript:void(0)"  class="backicon"  @click="go">
          <img src="../../assets/images/public/backW.png" alt>
        </a>
        <div class="inputbox pos-r">
          <input type="search" id="search_text" placeholder="搜索关键字" class="font-15">
        </div>
      </div>

      <div class="msgbox">
        <img src="../../assets/images/public/msg.png" alt>
      </div>
    </div>
    <div class="productsbox padding-t130">
      <div class="navLeft">
        <ul>
          <li
            v-for="(list, key) in lists"
            :key="key"
            v-on:click="addClass(key)"
            v-bind:class="{ nowpage:key==current}"
          >{{list.name}}</li>
        </ul>
      </div>
      <div class="navright">
        <div class="adver">
          <img src="../../assets/images/good/adver.jpg" alt>
        </div>
        <ul class="lev2box">
          <li v-for="(lev2, key2) in lists[treeid].menu" :key="key2" class="lev2">
            {{lev2.name}}
            <ul class="lev3box clearfix">
              <li v-for="(lev3, key3) in lev2.sub_menu" :key="key3" class="lev3">
                <a href="javascript:void(0)" @click="goDetail()">
                  <img :src="lev3.img" alt>
                  <p>{{lev3.name}}</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import "../../assets/css/product/productlist.css";
</style>


<script>
export default {
  name: "products",
  data: function() {
    return {
      lists: [
        {
          name: "特产 食品 保健",
          id: 0,
          menu: [
            {
              name: "休闲食品",
              sub_menu: [
                {
                  name: "休闲食品0",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/a69b523c3adeed63e878b0d006e37c4f.jpg",
                  id: 1
                },
                {
                  name: "坚果炒货0",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/7ac64809847cdd56ff49d308c6a1fd73.jpg",
                  id: 2
                },
                {
                  name: "肉干肉脯0",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/58caf983a1cccb97c74ef0507d6cc187.jpg",
                  id: 3
                }
              ]
            },
            {
              name: "休闲食品",
              sub_menu: [
                {
                  name: "休闲食品01",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/a69b523c3adeed63e878b0d006e37c4f.jpg",
                  id: 1
                },
                {
                  name: "坚果炒货01",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/7ac64809847cdd56ff49d308c6a1fd73.jpg",
                  id: 2
                },
                {
                  name: "肉干肉脯01",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/58caf983a1cccb97c74ef0507d6cc187.jpg",
                  id: 3
                }
              ]
            }
          ]
        },
        {
          name: "新品",
          id: 1,
          menu: [
            {
              name: "首发",
              sub_menu: [
                {
                  name: "首发10",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/a69b523c3adeed63e878b0d006e37c4f.jpg",
                  id: 1
                },
                {
                  name: "坚果炒货10",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/7ac64809847cdd56ff49d308c6a1fd73.jpg",
                  id: 2
                },
                {
                  name: "肉干肉脯10",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/58caf983a1cccb97c74ef0507d6cc187.jpg",
                  id: 3
                }
              ]
            },
            {
              name: "休闲食品",
              sub_menu: [
                {
                  name: "休闲食品11",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/a69b523c3adeed63e878b0d006e37c4f.jpg",
                  id: 1
                },
                {
                  name: "坚果炒货11",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/7ac64809847cdd56ff49d308c6a1fd73.jpg",
                  id: 2
                },
                {
                  name: "肉干肉脯11",
                  img:
                    "https://2019-05-31.oss-cn-shanghai.aliyuncs.com/58caf983a1cccb97c74ef0507d6cc187.jpg",
                  id: 3
                }
              ]
            }
          ]
        }
      ],
      treeid: 0,
      current: 0
    };
  },
  created: function() {
    this.$emit("footer", true);
  },
  methods: {
    addClass: function(index) {
      this.current = index;
      this.treeid = index;
    },
    goDetail:function(){
       this.$router.push("/product/productDtail");
    },
    go:function(){
        this.$router.go(-1);//返回上一页
    }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next()
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next()
  }
};
</script>
              