import React,{useState,useEffect} from 'react'
import Product from './Product'
import {productsListView} from './lookups'


function ListView(){


    const [products,setProducts] = useState([]);
    const [isProductsSet,setIsProductsSet] = useState(false);

    useEffect(()=>{

        if(isProductsSet == false){

            const responseHandler = function(status,response){

                if(status == 200){
    
                    
                    setProducts(response);
    
                }
                else{
                    console.log(response);
                    alert("Some problem getting products,Try again later.");
                }
    
    
            }

            productsListView(responseHandler);
            setIsProductsSet(true);

        }



    },[isProductsSet,setIsProductsSet]);


    return products.map(function(product,index){

       return <Product product={product} />

    });
    


}

export default ListView;