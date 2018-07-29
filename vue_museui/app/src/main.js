// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '../static/css/theme-carbon.css' // 使用 carbon 主题(可更改)

import {DatePicker, Dialog, Button} from 'element-ui';
Vue.use(MuseUI);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Button);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
