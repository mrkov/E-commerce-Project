import { createSelector } from 'reselect';
import { getTotalPriceOfAllItems, countItemsInCart } from './cart.utils'

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => countItemsInCart(cartItems)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => getTotalPriceOfAllItems(cartItems)
)