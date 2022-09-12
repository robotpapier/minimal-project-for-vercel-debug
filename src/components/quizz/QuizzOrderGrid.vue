<template>
    <div class="quizz-order grid">

        <div class="scale">
            <div class="less">-</div>
            <div class="more">+</div>
        </div>

        <div class="element"
            v-for="(element, elementIndex) in quizz.textResponses"
            :key="elementIndex"
            @touchstart="selectElement(elementIndex)"
            :style="{
                left:`${getPos(elementIndex).x}%`,
                top:`${getPos(elementIndex).y}%`,
            }">
            <div class="title">{{element.title}}</div>
            <Icon :icon="element.icon"/>

        </div>
        
        <div :class="['quiz-answer',  {disabled:!allSelected}]">
            <div @click="validate" class="button">{{$t("validate_quizz")}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Quizz } from '../../vo/Mission';

@Component({
    components:{}
})
export default class QuizzOrder extends Vue {
    @Prop() mission!:Mission;
    @Prop() quizz!:Quizz;

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public getPos(i:number){
        const selectedPos = this.selectedElements.indexOf(i);
        if(selectedPos == -1){
            return {x:4+23*(i), y:12}
        }else{
            return {x:4+23*(selectedPos), y:46    }
        }
    }

    public getOpacity(i:number){
        
        if(this.selectedElements.indexOf(i) != -1){
            return 1;
        }else{
            return this.allSelected ? 0.6 : 1;
        }
    }

    public get allSelected(){
        return this.selectedElements.length == 4;
    }

    selectedElements:number[] = [];
    
    selectElement(i:number){
        const pos = this.selectedElements.indexOf(i);
        if( pos == -1) {            
            this.selectedElements.push(i);
        } 
        else {            
            this.selectedElements = this.selectedElements.filter((_,i)=>i!=pos);
        }        
       
    }

    validate(){
        if(!this.allSelected){
            return;
        }

        const order = this.selectedElements
            .map((i,pos)=>{return {pos:pos+1, order:this.quizz.textResponses[i].isCorrect, title:this.quizz.textResponses[i].title}})
        const incorrectElement = order.find(el=>el.pos != el.order)
        if(incorrectElement){
            this.error()
        }
        else{
            this.done();
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

.quizz-order{
    position: relative;
    width: 100%;
    height: 600px;
    display:flex;
    justify-content: center;
    .question{
        text-align:center;
        padding-top:40px;
        font-weight: bold;
    }
    .element{
        position:absolute;
        width: 23vw;
        height: 30vh;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.2s ease;
        overflow: hidden;
        
        img{
            width:100%;
            transform: scale(2);
        }
        .title{
            text-align: center;
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
            font-weight: bold;
            text-transform: uppercase;
            height: 50px;
        }
    }
    .bowl{
        position:absolute;
        left:15%;
        top:75%;
        pointer-events: none;

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

    .scale {
        position:absolute;
        left:0px;
        right:0px;
        top:40%;

        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        border-top: solid $light-blue 1px;

        padding: 5px 10px;
        div {
            font-size: 60px;
        }
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