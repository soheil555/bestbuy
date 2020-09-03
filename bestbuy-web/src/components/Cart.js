import React from 'react'

function Cart(props){


    const {cartId} = props.data;


    return <React.Fragment>

            <h1>Cart {cartId}</h1>

    </React.Fragment>


}


export default Cart;