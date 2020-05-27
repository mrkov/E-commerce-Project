import React from 'react'
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

function CartIcon({ toggleCartHidden, cart }) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon  className='shopping-icon' />
            <span className='item-count'>{cart.cartItems.length}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)