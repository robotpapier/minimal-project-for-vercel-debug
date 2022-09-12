<template>
    <div class="quit-view">
        <div class="quit-view-content">
            <div class="text uppercase pink" v-html="$t('mission_give_up_message')"></div>
            <div class="desc pink" v-html="$t('mission_give_up_desc')"></div>

            <div class="icon" v-if="false">
                <img :src="`./icons/${mission.icon}.svg`" alt="logo" />
            </div>
        </div>
        <div class="confirm">
            <RoundedButton @click.native="quitMission" :color="'pink-bg'" v-html="$t('mission_give_up_confirm')" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import Mission from '../../vo/Mission';

@Component
export default class QuitComponent extends Vue {
    @Prop() mission!:Mission;

    public mounted():void {       
        this.$store.commit("set_isMissionView", true)
    }

    public quitMission() {
        this.$emit('giveUp');
        this.$store.commit("set_isMissionView", false)
    }

}
</script>
<style lang="scss" scoped>

</style>