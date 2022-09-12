<template>
    <button :class="[color]"></button>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch, Provide } from "vue-property-decorator";
@Component({
    components:{}
})
export default class RoundedButton extends Vue {
    @Prop({default:'green'}) color!:string;
    @Prop() text!:string;
}
</script>
<style lang="scss" scoped>
    button {
        width: auto;
        padding: 0 20px;
        height: 40px;
        color: white;
        border: none;
        border-radius: 40px;
        font-size: 14px;
        text-transform: uppercase;
        margin: 10px 0;
        font-weight: bold;
    }
</style>