import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import About from './About'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../BottomTabs/BottomTabScreens/Home/Home';
import ProductScreen from './ProductScreen';
import { useTheme } from 'react-native-paper';
const Stack = createNativeStackNavigator();


export default function Navigation() {
  const theme=useTheme()
  return (



    <Stack.Navigator initialRouteName='HomeStack'
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="About" component={About}
      />
      <Stack.Screen name="HomeStack" component={Home} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="Productscreen" component={ProductScreen} 
      options={{headerTitle:'Product',headerTitleAlign:'center',headerTintColor:theme.colors.primary}}
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