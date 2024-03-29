import React  from "react";
import {Button} from 'react-native';

type Props={
    isTimerRunning:boolean;
    stopTimer:()=>void;
    startTimer:()=>void;
}
export const TimerToggleButton:React.FC<Props>=({isTimerRunning,startTimer,stopTimer})=>{
    return(
        <Button 
        title={isTimerRunning? "Stop Timer":"Start Timer"} 
        onPress={isTimerRunning?stopTimer:startTimer}/>

    )
}