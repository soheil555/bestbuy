import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
          <React.Fragment>
              <Navbar />
              <Switch>

                  <Route path="/" exact component={Home} />
                  <Route path="/shop" component={Shop} />

              </Switch>
          </React.Fragment>
      </Router>
  );
}

export default App;
