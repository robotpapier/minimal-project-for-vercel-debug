<template>
    <div class="quizz-view" v-if="quizz">

        <div class="back-to-measure uppercase" @click="onBack">
            <div>
            Revoir les mesures
            </div>
            <!-- <div class="icon-a">
                <img :src="'./icons/scanner.svg'" alt="scanner" />
            </div> -->
        </div>

        <div class="mission-id blue">
            <div class="mission-text uppercase">mission</div>
            <div class="mission-id-number">{{mission.id}}</div>
        </div>

        <div class="question uppercase" v-html="quizz.question"/>

        <QuizzFruit v-if="quizz.type == 'FRUIT'" 
            class="quizz"
            :mission="mission" 
            :quizz="quizz"
            @success="onSuccess" @fail="onFail"/>

        <QuizzOrder v-else-if="quizz.type == 'ORDER'" 
            class="quizz"
            :mission="mission" 
            :quizz="quizz"
            @success="onSuccess" @fail="onFail"/>
        
        <QuizzOrderGrid v-else-if="quizz.type == 'ORDER_GRID'" 
            class="quizz"
            :mission="mission" 
            :quizz="quizz"
            @success="onSuccess" @fail="onFail"/>

        <QuizzMeasure v-else-if="quizz.type == 'MEASURE'" 
            class="quizz"
            :mission="mission" 
            :quizz="quizz"
            @success="onSuccess" @fail="onFail"/>
        
        <QuizzMeasureGrid v-else-if="quizz.type == 'MEASURE_GRID'" 
            class="quizz"
            :mission="mission" 
            :quizz="quizz"
            @success="onSuccess" @fail="onFail"/>

        <div class="quizz" v-else>
            <div class="quizz-responses" >
                <QuizzResponse 
                    v-for="(response, index) in responses" 
                    :key="index"
                    :response="response"
                    :selected="selectedResponse == response"
                    @click.native="onResponseSelected(response,index)">

                </QuizzResponse>
            </div>

            <div :class="['quiz-answer', {disabled:!selectedResponse}]">
                <div @click="onValidate" class="button">{{$t("validate_quizz")}}</div>
            </div>

        </div>
        
        <PopUpComponent ref="winnerComponent" name="winnerComponent" :showCloseButton="false">
            <WinnerComponent :quizz="quizz" :mission="mission" @closePopup="closePopup" />
        </PopUpComponent>
        <PopUpComponent ref="looserComponent" name="looserComponent" :showCloseButton="false">
            <LooserComponent :quizz="quizz" :mission="mission" @closePopup="closePopup" />
        </PopUpComponent>

    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure, Quizz, QuizzResponse } from '@/vo/Mission';
import WinnerComponent from '../../components/common/WinnerComponent.vue';
import PopUpComponent from '../../components/common/PopUpComponent.vue';

@Component({
    components:{}
})
export default class QuizzView extends Vue {
    @Prop() mission!:Mission;

    selectedResponse?:any = null;

    public done = false;
    public success = false;


    public beforeDestroy():void {
        if(this.done){;
            const quizzs = this.mission.quizz.filter(q=>q.status=="UNDONE");
            if(quizzs.length <= 1){
                this.$store.dispatch("validateMission", {missionId: this.mission.id});            
            }
            this.closePopup()
        }
    }
    
    public get quizz(){
        const quizz = this.mission.quizz.find(q=>q.status=="UNDONE");
        if(!quizz){
            this.$emit("done")
        }
        return quizz
    }

    public onResponseSelected(measure:QuizzResponse, index:number){
        this.selectedResponse = measure;
    }

    public get correctResponse(){
        return this.responses.find(m=>m.isCorrect == 1 || m.isCorrect == "1")
    }

    public get responses() : QuizzResponse[]{
        if(!this.quizz) return [];
        
        switch(this.quizz.type){
            case "MEASURE":{
                return this.mission.measures;
            }
            case "TEXT":
            default:{
                return this.quizz.textResponses;
            }
        }
    }

    public onValidate():void{
        if(this.selectedResponse){
            if(this.selectedResponse == this.correctResponse){
                this.onSuccess();
            }
            else{
                this.onFail();
            }
        }
    }

    
    onSuccess(){
        (this.$refs.winnerComponent as PopUpComponent).show();
        this.success = true;
        this.done = true;
    }

    onFail(){
        (this.$refs.looserComponent as PopUpComponent).show();
        this.success = false;
        this.done = true;
    }

    public onBack():void{
        this.$emit("back")
    }
    
    public closePopup():void{
        (this.$refs.looserComponent as PopUpComponent).hide();
        (this.$refs.winnerComponent as PopUpComponent).hide();
        this.$store.dispatch("quizzDone", {
            mission:this.mission, 
            quizz: this.quizz, 
            success:this.success
        });
        this.done = false;
        this.success = false;
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";

    
</style>