import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App(props) {


    //TODO: add a default route for 404 page and create a beautiful page for that

  return (
      <Router>
          <React.Fragment>
              <Navbar />
              <Switch>

                  <Route path="/" exact component={Home} />
                  <Route path="/shop" exact component={Shop} />
                  <Route path="/shop/:productSlug" component={ProductDetail} />
                  <Route path="/cart" exact component={() => <Cart data={props} />} />


                  <Route  component={NotFound} />

              </Switch>
          </React.Fragment>
      </Router>
  );
}

export default App;
