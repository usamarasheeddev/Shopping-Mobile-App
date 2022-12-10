import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
import Navigation from './src/Screens/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Drawer/MyDrawer';
import AuthContextProvider from './src/context/AuthContext';
import ProductsContextProvider from './src/context/ProductContext';
import CartContextProvider from './src/context/CartContext';

export default function App() {

  const [text, setText] = useState('')
  return (

    <>
      <AuthContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>


            <NavigationContainer>

              {/* <Navigation /> */}
              <MyDrawer />

            </NavigationContainer>
          </CartContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </>
  )

}

