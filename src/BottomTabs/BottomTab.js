import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavuriteItems from './BottomTabScreens/Favurite/FavuriteItems';
import Cart from './BottomTabScreens/Cart/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Navigation from '../Screens/Navigation';
import { useCartContext } from '../context/CartContext';
import { useTheme } from 'react-native-paper';
import { useFavuriteItemsContext } from '../context/FavuriteItemsContext';

const Tab = createMaterialBottomTabNavigator();


export default function BottomTab() {
    const { newFavItem, setNewFavItem } = useFavuriteItemsContext()
    const theme=useTheme()
    return (
        <Tab.Navigator
            // activeColor="#f0edf16"
            inactiveColor="#3e2465"
            screenOptions={{
                tabBarLabel: false,
            }}

            barStyle={{
                backgroundColor: theme.colors.primary,
                bottom: -20
            }}
        >


            <Tab.Screen name="HomeBottom" component={Navigation}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name='home' color={color} size={24} />,

                }}
                shifting={true}
            />
            <Tab.Screen name="FavuriteItems" component={FavuriteItems}

                options={{
                    tabBarIcon: ({ color }) => <AntDesign name='hearto' color={color} size={24} />,
                    tabBarBadge: newFavItem,

                }}
                listeners={{
                    tabPress: () => setNewFavItem(false)
                }}
            />

            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name='shoppingcart' color={color} size={24} />,
                    tabBarBadge: true
                }}

            />


        </Tab.Navigator>
    )
}

