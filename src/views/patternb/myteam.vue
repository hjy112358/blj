<template>
  <div class="myteam">
    <patterbhead />
    <div class="mypooldetailbox myteambox">
      <div class="mypoolorder">
        <div class="mypoolorderdetail">
          <ul>
            <li>
              <div class="detailist">
                <ul>
                  <li class="flex jus-start align-c">
                    <img src="../../assets/images/public/user.png" alt />
                    <div class="flex jus-between align-c detailbox">
                      <p>ID：123456</p>
                      <p class="maincolor">$399.00</p>
                    </div>
                  </li>
                  <li class="flex jus-start align-c">
                    <img src="../../assets/images/public/user.png" alt />
                    <div class="flex jus-between align-c detailbox">
                      <p>ID：123456</p>
                      <p class="maincolor">$399.00</p>
                    </div>
                  </li>
                  <li class="flex jus-start align-c">
                    <img src="../../assets/images/public/user.png" alt />
                    <div class="flex jus-between align-c detailbox">
                      <p>ID：123456</p>
                      <p class="maincolor">$399.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <patterbfoot />
  </div> 
</template>
<style scoped>
@import "../../assets/css/patternb/patternb.css";
</style>
<script>
import patterbhead from "../../components/patterbhead.vue";
import patterbfoot from "../../components/patterbfoot.vue";
export default {
  name: "myteam",
  data() {
    return {};
  },
  components: {
    patterbhead,
    patterbfoot
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
};
</script>

<style>
</style>
