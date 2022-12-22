2// import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik'
import { useTheme } from 'react-native-paper';
import * as Yup from 'yup'
import Input from '../../Components/Inputs/Input';
// import { styles } from './styles';


export default function SignUp({ navigation }) {

    //   const { dispatch } = useAuthContext()
    const [isLoading, setIsLoading] = React.useState(false)
    const theme = useTheme()

    const userCreds = {
        email: '', password: '', username: '', contactNo: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email required!'),
        password: Yup.string().trim().min(8, "Invalid Password").required('Password required'),
        username: Yup.string().trim().min(4, 'Invalid Username').required('Username required!'),
        contactNo: Yup.number().required("Phone number required!")

    })




    return (

        <View style={styles.flexContainer}>

            <Formik
                initialValues={userCreds} validationSchema={validationSchema}
                onSubmit={(values, formikActions) => {
                    handleSignUp(values)
                    // formikActions.resetForm()
                }}
            >

                {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {



                    return <>{
                        isLoading ?
                            <ActivityIndicator size="large" color="#40916c" style={{ marginTop: 350 }} />

                            : <>
                                <Text style={{
                                    fontSize: 26, fontWeight: 'bold',
                                    textAlign: 'center', marginBottom: 10
                                }} >SignUp</Text>
                                <Input

                                    label='Username'
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    autoCapitalize="word"
                                    error={touched.username && errors.username}
                                // keyboardType='email-address'

                                />
                                <Input
                                    placeholdero='Email'
                                    label='Email'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    error={touched.email && errors.email}

                                />
                                <Input
                                    placeholdero='contactNo'
                                    label='Contact Number'
                                    onChangeText={handleChange('contactNo')}
                                    onBlur={handleBlur('contactNo')}
                                    value={values.contactNo}
                                    keyboardType='numeric'
                                    error={touched.contactNo && errors.contactNo}

                                />
                                <Input
                                    placeholdero='Password'
                                    label='Password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry
                                    autoCapitalize='none'
                                    value={values.password}
                                    error={touched.password && errors.password}

                                />
                                <TouchableOpacity style={{
                                    width: 320, marginTop: 30,
                                    alignSelf: 'center'
                                }}
                                    onPress={handleSubmit}
                                >
                                    <Text style={{ textAlign: 'center', padding: 10, backgroundColor: `${theme.colors.primary}`, color: 'white' }}>
                                        SignUp
                                    </Text>
                                </TouchableOpacity>

                                <View >
                                    <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50, color: `${theme.colors.primary}` }}
                                        onPress={() => navigation.navigate('Login', {
                                            screen: 'Login',
                                            initial: false,
                                        })}
                                    >

                                        Already have an account?</Text>
                                </View>

                            </>
                    }</>
                }

                }


            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center'
    },
    img: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Roboto'

    },
    screenStyle: {
        width: 300,

    },
    inputStyle: {
        fontSize: "10",

    }
    , text: {
        textAlign: 'center'
    }

})