<template>
    <div class="history-element" :class="hasGridClass()" @click="onMeasureClick">

        <div 
            :class="['done', (currentMeasure == measure) ? 'current' : '']"
            v-if="measure.status == 'DONE'"
        >
            <div>
                {{measure.title}}
            </div>
        </div>

        <div v-else class=" unknown">
              
            <div>
             
                {{mission.objectLabel}} {{ getIndex }} <span v-if="isDebug() && false" style="color:black;"> (Mesurer manuellement)</span>
            </div>
            <!-- <div class="help yellow-bg">?</div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure } from '@/vo/Mission';

@Component({
    components:{}
})
export default class HistoryComponent extends Vue {
    @Prop() measure!:Measure;
    @Prop() mission!:Mission;
    @Prop() index!:number;
    @Prop() numElement!:number;

    public mounted():void {
        
    }

    public get getIndex():number {
        return this.index + 1
    }

    public beforeDestroy():void {
        
    }

    public onMeasureClick():void {
        this.$emit("click")
        if(this.isDebug()) this.manualMeasure(this.index)
    }

    public manualMeasure(id:number) {
        this.$root.$emit('manualMeasure', id);    
    }

    public isDebug(){
        console.log("this.$store.state.mission.isDebug", this.$store.state.mission.isDebug);
        return this.$store.state.mission.isDebug;
    }

    public hasGridClass(){
        return this.numElement > 6 ? 'grid' : ''
    }


}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";

</style>