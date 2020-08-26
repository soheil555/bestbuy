import React from 'react'
import defaultImage from './images/default.jpg'

function Product(props){

    const {product} = props;

    console.log(product.image);

    const image_url = product.image !== null ? `http://127.0.0.1:8000${product.image}` : defaultImage; 


    return (<div className="card" >
                <img className="card-img-top" src={image_url} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.detail}<br/>
                    {product.price} $
                </p>
            { props.detail ? null : <a href={product.slug} className="btn btn-primary">View Detail</a> }
        </div>
            </div>);


}

export default Product;