import Vue from 'vue';

Vue.component('hello-world', () => import('./HelloWorld.vue'));
Vue.component('main-menu', () => import('./MainMenu.vue'));
Vue.component('drop-down-item', () => import('./DropDownItem.vue'));
