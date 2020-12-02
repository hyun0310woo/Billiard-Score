import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Select from "./components/Select"
import ScoreScreen from "./components/ScoreScreen"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Select /> */}
      <ScoreScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0070F4',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
