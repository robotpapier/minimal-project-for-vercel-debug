<template>
    <div class="measure-component-display">
        <div class="measure-component">
            <div v-if="!currentMeasure">
                <MeasureIcon :state="'unknown'" :measure="currentMeasure" :key="'none'"/>
            </div>
            <div v-else-if="isMeasureRelatedToCurrentMission">
                <MeasureIcon :state="'related'" :measure="currentMeasure" :key="currentMeasure.title"/>
            </div>
            <div v-else>
                <MeasureIcon :state="'not-related'" :measure="currentMeasure" :key="currentMeasure.title"/>
            </div>
        </div>
        <div class="measure-display">
            <div class="main-desc" v-html="labels.main">
            </div>
            <div class="second-desc">
                <span v-html="labels.secondary"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure } from "@/vo/Mission";

@Component
export default class MeasureComponent extends Vue {
    @Prop() mission!:Mission;
    currentMeasure!:Measure | undefined;
    isMeasureRelatedToCurrentMission!:boolean;

    get labels(){
        if(!this.currentMeasure){
            return {
                main: this.mission.tutorialHelpMessage || this.$t('measure_help_default'),
                secondary: this.$t('element_to_find', {count: this.mission.measures.length, objectLabel: this.mission.objectLabel})
            }
        }
        else if(this.isMeasureRelatedToCurrentMission){
            return {
                main: this.currentMeasure.mainDesc,
                secondary: this.currentMeasure.secondaryDesc
            }
        }
        else{
            return {
                main: this.$t('useless_object'),
                secondary: this.$t('scan_another_element')
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>