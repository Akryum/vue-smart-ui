import Vue from 'vue'
import VueRouter from 'vue-router';
import SmartUi from 'vue-smart-ui';

Vue.use(VueRouter);
Vue.use(SmartUi);

import { router } from './routes';
import App from './App.vue'

import CodeSnippet from './CodeSnippet.vue';
Vue.component('code-snippet', CodeSnippet);
import DocExample from './DocExample.vue';
Vue.component('doc-example', DocExample);
import DocPage from './DocPage.vue';
Vue.component('doc-page', DocPage);
import DynamicTemplate from './DynamicTemplate.vue';
Vue.component('dynamic-template', DynamicTemplate);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});