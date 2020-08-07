<template>
  <div class="c-input" :style="addStyle">
    <div v-if="label" class="c-input-label">{{ label }}：</div>
    <div class="c-input-cont">
      <input
        type="text"
        v-model.trim="value"
        :class="addInputClass"
        :style="addInputStyle"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        @input="input"
        @change="change"
        @focus="focus"
        @blur="blur"
      />
    </div>
    <div v-if="prompt" class="c-input-prompt">{{ prompt }}</div>
    <div v-if="error" class="c-input-error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: null
    },
    long: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    prompt: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {
    addStyle() {
      const arr = [];
      if (this.long) arr.push(`width:100%`);
      return arr.join("; ");
    },
    addInputClass() {
      const arr = [];
      if (this.size) arr.push(this.size);
      return arr;
    },
    addInputStyle() {
      const arr = [];
      if (!this.long && this.width) arr.push(`width:${this.width}px`);
      return arr.join("; ");
    }
  },
  mounted() {
    this.value = this.val;
  },
  methods: {
    input() {
      // this.$emit("update:val", this.value);
    },
    change() {
      this.$emit("update:val", this.value);
    },
    focus() {
      console.log("focus");
    },
    blur() {
      console.log("blur");
    }
  }
};
</script>

<style lang="scss" scoped>
.c-input {
  @include item-middle;
  .c-input-label {
    @include item-middle;
  }
  .c-input-cont {
    @include item-middle;
    width: inherit;
    input {
      box-sizing: border-box;
      @include item-middle;
      width: 100%;
      height: 32px;
      line-height: 30px;
      padding: 0 5px;
      border: $border;
      @include border-radius-2;
      &:disabled {
        cursor: not-allowed;
      }
      &:focus {
        border-color: $colorBlue;
      }
      &.small {
        height: 28px;
        line-height: 26px;
      }
      &.mini {
        height: 24px;
        line-height: 22px;
      }
    }
  }
  .c-input-prompt {
    @include item-middle;
    margin-left: 5px;
    color: $colorGrayV9;
  }
  .c-input-error {
    @include item-middle;
    margin-left: 5px;
    color: $colorRed;
  }
}
</style>
