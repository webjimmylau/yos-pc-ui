<template>
  <div class="c-text-button" :class="addClass">
    <router-link v-if="to" :to="to">
      <slot>确认</slot>
    </router-link>
    <span v-else @click="click">
      <slot>确认</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      const arr = [];
      if (this.theme) arr.push(this.theme);
      if (this.disabled) arr.push("disabled");
      return arr;
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
.c-text-button ~ .c-text-button {
  position: relative;
  margin-left: 15px;
  &::before {
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    content: "";
    width: 1px;
    background: $colorGrayVd;
    cursor: default;
  }
}
.c-text-button {
  display: inline-block;
  cursor: pointer;
  &.primary {
    color: $colorBlue;
  }
  &.success {
    color: $colorGreen;
  }
  &.warn {
    color: $colorYellow;
  }
  &.error {
    color: $colorRed;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover {
      opacity: 0.6;
    }
  }
  &:hover {
    opacity: 0.7;
  }
}
</style>
