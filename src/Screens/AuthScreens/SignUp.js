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


export default function Login() {
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
                    <View style={{width:'100%'}}>
                        <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='Email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            style={{ backgroundColor: 'white' }}
                            error={touched.email && errors.email}
                        />
                        <Input
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder='Password'
                            secureTextEntry
                            autoCapitalize='none'
                            error={touched.password && errors.password}
                            style={{ backgroundColor: 'white', marginTop: 15 }}
                        />

                        <View style={{ marginTop: 30, borderRadius: 50,width:200,alignSelf:'center' }}>
                            <Button onPress={handleSubmit}
                                color={theme.colors.primary}
                                title="Login" 
                                />
                               
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



