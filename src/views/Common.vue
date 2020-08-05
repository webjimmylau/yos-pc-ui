<template>
  <div class="common">
    <c-box title="选项卡 c-tab" class="c-box">
      <c-tab :data="tabData">
        <c-button theme="success" size="small">新增xxx</c-button>
      </c-tab>
    </c-box>
    <c-box title="表单 c-form" class="c-box">
      <c-box title="输入框 input">
        <c-input />
      </c-box>
      <c-box title="文本区域 c-textarea">
        <c-textarea />
      </c-box>
      <c-box title="单选框 c-radio">
        <c-radio />
      </c-box>
      <c-box title="复选框 c-checkbox">
        <c-checkbox />
      </c-box>
      <c-box title="开关 c-switch">
        <c-switch />
      </c-box>
      <c-box title="下拉菜单 c-select">
        <c-select />
      </c-box>
      <c-box title="日期范围 c-date-picker">
        <c-date-picker />
      </c-box>
    </c-box>
    <c-box title="按钮 c-button" class="c-box">
      <c-box title="主题 theme">
        <c-button>default</c-button>
        <c-button theme="primary">primary</c-button>
        <c-button theme="success">success</c-button>
        <c-button theme="warn">warn</c-button>
        <c-button theme="error">error</c-button>
        <c-button theme="primary-border">primary-border</c-button>
        <c-button theme="success-border">success-border</c-button>
        <c-button theme="warn-border">warn-border</c-button>
        <c-button theme="error-border">error-border</c-button>
      </c-box>
      <c-box title="大小 size">
        <c-button size="large">large</c-button>
        <c-button>default</c-button>
        <c-button size="small">small</c-button>
        <c-button size="mini">mini</c-button>
      </c-box>
      <c-box title="禁用 disabled">
        <c-button disabled>disabled</c-button>
      </c-box>
      <c-box title="宽度 width">
        <c-button :width="200">200px</c-button>
        <c-button :width="400">400px</c-button>
      </c-box>
      <c-box title="宽度100% long">
        <c-button long>long</c-button>
      </c-box>
      <c-box title="点击 click">
        <c-button @click="buttonClick('参数')">click</c-button>
      </c-box>
    </c-box>
    <c-box title="文字按钮 c-text-button" class="c-box">
      <c-text-button />
    </c-box>
    <c-box title="表格 c-table" class="c-box">
      <c-table />
    </c-box>
    <c-box title="分页 c-pagination" class="c-box">
      <c-pagination />
    </c-box>
    <c-box title="弹出框 c-popup" class="c-box">
      <c-popup />
    </c-box>
    <c-box title="提示框 c-msg" class="c-box">
      <c-msg />
    </c-box>
  </div>
</template>

<script>
export default {
  name: "common",
  data() {
    return {
      tabData: [
        {
          title: "选项1",
          url: "/common?status=1"
        },
        {
          title: "选项2",
          url: "/common?status=2"
        },
        {
          title: "选项3",
          url: "/common?status=3"
        }
      ]
    };
  },
  methods: {
    buttonClick(params) {
      alert(params);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-box ~ .c-box {
  margin-top: 10px;
}
</style>
