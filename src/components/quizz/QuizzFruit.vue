<template>
    <div class="quizzfruit">
        
        <div class="fruit"
            v-for="(fruit, fruitIndex) in mission.measures"
            :key="fruitIndex"
            @touchstart="selectFruit(fruitIndex)"
            :style="{
                left:`${getPos(fruitIndex).x}%`,
                top:`${getPos(fruitIndex).y}%`,
                opacity:`${getOpacity(fruitIndex)}`,
            }">
            <Icon :icon="fruit.icon"/>

        </div>
        <img class="bowl" :src="`./icons/0_panierlavelinge.svg`" />

    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Quizz } from '../../vo/Mission';
let numberOfValidate = 4;

@Component({
    components:{}
})
export default class QuizzFruit extends Vue {
    @Prop() mission!:Mission;
    @Prop() quizz!:Quizz;

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public getPos(i:number){
        const selectedPos = this.selectedFruits.indexOf(i);
        if(selectedPos != -1){
            return {x:30+((0.5+(selectedPos%3))/3)*40, y:75}
        }else{
            return {x:10+((0.5+(i%3))/3)*80, y:5+(60/3)*(0.5+Math.floor(i/3))}
        }
    }

    public getOpacity(i:number){
        
        if(this.selectedFruits.indexOf(i) != -1){
            return 1;
        }else{
            return this.allSelected ? 0.6 : 1;
        }
    }

    public get allSelected(){
        return this.selectedFruits.length == numberOfValidate;
    }

    selectedFruits:number[] = [];
    
    selectFruit(i:number){  
        const pos = this.selectedFruits.indexOf(i);
      
        if(!this.allSelected && pos == -1) {
            this.selectedFruits.push(i);
        }
        else { 
            this.reset();           
        }     

        if(this.allSelected){
          this.validate()
        }
    }
    validate(){
          const incorrectFruit = this.selectedFruits.map((i)=>this.mission.measures[i]).find(m=>m.isCorrect == "0")
            if(incorrectFruit){
                setTimeout(()=>this.error(),500)
            }
            else{
                setTimeout(()=>this.done(), 500)
                
            }
    }
    error(){
        this.reset();
    }

    done(){
        this.$emit("success")
    }

    reset(){
        this.selectedFruits = []
    }
}
</script>

<style scoped lang="scss">
.quizzfruit{
    position: relative;
    display:flex;
    justify-content: center;
    margin-top:60px;
    .question{
        text-align:center;
    }
    .fruit{
        position:absolute;
        width: 30%;
        height: 15%;
        display:flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50% ,-50%);
        transition: all 0.2s ease;
        overflow: hidden;
        img{
            width:100%;
            transform: scale(1.3);
        }
    }
    .bowl{
        position:absolute;
        width: 70%;
        left:15%;
        bottom:0%;
        pointer-events: none;
        transform: translate(-0% ,-0%);

    }
    .reset{
        position:absolute;
        width: 100px;
        height: 100px;
        left:-100px;
    }
}
</style>