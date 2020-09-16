import React,{useState,useEffect} from 'react'
import defaultImage from './images/default.jpg'
import {CartItemUpdateView,CartListView} from './lookups'

function Product(props){

    const {product} = props;

    
    const [itemStatus,setItemStatus] = useState("");


    useEffect(() => {


        const responseHandler = (status,response) => {

                if(status === 200){

                        const cartItems = response;

                        console.log(cartItems);
                        console.log(product);

                        if(cartItems.some(item => item.id === product.id)){
                            setItemStatus("Remove from cart");
                        }
                        else{
                            setItemStatus("Add to cart");
                        }


                }


        }


        CartListView(responseHandler);


    },[product]);
    


    const responseHandler = (status,response) => {

            if(status === 200){

                    if(response.action === "add"){
                        setItemStatus("Remove from cart");
                    }
                    else if(response.action === "remove"){
                        setItemStatus("Add to cart");
                    }

            }

    }


    const clickHandler = (event) => {

        event.preventDefault();
        CartItemUpdateView(responseHandler,product.id);

    };
    

    const image_url = product.image !== null ? `http://127.0.0.1:8000${product.image}` : defaultImage; 

    return (<div className="card" >
                <img className="card-img-top" src={image_url} data-img={image_url} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.detail}<br/>
                    {product.price} $
                </p>
            { props.detail ? <button onClick={clickHandler} type="button" class="btn btn-primary">{itemStatus}</button> : <a href={"/shop/"+product.slug} className="btn btn-primary">View Detail</a> }
        </div>
            </div>);


}

export default Product;