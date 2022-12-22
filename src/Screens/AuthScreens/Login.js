import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper';
import { StyleSheet, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default function Login() {
    const theme = useTheme()
    const [text, setText] = React.useState('')
    return (
        <View style={styles.flexContainer}>
            <View >
                <TextInput

                    label=""
                    value={text}
                    onChangeText={text => setText(text)}
                    mode={error = true}
                    theme={theme.colors.primary}
                    style={outlineStyle = { backgroundColor: theme.colors.background }}


                />
                <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', backgroundColor: 'white', borderRadius: 2 }}>
                    <MaterialIcons name='alternate-email' size={22} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Email'
                        keyboardType="email-address"
                    />
                </View>
                <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', backgroundColor: 'white', borderRadius: 2, marginTop: 10 }}>
                    <MaterialIcons name='lock' size={22} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Password'
                        secureTextEntry

                    />
                </View>

            </View>

            <TouchableOpacity
                activeOpacity='0.1'
                style={{ marginTop: 20, backgroundColor: theme.colors.primary, padding: 10, borderRadius: 50 }}
            // onPress={() => alert('hleo')}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>  Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center',
        padding: 30
    },
    button: {

    }
})