<template>
 <div class='aboutMe'>
<communityhead/>
 </div>
</template>

<script>
import communityhead from "../../components/communityhead.vue";
 export default {
   name:'aboutMe',
   data () {
     return {

     }
 },
  created: function() {
    this.$emit("footer", false);
  },
 components: {
    communityhead
  },
 }
</script>

