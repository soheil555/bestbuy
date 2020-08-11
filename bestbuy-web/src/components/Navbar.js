import React from 'react'
import './css/navbar.css'

function Navbar(){

    return (<React.Fragment>
    <div className="navbar-section">
        <div className="row top-header">
            <div className="col-12">
            
            
                    <p className="top-header-texts float-right">

                        <a href="#">log in</a>
                        .
                        <a href="#">create account</a>


                    </p>

            </div>
        </div>

        <div className="row down-header">
            <div className="col-12">
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">BestBuy.</a>
                
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">my boyfriends back</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">staff edit</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">cart</a>
                        </li>
                        </ul>
                    </div>
            </nav>


            
            </div>
        </div>

    </div>



    </React.Fragment>);
}


export default Navbar;