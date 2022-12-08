
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHome from './DrawerHome';
import Profile from './Profile';
import Navigation from '../Screens/Navigation';
import CustomDrawr from './CustomDrawr';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={props=><CustomDrawr {...props}/>}
    >
      <Drawer.Screen name="DrawerHome" component={Navigation}

      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

