import toVue2 from 'vue-2-3-auto/to-vue-2';
import Vue2 from 'vue2/dist/vue.esm.browser.js';
import * as Vue3 from 'vue3/dist/vue.esm-browser.js';
toVue2.register(Vue2, Vue3);
export default toVue2