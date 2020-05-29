import React from 'react'
import {  withRouter } from 'react-router-dom'


import CustomButton from '../custom-button/CustomButton'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from '../../redux/cart/cart.actions'

function CartDropdown({ cartItems, history, toggleCartDropdown }) {
    return (
        <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.length ?
                cartItems.map(item => 
                    <CartItem key={item.id} item={item} />
                )
                :
                <span className='empty-message'>Your cart is empty.</span>
            }
        </div>
        
        <CustomButton 
            onClick={() => {               
                history.push('/shop/checkout');
                toggleCartDropdown();
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
        
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartHidden()) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));





