import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Home from '../BottomTabs/BottomTabScreens/Home/Home'
import About from './About'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (

    // <View style={styles.flexContainer}>

    // <Home />

    // </ View >



    <Stack.Navigator initialRouteName='HomeStack'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="About" component={About}
      />
      <Stack.Screen name="HomeStack" component={Home}
        options={{ headerShown: false }}

      />
    </Stack.Navigator>

  )
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "space-around"
  }
})