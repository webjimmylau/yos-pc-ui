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
        <div>id: {{ radioId }}</div>
        <div class="font-0 margin-t-10">
          <c-radio
            v-for="(item, index) in radioData"
            :key="index"
            :val.sync="radioId"
            :valCurrent="item.id"
            class="margin-r-20"
            :disabled="item.id === 40"
          >
            {{ item.name }}
          </c-radio>
        </div>
      </c-box>
      <c-box title="复选框 c-checkbox">
        <c-checkbox />
      </c-box>
      <c-box title="开关 c-switch">
        <div class="font-0">
          <c-switch :val.sync="formData.switchBooleanVal" class="margin-r-20">
            {{ formData.switchBooleanVal }} Boolean
          </c-switch>
          <c-switch
            :val.sync="formData.switchNumberVal"
            :valTrue="10"
            :valFalse="20"
            class="margin-r-20"
          >
            {{ formData.switchNumberVal }} Number
          </c-switch>
          <c-switch
            :val.sync="formData.switchStringVal"
            valTrue="是"
            valFalse="否"
            class="margin-r-20"
          >
            {{ formData.switchStringVal }} String
          </c-switch>
          <c-switch
            :val.sync="formData.switchStringVal"
            valTrue="是"
            valFalse="否"
            class="margin-r-20"
            disabled
          >
            {{ formData.switchStringVal }} String disabled
          </c-switch>
        </div>
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
        <c-button class="margin-r-10">default</c-button>
        <c-button class="margin-r-10" theme="primary">primary</c-button>
        <c-button class="margin-r-10" theme="success">success</c-button>
        <c-button class="margin-r-10" theme="warn">warn</c-button>
        <c-button class="margin-r-10" theme="error">error</c-button>
        <c-button class="margin-r-10" theme="primary-border">
          primary-border
        </c-button>
        <c-button class="margin-r-10" theme="success-border">
          success-border
        </c-button>
        <c-button class="margin-r-10" theme="warn-border">
          warn-border
        </c-button>
        <c-button class="margin-r-10" theme="error-border">
          error-border
        </c-button>
      </c-box>
      <c-box title="大小 size">
        <c-button class="margin-r-10" size="large">large</c-button>
        <c-button class="margin-r-10">default</c-button>
        <c-button class="margin-r-10" size="small">small</c-button>
        <c-button class="margin-r-10" size="mini">mini</c-button>
      </c-box>
      <c-box title="禁用 disabled">
        <c-button disabled>disabled</c-button>
      </c-box>
      <c-box title="宽度 width">
        <c-button class="margin-r-10" :width="200">200px</c-button>
        <c-button class="margin-r-10" :width="400">400px</c-button>
      </c-box>
      <c-box title="宽度100% long">
        <c-button long>long</c-button>
      </c-box>
      <c-box title="点击 click">
        <c-button @click="buttonClick('参数')">click</c-button>
      </c-box>
    </c-box>
    <c-box title="文字按钮 c-text-button" class="c-box">
      <c-box title="主题 theme">
        <c-text-button theme="default">default</c-text-button>
        <c-text-button theme="primary">primary</c-text-button>
        <c-text-button theme="success">success</c-text-button>
        <c-text-button theme="warn">warn</c-text-button>
        <c-text-button theme="error">error</c-text-button>
      </c-box>
      <c-box title="禁用 disabled">
        <c-text-button disabled>disabled</c-text-button>
      </c-box>
      <c-box title="点击 click">
        <c-text-button to="/">url</c-text-button>
        <c-text-button @click="textButtonClick('参数')">click</c-text-button>
      </c-box>
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
      formData: {
        switchBooleanVal: false,
        switchNumberVal: 10,
        switchStringVal: "否"
      },
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
      ],
      radioData: [
        {
          name: "语文",
          id: 10
        },
        {
          name: "数学",
          id: 20
        },
        {
          name: "英语",
          id: 30
        },
        {
          name: "政治",
          id: 40
        }
      ],
      radioId: 20
    };
  },
  methods: {
    buttonClick(params) {
      alert(params);
    },
    textButtonClick(params) {
      alert(params);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-box {
  border: $border;
}
.c-box ~ .c-box {
  margin-top: 10px;
}
</style>
