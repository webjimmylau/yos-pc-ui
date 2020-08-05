<template>
  <div class="c-tab clearfix" v-if="data.length">
    <div class="c-tab-button" v-for="(item, index) in data" :key="index">
      <router-link :to="item.url">{{ item.title }}</router-link>
    </div>
    <div class="c-tab-slot">
      <slot></slot>
    </div>
    <div class="c-tab-line"></div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.c-tab {
  position: relative;
  .c-tab-button ~ .c-tab-button {
    margin-left: 10px;
  }
  .c-tab-button {
    float: left;
    position: relative;
    z-index: 9;
    a {
      display: block;
      padding: 0 15px 1px 15px;
      line-height: 30px;
      background: $colorGrayVfa;
      border: $border;
      border-bottom: none;
      border-radius: 2px 2px 0 0;
      &.active {
        color: $colorBlue;
        background: $colorWhite;
        border-color: $colorBlue;
      }
    }
  }
  .c-tab-slot {
    position: absolute;
    top: 0;
    right: 0;
  }
  .c-tab-line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: $colorGrayVd;
    overflow: hidden;
  }
}
</style>
