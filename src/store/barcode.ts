import {Module} from 'vuex'

interface ModuleState{
    lastScan:string,
    lastScanTimestamp:number,
    isScanning:boolean,
    scanHistory:string[],
}

const barcodeModule: Module<ModuleState, any> = {
    state: {
        lastScan:"",
        lastScanTimestamp:0,
        isScanning:false,
        scanHistory:[],
    },
    mutations: {
        set_barcode(state, payload){
            state.lastScan = payload;
        },
        set_lastScanTimestamp(state, payload){
            state.lastScanTimestamp = payload;
        },
        set_isScanning(state, payload){
            state.isScanning = payload;
        },
    },
    actions: {
        async onBarcodeScanned({ commit }, payload){
            commit('set_barcode', payload); 
            commit('set_lastScanTimestamp', Date.now())
        },
    }
}
  

export default barcodeModule;