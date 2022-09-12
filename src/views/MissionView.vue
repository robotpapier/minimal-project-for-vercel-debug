<template>
    <div class="mission-view">
        <div class="mission-view-components">

            <transition name="zoom">
                <MissionIntroView
                    :mission="mission"
                    v-if="state=='INTRO'"
                    @confirm="onIntroScreenConfirm"
                    @giveUp="onGiveUpRequest"
                />
            </transition>
            <!-- <transition name="slide-down"> -->

                <MissionMeasureView
                    :mission="mission"
                    v-if="state=='MISSION'"
                    @answer="onAnswerQuizz"
                    @giveUp="onGiveUpRequest"
                    key="mission"
                />

            <!-- </transition> -->
            <!-- <transition name="slide-up"> -->
                <QuizzView 
                    :mission="mission"
                    v-if="state=='QUIZZ'"
                    @back="onBack"
                    @done="onQuizzDone"
                    key="quizz"
                />
            <!-- </transition> -->

            <PopUpComponent ref="quitPopup" name="quitPopup">
                <QuitComponent @giveUp="onGiveUpConfirm" :mission="mission"/>
            </PopUpComponent>
        </div>
        
    </div>

</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure } from "../vo/Mission";
import PopUpComponent from '@/components/common/PopUpComponent.vue';

type Screen = "INTRO" | "MISSION" | "QUIZZ"

@Component
export default class MissionView extends Vue {
    @Prop() mission!:Mission;

    public state:Screen = "INTRO"
    public giveUpPopup = false;
    
    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public onIntroScreenConfirm(){
        this.state = "MISSION";
    }

    public onQuizzDone(){
        this.$store.dispatch("validateMission", {missionId: this.mission.id});
    }

    public onAppEnter() {
        this.state = "MISSION"
    }

    @Watch("currentMeasure")
    public onMeasureChange() {
        if(this.state == "INTRO"){
            this.state = "MISSION"
        }
    }

    public onGiveUpRequest(){
        (this.$refs.quitPopup as PopUpComponent).show();
    }

    public onAnswerQuizz(){
        this.state = "QUIZZ";
    }

    public onBack(){
        switch(this.state){
            case "MISSION":
            case "INTRO":
                (this.$refs.quitPopup as PopUpComponent).show();
                break;
            case "QUIZZ":
                this.state = "MISSION";
                break;
            
        }
    }

    public onGiveUpConfirm():void{
        this.giveUpPopup = false;
        this.$store.dispatch("giveUpMission");
    }

    public isDebug(){
        console.log("this.$store.state.mission.isDebug", this.$store.state.mission.isDebug);
        return this.$store.state.mission.isDebug;
    }

}
</script>

<style scoped lang="scss">
.mission-view{
    position: absolute;
    top:0px;left:0;bottom:0px;right:0;
}

.slide-down{
    &-enter-active, &-leave-active {
        transition: all .4s ease;
    }
    &-enter, &-leave-to{
        transform: translateY(-100vh);
        opacity:0;
    } 
    
}


.slide-up{
    &-enter-active, &-leave-active {
        transition: all .4s ease;
    }
    &-enter, &-leave-to{
        transform: translateY(100vh);
        opacity:0;
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
</style>