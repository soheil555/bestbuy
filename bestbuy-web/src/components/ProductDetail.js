import React,{useState,useEffect} from 'react'
import {productDetailView} from './lookups'
import Product from './Product'

function ProductDetail(props){

    const productSlug = props.match.params.productSlug;

    const [product,setProduct] = useState({});

    useEffect( () => {

        const responseHandler = (status,response) => {

            if(status === 404){

                console.log("Not found");

            }
            else if(status === 200){

                setProduct(response);

            }

        };

        productDetailView(responseHandler,productSlug);



    },[]);



    return <React.Fragment> <div className="row">

        <div className="col-6">
        
        <Product product={product} detail />
        
        </div>

    </div>   </React.Fragment>
}


export default ProductDetail;