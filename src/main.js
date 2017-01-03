import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
window.jQuery = jQuery

import 'materialize-css/js/materialize.js'

import 'materialize-css/sass/materialize.scss'
import 'font-awesome/css/font-awesome.css'
import './custom.css'

new Vue({
  el: '#app',
  render: h => h(App)
})