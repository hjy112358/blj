<template>
  <div class="receivelist">
    <div class="maincolorbg flex jus-between align-c tophead">
      <a href="javascript:void(0)"></a>
      <p class="font-18"></p>
      <span class="font-18" @click="newrece()">新增地址</span>
    </div>

    <div class="addreslist">
      <ul>
        <li class="flex align-c jus-between" v-for="(rece,index) in receivelist" :key='index'>
          <div>
            <p>{{rece.recename}}</p>
            <p>{{rece.tel}}</p>
            <p>{{rece.address}}</p>
          </div>
          <div class="checkimg flex align-c " >
            <input
              type="radio"
              class="inputcheck"
              v-model="radio"
              :value='rece.value'
            />
          </div>
        </li>
       
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/order/goodstyle.css";
</style>
<script>
export default {
  name: "receivelist",
  data() {
    return {
      receivelist:[{recename:'张三',tel:'18888888888',address:'江苏省 南通市 开发区 南通市 益兴大厦',value:'1'},
      {recename:'张三1',tel:'18888888888',address:'江苏省 南通市 开发区 南通市 益兴大厦',value:'2'}],
      radio:'radio'
    };
  },
  methods:{
     newrece:function(){
       this.$router.push("/order/newrece")
     }
  },
  created: function() {
    this.$emit("footer", false);
  }
};
</script>

<style>
</style>
