<template>
    <div id="mission-list-view">

        <div class="help yellow-bg" @click="onHelpClicked">?</div>

        <div class="logo">
            <img :src="'./icons/hisense/logo.svg'" alt="logo" />
        </div>
        
        <div class="missions-text" v-if="remainingMissions > 0" v-html="$t('mission_list_title')"></div>
        <div class="missions-text green" v-else v-html="$t('missions_list_complete_title')"></div>
        
        <ul class="mission-list uppercase">
            <li v-for="mission in missions"
                :key="mission.key"
                @click="onMissionClick(mission)"
                :class="[mission.status.toLowerCase()]">

                
                <div class="mission-title" v-if="mission.status == 'IDLE'">mission {{mission.id}}</div>
                <div class="mission-title" v-else>{{mission.shortTitle}}</div>
                <div class="quizz-status" 
                    v-for="(quizz,qi) in mission.quizz"
                    :key="'quizz'+qi">
                    <div :class="['mission-result', quizz.status.toLowerCase()]" v-if="mission.status != 'IDLE' && quizz.status == 'UNDONE'">?</div>
                    <div :class="['mission-result', quizz.status.toLowerCase()]" v-if="mission.status != 'IDLE' && quizz.status == 'SUCCESS'">✓</div>
                    <div :class="['mission-result', quizz.status.toLowerCase()]" v-if="mission.status != 'IDLE' && quizz.status == 'FAIL'">x</div>
                </div>
                <RoundedButton v-if="isDebug() && mission.status == 'IDLE'" class="manualScan" @click.native="manualLoadMission(mission.id)" v-html="$t('manual_scan_button')" />
            </li>
        </ul>

        <PopUpComponent v-if="!isDebug() || true" ref="helpPopup" name="helpPopup" >
            <HelpComponent />
        </PopUpComponent>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission from "../vo/Mission";
import PopUpComponent from '../components/common/PopUpComponent.vue';
import config from '../vo/config';

@Component
export default class MissionListComponent extends Vue {
    missions!:Mission[];

    public mounted():void {
        if(!this.$store.state.mission.tutorialDone){
            this.onHelpClicked();
            
        }
    }

    public beforeDestroy():void {
        
    }

    public get remainingMissions():number {
        return this.missions.filter((mission)=> {return mission.status!="DONE"}).length;
    }

    public onMissionClick(mission:Mission){
        if(config.fakeMode){

            this.$store.dispatch("setMission", {missionId: mission.id})
        }
        else{
            if(mission.status == "IDLE"){
                if(!this.isDebug()) (this.$refs.helpPopup as PopUpComponent).show();
                this.$store.commit("set_isMissionView", true);
            }
        }
    }

    public onHelpClicked() {
        if(!this.isDebug() || true) (this.$refs.helpPopup as PopUpComponent).show();
        this.$store.commit("set_isMissionView", true);
        
    }

    public manualLoadMission(id:number) {
        setTimeout(()=> {
            if(!this.isDebug()) (this.$refs.helpPopup as PopUpComponent).hide();
            this.$root.$emit('manualMissionScan', id);            
        },100);
        
        console.log("manualMissionScan clicked:", id);
    }

    public isDebug(){
        console.log("this.$store.state.mission.isDebug", this.$store.state.mission.isDebug);
        return this.$store.state.mission.isDebug;
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";




</style>