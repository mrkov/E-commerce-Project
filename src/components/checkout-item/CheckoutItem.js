import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { removeItemFromCart, reduceItemQuantity, addItemToCart } from "../../redux/cart/cart.actions";

function CheckoutItem({ cartItem, removeItem, addItemToCart, reduceItemQuantity}) {
    const {id, name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={ () => reduceItemQuantity(id)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ () => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className='quantity'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({

    removeItem: id => dispatch(removeItemFromCart(id)),
    reduceItemQuantity: (id) => dispatch(reduceItemQuantity(id)),
    addItemToCart: item => dispatch(addItemToCart(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem)
