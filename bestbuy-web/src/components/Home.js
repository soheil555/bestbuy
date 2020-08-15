import React from 'react'
import zayn1 from './images/zayn1.jpg'
import './css/home.css'
import ListView from './ListView'

function Home(){


return (
    <React.Fragment>

        <div className="row image-row">
        
            <div className="col-12">


            <img className="intro-img" src={zayn1} />


            </div>

        </div>
        
        <div className="row">
            <div className="col-12 text-center mt-2">

                <h1> Last Products </h1>
            
            </div>
            </div>

        <ListView />

    </React.Fragment>
);

}

export default Home;