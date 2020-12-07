import React, { useState, useEffect } from 'react';
import Timer from "./Stopwatch"
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Stopwatch from './Stopwatch';

export default function Screen({ route }) {
  const { user1Point } = route.params;
  const { user2Point } = route.params;

  const [currentUser1, setcurrentUser1] = useState(false);
  const [currentUser2, setcurrentUser2] = useState(false);
  
  const [point, setPoint] = useState(0);
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);


  const plusUser1 = () => {
    setPoint1(point1 + 1);
  }

  const plusUser2 = () => {
    setPoint2(point2 + 1);
  }

  const minusUser1 = () => {
    setPoint1(point1 - 1);
  }

  const minusUser2 = () => {
    setPoint2(point2 - 1);
  }

  const currentUser1Time = () => {
    setcurrentUser1(true);
    setcurrentUser2(false);
  }

  const currentUser2Time = () => {
    setcurrentUser2(true);
    setcurrentUser1(false);
  }

  const plusUser1Func = () => {
    plusUser1();
    currentUser1Time()
  }

  const plusUser2Func = () => {
    plusUser2();
    currentUser2Time()
  }

  const minusUser1Func = () => {
    minusUser1();
    currentUser1Time()

  }

  const minusUser2Func = () => {
    minusUser2();
    currentUser2Time()
  }

  console.log("유저1: ", currentUser1, "유저2: ", currentUser2)


  return (
    <View style={styles.container}>
      <View style={styles.users}>
        <View style={styles.user1Box}>
          <Text style={styles.userText}>{`1P 목표 점수 - ${ user1Point }`}</Text>
          <TouchableOpacity style={styles.plus1Bt} onPress={plusUser1Func}>{point1}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser1Func}><Text>- 1</Text></TouchableOpacity>
          <Text style={styles.currentScore}>{point}</Text>
        </View>
        {/* <Stopwatch /> */}
        <View style={styles.user2Box}>
          <Text style={styles.userText}>{`1P 목표 점수 - ${ user1Point }`}</Text>
          <TouchableOpacity style={styles.plus2Bt} onPress={plusUser2Func}>{point2}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser2Func}><Text>- 1</Text></TouchableOpacity>
          <Text style={styles.currentScore}>{currentUser2 ? "참" : "0"}</Text>        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0070F4',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  userText: {
    color: "#fff",
  }, 

  plus1Bt: {
    width: 190,
    height: 190,
    backgroundColor: "#242424",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 100,
    color: "#FFD600",
  },
  plus2Bt: {
    width: 190,
    height: 190,
    backgroundColor: "#242424",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 100,
    color: "#fff",
  },
  minusBt: {
    width: 130,
    height: 30,
    backgroundColor: "#4D4D4D",
    marginTop: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: "#fff"
  },
  users: {
    flexDirection: "row",
  },
  user1Box: {
    flexDirection: 'column',
    marginRight: 40,
    alignItems: 'center',
  },
  user2Box: {
    flexDirection: 'column',
    marginLeft: 40,
    alignItems: 'center',
  },
  currentScore: {
    position: "absolute",
    marginTop: 155,
    marginLeft: 130,
    width:50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 30,
    justifyContent: 'center',
  }
});
