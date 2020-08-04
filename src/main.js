import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/common.scss";

Vue.config.productionTip = false;

import Box from "@/components/common/box";
import Tab from "@/components/common/tab";
import Input from "@/components/common/input";
import Textarea from "@/components/common/textarea";
import Radio from "@/components/common/radio";
import Checkbox from "@/components/common/checkbox";
import Switch from "@/components/common/switch";
import Select from "@/components/common/select";
import DatePicker from "@/components/common/date-picker";
import Button from "@/components/common/button";
import TextButton from "@/components/common/text-button";
import Table from "@/components/common/table";
import Pagination from "@/components/common/pagination";
import Popup from "@/components/common/popup";
import Msg from "@/components/common/msg";

Vue.component("c-box", Box);
Vue.component("c-tab", Tab);
Vue.component("c-input", Input);
Vue.component("c-textarea", Textarea);
Vue.component("c-radio", Radio);
Vue.component("c-checkbox", Checkbox);
Vue.component("c-switch", Switch);
Vue.component("c-select", Select);
Vue.component("c-date-picker", DatePicker);
Vue.component("c-button", Button);
Vue.component("c-text-button", TextButton);
Vue.component("c-table", Table);
Vue.component("c-pagination", Pagination);
Vue.component("c-popup", Popup);
Vue.component("c-msg", Msg);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
