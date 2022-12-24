import { View, Text, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'
import { IconButton } from 'react-native-paper'
import { useProductsContext } from '../context/ProductContext'
import { useFavuriteItemsContext } from '../context/FavuriteItemsContext'



export default function ProdutcDetailsScreen({ navigation, route }) {
    const { item } = route.params
    const [currentItem, setCurrentItem] = React.useState(item)
    const theme = useTheme()
    const { products, setProducts } = useProductsContext()
    const { setNewFavItem } = useFavuriteItemsContext()
    const [like, setLiked] = React.useState(false)


    //SET FAVURITE ITEM
    const handleFavurite = (id) => {
        setNewFavItem(true)

        setProducts(

            products.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
        )
        setCurrentItem(
            {...currentItem, isLiked: !currentItem.isLiked}
        )
    }

    //show toast message
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };


    return (
        <ScrollView>

            <View style={styles.flexContainer}>
                <View  >

                    <View style={{ position: 'relative' }}>
                        <IconButton
                            icon={!currentItem.isLiked ? "heart-outline" : "heart"}
                            // icon="heart-outline"
                            iconColor={'red'}
                            size={20}
                            onPress={() => {
                                handleFavurite(item.id)
                                !currentItem.isLiked ? showToast('Item Liked') : showToast('Item Unliked')
                            }}
                            style={{ position: 'absolute', zIndex: 99, top: 3, right: 0, backgroundColor: theme.colors.onSecondary }}
                        />

                        <Image
                            source={{
                                uri: currentItem.url
                            }}
                            style={{ flex: 1, width: "100%",  height: 270, marginTop: 2, resizeMode: 'cover' }}

                        />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={{ paddingVertical: 2, fontSize: 16, fontWeight: 'bold' }}>{currentItem.title.toLowerCase()
                            .split(' ')
                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}</Text>
                        {/* <Text style={styles.text}>$200</Text> */}
                        <Text style={{
                            paddingVertical: 1, fontSize: 16, fontWeight: 'bold',
                            color: theme.colors.primary
                        }}>PKR  {currentItem.price}</Text>






                        <Text style={{
                            color: 'black', fontSize: 18, marginTop: 20, marginBottom: 10
                        }}>Details</Text>

                        <Text style={styles.text}>{currentItem.discription}</Text>




                    </View>


                </View>




            </View>

        </ScrollView>)
}
