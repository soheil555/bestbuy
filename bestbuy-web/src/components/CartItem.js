import React from 'react'

function CartItem(props){

    const {product,cartRemoveHandler} = props;

    const removeHandler = (event) =>{

        event.preventDefault();
        cartRemoveHandler(product);


    };

    return <li className="list-group-item">
            {product.title}  <button type="button" className="btn btn-danger float-right" onClick={removeHandler}>Remove</button>
    </li>

}


export default CartItem;