<template>
  <div class="common">
    <c-box title="选项卡 c-tab" class="c-box">
      <c-tab :data="tabData">
        <c-button theme="success" size="small">新增xxx</c-button>
      </c-tab>
    </c-box>
    <c-box title="表单 c-form" class="c-box">
      <c-box title="输入框 input">
        <div class="margin-b-10">{{ inputVal }}</div>
        <c-input
          :val.sync="inputVal"
          label="xxx名称"
          prompt="20个字符以内"
          error="已超出字符"
        />
      </c-box>
      <c-box title="文本区域 c-textarea">
        <c-textarea />
      </c-box>
      <c-box title="单选框 c-radio">
        <div class="margin-b-10">id: {{ radioVal }}</div>
        <div class="font-0">
          <c-radio
            v-for="(item, index) in radioData"
            :key="index"
            :val.sync="radioVal"
            :currentVal="item.id"
            class="margin-r-20"
            :disabled="item.id === 40"
          >
            {{ item.name }}
          </c-radio>
        </div>
      </c-box>
      <c-box title="复选框 c-checkbox">
        <div class="margin-b-10">id: {{ checkboxList }}</div>
        <div class="font-0">
          <c-checkbox
            v-for="(item, index) in checkboxData"
            :key="index"
            :list.sync="checkboxList"
            :currentVal="item.id"
            :disabled="item.id === 40"
            class="margin-r-20"
          >
            {{ item.name }}
          </c-checkbox>
        </div>
        <div class="font-0 margin-t-10">
          <c-checkbox
            :currentVal.sync="isChooseAll"
            isBatch
            class="margin-r-20"
            @click="clickChooseAll"
          >
            全选
          </c-checkbox>
        </div>
      </c-box>
      <c-box title="开关 c-switch">
        <div class="font-0">
          <c-switch :val.sync="switchData.switchBooleanVal" class="margin-r-20">
            {{ switchData.switchBooleanVal }} Boolean
          </c-switch>
          <c-switch
            :val.sync="switchData.switchNumberVal"
            :valTrue="10"
            :valFalse="20"
            class="margin-r-20"
          >
            {{ switchData.switchNumberVal }} Number
          </c-switch>
          <c-switch
            :val.sync="switchData.switchStringVal"
            valTrue="是"
            valFalse="否"
            class="margin-r-20"
          >
            {{ switchData.switchStringVal }} String
          </c-switch>
          <c-switch
            :val.sync="switchData.switchStringVal"
            valTrue="是"
            valFalse="否"
            class="margin-r-20"
            disabled
          >
            {{ switchData.switchStringVal }} String disabled
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
        <c-button @click="clickButton('参数')">click</c-button>
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
        <c-text-button @click="clickTextButton('参数')">click</c-text-button>
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
      inputVal: "xxx",
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
      radioVal: 20,
      checkboxData: [
        {
          name: "苹果",
          id: 10
        },
        {
          name: "香蕉",
          id: 20
        },
        {
          name: "菠萝",
          id: 30
        },
        {
          name: "葡萄",
          id: 40
        }
      ],
      checkboxList: [10, 30],
      isChooseAll: false,
      switchData: {
        switchBooleanVal: false,
        switchNumberVal: 10,
        switchStringVal: "否"
      }
    };
  },
  computed: {
    isChooseAllList() {
      return this.checkboxData.length === this.checkboxList.length;
    }
  },
  watch: {
    isChooseAllList(val) {
      this.isChooseAll = val;
    }
  },
  methods: {
    clickButton(params) {
      alert(params);
    },
    clickTextButton(params) {
      alert(params);
    },
    // 全选
    clickChooseAll() {
      this.checkboxList = [];
      if (this.isChooseAll) {
        this.checkboxData.forEach(item => {
          this.checkboxList.push(item.id);
        });
      }
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
