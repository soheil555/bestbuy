import React from 'react'

function CartItem(props){

    const {product} = props;

    return <li className="list-group-item">{product.title}</li>

}


export default CartItem;