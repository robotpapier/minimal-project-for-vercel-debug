import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MissionPlugin from './plugins/MissionPlugin'
import i18n from './i18n'
import PlaceHolderComponent from '@/components/PlaceHolderComponent.vue'
import Utils from './vo/Utils'
import './registerServiceWorker'

//import './assets/styles/index.css'


Vue.config.productionTip = false

Vue.use(MissionPlugin)


Utils.registerAllComponents(Vue);

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

