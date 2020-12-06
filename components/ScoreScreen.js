import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function ScoreScreen({ navigation }) {
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);

  console.log(point1, point2)
  return (
    <View style={styles.container}>
      <Text style={styles.startText}>목표 점수를 입력하세요.</Text>
      <View style={styles.users}>
        <View style={styles.user1Box}>
          <Text style={styles.user1}>1P</Text>
          <TextInput
            style={styles.scoreInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={point1 => setPoint1(point1)}
            defaultValue={point1}
            >
          </TextInput>
        </View>
        <View style={styles.user2Box}>
          <Text style={styles.user2}>2P</Text>
          <TextInput
            style={styles.scoreInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={point2 => setPoint2(point2)}
            defaultValue={point2}
            >
          </TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.selectBt}
        onPress={() => navigation.navigate("Test")} 
        >
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
      fontWeight: "bold",
  },
  users: {
    flexDirection: "row"
  },
  user1Box: {
    flexDirection: 'column',
    marginRight: 150,
    alignItems: 'center',
  },
  user2Box: {
    flexDirection: 'column',
    marginLeft: 150,
    alignItems: 'center',
  },
  user1: {
    color: "#FFD600",
    fontSize: 40,
    fontWeight: "bold"
  },
  user2: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  scoreInput: {
    backgroundColor: "#fff",
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: "center",
    fontSize:50
  },
  selectText: {
    fontWeight: "bold",
  },
  selectBt: {
      backgroundColor: "#fff",
      borderRadius: 8,
      width: 120,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop: 30
  },
  endText: {
    color: "#fff",
    marginTop: 10
  }
});
