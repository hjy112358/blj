<template>
  <div class="proman">
    <div class="storemanlist">
      <div class="storemanTitle flex align-c">
        <p>上传产品</p>
      </div>
      <form action class="layui-form">
        <div class="flex jus-between align-c formlist">
          <p>
            <span class="maincolor">*</span>商品名称
          </p>
          <input type="text" name="goods_name" id placeholder="填输入商品名称" />
        </div>
        <div class="formlist flex jus-between align-c">
          <p>
            <span class="maincolor">*</span>商品分类
          </p>
          <div class="flex jus-between align-c" style="max-width:560px;font-size: 20px;">
            <el-cascader :props="props"></el-cascader>
          </div>
        </div>
        <div class="flex jus-between align-c formlist">
          <p>
            <span class="maincolor">*</span>商品文字简介
          </p>
          <input type="text" id placeholder="填输入商品文字简介" name="goods_remark" />
        </div>

        <div class="flex jus-between align-c formlist">
          <p>
            <span class="maincolor">*</span>是否赠送Z券
          </p>

          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </form>
    </div>
    <a href="javascript:void(0)" class="nextstep maincolorbg" @click="promantwo()">下一步</a>
  </div>
</template>
<style scoped>
@import "../../assets/css/storeman/storeman.css";
@import "../../assets/css/storeman/applystep.css";
</style>
<style >
.el-select .el-input.is-focus .el-input__inner,
.el-input,
.el-input--suffix .el-input__inner {
  height: 88px;
  line-height: 88px;
  font-size: 24px;
  margin-top: -3px;
  border: none;
  text-align: right;
}
.el-select-dropdown__item,
.el-cascader-node {
  font-size: 24px;
  height: 80px;
  line-height: 80px;
}
.el-popper .popper__arrow::after{
  border-width:0
}
.el-popper[x-placement^=bottom]{
  margin-top:0
}
</style>
<script>
let id = 0;
export default {
  name: "proman",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "0",
          label: "否"
        }
      ],
      value: "1",
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      }
    };
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
  methods: {
    promantwo:function(){
      this.$router.push("/storeman/promantwo")
    }
  }
};
</script>



