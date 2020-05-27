import CartActionTypes from './cart.types.js'

//nema payload-a jer koristimo toggle ovako: !hidden
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})