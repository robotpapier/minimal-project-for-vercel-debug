<template>
    <div class="hello">       
      <StreamBarcodeReader
        @decode="(a, b, c) => onDecode(a, b, c)"
        @loaded="() => onLoaded()"
      ></StreamBarcodeReader>      
    </div>
</template>
  
<script>
    import { mapState } from 'vuex'
    import { StreamBarcodeReader } from "vue-barcode-reader";
    import PopUpComponent from './common/PopUpComponent.vue';
  
    export default {
        name: "CameraScanner",
        components: {
            StreamBarcodeReader,
        },
        data() {
            return {
                text: false,
                id: null,
            };
        },
        props: {
            msg: String,
        },
        mounted() {
            console.log("this.$store.state.mission.introDone", this.$store.state.mission.introDone);
            console.log("this.$store.state.mission.tutorialDone", this.$store.state.mission.tutorialDone);
            console.log("this.$store.state.mission.currentMissionId", this.$store.state.mission.currentMissionId);
            console.log("this.$store.state.mission.missions", this.$store.state.mission.missions);
            console.log("this.$store.state.mission.currentMeasureId", this.$store.state.mission.currentMeasureId);

        },
        computed: {
            ...mapState({
                introDone: state => state.mission.introDone,
                tutorialDone: state => state.mission.tutorialDone,
                currentMissionId: state => state.mission.currentMissionId,
                missions: state => state.mission.missions,
                currentMeasureId: state => state.mission.currentMeasureId,
            })
        },
        methods: {
            onDecode(a, b, c) {
                console.log(a, b, c);
                this.text = a;
                this.$emit("decoded", a);

                if (this.id) clearTimeout(this.id);
                this.id = setTimeout(() => {
                    if (this.text === a) {
                        this.text = "";
                    }
                }, 5000);
            },
            onLoaded() {
                console.log("load");
            },
        },
        watch: {
           
        }
    };
</script>
<style scoped>
</style>