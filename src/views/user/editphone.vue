<template>
    <div class="editphone">
          <div class="datelist bindphone">
            <div class="phoneline">
                <p>您已绑定手机号码</p>
                <span>{{mobile}}</span>
            </div>
            <div class="nextStep">
                <a href="javascript:void(0)" @click="changephone()">更改手机号</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "../../assets/css/user/userindex.css";
</style>
<script>
export default {
    name:'editphone',
    data:function(){
        return {
            mobile:"15221905272"
        }
    },
    methods:{
        changephone:function(){
            this.$router.push("/user/changephone");
        }
    },
  created: function() {
    this.$emit("footer", false);
  }
}
</script>

