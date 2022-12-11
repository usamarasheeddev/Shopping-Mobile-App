import { View, Text } from 'react-native'
import React from 'react'
import { useCartContext } from '../../../context/CartContext'
export default function Cart() {

    const { setNewItem } = useCartContext()

    React.useEffect(() => {
        setNewItem(false)
    }, [])
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}