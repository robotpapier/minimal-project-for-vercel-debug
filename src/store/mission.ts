import {Module} from 'vuex'
import Mission, { Quizz, QuizzStatus } from '@/vo/Mission';
import config from '@/vo/config';
import Utils from '@/vo/Utils';


interface ModuleState{
    introDone:boolean,
    tutorialDone:boolean,
    currentMissionId:string,
    newMissionId:string,
    missions:Mission[],
    currentMeasureId:{
        measureId:string,
        missionId:string
    },
    isDebug:boolean,
    isMissionView:boolean,
    isAbandonMissionView:boolean,
}

const missionModule: Module<ModuleState, any> = {
    state: {
        introDone:false,
        tutorialDone:false,
        currentMissionId:"",
        currentMeasureId:{
            measureId:"",
            missionId:""
        },
        newMissionId:"",
        missions:Utils.clone(config.missions),
        isDebug:true,
        isMissionView:false,
        isAbandonMissionView:false,
    },

    mutations: {
        set_currentMissionId(state, payload){
            state.currentMissionId = payload;
        },
        set_missions(state, payload){
            state.missions = payload;
        },
        set_currentMeasureId(state, payload){
            state.currentMeasureId = payload;
        },
        set_newMissionId(state, payload){
            state.newMissionId = payload;
        },
        set_introDone(state, payload){
            state.introDone = payload;
        },
        set_tutorialDone(state, payload){
            state.tutorialDone = payload;
        },
        set_isMissionView(state, payload){
            state.isMissionView = payload;
        },
        set_isAbandonMissionView(state, payload){
            state.isAbandonMissionView = payload;
        },

        update_missionStatus(state, { missionId, status}){
            const missions = state.missions;
            const newMissions = missions.map((m)=>{
                if(m.id == missionId){
                    return {
                        ...m, 
                        status: status
                    }
                }
                return m;
            });
            state.missions = newMissions;
        },

        update_measureStatus(state, { missionId, measureId, status}){
            const missions = state.missions;
            const newMissions = missions.map((m)=>{
                if(m.id == missionId){
                    return {
                        ...m, 
                        measures:m.measures.map((measure)=>{
                            if(measure.id == measureId){
                                return {
                                    ...measure,
                                    status:status
                                }
                            }
                            return measure
                        })
                    }
                }
                return m;
            });
            state.missions = newMissions;
        },
        update_quizzStatus(state, { mission, quizz, status}:{mission:Mission, quizz:Quizz, status:QuizzStatus}){
            const missions = state.missions;
            const newMissions = missions.map((m)=>{
                if(m.id == mission.id){
                    return {
                        ...m, 
                        quizz:m.quizz.map((q)=>{
                            if(q == quizz){
                                return {
                                    ...q,
                                    status:status
                                }
                            }
                            return q
                        })
                    }
                }
                return m;
            });
            state.missions = newMissions;
        }
    },

    getters: {
        currentMission(state){
            return state.missions.find(mission => mission.id == state.currentMissionId)
        },
        currentMeasure(state){
            if(!state.currentMeasureId) return undefined;

            let mission = state.missions.find(mission => mission.id == state.currentMeasureId.missionId)

            if(!mission) return undefined;

            return mission.measures.find(measure => measure.id == state.currentMeasureId.measureId)
        },
        isMeasureRelatedToCurrentMission(state){
            if(!state.currentMeasureId) return false;
            return state.currentMissionId == state.currentMeasureId.missionId;
        }
    },

    actions: {
        async setMission({state, commit, dispatch }, { missionId }){


            // commit("set_currentMissionId", missionId)

            const newMission = state.missions.find(mission => mission.id == missionId)
            if(newMission && newMission.status == "DONE"){
                return;
            }
            else if(state.currentMissionId == missionId ){
                return;
            }
            else if(state.currentMissionId == "" ){
                dispatch("confirmSetMission", { missionId })
            }
            else if (state.currentMissionId){    
                commit("set_newMissionId", missionId)
            }
        },

        async confirmSetMission({ commit, state }, { missionId }){
            if(!state.tutorialDone){
                commit("set_tutorialDone", true);
            }
            if(!state.introDone){
                commit("set_introDone", true);
            }
            commit("update_missionStatus", {missionId, status:"FOUND"})
            commit("set_currentMissionId", missionId)
            commit("set_newMissionId", "")
            commit("set_currentMeasureId", { missionId:"", measureId:"" })
        },

        async giveUpMission({ commit }){
            commit("set_currentMissionId", "")
        },

        async validateMission({ commit, state }, { missionId }){
            commit("set_currentMissionId", "")
            commit("update_missionStatus", {missionId, status:"DONE"})
        },

        async onMeasure({ commit, state }, { missionId, measureId }){
            commit("set_currentMeasureId", { missionId, measureId })
            if(missionId == state.currentMissionId){
                commit("update_measureStatus", { missionId, measureId, status:"DONE"})
            }
            
        },

        async quizzDone({ commit, state }, { mission, quizz, success}:{mission:Mission, quizz:Quizz, success:boolean}){
            commit("update_quizzStatus", { mission, quizz, status:success?"SUCCESS":"FAIL"})
        },


        async reset({ commit, state }){
            commit("set_tutorialDone", false);
            commit("set_introDone", false);
            commit("set_missions", config.missions);
            commit("set_currentMissionId", "");
            commit("set_currentMeasureId", {missionId:"", measureId:""});
            commit("set_newMissionId", "");
        },
    }
}
  

export default missionModule;