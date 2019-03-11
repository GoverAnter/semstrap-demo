import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import { VueSemstrap } from '@inveasy/semstrap';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('strap-window', () => import('@inveasy/semstrap').then((v) => v.StrapWindow));
Vue.component('strap-alert', () => import('@inveasy/semstrap').then((v) => v.StrapAlert));
Vue.component('strap-button', () => import('@inveasy/semstrap').then((v) => v.StrapButton));
Vue.component('strap-table', () => import('@inveasy/semstrap').then((v) => v.StrapTable));
Vue.component('strap-icon', () => import('@inveasy/semstrap').then((v) => v.StrapIcon));
Vue.component('strap-link', () => import('@inveasy/semstrap').then((v) => v.StrapLink));
Vue.component('strap-pooled-dynamic-page', () => import('@inveasy/semstrap').then((v) => v.StrapPooledDynamicPage));
Vue.component('strap-dropdown', () => import('@inveasy/semstrap').then((v) => v.StrapDropdown));

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US'
});

// Load all locale files in 'locales' folder
const files = require.context('./locales', true, /.+\.json$/);
files.keys().forEach((fileName) => {
  i18n.mergeLocaleMessage(fileName.replace('.json', '').replace('./', ''), files(fileName));
});

Vue.use(VueSemstrap, { i18n });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
