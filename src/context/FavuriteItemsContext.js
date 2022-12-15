import React, { createContext, useContext } from 'react'
// import { useProductsContext } from './ProductsContext'
const FavuriteItemContext = createContext()
import shopProducts from '../data';


// let favItems = []
export default function FavuriteItemsContextProvider({ children }) {
    const [favuriteItem, setFavuriteItem] = React.useState([])
    const [newFavItem, setNewFavItem] = React.useState(false)

    //SET FAVURITE ITEM



    const addFavuriteItem = async (id) => {
        setNewFavItem(true)
        !favuriteItem.find((elem) => elem.id === id) ? setFavuriteItem(
            s => ([...s, { id }])) : null

        // await firestore()
        //     .collection('favuriteItems').doc(auth().currentUser.uid)
        //     .set({favuriteItem})
        //     .then(() => {
        //         console.log('User added!');
        //         alert('user added')
        //     }).catch(err => {
        //         console.error(err)
        //         alert(err)
        //     })
    }




    return (
        <FavuriteItemContext.Provider value={{ favuriteItem, setFavuriteItem, addFavuriteItem, newFavItem, setNewFavItem }}>
            {children}
        </FavuriteItemContext.Provider>
    )
}

export const useFavuriteItemsContext = () => {
    return useContext(FavuriteItemContext)
}