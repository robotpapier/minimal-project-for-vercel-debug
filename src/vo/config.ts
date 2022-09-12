import missions from "../data/missions"
import Mission from './Mission.js';


class Config {
    public missions:Mission[] = (missions.missions as Mission[]).sort((a,b)=>Number.parseInt(a.id) - Number.parseInt(b.id));
    public fakeMode = false
    ;
}



export default new Config();