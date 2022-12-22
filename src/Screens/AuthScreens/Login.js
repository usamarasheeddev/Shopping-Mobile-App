import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Formik } from 'formik';
import * as Yup from 'yup'
import Input from '../../Components/Inputs/Input'



const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email required!'),
    password: Yup.string().trim().min(4, "Invalid Password").required('Password required'),


})


export default function SignUp({ navigation }) {
    const theme = useTheme()
    const [text, setText] = React.useState('')
    return (


        <View style={styles.flexContainer}>
            <Formik
                initialValues={{ email: '', password: '' }} validationSchema={validationSchema}
                onSubmit={(values, formikActions) => {
                    console.log(values)
                    formikActions.resetForm()

                }}
            >
                {({ handleChange, touched, errors, handleBlur, handleSubmit, values }) => (
                    <View style={{ width: '100%' }}>
                        <Input
                            label='Email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            // placeholder='Email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            style={{ backgroundColor: 'white' }}
                            error={touched.email && errors.email}
                        />
                        <Input
                            label='Password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            // placeholder='Password'
                            secureTextEntry
                            autoCapitalize='none'
                            error={touched.password && errors.password}
                            style={{ backgroundColor: 'white', marginTop: 15 }}
                        />

                        <View style={{ marginTop: 30, borderRadius: 50, width: 200, alignSelf: 'center' }}>
                            <Button onPress={handleSubmit}
                                color={theme.colors.primary}
                                title="Login"
                            />

                        </View>

                        <View >
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50, color: `${theme.colors.primary}` }}
                                onPress={() => navigation.navigate('SignUp', {
                                    screen: 'SignUp',
                                    initial: false,
                                })}
                            >

                                Don't have an account?</Text>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 30
    },
    button: {

    }
})




{/* <View >
<Input

    label=""
    value={text}
    onChangeText={text => setText(text)}
    mode={error = true}
    theme={theme.colors.primary}
    style={outlineStyle = { backgroundColor: theme.colors.background }}


/>
<View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', backgroundColor: 'white', borderRadius: 2 }}>
    <MaterialIcons name='alternate-email' size={22} />
    <Input
        style={{ flex: 1 }}
        placeholder='Email'
        keyboardType="email-address"
    />
</View>
<View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', backgroundColor: 'white', borderRadius: 2, marginTop: 10 }}>
    <MaterialIcons name='lock' size={22} />
    <Input
        style={{ flex: 1 }}
        placeholder='Password'
        secureTextEntry

    />
</View>

</View>

<TouchableOpacity
activeOpacity='0.1'
style={{ marginTop: 20, backgroundColor: theme.colors.primary, padding: 10, borderRadius: 50 }}
>
<Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>  Login</Text>
</TouchableOpacity> */}