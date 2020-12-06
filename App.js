import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Select from "./components/Select"
import ScoreScreen from "./components/ScoreScreen"
import Test from "./components/Test"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Select" component={Select} options={{headerShown: false}} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} options={{headerShown: false}} />
        <Stack.Screen name="Test" component={Test} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
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
