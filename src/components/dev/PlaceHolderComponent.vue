<template>
    <div class="place-holder-component">
        <img v-if="isVisible" :src="src"/>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import config from "@/vo/config";

@Component
export default class PlaceHolderComponent extends Vue {
    @Prop() src!:string;
    public get isVisible(){
        return config.fakeMode;
    }

    public mounted():void {
        
    }

    public beforeDestroy():void {
        
    }

}
</script>

<style scoped lang="scss">
.place-holder-component{
    position: absolute;
    left:0;top:0;right:0;bottom:0;
}
</style>