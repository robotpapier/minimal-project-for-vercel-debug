<template>
  <div id="app">
    <BarcodeController/>
    <MissionController/>
    <ScannerView/>    
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import MissionController from './controllers/MissionController.vue';
import BarcodeController from './controllers/BarcodeController.vue';





@Component({
  components:{
    MissionController,
    BarcodeController
  }
})
export default class App extends Vue {

  public mounted():void {
    
  }

  public beforeDestroy():void {
    
  }

  @Watch("this.$refs.helpPopup")
  onHelpPopupChange(newValue:string){
        if(newValue != ""){            
            console.log("jkjlkj")
        }        
        else{
            console.log("jkjsssssssslkj")

        }
    }

}
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
