import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Select() {
  return (
    <View style={styles.container}>
      <Text style={styles.startText}>목표 점수를 입력하세요.</Text>
      <Text style={styles.user1}>1P</Text>
      <TextInput style={styles.scoreInput}></TextInput>
      <Text style={styles.user2}>2P</Text>
      <TextInput style={styles.scoreInput}></TextInput>
      <TouchableOpacity
        style={styles.selectBt}>
        <Text style={styles.selectText}>확인</Text>
      </TouchableOpacity>
      <Text style={styles.endText}>점수를 1점 단위로 입력하세요.</Text>
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

  startText: {
      fontSize: 30,
      color: "#fff",
      fontWeight: "bold"
  },

  user1: {
    color: "#FFD600",
    fontSize: 30,
    fontWeight: "bold",
  },

  user2: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  scoreInput: {
    backgroundColor: "#fff",
    width: 100,
    height: 30,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 23
  },
  
  selectText: {
    fontWeight: "bold"
  },

  selectBt: {
      backgroundColor: "#fff",
      borderRadius: 8,
      width: 120,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
  },
  
  endText: {
    color: "#fff",
    marginTop: 20
  }


});
