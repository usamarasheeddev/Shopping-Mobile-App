import { View, Text } from 'react-native'
import React from 'react'

export default function CuttomDrawr() {
  return (
    <View style={{flex:1}}>
      <View style={{ flex: .2,backgroundColor:'red' }}>
        <Text>one</Text>
      </View>
      <View style={{ flex: .6,backgroundColor:'yellow' }}>
        <Text>two</Text>
      </View>
      <View style={{ flex: .2,backgroundColor:'pink' }}>
        <Text>three</Text>
      </View>
    </View>
  )
}