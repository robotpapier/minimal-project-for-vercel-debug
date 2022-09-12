<template>
    <div class="quizz-measure">

        <div :class="['element', {selected:isSelected(elementIndex)}]"
            v-for="(element, elementIndex) in elements"
            :key="elementIndex"
            @touchstart="selectElement(elementIndex)"
            :style="{
                left:`${getPos(elementIndex).x}%`,
                top:`${getPos(elementIndex).y}%`,
            }">
            <Icon :icon="element.icon"/>

        </div>
        <div class="title">
            <div>
            {{title}}
            </div>
        </div>


        <div :class="['quiz-answer', {disabled:!canValidate}]">
            <div @click="validate" class="button">{{validateText}}</div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Quizz } from '../../vo/Mission';

@Component({
    components:{}
})
export default class QuizzMeasure extends Vue {
    @Prop() mission!:Mission;
    @Prop() quizz!:Quizz;
    selectedElements:number[] = [];

    public get validateText(){
        return this.$t("validate_quizz")
    }


    public get title(){
        if(this.selectedElements.length == 0){
            return ""
        }
        else{
            return this.selectedElements.map(i=>this.elements[i].title).join(", ")
        }
    }

    public get elements(){
        return this.mission.measures;
    }

    public getPos(i:number){
        const selectedPos = this.selectedElements.indexOf(i);
        const c = this.elements.length;

        if(selectedPos == -1){
            return {x: 10 + (i+0.5)*80/c, y:25}
        }else{
            const sc = this.selectedElements.length;
            return {x: 20 + (selectedPos+0.5)*60/sc, y:50}
        }
    }

    public getOpacity(i:number){
        
        if(this.selectedElements.indexOf(i) != -1){
            return 1;
        }else{
            return this.allSelected ? 0.6 : 1;
        }
    }

    public get canValidate(){
        return this.selectedElements.length >= 1;
    }

    public get allSelected(){
        return this.selectedElements.length == 1
                //== this.elements.filter(e=>e.isCorrect != "0").length;
    }

    public isSelected(i:number){
        return this.selectedElements.indexOf(i) != -1
    }

    
    selectElement(i:number){
        const pos = this.selectedElements.indexOf(i);
        if( pos == -1) {    
            if(!this.allSelected){
                this.selectedElements.push(i);
            }
            else{
                if(this.selectedElements.length == 1)
                this.selectedElements = [i];

            }
        } 
        else {            
            this.selectedElements = this.selectedElements.filter((_,i)=>i!=pos);
        }        
       
    }

    allCorrect(){

        const values = this.elements.map((el,pos)=>{return {
                    selected: this.selectedElements.indexOf(pos) != -1, 
                    shouldBeSelected: el.isCorrect != "0", 
                }
        })
        const incorrectElement = values.find(el=>el.selected != el.shouldBeSelected)

        return incorrectElement == undefined
    }

    selectedCorrect(){

        const values = this.selectedElements.map((i)=>this.elements[i].isCorrect)
        const incorrectElement = values.find(correct => correct == "0")

        return incorrectElement == undefined
    }

    validate(){
        if(!this.canValidate){
            return;
        }

        const correct = this.selectedCorrect()
        if(correct){
            this.done();
        }
        else{
            this.error()
        }
    }

    error(){
        this.$emit("fail")
    }

    done(){
        this.$emit("success")
    }

    reset(){
        this.selectedElements = []
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";

.quizz-measure{
    position: absolute;
    left:0;top:0;right: 0;bottom:0;
    display:flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 100px;

    .question{
        text-align:center;
        font-weight: bold;
        padding:15px;
    }
    .element{
        position:absolute;
        width: 30vw;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.2s ease;
        overflow: hidden;
        transform: translate(-50%, -50%);

        &.selected{
            transform: translate(-50%, -50%) scale(2);
        }
        
        img{
            width:100%;
            transform: scale(1);
        }
    }
    .title{
        text-align: center;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        font-weight: bold;
        text-transform: uppercase;
        height: 50px;
        position: absolute;
        bottom:150px;
        width:100%;
    }
    .reset{
        position:absolute;
        width: 100px;
        height: 100px;
        left:0px;
        bottom:0px;
    }
    .validate{
        position:absolute;
        width: 100px;
        height: 100px;
        bottom:0px;
        right: 0px;
    }

    .scale{
        position:absolute;
        left:0px;
        right:0px;
        top:45%;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        border-top: solid $light-blue 1px;

        padding: 5px 10px;
        .less{
            color:$green;
        }
        .more{
            color:$pink;
        }
        .title{
            color:$pink;
        }
    }
}
</style>