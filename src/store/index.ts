import Vue from 'vue'
import Vuex from 'vuex'
import barcodeModule from './barcode'
import missionModule from './mission'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    barcode:barcodeModule,
    mission:missionModule,
    
  }
})
