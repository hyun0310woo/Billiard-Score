import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Stopwatch from "./Stopwatch"

export default function Screen({ route }) {
  const { user1Point } = route.params; // 목표 점수 받아옴 유저1
  const { user2Point } = route.params; // 목표 점수 받아옴 유저2

  const [currentUser1, setCurrentUser1] = useState(true); // 유저1이 현재 진행 중인지 확인
  const [currentUser2, setCurrentUser2] = useState(true); // 유저2가 현재 진행 중인지 확인
  
  const [curPoint1, setCurPoint1] = useState(0); // 현재 유저1의 점수
  const [curPoint2, setCurPoint2] = useState(0); // 현재 유저2의 점수

  const [point1, setPoint1] = useState(0); // 유저 1의 토탈 점수
  const [point2, setPoint2] = useState(0); // 유저 2의 토탈 점수 


  const plusUser1 = () => { // 유저1 포인트 업
    setPoint1(point1 + 1);
  }

  const plusUser2 = () => { // 유저2 포인트 업
    setPoint2(point2 + 1);
  }

  const minusUser1 = () => { // 유저1 포인트 다운
    setPoint1(point1 - 1);
  }

  const minusUser2 = () => { // 유저2 포인트 다운
    setPoint2(point2 - 1);
  }

  const currentUser1Time = () => { // 유저 1이 현재 진행중일 때 현재 진행을 true로 하고 유저2는 false로 변경
    setCurrentUser1(true);
    setCurrentUser2(false);
  }

  const currentUser2Time = () => { //  유저 2이 현재 진행중일 때 현재 진행을 true로 하고 유저1는 false로 변경
    setCurrentUser2(true);
    setCurrentUser1(false);
  }

  const plusUser1Func = () => { // 유저1 핸들러 카운트를 올려주고 현제 진행을 true로 바꿔준다
    plusUser1();
    currentUser1Time()
  }

  const plusUser2Func = () => { // 유저2 핸들러 카운트를 올려주고 현제 진행을 true로 바꿔준다
    plusUser2();
    currentUser2Time()
  }

  const minusUser1Func = () => { // 유저1 핸들러 카운트를 내려주고 현제 진행을 true로 바꿔준다 유저2은 false로 바꿔준다
    minusUser1();
    currentUser1Time()

  }

  const minusUser2Func = () => { // 유저2 핸들러 카운트를 내려주고 현제 진행을 true로 바꿔준다 유저1은 false로 바꿔준다
    minusUser2();
    currentUser2Time()
  }



  return (
    <View style={styles.container}>
      <View style={styles.users}>
        <View style={styles.user1Box}>
          <Text style={styles.userText}>{`1P 목표 점수 : ${ user1Point }`}</Text>
          <TouchableOpacity style={Number(user1Point) !== Number(point1) ? styles.plus1Bt : styles.plus1BtActive} onPress={plusUser1Func}>{Number(user1Point) === Number(point1) ? <Image style={styles.tinyLogo} source={require("../images/winner1.png") }/> : point1}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser1Func}><Text style={styles.text}>- 1</Text></TouchableOpacity>
          {/* <Text style={styles.currentScore}>{curPoint1}</Text> */}
        </View>
        <Stopwatch />
        <View style={styles.user2Box}>
          <Text style={styles.userText}>{`2P 목표 점수 : ${ user2Point }`}</Text>
          <TouchableOpacity style={Number(user2Point) !== Number(point2) ? styles.plus2Bt : styles.plus2BtActive} onPress={plusUser2Func}>{Number(user2Point) === Number(point2) ? <Image style={styles.tinyLogo} source={require("../images/winner1.png") }/> : point2}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser2Func}><Text style={styles.text}>- 1</Text></TouchableOpacity>
          {/* <Text style={styles.currentScore}>{curPoint2}</Text>         */}
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
    fontWeight: "bold"
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
  plus1BtActive: {
    width: 190,
    height: 190,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
  plus2BtActive: {
    width: 190,
    height: 190,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusBt: {
    width: 190,
    height: 30,
    backgroundColor: "#4D4D4D",
    marginTop: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
});
