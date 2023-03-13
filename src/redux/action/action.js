import { Types } from "./actionType";

export const addToCart = (item) => {
    return { 
        type: Types.ADD_TO_CART, 
        payload: { item } 
    }
}
export const updateToCart = (item) => {
    return { 
        type: Types.UPDATE_TO_CART, 
        payload: { item } 
    }
}