import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    const newCartData = localStorage.getItem("anandCart");
    // if(newCartData == []){
    //     return [];
    // }else{
    //     return JSON.parse(newCartData);
    // }

    const parsedData = JSON.parse(newCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
};


const initialState = {
    cart : getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) => {
        dispatch({type: 'ADD_TO_CART' , payload: {product}});
    }

    const handleDelete = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }

    useEffect(() => {
        localStorage.setItem("anandCart", JSON.stringify(state.cart));
    },[state.cart])

    return <CartContext.Provider value={{...state, addToCart, handleDelete}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};