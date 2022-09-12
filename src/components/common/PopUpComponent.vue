<template>
    <transition name="pop">
        <div v-if="isShown" class="pop-up">
            <div class="popup-page">
            <div v-show="showCloseButton" class="popup-close yellow-bg" @click="onCloseClick">x</div>
                <slot></slot>
            </div>
            <div class="popup-overlay"></div>
        </div>
    </transition>
</template>
<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";

@Component({
    components: {}
})
export default class PopUpComponent extends Vue {
    isShown:boolean = false;
    @Prop({default: true}) showCloseButton!:boolean;
    @Prop({default: ""}) name!:string;

    public mounted():void {
        //this.$store.commit("set_isMissionView", true);
    }

    public beforeDestroy():void {
        
    }

    public onCloseClick() {
        this.hide();

        // 
        if(this.name === "helpPopup" || this.name === "quitPopup"){
            this.$store.commit("set_isMissionView", false);
        }
        console.log("ref helpPopup", this.name)
        console.log("ref quitPopup", this.name)
        console.log("ref missionChangePopup",this.$refs.missionChangePopup)
        console.log("ref winnerComponent",this.$refs.winnerComponent)
        console.log("ref looserComponent",this.$refs.looserComponent)
        
    }

    public hide() {
        this.isShown = false;
    }

    public show() {
        this.isShown = true;
    }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables/colors";

</style>