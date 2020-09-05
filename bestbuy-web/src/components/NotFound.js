import React from 'react'
import './css/notfound.css'
import { func } from 'prop-types';

function NotFound(){



    return <React.Fragment>

        <div id="container">
            <div className="content">
                <h2>404</h2>
                <h4>Opps! Page not found</h4>

                <p>The page you were looking for doesn't exist. You may have mistyped the address
                    or the page may have moved.
                </p>

                <a href="/">Back To Home</a>

            </div>
        
        </div>


    </React.Fragment>

}


export default NotFound;