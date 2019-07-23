<template>
  <div class="shareCode">
    <div class="shareCode pos-r">
      <canvas id="canvas">请升级浏览器</canvas>
      <img id="canvasImg" src alt />
      <img id="user_imgs" src alt />
      <div id="qrcodeCanvas"></div>
      <img id="base" ref="base" src alt />
      <img id="invitation_back" src="../../assets/images/user/codebgnew.png" style="width: 100%;" />
      <div class="codewrap">
        <div id="codeimg"></div>
        <div class="codemsg">
          <p class="font-12 maincolor pos-r">
            你的邀请码：
            <span>{{invitecode}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../assets/css/user/sharecode.css";
</style>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "shareCode",
  data: function() {
    return {
      invitecode: "910705"
    };
  },
  methods: {
    qrCode: function(url) {
         document.getElementById('base').innerHTML = ''
      let qrcode = new QRCode("base", {
        width: 150, //图像宽度
        height: 150, //图像高度
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        text: "http://abc.fyc365.cn/mobile/User/reg.html?invite_id=" + this.invitecode, 
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
      qrcode.clear(); //清除二维码
      qrcode.makeCode(url); //生成另一个新的二维码
    }
  },
  mounted(){
      this.qrCode()
  }
};
</script>


