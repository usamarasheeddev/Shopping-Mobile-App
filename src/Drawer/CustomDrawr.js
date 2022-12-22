import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function CuttomDrawr(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center' }}>
        <Avatar.Image size={78} source={require('../../ascets/images/profile.jpeg')} />

        <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold', fontSize: 14 }} >
          Usama Rasheed
        </Text>
        <Text style={{ color: 'white', textAlign: 'left', fontSize: 12 }} >
          100 Followers
        </Text>
      </View>
      <View style={{ flex: .6 }}>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={{ flex: .1, m: 2 }}>
        <TouchableHighlight
          onPress={() => alert('logout')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>

            <AntDesign name='logout' size={18} color={'white'} />
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 14, marginLeft: 20 }}

            >
              Logout
            </Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight style={{ marginTop: 7 }}
          onPress={() => alert('share')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>

            <AntDesign name='sharealt' size={18} color={'white'} />
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 14, marginLeft: 20 }}

            >
              Share
            </Text>

          </View>
        </TouchableHighlight>

      </View>
    </View>
  )
}