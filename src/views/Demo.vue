<template>
  <div class="demo">
    <div class="box">
      <div class="title">表单</div>
      <div class="content">表单内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo"
};
</script>

<style lang="scss" scoped>
.box {
  background: $colorGrayVfa;
}
.title {
  padding: 10px 20px;
  background: $colorGrayVf8;
  border-bottom: $border;
}
.content {
  padding: 20px;
}
</style>
