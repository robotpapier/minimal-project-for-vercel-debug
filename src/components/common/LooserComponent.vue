<template>
    <div class="looser-view">

        <div class="looser-view-content">
            <div class="mission-title" v-html="$t('quizz_fail')"></div>
            <div class="mission-description " v-html="quizz.failMessage"></div>

            
        </div>
        <div class="icon">
                <img :src="`./icons/${mission.icon}.svg`" alt="logo" />
            </div>
        <div class="flag flag-red">
            <div class="top"></div>
            <div class="bottom">
                <div class="button answer" @click="closePopup"  v-html="quizz.nextQuestionButtonLabel">
                </div>
            </div>
            
        </div>
      
    </div>
</template>
<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission, { Quizz } from '@/vo/Mission';
import SoundPlayer from '../../controllers/SoundPlayer';

@Component
export default class LooserComponent extends Vue {
    @Prop() quizz!:Quizz
    @Prop() mission!:Mission

    public mounted():void{
        SoundPlayer.play("loose")
    }
    
    public closePopup() {
        this.$emit('closePopup');
    }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables/colors";

</style>