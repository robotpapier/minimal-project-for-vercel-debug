<template>
    <div id="landing">
        <div class="logo px-10">
            <img :src="'./icons/hisense/logo.svg'" alt="logo" />
        </div>
        <div v-html="$t('landing_info')"></div>
        <RoundedButton class="buttonStart" @click.native="goToMissions" :color="'dark-blue-bg'" v-html="$t('landing_button')" />
        <div class="scanner">
            <img :src="'./icons/scanner.svg'" alt="scanner" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
@Component
export default class AppLandingComponent extends Vue {

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

    public goToMissions() {
        this.$emit('enter');
        
    }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables/colors";
    #landing {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        text-align: center;
        position: relative;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        button {
            margin-bottom: 20px;
        }
        font-size: 30px;
    }

 
</style>