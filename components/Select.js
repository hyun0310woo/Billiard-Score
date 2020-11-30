import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Select() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBt}>
        <Text style={styles.selectText}>1P ~ 2P</Text>
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
    textAlign: "center"
  }  
});
