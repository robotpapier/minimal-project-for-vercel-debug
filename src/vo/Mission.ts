export default interface Mission {
    id:string;
    type:string;
    
    title:string;
    shortTitle:string;
    desc:string;
    icon:string;
    mainUnit:string;
    objectLabel:string;

    tutorialHelpMessage:string;
    
    measures:Measure[];
    
    quizz:Quizz[];
    
    status:MissionStatus;
}

export interface Measure extends QuizzResponse {
    id: string;
    title: string;
    isCorrect: string;
    mainValue: string;
    graphLevel: string;
    mainDesc: string;
    secondaryDesc: string;
    icon: string;
    status?:MeasureStatus;
}

export type MissionStatus = "DONE"|"FOUND"|"IDLE"
export type MeasureStatus = "DONE"|"HINT"|"HINT_NEEDED"|"IDLE"
export type QuizzStatus = "UNDONE"|"SUCCESS"|"FAIL"

export interface Quizz{
    type:"MEASURE"|"TEXT"|"FRUIT"|"ORDER"|"ORDER_GRID"|"MEASURE_GRID" ;
    question:string;
    successMessage:string;
    failMessage:string;
    nextQuestionButtonLabel:string;

    status:QuizzStatus;

    textResponses:{
        isCorrect: any;
        title:string;
        icon?:string;
    }[];

}

export interface QuizzResponse{
    isCorrect: any;
    title:string;
}