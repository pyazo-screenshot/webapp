import Axios from 'axios'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { API_URL } from './config'

Vue.config.productionTip = false

function configureHttp() {
  Axios.defaults.headers.Accept = 'application/json'
  Axios.defaults.baseURL = API_URL
  Axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      if (error.response && error.response.status === 401) {
        store.dispatch('auth/logout')
        return Promise.reject(error)
      }

      return Promise.reject(error)
    },
  )
}

function registerComponents() {
  const requireComponent = require.context(
    './components',
    false,
    /base-\w+\.(vue|js)$/,
  )

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    // const componentName = upperFirst(
      // camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')),
    // )
    const componentName = fileName.split('/').pop().replace(/\.vue$/, '')

    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

store.dispatch('auth/initialize')
configureHttp()
registerComponents()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
