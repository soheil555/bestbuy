import React,{useState,useEffect} from 'react'
import Product from './Product'
import {productsListView} from './lookups'
import './css/products.css'

function ListView(){


    const [products,setProducts] = useState([]);


    const search = document.location.search;

    useEffect(()=>{


            const responseHandler = function(status,response){

                if(status === 200){

                    setProducts(response);
    
                }
                else{
                    alert("Some problem getting products,Try again later.");
                }
    
    
            }

            productsListView(responseHandler,search);


    },[]);


    return <React.Fragment> 


        <div className="row products">
        
            { products.map((product,index) => {

                    return <div className="col-lg-4">
                         <Product key={index} product={product} />
                    </div>
                }) }
        
        </div>

        </React.Fragment>
    


}

export default ListView;