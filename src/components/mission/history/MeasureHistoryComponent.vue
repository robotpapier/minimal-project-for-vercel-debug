<template>
    <div class="measure-history">
        <div class="measure-history-info" v-if="false">
            <div v-if="remainingMeasures > 0" >
                <span class='pink'>
                    {{ remainingMeasures }}
                </span> {{mission.objectLabel}}{{remainingMeasures > 1 ? "s":""}} à découvrir
            </div>
            <span v-else class='green'>{{$t('text_13')}}</span>
        </div>
        <div class="measure-history-list" :class="hasGridClass()">

            <HistoryComponent
                v-for="(measure, index) in mission.measures" 
                :key="index"
                :index="index"
                :mission="mission"
                :measure="measure"
                :numElement="mission.measures.length"
                @click="()=>onMeasureClick(mission, measure)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure } from '@/vo/Mission';
import config from '../../../vo/config';
import MissionController from '../../../controllers/MissionController.vue';

@Component({
    components:{}
})
export default class MeasureHistoryComponent extends Vue {
    @Prop() mission!:Mission;

    get fakeMeasure():{mission:Partial<Mission>, measure:Measure} | null{
        if(config.fakeMode){
            return {
                mission:{id:"10"},
                measure:{
                    id:"0",
                    title:"nope",
                    isCorrect:"0",
                    mainValue:"ca devrait pas etre affiché",
                    graphLevel:"0",
                    mainDesc:"ca devrait pas etre affiché",
                    secondaryDesc:"ca devrait pas etre affiché",
                    icon:"burger",
                    status:"IDLE",
                }
            }
        }
        return null
    }

    public get remainingMeasures() {        
        return this.mission.measures.filter((measure)=> measure.status!="DONE").length;
    }

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public onMeasureClick(mission:Mission, measure:Measure):void {
        if(measure.status == "DONE" || config.fakeMode){        
            this.$store.dispatch("onMeasure", 
                {missionId:mission.id, 
                measureId:measure.id}
            )
        }
    }

    public hasGridClass(){
        return this.mission.measures.length > 6 ? 'grid' : ''
    }


}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";

span.pink {
    font-weight: bold;
}
</style>