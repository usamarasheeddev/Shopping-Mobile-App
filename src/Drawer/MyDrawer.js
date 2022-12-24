
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHome from './DrawerScreens/DrawerHome';
import Profile from './DrawerScreens/Profile';
import Navigation from '../Screens/Navigation';
import CustomDrawr from './CustomDrawr';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import About from './DrawerScreens/About';
import Settings from './DrawerScreens/Settings';
import BottomTab from '../BottomTabs/BottomTab';
import { useTheme } from 'react-native-paper'
import { useAuthContext } from '../context/AuthContext';
import AuthScreenNavigation from '../Screens/AuthScreens/AuthScreenNavigation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const theme = useTheme()
  const { dispatch, isAuthenticated } = useAuthContext()
  return (
    <>{!isAuthenticated ?
      <AuthScreenNavigation />

      : <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            // backgroundColor: 'black',
            width: 240,

          },
          drawerInactiveTintColor: theme.colors.secondary,
          drawerActiveTintColor: theme.colors.primary,
          // headerShown: false,


        }}
        drawerContent={props => <CustomDrawr {...props} />}
      >
        <Drawer.Screen name="Home" component={BottomTab}
          options={{

            drawerIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
            , drawerLabelStyle: { left: -10 }
          }}

        />
        <Drawer.Screen name="Profile" component={Profile}
          options={{
            drawerIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
            , drawerLabelStyle: { left: -10 }
          }}

        />
        {/* <Drawer.Screen name="About" component={About}
        options={{
          drawerIcon: ({ color }) => <AntDesign name="about" size={24} color={color} />
          , drawerLabelStyle: { left: -10 }
        }}

      /> */}
        <Drawer.Screen name="Settings" component={Settings}
          options={{
            drawerIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} />
            , drawerLabelStyle: { left: -10 }
          }}

        />
      </Drawer.Navigator>
    }</>
  );
}

