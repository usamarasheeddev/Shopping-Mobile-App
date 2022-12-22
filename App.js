import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Drawer/MyDrawer';
import AuthContextProvider from './src/context/AuthContext';
import ProductsContextProvider from './src/context/ProductContext';
import CartContextProvider from './src/context/CartContext';
import FavuriteItemsContextProvider from './src/context/FavuriteItemsContext';
import Login from './src/Screens/AuthScreens/Login';
import SignUp from './src/Screens/AuthScreens/SignUp';
import AuthScreenNavigation from './src/Screens/AuthScreens/AuthScreenNavigation';


export default function App() {

  const theme = useTheme({
    // colors: {
    //     primary: 'blue',
    // },
  });

  return (

    <>
      <PaperProvider theme={theme}>
        <AuthContextProvider>
          <ProductsContextProvider>
            <CartContextProvider>
              <FavuriteItemsContextProvider>


                <NavigationContainer>

                  {/* <Navigation /> */}
                  {/* <MyDrawer /> */}
                  {/* <Login /> */}
                  {/* <SignUp /> */}
                  <AuthScreenNavigation/>

                </NavigationContainer>

              </FavuriteItemsContextProvider>
            </CartContextProvider>
          </ProductsContextProvider>
        </AuthContextProvider>
      </PaperProvider>
    </>
  )

}

