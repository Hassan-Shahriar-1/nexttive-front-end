import Vue from 'vue'
import App from './App.vue'
import router from './route/routes'
import vueAxios from 'vue-axios'
import axios from 'axios'
import bootstrap from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import check from './plugins/logincheck'

import post from './components/all-post'
import admin from '@/components/admin/admin-login'
Vue.component('all-post',post)
Vue.component('admin-login',admin)
Vue.use(bootstrap)
Vue.use(vueAxios,axios)
Vue.use(router);
Vue.axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

Vue.axios.interceptors.response.use(function(response) {
  if (response.data.error == 'Tkntfnd') {
      router.go();
  }

  return response.data;
}, function(error) {
  console.log(error.response.data.error);
  if (error.response.data.error == 'Tkntfnd') {
      //router.go();
  }

});
Vue.prototype.usrtkn = window.localStorage.getItem("Usrtkn");
Vue.axios.defaults.headers.Authorization = 'Bearer ' + Vue.prototype.usrtkn;


Vue.use({
    install() {
        Vue.prototype.$check = check;
        
    }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
