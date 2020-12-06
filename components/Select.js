import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Select({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectBt}
      onPress={() => navigation.navigate("ScoreScreen")}>
        <Text style={styles.selectText}>1P - 2P</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectBt2}>
        <Text style={styles.selectText}>3P</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectBt3}>
        <Text style={styles.selectText}>4P</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0070F4',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },

  selectBt: {
    backgroundColor: "black",
    borderRadius: 10,
    width: 170,
    height: 50,
    marginBottom: 10
  },

  selectBt2: {
    backgroundColor: "black",
    borderRadius: 10,
    width: 170,
    height: 50,
    marginBottom: 10
  },

  selectBt3: {
    backgroundColor: "black",
    borderRadius: 10,
    width: 170,
    height: 50,
  },
  selectText: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    margin: "auto"
  }  
});
