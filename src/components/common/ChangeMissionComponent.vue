<template>
    <div class="change-mission">
        <div class="text uppercase" v-html="$t('mission_change_title')"></div>
        <div class="desc pink" v-html="$t('mission_change_desc')"></div>
        <div class="icon" v-if="mission && false" >
            <img :src="`./icons/${mission.icon}.svg`" alt="logo" />
        </div>
        <div class="confirm">
            <RoundedButton @click.native="quitMission" :color="'pink-bg'" v-html="$t('mission_change_confirm')" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission from '../../vo/Mission';

@Component
export default class ChangeMissionComponent extends Vue {
    @Prop() mission!:Mission;

    public mounted():void {       
        //this.$store.commit("set_isMissionView", true)
    }

    public quitMission() {
        this.$emit('confirm');
        //this.$store.commit("set_isMissionView", false)
        
    }

}
</script>
<style lang="scss" scoped>

</style>