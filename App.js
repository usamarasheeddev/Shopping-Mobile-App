import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
import Navigation from './src/Screens/Navigation'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [text, setText] = useState('')
  return (

    <>
      <NavigationContainer>

        <Navigation />

      </NavigationContainer>
    </>
  )

}

