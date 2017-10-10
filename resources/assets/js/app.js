import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
//import '../../../public/css/app.css'
import router from './router'

Vue.use(Vuetify)

Vue.component('app', require('./App.vue'))

new Vue({
  el: '#app',
  router,
})
