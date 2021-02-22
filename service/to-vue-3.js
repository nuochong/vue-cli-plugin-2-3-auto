import toVue3 from 'vue-2-3-auto/to-vue-3';
import Vue2 from 'vue2/dist/vue.esm.browser.js';
import * as Vue3 from 'vue3/dist/vue.esm-browser.js';
toVue3.register(Vue2, Vue3);
export default toVue3