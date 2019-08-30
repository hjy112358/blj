<template>
  <div class="neworder">
    <div class="orderhead">
      <div class="on">
        <a href="javascript:void(0)">未读</a>
      </div>
      <div @click="allorder()">
        <a href="javascript:void(0)">全部</a>
      </div>
    </div>
    <div class="ordercontent">
      <!-- 无消息 -->
      <div class="nomsg" v-if='orderlist.length==0'>
        <img src="../../assets/images/storeman/noscale.png" alt />
      </div>
      <!-- 有消息 -->
      <div class="contentlist" v-else>
        <ul>
          <li v-for="(order,index) in orderlist" :key='index'>
            <a href="javascript:void(0)" class="flex jus-between align-c">
              <div class="flex jus-start align-c">
                <div>
                  <img src="../../assets/images/public/user.png" alt />
                </div>
                <div class="contentdetail">
                  <p class="contentname">{{order.name}}</p>
                  <p class="contentext">{{order.text}}</p>
                </div>
              </div>

              <div class="contnumtime clearfix">
                <p class="contime">10:50</p>
                <p class="contentnum">1</p>
              </div>
            </a>
          </li>
         
        </ul>
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
  name: "neworder",
  data() {
    return {
        orderlist:[
            {name:'Hlao',text:'Hlao在您的店里购买了一件衣服'},
            {name:'Hlao',text:'Hlao在您的店里购买了一件衣服'},
            {name:'Hlao',text:'Hlao在您的店里购买了一件衣服'}
        ]
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  methods: {
    allorder: function() {
      this.$router.push("/storeman/allorders");
    }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundColor = "#f2f2f2";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = "";
    next();
  }
};
</script>

<style>
</style>
