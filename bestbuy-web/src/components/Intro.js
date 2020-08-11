import React from 'react'
import zayn1 from './images/zayn1.jpg'
import './css/intro-image.css'

function Intro(){


return (
    <React.Fragment>

        <div className="row image-row">
        
            <div className="col-12">


            <img className="intro-img" src={zayn1} />


            </div>


        </div>
        

    </React.Fragment>
);

}

export default Intro;