import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-paper'

export default function SrcollButtonTab() {
    const theme = useTheme()
    return (
        <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >



                <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.buttonText}>All</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.buttonText}>Touch</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.buttonText}>Touch</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.buttonText}>Touch</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {

        paddingHorizontal: 10,
        paddingVertical: 3,
        // backgroundColor:,
        marginHorizontal: 20,
        borderRadius: 40,
        marginTop: 10,
        alignItems:'center'
       
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    }
})