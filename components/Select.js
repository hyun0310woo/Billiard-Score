import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Select({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectBt}
      onPress={() => navigation.navigate("ScoreScreen")}>
        <Text style={styles.selectText}>1P - 2P</Text>
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
    height: 50
  },

  selectText: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    margin: "auto"
  }  
});
