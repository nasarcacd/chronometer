import React, { useState, useRef } from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

const Chronometer = () => {
  const [isPlay, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  let hours = ~~(time / 3600);
  let minutes = ~~((time % 3600) / 60);
  let seconds = ~~time % 60;

    const timer = useRef(null);
    const startStopTimer = () => {
      if (!timer.current) {
        timer.current = setInterval(() => setTime(currentTime => currentTime + 1), 1000);
      } else {
        clearInterval(timer.current);
        timer.current = null;
      }
    };

    const click = () => {
       if(isPlay){
        clearInterval(timer.current);
        timer.current = null;
       }   else {
        startStopTimer();
       }
       setPlay(!isPlay);
    };

    const reset = () => {
        clearInterval(timer.current);
        timer.current = null;
        setPlay(false);
        setTime(0);
    };

  return (
      <View style={styles.container}>
        <View style={styles.chronometerContainer}>
            <Text>Chronometer:</Text>
            <Text>{hours}:{minutes < 10 ? '0': ''}{minutes}:{seconds < 10 ? '0': ''}{seconds}</Text>
        </View>
        <View style={styles.btnContainer}>
            <Button
              onPress={() => click()}
              title={isPlay ? "Pause" : "Play"}
              color={!isPlay ? "#3498DB" : "#CD6155"}
              accessibilityLabel="Play/Pause"
            />
            <Button
              onPress={() => reset()}
              title="Reset"
              color="#5D6D7E"
              accessibilityLabel="Reset chronometer"
            />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'column',
  },
  chronometerContainer: {
      flexDirection: 'row',
  },
  btnContainer: {
      marginTop: 30,
      flexDirection: 'row',
   },
});

export default Chronometer;