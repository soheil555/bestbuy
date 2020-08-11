import React from 'react'


function Product(props){

    const {product} = props;


    return (<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.detail}<br/>
                    {product.price} $
                </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
            </div>);


}

export default Product;