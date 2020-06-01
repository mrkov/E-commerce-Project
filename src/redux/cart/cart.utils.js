export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id)

    if(existingItem){
        return cartItems.map(item => 
            item.id === itemToAdd.id
            ? {...item, quantity: item.quantity + 1}
            : item
        )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]

}

export const getTotalPriceOfAllItems = (cartItems) => {
    
    return (
    cartItems.reduce(
        (previousValue, item) => previousValue + item.price*item.quantity,
        0
    ))
}

export const countItemsInCart = (cartItems) => {

    return (
        cartItems.reduce(
            (previousValue, item) => previousValue + item.quantity,
            0
        )
    )
}

export const removeItemFromCart = (cartItems, id) => {

    return cartItems.filter(item => item.id !== id)   
}

export const reduceItemQuantity = (cartItems, id) => {

    return cartItems.map(item => {
        if(item.id === id){
            return {
                ...item,
                quantity: item.quantity > 1 ?
                item.quantity - 1
                :
                item.quantity
            };
        }
        return item;
    })

}
