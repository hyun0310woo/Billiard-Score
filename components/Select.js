import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Select() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>1P ~ 2P</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
