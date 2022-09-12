<template>
    <div class="scannerview">
        


        <!-- <transition name="slide-right"> -->
            <MissionView 
                :mission="currentMission"
                :key="currentMission.id"
                v-if="currentMission"
            />
        <!-- </transition> -->

        <!-- <transition name="zoom"> -->
            <AppLandingComponent 
                v-if="showLandingPage"
                @enter="onEnterApp"
            />
        <!-- </transition> -->
        <!-- <transition name="slide-left"> -->
            <MissionListView
                v-if="!currentMission && !showLandingPage"
            />
        <!-- </transition> -->
        
        <PopUpComponent ref="missionChangePopup" name="missionChangePopup">
            <ChangeMissionComponent @confirm="confirmMissionChange" :mission="currentMission"/>
        </PopUpComponent>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import config from "../vo/config"
import PopUpComponent from '../components/common/PopUpComponent.vue';


@Component
export default class ScannerView extends Vue {
    


    public mounted():void {
        this.init();        
    }

    public beforeDestroy():void {
        
    }

    public get showLandingPage(){
        return !this.$store.state.mission.introDone;
    }

    public onEnterApp() {
        this.$store.commit("set_introDone", true)
    }

    public init(){
    //     this.$store.commit("set_missions", config.missions)
    }

    public get newMissionId(){
        return this.$store.state.mission.newMissionId 
    }

    @Watch("newMissionId")
    onNewMissionIdChange(newValue:string){
        if(newValue != ""){            
            (this.$refs.missionChangePopup as PopUpComponent).show()
            //this.$store.commit("set_isMissionView", true);
        }        
        else{
            (this.$refs.missionChangePopup as PopUpComponent).hide()
            //this.$store.commit("set_isMissionView", false);

        }
    }

    public confirmMissionChange(){
        return this.$store.dispatch('confirmSetMission', {missionId:this.newMissionId});
    }

}

</script>

<style scoped lang="scss">
.scannerview{
    height: 100vh;
    display: flex;
    position: absolute;
    width: 100vw;
    /* vertical-align: middle; */
    align-items: center;
    justify-content: center;

    bottom: 0;
    overflow: hidden;
    z-index: 3;
}

.slide-left{
    &-enter-active, &-leave-active {
        transition: all .5s ease;
    }
    &-enter, &-leave-to{
        transform: translateX(-100vh);

    }
}

.zoom{
    &-enter-active, &-leave-active {
        transition: all .3s ease;
    }
    &-enter,&-leave-to{
        transform: scale(1.5);
        opacity:0;
    }
    
}
.slide-right{
    &-enter-active, &-leave-active {
        transition: all .5s ease;
    }
    &-enter{
        transform: translateY(-100vh);

    }
     &-leave-to{
        transform: translateX(100vh);

     }
}
</style>