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
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BestBuy.</a>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">my boyfriends back</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">staff edit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">cart</a>
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