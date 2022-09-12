<template>
    <div :class="['quizz-element', {selected}]">
        {{response.title}} 
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Measure } from '@/vo/Mission';

@Component
export default class QuizzResponse extends Vue {
    @Prop() response!:QuizzResponse;
    @Prop() mission!:Mission;
    @Prop({default: false}) selected!:boolean;


    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/variables/colors";

</style>