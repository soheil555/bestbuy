import React,{useEffect,useState} from 'react'
import {CartListView} from './lookups'
import CartItem from './CartItem.js'
import {CartItemUpdateView} from './lookups'

function Cart(props){

    const [cartItems,setCartItems] = useState([]);

    const {cartId} = props.data;



    const removeHandler = (product) =>{

        
        const responseHandler = (status,response) => {


            if(status === 200){


            const newCartItems = cartItems.filter(function(obj){

                    return obj.id !== product.id
            });
    
            setCartItems(newCartItems);
    


            }
            
        };

   


        CartItemUpdateView(responseHandler,product.id);

    }

    useEffect(() => {

        const responseHandler = (status,response) => {

                if(status === 200){

                    setCartItems(response);

                }

        }


        CartListView(responseHandler);
        


    },[]);




    return <React.Fragment>

            <h1>Cart {cartId} items:</h1>
            <ul class="list-group">
                    {cartItems.map((product,index) => {

                        return <CartItem id={index} product={product} cartRemoveHandler={removeHandler} />

                    })}
            </ul>

    </React.Fragment>


}


export default Cart;