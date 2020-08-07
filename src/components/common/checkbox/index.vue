<template>
  <div class="c-checkbox" :class="addClass" @click="click">
    <div class="c-checkbox-outside">
      <div class="c-checkbox-within">
        ✔
      </div>
    </div>
    <span class="margin-l-5 item-middle">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isBatch: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    currentVal: {
      type: [String, Number, Boolean],
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
      // 是否批量
      if (!this.isBatch) {
        this.list.forEach(item => {
          if (item === this.currentVal) arr.push("active");
        });
      } else {
        if (this.currentVal) arr.push("active");
      }
      if (this.disabled) arr.push("disabled");
      return arr.join(" ");
    }
  },
  methods: {
    click() {
      if (this.disabled) return;
      // 是否批量
      if (!this.isBatch) {
        let list = this.list;
        const isChoose = list.every(item => {
          return item !== this.currentVal;
        });
        // 是否要选中
        if (isChoose) {
          list.push(this.currentVal);
        } else {
          list.forEach((item, index) => {
            if (item === this.currentVal) list.splice(index, 1);
          });
        }
        this.$emit("update:list", list);
      } else {
        this.$emit("update:currentVal", !this.currentVal);
        this.$emit("click");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.c-checkbox {
  @include item-middle;
  cursor: pointer;
  .c-checkbox-outside {
    @include item-middle;
    width: 16px;
    height: 16px;
    background: $colorWhite;
    border: $border;
    @include border-radius-2;
  }
  .c-checkbox-within {
    margin: 1px 0;
    text-align: center;
    color: $colorWhite;
  }
  &.active {
    color: $colorBlue;
    .c-checkbox-outside {
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
