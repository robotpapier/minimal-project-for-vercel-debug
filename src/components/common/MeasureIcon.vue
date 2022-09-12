<template>
    <div :class="['measure-icon-display', state]">
        <div class="measure-icon-text uppercase">
            <div v-if="state=='unknown'" v-html="$t('tuto_scan')"></div>
            <div v-else-if="state=='not-related'" v-html="$t('not_in_mission')"></div>
            <div v-else v-text="measure.title"></div>
        </div>
        <div class="measure-icon-image">
            <div v-if="state=='unknown'" class="scanner">
                <img :src="'./icons/scanner.svg'" alt="scanner" />
            </div>
            <div v-else class="icon">
                <img :src="`./icons/${measure.icon.trim()}.svg`" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import { Measure } from '../../vo/Mission';
import SoundPlayer from '../../controllers/SoundPlayer';

@Component({
    components:{}
})
export default class MeasureIcon extends Vue {
    @Prop() measure!:Measure;
    @Prop({default:'related'}) state!:'related'|'not-related'|'unknown';

    public mounted():void {
        switch(this.state){
            case 'related':
                SoundPlayer.play("good")
                break;
            case 'not-related':
                SoundPlayer.play("bad")
                break;
        }
    }

    public beforeDestroy():void {
        
    }


}
</script>

<style  lang="scss">
@import "@/scss/variables/colors";

.measure-component-display .measure-component {
       
    
    
}



@media screen and (max-width: 368px) {
    .measure-component-display .measure-component {
       
        height: 140px !important;
        
        &.icon {
            width: 30%;
            left: 35%;
        }
    }

    .measure-icon-display {
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 140px;
    &.unkown, &.related {
        background: transparent;
        color: $dark-blue;
    }
    &.not-related {
        background: $light-pink;
        color: $white;
    }
    .measure-icon-image {
        position: relative;
        top: 20px;
        .scanner {
            opacity: 0.5;
            position: relative;
            top: 40px;
        }
        .icon {
            position: relative;
        }
    }
}
}
</style>