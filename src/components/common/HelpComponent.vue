<template>
    <div class="help-view">
        <div class="help-text uppercase" v-html="$t('popup_help_text')"></div>
        <div class="help-desc" v-html="$t('popup_help_description')"></div>
        <div class="aztec">
            <img :src="'./icons/big-aztec.png'" alt="aztec" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
@Component
export default class HelpComponent extends Vue {
    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }
}
</script>

<style lang="scss" scoped>

</style>