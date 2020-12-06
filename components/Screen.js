import React, { useState, useEffect } from 'react';
import Timer from "./Timer"
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Screen({ route }) {
  const { user1Point } = route.params;
  const { user2Point } = route.params;

  const [curUser, setCurUser] = useState(false);

  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);


  const plusUser1 = () => {
    setPoint1(point1 + 1);
  }

  const plustUser2 = () => {
    setPoint2(point2 + 1);
  }

  const minusUser1 = () => {
    setPoint1(point1 - 1);
  }

  const minusUser2 = () => {
    setPoint2(point2 - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.users}>
        <View style={styles.user1Box}>
          <Text style={styles.userText}>1P 목표 점수 - { user1Point }</Text>
          <TouchableOpacity style={styles.plus1Bt} onPress={plusUser1}>{point1}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser1}>- 1</TouchableOpacity>
        </View>
        <Timer />
        <View style={styles.user2Box}>
          <Text style={styles.userText}>2P 목표 점수 - { user2Point }</Text>
          <TouchableOpacity style={styles.plus2Bt} onPress={plustUser2}>{point2}</TouchableOpacity>
          <TouchableOpacity style={styles.minusBt} onPress={minusUser2}>- 1</TouchableOpacity>        
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
    flexDirection: "row"
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
});
