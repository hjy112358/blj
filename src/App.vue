<template>
  <div id="app">
    <app-footer v-if="footer_show"></app-footer>
    <router-view v-on:footer="footer"/>
  </div>
</template>

<script>
import "../src/assets/css/public/mypublic.css";
import "../src/assets/js/rem.js";
import Footer from "./components/foot.vue";
import $ from "jquery";
export default {
  name: "App",
  data() {
    return {
      footer_show: true
    };
  },
  components: {
    "app-footer": Footer
  },
  methods: {
    footer: function(bool) {
      this.footer_show = bool;
    }
  }
};
</script>

<style>
</style>
