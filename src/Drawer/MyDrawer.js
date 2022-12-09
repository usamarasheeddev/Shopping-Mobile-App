
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


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'black',
          width: 240,

        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'yellow',
        // headerShown: false,
        

      }}
      drawerContent={props => <CustomDrawr {...props} />}
    >
      <Drawer.Screen name="Home" component={Navigation}
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
  );
}

