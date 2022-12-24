import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableHighlight, StyleSheet, Button, ToastAndroid, Image } from 'react-native'
import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { useProductsContext } from '../../../context/ProductContext'
import { useFavuriteItemsContext } from '../../../context/FavuriteItemsContext'
import { styles } from './styles'
import { IconButton } from 'react-native-paper'
import Search from '../../../Components/Inputs/Search'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useCartContext } from '../../../context/CartContext'
import { useTheme } from 'react-native-paper';
import AuthScreenNavigation from '../../../Screens/AuthScreens/AuthScreenNavigation'
import SrcollButtonTab from '../../../Components/Horizontal Scroll/SrcollButtonTab'
// import { MD2Colors } from 'react-native-paper'

export default function Home({ navigation }) {
    const { isAuthenticated, dispatch } = useAuthContext()
    // const [isliked, setIsLiked] = React.useState(false)
    const { products, setProducts } = useProductsContext()
    const { addFavuriteItem, setNewFavItem } = useFavuriteItemsContext()
    const { addToCart } = useCartContext()
    const theme = useTheme()


    //SET FAVURITE ITEM
    const handleFavurite = (id) => {
        setNewFavItem(true)

        setProducts(

            products.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
        )

        // addFavuriteItem(id)

    }

    //show toast message
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <>{!isAuthenticated ?
            <AuthScreenNavigation />



            :
            <View>
                <Search />

                <ScrollView >
                <SrcollButtonTab />

                    <View style={styles.flexContainer}>
                        {/* <View style={{ width: "100%" }}>
                    <Button
                        title='logout'
                        onPress={() => showToast()}
                    />
                </View> */}
                        {
                            //PRODUCT MAP FUNCTION
                            products.map((item) => {
                                return <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('Productscreen', { item })}>
                                    <View style={[styles.box, styles.shadowProp]}>

                                        <IconButton
                                            icon={!item.isLiked ? "heart-outline" : "heart"}
                                            iconColor={'red'}
                                            size={20}
                                            onPress={() => {
                                                handleFavurite(item.id)
                                                !item.isLiked ? showToast('Item Liked') : showToast('Item Unliked')
                                            }}
                                            style={{ position: 'absolute', zIndex: 1, top: -5, left: 105 }}
                                        />
                                        <IconButton
                                            icon={'cart-plus'}
                                            iconColor={'black'}
                                            size={20}
                                            onPress={() => {
                                                addToCart(item)
                                                showToast('Added to cart')


                                            }}
                                            style={{ position: 'absolute', zIndex: 1, top: 130, bottom: 0, left: 0, backgroundColor: 'rgba(247, 247, 247, 0.69)', }}
                                        />

                                        {/* <MaterialCommunityIcons
                                    name='cart-plus'
                                    size={20}

                                /> */}
                                        {/* <TouchableHighlight>
                                </TouchableHighlight> */}

                                        {/* //PRODUCT iMAGE */}
                                        <Image
                                            source={{
                                                uri: item.url
                                            }}
                                            style={{ width: 148, borderRadius: 20, height: 180, objectFit: "cover" }}

                                        />
                                        <View style={styles.textBox}>
                                            <Text>{item.title}</Text>
                                            <Text>${item.price}</Text>
                                        </View>


                                    </View>

                                </TouchableWithoutFeedback>
                            })
                        }
                    </View>
                    {/* TOAST REF */}
                    {/* <SnackNotification ref={toastRef} /> */}

                </ScrollView>
            </View>
        }</>
    )
}