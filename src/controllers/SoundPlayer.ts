import {Howl, Howler} from 'howler';

export default class SoundPlayer {

    public static soundRefs = [
        {id:"good", sound:new Howl({src:require("@/assets/sounds/good.wav")})},
        {id:"bad", sound:new Howl({src:require("@/assets/sounds/bad.wav")})},
        {id:"loose", sound:new Howl({src:require("@/assets/sounds/loose.wav")})},
        {id:"new_mission", sound:new Howl({src:require("@/assets/sounds/new_mission.wav")})},
        {id:"win", sound:new Howl({src:require("@/assets/sounds/win.wav")})},
    ]

    static currentHowl?:Howl

    public static play(message:string) {
        let ref = this.soundRefs.find(ref=>{return message.toString() == ref.id});
        if(ref){
            if(this.currentHowl){
                this.currentHowl.stop()
            }
            const howl = ref.sound;
            howl.play();
            this.currentHowl = howl;
        }else{
            console.error("Sound ref not found on message", message)
        }
    }

    public static stop(message:string) {
        let ref = this.soundRefs.find(ref=>{return message.toString() == ref.id});
        if(ref){
            const howl = ref.sound;
            howl.stop();
        }else{
            console.error("Sound ref not found on message", message)
        }
    }
    //================================================================================
    // Briefing
    //================================================================================
    
    
    //================================================================================
    // Chest
    //================================================================================
    
    
    //================================================================================
    // Energy label
    //================================================================================


    //================================================================================
    // Thermostat
    //================================================================================


    //================================================================================
    // Living room
    //================================================================================


    //================================================================================
    // Game
    //================================================================================


    //================================================================================
    // Audio
    //================================================================================


    //================================================================================
    // Content
    //================================================================================

}
