<template>
  <div class="c-switch" :class="addClass" @click="click">
    <div class="c-switch-circle"></div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: [Boolean, Number, String],
      required: true
    },
    valTrue: {
      type: [Boolean, Number, String],
      default: true
    },
    valFalse: {
      type: [Boolean, Number, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      const arr = [];
      if (this.val === this.valTrue) arr.push("active");
      if (this.disabled) arr.push("disabled");
      return arr;
    }
  },
  methods: {
    click() {
      if (this.disabled) return;
      const newVal = this.val === this.valTrue ? this.valFalse : this.valTrue;
      this.$emit("update:val", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-switch {
  @include item-middle;
  position: relative;
  width: 40px;
  height: 20px;
  margin-top: 6px;
  margin-bottom: 6px;
  background: $colorGrayVd;
  border: 2px solid $colorGrayVd;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  .c-switch-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: $colorWhite;
    @include border-radius-full;
    transition: left 0.2s;
  }
  &.active {
    background: $colorBlue;
    border-color: $colorBlue;
    .c-switch-circle {
      left: 20px;
    }
  }
  &.disabled {
    cursor: not-allowed;
  }
}
</style>
