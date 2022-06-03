import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.use(firestorePlugin)

export const bus = new Vue({
    data: {
      mensaje:''
    }
})

export const nuevoBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
