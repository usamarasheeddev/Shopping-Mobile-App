import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
import Navigation from './src/Screens/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Drawer/MyDrawer';

export default function App() {

  const [text, setText] = useState('')
  return (

    <>
      <NavigationContainer>

        {/* <Navigation /> */}
        <MyDrawer/>

      </NavigationContainer>
    </>
  )

}

