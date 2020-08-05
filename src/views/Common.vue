<template>
  <div class="common">
    <c-box title="选项卡 c-tab" class="c-box">
      <c-tab :data="tabData">
        <c-button>新增xxx</c-button>
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
      <c-button />
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
  }
};
</script>

<style lang="scss" scoped>
.c-box ~ .c-box {
  margin-top: 10px;
}
</style>
