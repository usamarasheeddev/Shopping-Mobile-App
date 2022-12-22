import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import About from './About'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../BottomTabs/BottomTabScreens/Home/Home';
import ProductScreen from './ProductScreen';
const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (



    <Stack.Navigator initialRouteName='HomeStack'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="About" component={About}
      />
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Productscreen" component={ProductScreen} />
    </Stack.Navigator>

  )
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "space-around"
  }
})