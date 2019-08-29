<template>
  <div class="alldetalorder"></div>
</template>

<script>
export default {
  name: "alldetalorder",
  data() {
    return {};
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
  }
};
</script>

<style>
</style>
 