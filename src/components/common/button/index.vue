<template>
  <div class="c-button" :class="addClass" :style="addStyle" @click="click">
    <slot>确认</slot>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: null
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      const arr = [];
      if (this.theme) arr.push(this.theme);
      if (this.size) arr.push(this.size);
      if (this.disabled) arr.push("disabled");
      return arr;
    },
    addStyle() {
      const arr = [];
      if (this.width) arr.push(`width:${this.width}px`);
      if (this.long) arr.push(`width:100%`);
      return arr.join("; ");
    }
  },
  methods: {
    click() {
      if (this.disabled) return;
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.c-button ~ .c-button {
  margin-left: 10px;
}
.c-button {
  display: inline-block;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  white-space: nowrap;
  background: $colorGrayVf8;
  border: $border;
  @include border-radius-2;
  cursor: pointer;
  &.primary {
    color: $colorWhite;
    background: $colorBlue;
    border: 1px solid $colorBlue;
  }
  &.success {
    color: $colorWhite;
    background: $colorGreen;
    border: 1px solid $colorGreen;
  }
  &.warn {
    color: $colorWhite;
    background: $colorYellow;
    border: 1px solid $colorYellow;
  }
  &.error {
    color: $colorWhite;
    background: $colorRed;
    border: 1px solid $colorRed;
  }
  &.primary-border {
    color: $colorBlue;
    border: 1px solid $colorBlue;
  }
  &.success-border {
    color: $colorGreen;
    border: 1px solid $colorGreen;
  }
  &.warn-border {
    color: $colorYellow;
    border: 1px solid $colorYellow;
  }
  &.error-border {
    color: $colorRed;
    border: 1px solid $colorRed;
  }
  &.large {
    padding: 0 20px;
    line-height: 34px;
  }
  &.small {
    padding: 0 10px;
    line-height: 26px;
  }
  &.mini {
    padding: 0 5px;
    line-height: 22px;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover {
      opacity: 0.6;
    }
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
