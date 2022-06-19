// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios,axios)
Vue.use(bootstrap)

Vue.config.productionTip = false
Vue.axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.axios.defaults.headers.Authorization = ''

Vue.axios.interceptors.response.use(function(response) {

  if (response.data.error == 'Tkntfnd') {
      router.push('/');
  }

  return response.data;
}, function(error) {
  console.log(error.response.data.error);
  if (error.response.data.error == 'Tkntfnd') {
      router.push('/login');
  }
  //  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
