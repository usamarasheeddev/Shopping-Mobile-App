import { View, Text } from 'react-native'
import React from 'react'

export default function ProductScreen({route}) {
  return (
    <View>
      <Text>{route.title}</Text>
    </View>
  )
}