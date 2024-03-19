import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';

const FOCUS_TIME_MINUTES=0.2*60*1000 //start with 12 seconds
const BREAK_TIME_MINUTES=0.1*60*1000

export default function App() {

  const [timerCount,setTimerCount]=useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval,setTimerInterval]=useState<NodeJS.Timer | null>(null)
  
  const startTimer=()=>{
    const id=setInterval(()=>setTimerCount(prev=>prev-1000),1000);
    setTimerInterval(id)
  };

  const stopTimer=()=>{
    if(timerInterval !== null)
   { clearInterval(timerInterval)}
  };

  const timerDate=new Date(timerCount)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Start Timer' onPress={startTimer}/>
      <Button title='Stop Timer' onPress={stopTimer}/>
      <TimerCountDownDisplay timerDate={new Date(timerCount)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
