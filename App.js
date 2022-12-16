import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Drawer/MyDrawer';
import AuthContextProvider from './src/context/AuthContext';
import ProductsContextProvider from './src/context/ProductContext';
import CartContextProvider from './src/context/CartContext';
import FavuriteItemsContextProvider from './src/context/FavuriteItemsContext';


export default function App() {

  const [text, setText] = useState('')
  return (

    <>
      <AuthContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <FavuriteItemsContextProvider>


              <NavigationContainer>

                {/* <Navigation /> */}
                <MyDrawer />

              </NavigationContainer>

            </FavuriteItemsContextProvider>
          </CartContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </>
  )

}

