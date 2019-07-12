<template>
  <div id="app">
    <app-foot v-if="footer_show"></app-foot>
    <router-view/>
  </div>
</template>

<script>
import "../src/assets/css/public/mypublic.css"
import "../src/assets/js/rem.js"
import AppFoot  from "./components/foot.vue"
import $ from 'jquery'
export default {
  name: 'App',
  components:{
    AppFoot
  },
  data(){
      return {
          footer_show:true
      }
  },
   methods:{
      //是否显示底部
      AppFoot:function (bool) {
          this.footer_show = bool;
      }
  }
}
</script>

<style>

</style>
