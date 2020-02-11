/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// libary untuk fitur loadin
import VueProgressBar from 'vue-progressbar';

const options = {
    color: 'green', // warna berhasl loading
    failedColor: 'red', // bila gagal berwarna
    thickness: '5px', // ketebelan loading bar
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true, // 
    location: 'top', // tata letak
    inverse: false // arah default dari kiri ke kanan || true dari kanan ke kiri
}

// menggunakan libaru VueProgressBar dan menggunakan settup options
Vue.use(VueProgressBar, options);

import Notifications from 'vue-notification';
Vue.use(Notifications);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
