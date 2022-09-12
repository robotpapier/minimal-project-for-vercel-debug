<template>
    <div class="barcodecontroller">
        <CameraScanner @decoded="onDecoded" />
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import CameraScanner from "../components/CameraScanner.vue";
import { watch } from "fs";

@Component({
    components:{CameraScanner}
})
export default class BarcodeController extends Vue {

    public mounted():void {
         let _global = window as any;
        _global.onBarcodeScanned = (barcode:string) => this.onBarcodeScanned(barcode);

        let self = this;

        // event listener for manualScan
        this.$root.$on("manualMissionScan", function(value:any) {
            //self.onBarcodeScanned("MEASURE." + value + ".9");

            let barcode = "MISSION." + value;
            console.log("=== MANUAL QR code decoded:", barcode)  
            self.$store.dispatch("onBarcodeScanned", barcode);
            self.onScanChange(barcode);
        })

        this.$root.$on("manualMeasure", function(value:any) {
            //self.onBarcodeScanned("MEASURE." + value + ".9");

            // get currentmission            

            let barcode = "MEASURE." + self.$store.state.mission.currentMissionId + "." + value;
            console.log("=== MANUAL MEASURE decoded:", barcode)  
            self.$store.dispatch("onBarcodeScanned", barcode);
            self.onScanChange(barcode);
        })


        // hide scanner
        /*var id=6; 
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MISSION." + id));
        }, 10)*/

        // TEST
        /*var id=4; 
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("RESET"));
        }, 500)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MISSION." + id));
        }, 1000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".0"));
        }, 3000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".1"));
        }, 3500)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".2"));
        }, 4000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".3"));
        }, 4500)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".4"));
        }, 5000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".5"));
        }, 5000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".6"));
        }, 5000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".7"));
        }, 5000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".8"));
        }, 5000)
        setTimeout( () => {
            console.log("test",this.onBarcodeScanned("MEASURE." + id + ".9"));
        }, 5000)
        */
    }
    
    // qr code scanner camera
    onDecoded(barcode:string){

        // Scanner ON/OFF on intro
        
        if(this.$store.state.mission.introDone || true) {      
            console.log("=== QR code decoded:", barcode)  
            this.$store.dispatch("onBarcodeScanned", barcode);
            this.onScanChange(barcode);
        } else {
            console.log("=== QR code decoded onIntro:", barcode);
            if(barcode === "RESET" || barcode === "RESTART" ) {
                console.log("--- onIntro allowed QR Code:", barcode);
                this.$store.dispatch("onBarcodeScanned", barcode);
                this.onScanChange(barcode);
            }
        }
    } 

    // qr code scanner bluetooth
    onBarcodeScanned(barcode:string){
        this.$store.dispatch("onBarcodeScanned", barcode)
        this.onScanChange(barcode)
    } 

    onScanChange(scan:string){
        let params = scan.split(".");
        let command = params[0]
        switch(command){
            case "MISSION":{
                let missionId = params[1];
                this.onMissionScan(missionId);
                break;
            }
            case "MEASURE":{
                let missionId = params[1];
                let measureId = params[2].split(" ")[0]; // FIX to support " : " added to QRCodes
                this.onMeasureScan(missionId, measureId);
                break;
            }
            case "RESET":{
                this.onReset();
                break;
            }
            default:{
                console.error("SCAN COMMAND NOT FOUND", scan)
                break;
            }
        }
    }
    
    onReset() {
        this.$store.dispatch("reset")
    }

    onMeasureScan(missionId: string, measureId: string) {
        this.$store.dispatch("onMeasure", {missionId, measureId})
    }
    
    onMissionScan(missionId: string) {
        this.$store.dispatch("setMission", {missionId})
    }
}
</script>

<style  lang="scss">
.barcodecontroller{
    
}


</style>