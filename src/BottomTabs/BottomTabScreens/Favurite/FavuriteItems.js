import { View, Text, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { IconButton, MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useProductsContext } from '../../../context/ProductContext';
import { useFavuriteItemsContext } from '../../../context/FavuriteItemsContext';


export default function FavuriteItems({ navigation }) {
    const { products, setProducts } = useProductsContext()
    const { setNewItem } = useFavuriteItemsContext()

    const handleFavurite = (id) => {
        
        setProducts(

            products.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
        )
        console.log("working...")
        // addFavuriteItem(id)

    }

    // Add Favurite Item


    return (
        <ScrollView>
            <View style={styles.flexContainer}>
                {products.filter(item => item.isLiked == true).map((item) => {
                    return <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('ProductDetails', { item })}>
                        <View style={[styles.box, styles.shadowProp]}>

                            <IconButton
                                icon={!item.isLiked ? "heart-outline" : "heart"}
                                iconColor={MD3Colors.error50}
                                size={20}
                                onPress={() => handleFavurite(item.id)}
                                style={{ position: 'absolute', zIndex: 1, top: -5, left: 105 }}
                            />
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
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap'
    },
    headigStyle: {
        textAlign: 'center',
        fontSize: 18
    },
    box: {
        // backgroundColor: "#38b000",
        width: 150,
        height: 240,
        borderRadius: 20,
        marginTop: 15,
        // padding: 6,
        borderColor: "#4e484f",
        // borderWidth: 1,
        // boxShadow:'#4e484f',

    },
    textBox: {
        padding: 8,

    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        // shadowRadius: 3,

    },
})