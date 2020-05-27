import React from 'react'


import CustomButton from '../custom-button/CustomButton'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'

function CartDropdown({ cart: { cartItems } }) {
    return (
        <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => 
                    <CartItem key={item.id} item={item} />
                )
            }
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
    )
}

const mapStateToProps = ({ cart }) => ({
    cart: cart
})

export default connect(mapStateToProps)(CartDropdown)





