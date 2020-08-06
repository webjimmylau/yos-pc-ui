<template>
  <div class="c-switch" :class="addClass" @click="click">
    <div class="c-switch-outside">
      <div class="c-switch-within"></div>
    </div>
    <span class="margin-l-5 item-middle">
      <slot></slot>
    </span>
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
  cursor: pointer;
  .c-switch-outside {
    @include item-middle;
    position: relative;
    width: 32px;
    height: 16px;
    background: $colorGrayVd;
    border: 2px solid $colorGrayVd;
    border-radius: 8px;
    transition: background 0.2s, border-color 0.2s;
  }
  .c-switch-within {
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    background: $colorWhite;
    @include border-radius-full;
    transition: left 0.2s;
  }
  &.active {
    color: $colorBlue;
    .c-switch-outside {
      background: $colorBlue;
      border-color: $colorBlue;
    }
    .c-switch-within {
      left: 16px;
    }
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
