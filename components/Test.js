import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Test({ route, navigation }) {
  const { user1Point } = route.params;
  const { user2Point } = route.params;

  return (
    <View style={styles.container}>
         <Text>1P 목표 점수 { user1Point }</Text>
         <Text>2P 목표 점수 { user2Point }</Text>
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
});
