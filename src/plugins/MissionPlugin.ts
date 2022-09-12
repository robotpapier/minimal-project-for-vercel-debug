import { Component, Inject, Model, Prop, Vue, Watch, Provide, Mixins } from "vue-property-decorator";
import Mission from '@/vo/Mission';


@Component
class MissionMixin extends Vue {
    
    public get lastScan():string{        
        return this.$store.state.barcode.lastScan;
    }

    public get currentMission():Mission{        
        return this.$store.getters.currentMission;
    }

    public get currentMeasure():Mission{        
        return this.$store.getters.currentMeasure;
    }

    public get isMeasureRelatedToCurrentMission():"boolean"{     
        return this.$store.getters.isMeasureRelatedToCurrentMission;
    }

    public get missions():Mission[]{        
        return this.$store.state.mission.missions;
    }

}



export default function MissionPlugin() {
    Vue.mixin(MissionMixin)
}
