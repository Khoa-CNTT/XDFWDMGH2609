import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId) => {
        // console.log(itemId);
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev, [itemId]: 1}));
            console.log('aaaa', cartItems);
        }
        else {
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // console.log(cartItems);
        for(const item in cartItems)
        {   
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id === item);
                console.log(itemInfo);
                totalAmount += itemInfo.price* cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;