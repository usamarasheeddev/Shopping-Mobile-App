
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHome from './DrawerHome';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerHome" component={DrawerHome} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

