import { Types } from "../action/actionType";

const initialState = {
    cartItems: []
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_TO_CART: 
            return { 
                ...state,
                cartItems: [...state.cartItems, action.payload.item.productDetails],
            }
        case Types.UPDATE_TO_CART: 
            return { 
                ...state,
                cartItems:  action.payload.item,
            }
        default:
            return state;
    }
}