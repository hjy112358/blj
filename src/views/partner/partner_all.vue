<template>
  <div class="partner_all">
    <div class="tablist">
      <div id="leftTabBox" class="tabBox">
        <div class="bigGoods flex jus-between">
          <div class="bigGoodsimg">
            <img :src="goods.original_img" alt />
          </div>
          <div class="goodmsg">
            <p class="font-12 colb3" style="text-align:left">{{goods.goods_name}}</p>
            <p class="font-14 colb3">{{goods.keywords}}</p>
            <div class="discoutmsg flex jus-between align-c">
              <p class="price font-12">
                ￥
                <span class="font-18 font-bold">{{goods.shop_price}}</span>
              </p>
              <p class="inventory">库存{{goods.store_count}}</p>
              <a href="javascript:void(0)" class="font-10 battle">马上抢</a>
              <span class="triangle"></span>
            </div>
          </div>
        </div>
        <div class="bd">
          <!-- 综合 -->
          <ul class="clearfix">
            <li v-for="(part,index) in partlist" :key="index">
              <div class="sgoodsimg">
                <img :src="part.original_img" alt />
              </div>
              <div class="discoutmsg flex jus-between align-c">
                <p class="price font-12">
                  ￥
                  <span class="font-18 font-bold">{{part.shop_price}}</span>
                </p>
                <p class="inventory">库存{{part.store_count}}</p>
                <a href="javascript:void(0)" class="font-10 battle">马上抢</a>
                <span class="triangle"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mark hidden">
      <div class="agreementbox">
        <div class="agreement">
          <p>订立协议合伙人：</p>
          <p>甲方：（企业）江苏必量家电子商务有限公司</p>
          <p>法人代表：王迎宾</p>
          <p>乙方（普通合伙人）：</p>
          <p>第一条合伙宗旨：推广必量家品牌，互利互惠，共同创业;</p>
          <p>第二条合伙人企业名称：江苏必量家电子商务有限公司</p>
          <p>第三条合伙期限，电子订单签订之日起；</p>
          <p>第四条合伙方式：</p>
          <p>（一）乙方出资，共计人民币壹万元整；甲方一次性提供等额产品给予乙方；</p>
          <p>第五条 加入合伙、退出合伙；</p>
          <p>（一）加入合伙。</p>
          <p>1. 新合伙人加入合伙，必须经董事会同意；</p>
          <p>2. 承认并签署本合伙协议；</p>
          <p>(二）退出合伙。</p>
          <p>1. 被动退出合伙：合伙期限内，有下列情形之一时，乙方自动退出合伙：</p>
          <p>①乙方未能准时参与甲方企业季度总结会议，超过2次，含2次；</p>
          <p>②乙方未能完成合伙人义务；</p>
          <p>第六条 甲方的权利和义务</p>
          <p>（一）甲方的权利：</p>
          <p>1.拥有合伙实体的所有权，合伙事务的决定权和一票否决权；</p>
          <p>2.拥有合伙利益的分配权；</p>
          <p>3.甲方分配合伙利益应以出资额比例或者按协议的约定进行；</p>
          <p>4.拥有制定企业所有制度的权利；</p>
          <p>5.拥有企业所有人该享有的法定权利。</p>
          <p>（二）甲方的义务：</p>
          <p>1.保证乙方的合法权利不受侵犯；</p>
          <p>2.为乙方提供发展的平台；</p>
          <p>3.按时分配合伙人收益；</p>
          <p>4.保证乙方在本协议中规定的权利和义务不受损害。</p>
          <p>第七条 乙方的权利和义务：</p>
          <p>（一）乙方的权利：</p>
          <p>①享有公司季度利润5%加权分红，季度发放；利润奖励涉及税额部分由乙方承担；</p>
          <p>②优先拿地区代理权；</p>
          <p>③优先进入地面超市和移动超市的经营权；</p>
          <p>④优先享有公司活动资源分配权以及担保权；</p>
          <p>⑤优先享有上市公司原始股权配售；</p>
          <p>⑥享受公司其他一切政策的优先权；</p>
          <p>（二）乙方的义务：</p>
          <p>①每个月分享不少于20个新会员加入平台；</p>
          <p>②每月团队总消费业绩不少于3万元；</p>
          <p>③按时参加甲方企业季度总结会。</p>
          <p>第八条 禁止行为：</p>
          <p>（一）未经甲方同意，禁止乙方私自以合伙名义进行业务活动；如其业务获得利益归甲方，造成的损失按实际损失进行赔偿；</p>
          <p>（二）禁止乙方参与和本企业存在竞争关系的平台；</p>
          <p>（三）乙方不得从事损害甲方企业利益的活动。</p>
          <p>第九条 违约责任：</p>
          <p>（一）乙方私自转让其在甲方企业中合伙份额的，其行为无效，或者作为退出合伙处理；由此给其他合伙人造成损失的，承担赔偿责任；</p>
          <p>第十条 合同争议解决方式：</p>
          <p>1、凡因本协议或与本协议有关的一切争议，甲乙双方之间共同协商，如协商不成，提交甲方所在地仲裁委员会仲裁。</p>
          <p>2、仲裁裁决是终局的，对双方均有约束力。</p>
          <p>3、仲裁费用由败诉方承担。</p>
          <p>4、在仲裁过程中除了正在仲裁的部分外，合同的其他条款继续履行。</p>
          <p>第十一条 其他：</p>
          <p>（一） 经协商一致，甲乙双方可以修改本协议或对未尽事宜进行补充；补充、修改内容与本协议相冲突的，以补充、修改后的内容为准；</p>
          <p class="ending">江苏必量家电子商务有限公司</p>
          <div class="endingimg">
            <img src="../../assets/images/public/chapter.jpg" alt />
          </div>
        </div>
        <form action class="agreeform">
          <div class="checkinput">
            <input type="checkbox" class="ischeck" onclick="agreements()" />
            <label for class="font-12">同意签署本协议</label>
          </div>
        </form>
      </div>
      <img src="../../assets/images/good/close.png" alt class="closemark" onclick="agreeno()" />
    </div>

    <div class="contact hidden">
      <div class="contactimg">
        <p class="font-14">
          拨打电话
          <span>(0513)5588 5526</span>
        </p>
        <a href="tel:0513-5588-5526" class="contactus"></a>
        <img src="../../assets/images/good/close.png" alt class="closeimg" />
      </div>
    </div>
    <partnerfoot/>
  </div>
</template>
<style scoped>
@import "../../assets/css/partner/partner.css";
</style>
<script>
import partnerfoot from "../../components/partnerfoot.vue";
export default {
  name: "partner_all",
  data() {
    return {
      goods: {
        original_img:
          "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/9a3748cb34ab6c5ddf16a75dc5e404633baad69b.jpeg",
        goods_name: "中秋送礼佳品-玉质月饼手把件",
        keywords: "中秋送礼佳品-玉质月饼手把件",
        shop_price: "100",
        store_count: "10"
      },
      partlist: [
        {
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/6295c3f7791da317f96c5673672c7b0ef86aa11e.jpeg",
          shop_price: "100",
          store_count: "10"
        },
        {
          original_img:
            "http://2019-05-31.oss-cn-shanghai.aliyuncs.com/6295c3f7791da317f96c5673672c7b0ef86aa11e.jpeg",
          shop_price: "100",
          store_count: "10"
        }
      ]
    };
  },
  created: function() {
    this.$emit("footer", false);
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style.backgroundImage =
      "url(" + require("../../assets/images/partner/parClasifybg.png") + ")";
    window.document.body.style.backgroundSize = "100%";
    window.document.body.style.backgroundRepeat = "no-repeat";
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundImage = "";
    next();
  },
  components: {
    partnerfoot
  },
 
};
</script>

<style>
</style>
