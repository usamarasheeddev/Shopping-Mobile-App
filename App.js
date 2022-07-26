import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
export default function App() {

  const [text, setText] = useState('')
  return (

    <>
      <View style={styles.flexContainer} >

        <Text style={{ fontWeight: "200" }}> This is my first Android app</Text>
        <Image
          source={{ uri: 'http://source.unsplash.com/500x500/?mobile' }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />

        <Button style={{ marginTop: 60 }} title='Press the Button' />
      </View>

    </>
  )

}
const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: 'space-around',
    alignItems: "center",
    flex: 1,
    padding: 12
  }
  ,
  button: {
    tintColor: 'red',
    flex: '1'
  }
})
