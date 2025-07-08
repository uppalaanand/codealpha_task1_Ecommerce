
function CartReducer( state, action ) {
    if(action.type === 'ADD_TO_CART'){
        let {product} = action.payload;
        let cartProduct; 
        cartProduct = {
            product
        }
        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        const UpdateData = state.cart.filter((item) => item.product.id !== action.payload);

        return {
            ...state,
            cart: UpdateData
        }
    }

    return state;
}

export default CartReducer
