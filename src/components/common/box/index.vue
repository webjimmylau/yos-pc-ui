<template>
  <div class="box">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background: $colorGrayVfd;
}
.title {
  padding: 10px 1em;
  background: $colorGrayVe;
}
.content {
  padding: 20px 3em;
}
</style>
