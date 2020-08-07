<template>
  <div class="c-radio" :class="addClass" @click="click">
    <div class="c-radio-outside">
      <div class="c-radio-within"></div>
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
      type: [String, Number],
      required: true
    },
    currentVal: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      const arr = [];
      if (this.val === this.currentVal) arr.push("active");
      if (this.disabled) arr.push("disabled");
      return arr.join(" ");
    }
  },
  methods: {
    click() {
      if (this.disabled) return;
      this.$emit("update:val", this.currentVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-radio {
  @include item-middle;
  cursor: pointer;
  .c-radio-outside {
    @include item-middle;
    width: 16px;
    height: 16px;
    background: $colorWhite;
    border: $border;
    @include border-radius-full;
  }
  .c-radio-within {
    margin: 4px;
    width: 6px;
    height: 6px;
    background: $colorWhite;
    @include border-radius-full;
  }
  &.active {
    color: $colorBlue;
    .c-radio-outside {
      background: $colorBlue;
      border-color: $colorBlue;
    }
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
