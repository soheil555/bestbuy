import React from 'react'
import ListView from './ListView'
import './css/shop.css'

function Shop(){



    return <React.Fragment>
        <div className="row">
            <div className="col-12 text-center">
                    <h1> Products </h1>
            </div>
        </div>
            
                <ListView />
    </React.Fragment>


}


export default Shop;