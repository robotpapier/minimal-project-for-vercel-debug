<template>
    <img :src="`./icons/${icon.trim()}.svg`" :alt="icon" />
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";

@Component({
    components:{}
})
export default class Icon extends Vue {
    @Prop({default:'scanner'}) icon!:string;

}
</script>

<style scoped lang="scss">
.icon{
    
}
</style>