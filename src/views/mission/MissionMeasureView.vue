<template>
    <div class="mission-measure-view">
        <div class="back yellow-bg" @click="onBack"><</div>
        <div class="mission-id blue">
            <div class="mission-text uppercase">mission</div>
            <div class="mission-id-number">{{mission.id}}</div>
        </div>

        <MeasureComponent :mission="mission"/>

        <MeasureHistoryComponent :mission="mission"/>

        <div :class="['quiz-answer',{disabled:!canAnswer}]">
            <div @click="answer" class="button answer">{{$t("answer_question")}}</div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission from "@/vo/Mission";

@Component
export default class MissionMeasureView extends Vue {
    @Prop() mission!:Mission;

    public get canAnswer():boolean{
        return this.mission.measures.find(measure=>measure.status != "DONE") == undefined;
    }

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public answer():void{
        if(this.canAnswer){
            this.$emit("answer");
        }
    }

    public onBack(){
        this.$emit("giveUp")
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";
.mission-measure-view{
    position: absolute;
    top:0;left:0; bottom: 0; right: 0;
    


}
</style>