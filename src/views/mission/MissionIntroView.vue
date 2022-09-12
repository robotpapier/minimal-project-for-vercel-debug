<template>
    <div class="mission-intro-view">

        <div class="back yellow-bg" @click="onBack"><</div>
        <div class="mission-id blue">
            <div class="mission-text uppercase">mission</div>
            <div class="mission-id-number">{{mission.id}}</div>
        </div>
        <div class="missions-infos dark-blue">
            <div class="mission-title uppercase" v-html="mission.title"></div>
            <div class="mission-description" v-html="mission.desc"></div>
        </div>
        <div class="icon">
            <img :src="`./icons/${mission.icon}.svg`" />
        </div>

        <div class="confirm">
            <RoundedButton class="buttonStart" @click.native="onConfirm" :color="'dark-blue-bg'" v-html="$t('mission_confirm')" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission from "@/vo/Mission";
import SoundPlayer from "@/controllers/SoundPlayer"
@Component
export default class MissionIntroView extends Vue {
    @Prop() mission!:Mission;
    

    public mounted():void {
        SoundPlayer.play("new_mission")

        // set state 
        console.log('isMissionView:', true)
        this.$store.commit("set_isMissionView", true)
  
    }

    public beforeDestroy():void {
        
    }

    public onConfirm():void{
        this.$emit("confirm")
        this.$store.commit("set_isMissionView", false)
    }

    public onBack():void{
        this.$emit("giveUp")
    }

}
</script>

<style scoped lang="scss">

</style>